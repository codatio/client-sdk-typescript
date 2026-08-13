/* tslint:disable */
/* eslint-disable */

import { SDKOptions, RetryConfig, HTTPClient, RequestInput, SecurityState } from "../lib/sdkconfig";

export type Awaitable<T> = T | Promise<T>;

export type HookContext = {
    baseURL: string | URL;
    operationID: string;
    oAuth2Scopes: string[] | null;
    securitySource?: unknown | (() => Promise<unknown>);
    retryConfig: RetryConfig;
    resolvedSecurity: SecurityState | null;
    options: SDKOptions;
};

export type SDKInitOptions = {
    baseURL: URL | null;
    client: HTTPClient;
};

export type BeforeCreateRequestContext = HookContext & {};
export type BeforeRequestContext = HookContext & {};
export type AfterSuccessContext = HookContext & {};
export type AfterErrorContext = HookContext & {};

export interface SDKInitHook {
    sdkInit: (opts: SDKInitOptions) => SDKInitOptions;
}

export interface BeforeCreateRequestHook {
    beforeCreateRequest: (hookCtx: BeforeCreateRequestContext, input: RequestInput) => RequestInput;
}

export interface BeforeRequestHook {
    beforeRequest: (hookCtx: BeforeRequestContext, request: Request) => Awaitable<Request>;
}

export interface AfterSuccessHook {
    afterSuccess: (hookCtx: AfterSuccessContext, response: Response) => Awaitable<Response>;
}

export interface AfterErrorHook {
    afterError: (hookCtx: AfterErrorContext, response: Response | null, error: unknown) => Awaitable<{ response: Response | null; error: unknown }>;
}

export interface Hooks {
    registerSDKInitHook(hook: SDKInitHook): void;
    registerBeforeCreateRequestHook(hook: BeforeCreateRequestHook): void;
    registerBeforeRequestHook(hook: BeforeRequestHook): void;
    registerAfterSuccessHook(hook: AfterSuccessHook): void;
    registerAfterErrorHook(hook: AfterErrorHook): void;
}

export type Hook =
    | SDKInitHook
    | BeforeCreateRequestHook
    | BeforeRequestHook
    | AfterSuccessHook
    | AfterErrorHook;
