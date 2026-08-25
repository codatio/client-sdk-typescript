/* tslint:disable */
/* eslint-disable */

import type { SDKHooks } from "../hooks/hooks";
import type { HookContext } from "../hooks/types";

export type Fetcher = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export type RequestInput = {
    url: URL;
    options?: RequestInit | undefined;
};

export type Awaitable<T> = T | Promise<T>;

export type BeforeRequestHook = (req: Request) => Awaitable<Request | void>;
export type RequestErrorHook = (err: unknown, req: Request) => Awaitable<void>;
export type ResponseHook = (res: Response, req: Request) => Awaitable<void>;

const DEFAULT_FETCHER: Fetcher = (input, init) => (init == null ? fetch(input) : fetch(input, init));

export class HTTPClient {
    private fetcher: Fetcher;
    private requestHooks: BeforeRequestHook[] = [];
    private requestErrorHooks: RequestErrorHook[] = [];
    private responseHooks: ResponseHook[] = [];

    constructor(private options: HTTPClientOptions = {}) {
        this.fetcher = options.fetcher || DEFAULT_FETCHER;
    }

    async request(request: Request): Promise<Response> {
        let req = request;
        for (const hook of this.requestHooks) {
            const next = await hook(req);
            if (next) {
                req = next;
            }
        }
        try {
            const res = await this.fetcher(req);
            for (const hook of this.responseHooks) {
                await hook(res, req);
            }
            return res;
        } catch (err) {
            for (const hook of this.requestErrorHooks) {
                await hook(err, req);
            }
            throw err;
        }
    }

    addHook(hook: "beforeRequest", fn: BeforeRequestHook): this;
    addHook(hook: "requestError", fn: RequestErrorHook): this;
    addHook(hook: "response", fn: ResponseHook): this;
    addHook(hook: string, fn: BeforeRequestHook | RequestErrorHook | ResponseHook): this {
        if (hook === "beforeRequest") {
            this.requestHooks.push(fn as BeforeRequestHook);
        } else if (hook === "requestError") {
            this.requestErrorHooks.push(fn as RequestErrorHook);
        } else if (hook === "response") {
            this.responseHooks.push(fn as ResponseHook);
        } else {
            throw new Error(`Invalid hook type: ${hook}`);
        }
        return this;
    }

    removeHook(hook: "beforeRequest", fn: BeforeRequestHook): this;
    removeHook(hook: "requestError", fn: RequestErrorHook): this;
    removeHook(hook: "response", fn: ResponseHook): this;
    removeHook(hook: string, fn: BeforeRequestHook | RequestErrorHook | ResponseHook): this {
        let target: unknown[];
        if (hook === "beforeRequest") {
            target = this.requestHooks;
        } else if (hook === "requestError") {
            target = this.requestErrorHooks;
        } else if (hook === "response") {
            target = this.responseHooks;
        } else {
            throw new Error(`Invalid hook type: ${hook}`);
        }
        const index = target.findIndex((v) => v === fn);
        if (index >= 0) {
            target.splice(index, 1);
        }
        return this;
    }

    clone(): HTTPClient {
        const child = new HTTPClient(this.options);
        child.requestHooks = this.requestHooks.slice();
        child.requestErrorHooks = this.requestErrorHooks.slice();
        child.responseHooks = this.responseHooks.slice();
        return child;
    }
}

export interface HTTPClientOptions {
    fetcher?: Fetcher;
}

export interface Logger {
    group(label?: string): void;
    groupEnd(): void;
    log(...args: unknown[]): void;
}

export type BackoffStrategy = {
    initialInterval: number;
    maxInterval: number;
    exponent: number;
    maxElapsedTime: number;
};

export type RetryConfig =
    | { strategy: "none" }
    | {
        strategy: "backoff";
        backoff?: BackoffStrategy;
        retryConnectionErrors?: boolean;
    };

export interface SDKOptions {
    authHeader?: string | (() => Promise<string>) | undefined;
    debugLogger?: Logger;
    httpClient?: HTTPClient;
    retryConfig?: RetryConfig;
    serverIdx?: number | undefined;
    serverURL?: string | undefined;
    timeoutMs?: number;
    userAgent?: string | undefined;
}

export type Security = {
    authHeader: string;
};

export const ServerList = ["https://api.codat.io"] as const;

export const SDK_METADATA = {
    language: "typescript",
    genVersion: "codat-sdk-codegen-poc-0.1.0",
    sdkVersion: "prealpha",
    openapiDocVersion: "prealpha",
    userAgent: "codat-sdk/typescript prealpha codat-sdk-codegen-poc-0.1.0 prealpha @codat/sync-for-expenses",
} as const;

export function resolveServerURL(options: SDKOptions = {}): string {
    const fromList = ServerList[options.serverIdx ?? 0] ?? ServerList[0];
    return (options.serverURL ?? fromList).replace(/\/+$/, "");
}

