/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as retries$ from "../lib/retries";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";

export class SyncFlowSettings extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    /**
     * Get preferences for text fields
     *
     * @remarks
     * Return preferences set for the text fields on sync flow.
     */
    async getConfigTextSyncFlow(
        input: operations.GetConfigTextSyncFlowRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.GetConfigTextSyncFlowResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetConfigTextSyncFlowRequest$.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/sync/commerce/config/ui/text")();

        const query$ = [
            enc$.encodeForm("locale", payload$.locale, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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
                return this.fetch$(
                    {
                        security: securitySettings$,
                        method: "GET",
                        path: path$,
                        headers: headers$,
                        query: query$,
                        body: body$,
                    },
                    options
                );
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetConfigTextSyncFlowResponse$.inboundSchema.parse({
                ...responseFields$,
                LocalizationInfo: responseBody,
            });
            return result;
        } else if (
            this.matchResponse(response, [401, 402, 403, 429, 500, 503], "application/json")
        ) {
            const responseBody = await response.json();
            const result = operations.GetConfigTextSyncFlowResponse$.inboundSchema.parse({
                ...responseFields$,
                ErrorMessage: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * List visible accounts
     *
     * @remarks
     * Return accounts which are visible on sync flow.
     */
    async getVisibleAccounts(
        input: operations.GetVisibleAccountsRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.GetVisibleAccountsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetVisibleAccountsRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            clientId: enc$.encodeSimple("clientId", payload$.clientId, {
                explode: false,
                charEncoding: "percent",
            }),
            platformKey: enc$.encodeSimple("platformKey", payload$.platformKey, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/clients/{clientId}/config/ui/accounts/platform/{platformKey}"
        )(pathParams$);

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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
                return this.fetch$(
                    {
                        security: securitySettings$,
                        method: "GET",
                        path: path$,
                        headers: headers$,
                        body: body$,
                    },
                    options
                );
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetVisibleAccountsResponse$.inboundSchema.parse({
                ...responseFields$,
                VisibleAccounts: responseBody,
            });
            return result;
        } else if (
            this.matchResponse(response, [401, 402, 403, 404, 429, 500, 503], "application/json")
        ) {
            const responseBody = await response.json();
            const result = operations.GetVisibleAccountsResponse$.inboundSchema.parse({
                ...responseFields$,
                ErrorMessage: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Update preferences for text fields
     *
     * @remarks
     * Set preferences for the text fields on sync flow.
     */
    async updateConfigTextSyncFlow(
        input: operations.UpdateConfigTextSyncFlowRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.UpdateConfigTextSyncFlowResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.UpdateConfigTextSyncFlowRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const path$ = this.templateURLComponent("/sync/commerce/config/ui/text")();

        const query$ = [
            enc$.encodeForm("locale", payload$.locale, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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
                return this.fetch$(
                    {
                        security: securitySettings$,
                        method: "PATCH",
                        path: path$,
                        headers: headers$,
                        query: query$,
                        body: body$,
                    },
                    options
                );
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.UpdateConfigTextSyncFlowResponse$.inboundSchema.parse({
                ...responseFields$,
                LocalizationInfo: responseBody,
            });
            return result;
        } else if (
            this.matchResponse(response, [400, 401, 402, 403, 429, 500, 503], "application/json")
        ) {
            const responseBody = await response.json();
            const result = operations.UpdateConfigTextSyncFlowResponse$.inboundSchema.parse({
                ...responseFields$,
                ErrorMessage: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Update visible accounts
     *
     * @remarks
     * Update which accounts are visible on sync flow.
     */
    async updateVisibleAccountsSyncFlow(
        input: operations.UpdateVisibleAccountsSyncFlowRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.UpdateVisibleAccountsSyncFlowResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.UpdateVisibleAccountsSyncFlowRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.VisibleAccounts, { explode: true });

        const pathParams$ = {
            platformKey: enc$.encodeSimple("platformKey", payload$.platformKey, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/sync/commerce/config/ui/accounts/platform/{platformKey}"
        )(pathParams$);

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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
                return this.fetch$(
                    {
                        security: securitySettings$,
                        method: "POST",
                        path: path$,
                        headers: headers$,
                        body: body$,
                    },
                    options
                );
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.UpdateVisibleAccountsSyncFlowResponse$.inboundSchema.parse({
                ...responseFields$,
                VisibleAccounts: responseBody,
            });
            return result;
        } else if (
            this.matchResponse(
                response,
                [400, 401, 402, 403, 404, 429, 500, 503],
                "application/json"
            )
        ) {
            const responseBody = await response.json();
            const result = operations.UpdateVisibleAccountsSyncFlowResponse$.inboundSchema.parse({
                ...responseFields$,
                ErrorMessage: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
