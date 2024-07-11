/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as retries$ from "../lib/retries.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as errors from "./models/errors/index.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import * as z from "zod";

export class Settings extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Get profile
     *
     * @remarks
     * Fetch your Codat profile.
     */
    async getProfile(
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<shared.Profile> {
        const path$ = this.templateURLComponent("/profile")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.authHeader === "function") {
            security$ = { authHeader: await this.options$.authHeader() };
        } else if (this.options$.authHeader) {
            security$ = { authHeader: this.options$.authHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "get-profile",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, {
                    context,
                    errorCodes: ["401", "402", "403", "429", "4XX", "500", "503", "5XX"],
                });
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<shared.Profile>()
            .json(200, shared.Profile$inboundSchema)
            .json([401, 402, 403, 429, 500, 503], errors.ErrorMessage$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update profile
     *
     * @remarks
     * Update your Codat profile
     */
    async updateProfile(
        request?: shared.Profile | undefined,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<shared.Profile> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => shared.Profile$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/profile")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.authHeader === "function") {
            security$ = { authHeader: await this.options$.authHeader() };
        } else if (this.options$.authHeader) {
            security$ = { authHeader: this.options$.authHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "update-profile",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, {
                    context,
                    errorCodes: ["401", "402", "403", "429", "4XX", "500", "503", "5XX"],
                });
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<shared.Profile>()
            .json(200, shared.Profile$inboundSchema)
            .json([401, 402, 403, 429, 500, 503], errors.ErrorMessage$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get sync settings
     *
     * @remarks
     * Retrieve the [sync settings](https://docs.codat.io/knowledge-base/advanced-sync-settings) for your client. This includes how often data types should be queued to be updated, and how much history should be fetched.
     */
    async getSyncSettings(
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<shared.SyncSettings> {
        const path$ = this.templateURLComponent("/profile/syncSettings")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.authHeader === "function") {
            security$ = { authHeader: await this.options$.authHeader() };
        } else if (this.options$.authHeader) {
            security$ = { authHeader: this.options$.authHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "get-profile-syncSettings",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, {
                    context,
                    errorCodes: ["401", "402", "403", "429", "4XX", "500", "503", "5XX"],
                });
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<shared.SyncSettings>()
            .json(200, shared.SyncSettings$inboundSchema)
            .json([401, 402, 403, 429, 500, 503], errors.ErrorMessage$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update all sync settings
     *
     * @remarks
     * Update sync settings for all data types.
     */
    async updateSyncSettings(
        request?: operations.UpdateProfileSyncSettingsRequestBody | undefined,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<void> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.UpdateProfileSyncSettingsRequestBody$outboundSchema.optional().parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/profile/syncSettings")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.authHeader === "function") {
            security$ = { authHeader: await this.options$.authHeader() };
        } else if (this.options$.authHeader) {
            security$ = { authHeader: this.options$.authHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "update-profile-syncSettings",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, {
                    context,
                    errorCodes: ["401", "402", "403", "429", "4XX", "500", "503", "5XX"],
                });
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .json([401, 402, 403, 429, 500, 503], errors.ErrorMessage$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * List API keys
     *
     * @remarks
     * Use the *List API keys* endpoint to return a list of all API keys that currently exist for your client. This includes keys created via the Portal UI or the *Create API keys* endpoint.
     *
     * [API keys](https://docs.codat.io/platform-api#/schemas/apiKeys) are tokens used to control access to the API. Include this token in the `Authorization` header parameter when making API calls, following the word "Basic" and a space with your API key.
     *
     * You can [read more](https://docs.codat.io/using-the-api/authentication) about authentication at Codat and managing API keys via the Portal UI or API.
     */
    async listApiKeys(
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<shared.ApiKeys> {
        const path$ = this.templateURLComponent("/apiKeys")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.authHeader === "function") {
            security$ = { authHeader: await this.options$.authHeader() };
        } else if (this.options$.authHeader) {
            security$ = { authHeader: this.options$.authHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "list-api-keys",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, {
                    context,
                    errorCodes: ["401", "402", "403", "429", "4XX", "500", "503", "5XX"],
                });
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<shared.ApiKeys>()
            .json(200, shared.ApiKeys$inboundSchema)
            .json([401, 402, 403, 429, 500, 503], errors.ErrorMessage$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Create API key
     *
     * @remarks
     * Use the *Create API keys* endpoint to generate a new API key for your client.
     *
     * [API keys](https://docs.codat.io/platform-api#/schemas/apiKeys) are tokens used to control access to the API. Include this token in the `Authorization` header parameter when making API calls, following the word "Basic" and a space with your API key.
     *
     * You can [read more](https://docs.codat.io/using-the-api/authentication) about authentication at Codat and managing API keys via the Portal UI or API.
     *
     * ### Tips and pitfalls
     *
     * * Your first API key is created for you. Access this key via [Codat's Portal](https://app.codat.io/developers/api-keys).
     * * If you require multiple API keys, perform multiple calls to the *Create API keys* endpoint.
     * * The number of API keys is limited to 10. If you have reached the maximum amount of keys, use the *Delete API key* endpoint to delete an unused key first.
     */
    async createApiKey(
        request?: shared.CreateApiKey | undefined,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<shared.ApiKeyDetails> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => shared.CreateApiKey$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/apiKeys")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.authHeader === "function") {
            security$ = { authHeader: await this.options$.authHeader() };
        } else if (this.options$.authHeader) {
            security$ = { authHeader: this.options$.authHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "create-api-key",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, {
                    context,
                    errorCodes: [
                        "400",
                        "401",
                        "402",
                        "403",
                        "409",
                        "429",
                        "4XX",
                        "500",
                        "503",
                        "5XX",
                    ],
                });
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<shared.ApiKeyDetails>()
            .json(201, shared.ApiKeyDetails$inboundSchema)
            .json([400, 401, 402, 403, 409, 429, 500, 503], errors.ErrorMessage$inboundSchema, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Delete API key
     *
     * @remarks
     * Use the *Delete API keys* endpoint to delete an existing API key, providing its valid `id` as a parameter. Note that this operation is not reversible.
     *
     * [API keys](https://docs.codat.io/platform-api#/schemas/apiKeys) are tokens used to control access to the API. Include this token in the `Authorization` header parameter when making API calls, following the word "Basic" and a space with your API key.
     *
     * You can [read more](https://docs.codat.io/using-the-api/authentication) about authentication at Codat and managing API keys via the Portal UI or API.
     *
     * ### Tips and pitfalls
     *
     * * It is possible to delete the last remaining API key. If this happens, a new key can be created via the [API key management page](https://app.codat.io/developers/api-keys) of the Portal.
     * * It is possible to delete the API key used to authenticate the *Delete API key* request.
     */
    async deleteApiKey(
        request: operations.DeleteApiKeyRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<errors.ErrorMessage> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteApiKeyRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            apiKeyId: encodeSimple$("apiKeyId", payload$.apiKeyId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/apiKeys/{apiKeyId}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.authHeader === "function") {
            security$ = { authHeader: await this.options$.authHeader() };
        } else if (this.options$.authHeader) {
            security$ = { authHeader: this.options$.authHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "delete-api-key",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, {
                    context,
                    errorCodes: ["401", "402", "403", "404", "429", "4XX", "500", "503", "5XX"],
                });
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<errors.ErrorMessage>()
            .json(204, errors.ErrorMessage$inboundSchema)
            .json([401, 402, 403, 404, 429, 500, 503], errors.ErrorMessage$inboundSchema, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