export function resolveAuthHeader(
    authHeader: SDKOptions["authHeader"],
): string | ((name: string) => Promise<string>) | undefined {
    if (authHeader == null) {
        return undefined;
    }
    if (typeof authHeader === "function") {
        return () => authHeader();
    }
    return authHeader;
}

const DEFAULT_RETRY_CODES = ["408", "429", "5XX"];

const DEFAULT_RETRY_CONFIG: RetryConfig = {
    strategy: "backoff",
    backoff: { initialInterval: 500, maxInterval: 60000, exponent: 1.5, maxElapsedTime: 3600000 },
    retryConnectionErrors: true,
};

class PermanentError extends Error {
    readonly cause: unknown;
    constructor(message: string, options?: { cause?: unknown }) {
        super(message);
        this.name = "PermanentError";
        this.cause = options?.cause;
    }
}

class TemporaryError extends Error {
    readonly response: Response;
    constructor(message: string, response: Response) {
        super(message);
        this.name = "TemporaryError";
        this.response = response;
    }
}

function isConnectionError(err: unknown): boolean {
    if (typeof err !== "object" || err == null) {
        return false;
    }
    const msg = err instanceof TypeError ? err.message.toLowerCase() : "";
    const isFetchErr = msg.startsWith("failed to fetch") || msg.startsWith("fetch failed");
    const code = "code" in err ? String((err as { code?: unknown }).code).toLowerCase() : "";
    return isFetchErr || code === "econnreset";
}

function isTimeoutError(err: unknown): boolean {
    if (typeof err !== "object" || err == null) {
        return false;
    }
    const name = "name" in err ? (err as { name?: unknown }).name : "";
    const code = "code" in err ? String((err as { code?: unknown }).code).toLowerCase() : "";
    return name === "TimeoutError" || code === "econnaborted";
}

const codeRangeRE = /^[0-9]xx$/i;

function isRetryableResponse(res: Response, statusCodes: string[]): boolean {
    const actual = `${res.status}`;
    return statusCodes.some((code) => {
        if (!codeRangeRE.test(code)) {
            return code === actual;
        }
        return actual.charAt(0) === code.charAt(0);
    });
}

function retryIntervalFromResponse(res: Response): number {
    const retryVal = res.headers.get("retry-after") || "";
    if (!retryVal) {
        return 0;
    }
    const asNumber = Number(retryVal);
    if (Number.isInteger(asNumber)) {
        return asNumber * 1000;
    }
    const asDate = Date.parse(retryVal);
    if (Number.isInteger(asDate)) {
        const deltaMs = asDate - Date.now();
        return deltaMs > 0 ? Math.ceil(deltaMs) : 0;
    }
    return 0;
}

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function wrapFetcher(
    fn: () => Promise<Response>,
    statusCodes: string[],
    retryConnectionErrors: boolean,
): () => Promise<Response> {
    return async () => {
        try {
            const res = await fn();
            if (isRetryableResponse(res, statusCodes)) {
                throw new TemporaryError("Response failed with retryable status code", res);
            }
            return res;
        } catch (err: unknown) {
            if (err instanceof TemporaryError) {
                throw err;
            }
            if (retryConnectionErrors && (isTimeoutError(err) || isConnectionError(err))) {
                throw err;
            }
            throw new PermanentError("Permanent error", { cause: err });
        }
    };
}

async function retryBackoff(fn: () => Promise<Response>, strategy: BackoffStrategy): Promise<Response> {
    const { maxElapsedTime, initialInterval, exponent, maxInterval } = strategy;
    const start = Date.now();
    let x = 0;
    for (;;) {
        try {
            return await fn();
        } catch (err: unknown) {
            if (err instanceof PermanentError) {
                throw err.cause;
            }
            if (Date.now() - start > maxElapsedTime) {
                if (err instanceof TemporaryError) {
                    return err.response;
                }
                throw err;
            }
            let retryInterval = err instanceof TemporaryError ? retryIntervalFromResponse(err.response) : 0;
            if (retryInterval <= 0) {
                retryInterval = initialInterval * Math.pow(x, exponent) + Math.random() * 1000;
            }
            await delay(Math.min(retryInterval, maxInterval));
            x++;
        }
    }
}

function retryRequest(fn: () => Promise<Response>, config: RetryConfig, statusCodes: string[]): Promise<Response> {
    if (config.strategy === "backoff") {
        return retryBackoff(
            wrapFetcher(fn, statusCodes, !!config.retryConnectionErrors),
            config.backoff ?? { initialInterval: 500, maxInterval: 60000, exponent: 1.5, maxElapsedTime: 3600000 },
        );
    }
    return fn();
}

export function resolveUserAgent(userAgent: string | undefined): Record<string, string> {
    const agent = userAgent ?? SDK_METADATA.userAgent;
    if (!agent) {
        return {};
    }
    const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
    return isBrowser ? {} : { "user-agent": agent };
}

