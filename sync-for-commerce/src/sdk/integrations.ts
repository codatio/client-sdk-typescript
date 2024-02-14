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

export class Integrations extends ClientSDK {
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
     * Get branding for an integration
     *
     * @remarks
     * Retrieve Integration branding assets.
     */
    async getBranding(
        input: operations.GetIntegrationBrandingRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.GetIntegrationBrandingResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetIntegrationBrandingRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            platformKey: enc$.encodeSimple("platformKey", payload$.platformKey, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/config/integrations/{platformKey}/branding")(
            pathParams$
        );

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
            const result = operations.GetIntegrationBrandingResponse$.inboundSchema.parse({
                ...responseFields$,
                Branding: responseBody,
            });
            return result;
        } else if (
            this.matchResponse(response, [401, 402, 403, 404, 429, 500, 503], "application/json")
        ) {
            const responseBody = await response.json();
            const result = operations.GetIntegrationBrandingResponse$.inboundSchema.parse({
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
     * List integrations
     *
     * @remarks
     * Retrieve a list of available integrations support by data type and state of release.
     */
    async list(
        input: operations.ListIntegrationsRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.ListIntegrationsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ListIntegrationsRequest$.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/config/integrations")();

        const query$ = [
            enc$.encodeForm("orderBy", payload$.orderBy, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("pageSize", payload$.pageSize, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("query", payload$.query, { explode: true, charEncoding: "percent" }),
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
            const result = operations.ListIntegrationsResponse$.inboundSchema.parse({
                ...responseFields$,
                Integrations: responseBody,
            });
            return result;
        } else if (
            this.matchResponse(response, [400, 401, 402, 403, 429, 500, 503], "application/json")
        ) {
            const responseBody = await response.json();
            const result = operations.ListIntegrationsResponse$.inboundSchema.parse({
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
