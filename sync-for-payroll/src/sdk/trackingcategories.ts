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

export class TrackingCategories extends ClientSDK {
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
     * Get tracking categories
     *
     * @remarks
     * The *Get tracking category* endpoint returns a single tracking category for a given `trackingCategoryId`.
     *
     * [Tracking categories](https://docs.codat.io/sync-for-payroll-api#/schemas/TrackingCategory) are used to monitor cost centres and control budgets that sit outside the standard set of accounts.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=trackingCategories) for integrations that support getting a specific tracking category.
     *
     * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payroll-api#/operations/refresh-company-data).
     *
     */
    async get(
        input: operations.GetTrackingCategoryRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.GetTrackingCategoryResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetTrackingCategoryRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            trackingCategoryId: enc$.encodeSimple(
                "trackingCategoryId",
                payload$.trackingCategoryId,
                { explode: false, charEncoding: "percent" }
            ),
        };

        const path$ = this.templateURLComponent(
            "/companies/{companyId}/data/trackingCategories/{trackingCategoryId}"
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
            const result = operations.GetTrackingCategoryResponse$.inboundSchema.parse({
                ...responseFields$,
                TrackingCategoryTree: responseBody,
            });
            return result;
        } else if (
            this.matchResponse(
                response,
                [401, 402, 403, 404, 409, 429, 500, 503],
                "application/json"
            )
        ) {
            const responseBody = await response.json();
            const result = operations.GetTrackingCategoryResponse$.inboundSchema.parse({
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
     * List tracking categories
     *
     * @remarks
     * The *List tracking categories* endpoint returns a list of [tracking categories](https://docs.codat.io/sync-for-payroll-api#/schemas/TrackingCategory) for a given company's connection.
     *
     * [Tracking categories](https://docs.codat.io/sync-for-payroll-api#/schemas/TrackingCategory) are used to monitor cost centres and control budgets that sit outside the standard set of accounts.
     *
     * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payroll-api#/operations/refresh-company-data).
     *
     */
    async list(
        input: operations.ListTrackingCategoriesRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.ListTrackingCategoriesResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ListTrackingCategoriesRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/companies/{companyId}/data/trackingCategories")(
            pathParams$
        );

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
            const result = operations.ListTrackingCategoriesResponse$.inboundSchema.parse({
                ...responseFields$,
                TrackingCategories: responseBody,
            });
            return result;
        } else if (
            this.matchResponse(
                response,
                [400, 401, 402, 403, 404, 409, 429, 500, 503],
                "application/json"
            )
        ) {
            const responseBody = await response.json();
            const result = operations.ListTrackingCategoriesResponse$.inboundSchema.parse({
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