function parseURL(input: RequestInfo | URL): URL | null {
    try {
        return new URL(String(input));
    } catch {
        return null;
    }
}

export type SecurityState = {
    basic: { username?: string; password?: string };
    headers: Record<string, string>;
    queryParams: Record<string, string>;
    cookies: Record<string, string>;
    oauth2: { type: "none" };
};

function headerValue(headers: HeadersInit | undefined, name: string): string | undefined {
    if (!headers) {
        return undefined;
    }
    const lower = name.toLowerCase();
    if (typeof Headers !== "undefined" && headers instanceof Headers) {
        return headers.get(name) ?? undefined;
    }
    if (Array.isArray(headers)) {
        const found = headers.find(([k]) => k.toLowerCase() === lower);
        return found ? found[1] : undefined;
    }
    for (const k of Object.keys(headers)) {
        if (k.toLowerCase() === lower) {
            return (headers as Record<string, string>)[k];
        }
    }
    return undefined;
}

function resolveSecurityState(authValue: string | undefined): SecurityState | null {
    if (authValue == null) {
        return null;
    }
    return {
        basic: {},
        headers: { Authorization: authValue },
        queryParams: {},
        cookies: {},
        oauth2: { type: "none" },
    };
}

export function makeFetch(options: SDKOptions = {}, hooks?: SDKHooks): Fetcher {
    const client = options.httpClient;
    const logger = options.debugLogger;
    return (input, init) => {
        const reqInit: RequestInit = init ?? {};
        const stamped = reqInit as RequestInit & {
            __codatOperationId?: string;
            __codatRetries?: RetryConfig;
            __codatRetryCodes?: string[];
        };
        const operationId = stamped.__codatOperationId;
        const config = stamped.__codatRetries ?? options.retryConfig ?? DEFAULT_RETRY_CONFIG;
        const retryCodes = stamped.__codatRetryCodes ?? DEFAULT_RETRY_CODES;
        for (const key of ["__codatOperationId", "__codatRetries", "__codatRetryCodes"] as const) {
            if (key in stamped) {
                delete stamped[key];
            }
        }
        const parsed = parseURL(input);
        const ctx: HookContext = {
            baseURL: resolveServerURL(options),
            operationID: operationId ?? `${(reqInit.method ?? "GET").toUpperCase()} ${parsed ? parsed.pathname : String(input)}`,
            oAuth2Scopes: null,
            securitySource: options.authHeader,
            retryConfig: config,
            resolvedSecurity: resolveSecurityState(headerValue(reqInit.headers, "Authorization")),
            options,
        };

        let url: RequestInfo | URL = input;
        let finalInit: RequestInit = reqInit;
        if (hooks && parsed) {
            const created = hooks.beforeCreateRequest(ctx, { url: parsed, options: reqInit });
            url = created.url;
            finalInit = created.options ?? reqInit;
        }
        if (!finalInit.signal && options.timeoutMs && options.timeoutMs > 0) {
            finalInit = { ...finalInit, signal: AbortSignal.timeout(options.timeoutMs) };
        }

        const dispatch = async (): Promise<Response> => {
            let request = new Request(url, finalInit);
            if (hooks) {
                request = await hooks.beforeRequest(ctx, request.clone());
            }
            if (logger) {
                logger.log(`request: ${request.method} ${request.url}`);
            }
            let res: Response;
            try {
                res = client ? await client.request(request) : await fetch(request);
            } catch (err) {
                if (hooks) {
                    const handled = await hooks.afterError(ctx, null, err);
                    if (handled.error) {
                        throw handled.error;
                    }
                    if (handled.response) {
                        return handled.response;
                    }
                }
                throw err;
            }
            if (logger) {
                logger.log(`response: ${res.status}`);
            }
            if (hooks) {
                if (res.status >= 400) {
                    const handled = await hooks.afterError(ctx, res, null);
                    if (handled.error) {
                        throw handled.error;
                    }
                    res = handled.response ?? res;
                } else {
                    res = await hooks.afterSuccess(ctx, res);
                }
            }
            return res;
        };
        return retryRequest(dispatch, config, retryCodes);
    };
}

export type StatusCodePredicate = number | string | (number | string)[];

export function matchStatusCode(response: Response, codes: StatusCodePredicate): boolean {
    const actual = `${response.status}`;
    const expectedCodes = Array.isArray(codes) ? codes : [codes];
    if (!expectedCodes.length) {
        return false;
    }
    return expectedCodes.some((ec) => {
        const code = `${ec}`;
        if (code === "default") {
            return true;
        }
        if (!codeRangeRE.test(code)) {
            return code === actual;
        }
        const expectFamily = code.charAt(0);
        if (!expectFamily) {
            throw new Error("Invalid status code range");
        }
        const actualFamily = actual.charAt(0);
        if (!actualFamily) {
            throw new Error(`Invalid response status code: ${actual}`);
        }
        return actualFamily === expectFamily;
    });
}
