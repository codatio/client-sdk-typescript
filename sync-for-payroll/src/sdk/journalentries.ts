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

export class JournalEntries extends ClientSDK {
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
     * Create journal entry
     *
     * @remarks
     * The *Create journal entry* endpoint creates a new [journal entry](https://docs.codat.io/sync-for-payroll-api#/schemas/JournalEntry) for a given company's connection.
     *
     * [Journal entries](https://docs.codat.io/sync-for-payroll-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.
     *
     * **Integration-specific behaviour**
     *
     * Required data may vary by integration. To see what data to post, first call [Get create journal entry model](https://docs.codat.io/sync-for-payroll-api#/operations/get-create-journalEntries-model).
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating a journal entry.
     *
     */
    async create(
        input: operations.CreateJournalEntryRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.CreateJournalEntryResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.CreateJournalEntryRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.JournalEntry, { explode: true });

        const pathParams$ = {
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            connectionId: enc$.encodeSimple("connectionId", payload$.connectionId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/push/journalEntries"
        )(pathParams$);

        const query$ = [
            enc$.encodeForm("allowSyncOnPushComplete", payload$.allowSyncOnPushComplete, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("timeoutInMinutes", payload$.timeoutInMinutes, {
                explode: true,
                charEncoding: "percent",
            }),
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
                        method: "POST",
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
            const result = operations.CreateJournalEntryResponse$.inboundSchema.parse({
                ...responseFields$,
                CreateJournalEntryResponse: responseBody,
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
            const result = operations.CreateJournalEntryResponse$.inboundSchema.parse({
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
     * Delete journal entry
     *
     * @remarks
     * > **Use with caution**
     * >
     * >Because journal entries underpin every transaction in an accounting platform, deleting a journal entry can affect every transaction for a given company.
     * >
     * > **Before you proceed, make sure you understand the implications of deleting journal entries from an accounting perspective.**
     *
     * The *Delete journal entry* endpoint allows you to delete a specified journal entry from an accounting platform.
     *
     * [Journal entries](https://docs.codat.io/sync-for-payroll-api#/schemas/JournalEntry) are made in a company's general ledger, or accounts, when transactions are approved.
     *
     * ### Process
     * 1. Pass the `{journalEntryId}` to the *Delete journal entry* endpoint and store the `pushOperationKey` returned.
     * 2. Check the status of the delete by checking the status of push operation either via
     *    1. [Push operation webhook](https://docs.codat.io/introduction/webhooks/core-rules-types#push-operation-status-has-changed) (advised),
     *    2. [Push operation status endpoint](https://docs.codat.io/sync-for-payroll-api#/operations/get-push-operation).
     *
     *    A `Success` status indicates that the journal entry object was deleted from the accounting platform.
     * 3. (Optional) Check that the journal entry was deleted from the accounting platform.
     *
     * ### Effect on related objects
     *
     * Be aware that deleting a journal entry from an accounting platform might cause related objects to be modified. For example, if you delete the journal entry for a paid invoice in QuickBooks Online, the invoice is deleted but the payment against that invoice is not. The payment is converted to a payment on account.
     *
     * ## Integration specifics
     * Integrations that support soft delete do not permanently delete the object in the accounting platform.
     *
     * | Integration | Soft Deleted |
     * |-------------|--------------|
     * | QuickBooks Online | Yes    |
     *
     */
    async delete(
        input: operations.DeleteJournalEntryRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.DeleteJournalEntryResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteJournalEntryRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            connectionId: enc$.encodeSimple("connectionId", payload$.connectionId, {
                explode: false,
                charEncoding: "percent",
            }),
            journalEntryId: enc$.encodeSimple("journalEntryId", payload$.journalEntryId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/push/journalEntries/{journalEntryId}"
        )(pathParams$);

        const query$ = [
            enc$.encodeForm("allowSyncOnPushComplete", payload$.allowSyncOnPushComplete, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("timeoutInMinutes", payload$.timeoutInMinutes, {
                explode: true,
                charEncoding: "percent",
            }),
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
                        method: "DELETE",
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
            const result = operations.DeleteJournalEntryResponse$.inboundSchema.parse({
                ...responseFields$,
                PushOperation: responseBody,
            });
            return result;
        } else if (
            this.matchResponse(response, [401, 402, 403, 404, 429, 500, 503], "application/json")
        ) {
            const responseBody = await response.json();
            const result = operations.DeleteJournalEntryResponse$.inboundSchema.parse({
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
     * Get journal entry
     *
     * @remarks
     * The *Get journal entry* endpoint returns a single journal entry for a given `journalEntryId`.
     *
     * [Journal entries](https://docs.codat.io/sync-for-payroll-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support getting a specific journal entry.
     *
     * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payroll-api#/operations/refresh-company-data).
     *
     */
    async get(
        input: operations.GetJournalEntryRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.GetJournalEntryResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetJournalEntryRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            journalEntryId: enc$.encodeSimple("journalEntryId", payload$.journalEntryId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/companies/{companyId}/data/journalEntries/{journalEntryId}"
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
            const result = operations.GetJournalEntryResponse$.inboundSchema.parse({
                ...responseFields$,
                JournalEntry: responseBody,
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
            const result = operations.GetJournalEntryResponse$.inboundSchema.parse({
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
     * Get create journal entry model
     *
     * @remarks
     * The *Get create journal entry model* endpoint returns the expected data for the request payload when creating a [journal entry](https://docs.codat.io/sync-for-payroll-api#/schemas/JournalEntry) for a given company and integration.
     *
     * [Journal entries](https://docs.codat.io/sync-for-payroll-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.
     *
     * **Integration-specific behaviour**
     *
     * See the *response examples* for integration-specific indicative models.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating a journal entry.
     *
     */
    async getCreateModel(
        input: operations.GetCreateJournalEntryModelRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.GetCreateJournalEntryModelResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetCreateJournalEntryModelRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            connectionId: enc$.encodeSimple("connectionId", payload$.connectionId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/options/journalEntries"
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
            const result = operations.GetCreateJournalEntryModelResponse$.inboundSchema.parse({
                ...responseFields$,
                PushOption: responseBody,
            });
            return result;
        } else if (
            this.matchResponse(response, [401, 402, 403, 404, 429, 500, 503], "application/json")
        ) {
            const responseBody = await response.json();
            const result = operations.GetCreateJournalEntryModelResponse$.inboundSchema.parse({
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
     * List journal entries
     *
     * @remarks
     * The *List journal entries* endpoint returns a list of [journal entries](https://docs.codat.io/sync-for-payroll-api#/schemas/JournalEntry) for a given company's connection.
     *
     * [Journal entries](https://docs.codat.io/sync-for-payroll-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.
     *
     * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payroll-api#/operations/refresh-company-data).
     *
     */
    async list(
        input: operations.ListJournalEntriesRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.ListJournalEntriesResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ListJournalEntriesRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/companies/{companyId}/data/journalEntries")(
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
            const result = operations.ListJournalEntriesResponse$.inboundSchema.parse({
                ...responseFields$,
                JournalEntries: responseBody,
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
            const result = operations.ListJournalEntriesResponse$.inboundSchema.parse({
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
