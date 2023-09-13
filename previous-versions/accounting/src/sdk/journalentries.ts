/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Journal entries
 */

export class JournalEntries {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create journal entry
     *
     * @remarks
     * The *Create journal entry* endpoint creates a new [journal entry](https://docs.codat.io/accounting-api#/schemas/JournalEntry) for a given company's connection.
     *
     * [Journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.
     *
     * **Integration-specific behaviour**
     *
     * Required data may vary by integration. To see what data to post, first call [Get create journal entry model](https://docs.codat.io/accounting-api#/operations/get-create-journalEntries-model).
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating an account.
     *
     */
    async create(
        req: operations.CreateJournalEntryRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateJournalEntryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateJournalEntryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/push/journalEntries",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "journalEntry", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers = { ...reqBodyHeaders, ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: any = retries;
        if (!retryConfig) {
            if (globalRetryConfig) {
                retryConfig = globalRetryConfig;
            } else {
                retryConfig = new utils.RetryConfig(
                    "backoff",
                    new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                    true
                );
            }
        }
        const httpRes: AxiosResponse = await utils.Retry(() => {
            return client.request({
                validateStatus: () => true,
                url: url + queryParams,
                method: "post",
                headers: headers,
                responseType: "arraybuffer",
                data: reqBody,
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateJournalEntryResponse =
            new operations.CreateJournalEntryResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createJournalEntryResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CreateJournalEntryResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [400, 401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
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
     * [Journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) are made in a company's general ledger, or accounts, when transactions are approved.
     *
     * ### Process
     * 1. Pass the `{journalEntryId}` to the *Delete journal entry* endpoint and store the `pushOperationKey` returned.
     * 2. Check the status of the delete by checking the status of push operation either via
     *    1. [Push operation webhook](https://docs.codat.io/introduction/webhooks/core-rules-types#push-operation-status-has-changed) (advised),
     *    2. [Push operation status endpoint](https://docs.codat.io/codat-api#/operations/get-push-operation).
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
     * > **Supported Integrations**
     * >
     * > This functionality is currently only supported for our QuickBooks Online integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.
     */
    async delete(
        req: operations.DeleteJournalEntryRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteJournalEntryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteJournalEntryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/push/journalEntries/{journalEntryId}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: any = retries;
        if (!retryConfig) {
            if (globalRetryConfig) {
                retryConfig = globalRetryConfig;
            } else {
                retryConfig = new utils.RetryConfig(
                    "backoff",
                    new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                    true
                );
            }
        }
        const httpRes: AxiosResponse = await utils.Retry(() => {
            return client.request({
                validateStatus: () => true,
                url: url,
                method: "delete",
                headers: headers,
                responseType: "arraybuffer",
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteJournalEntryResponse =
            new operations.DeleteJournalEntryResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.pushOperationSummary = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.PushOperationSummary
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get journal entry
     *
     * @remarks
     * The *Get journal entry* endpoint returns a single journal entry for a given journalEntryId.
     *
     * [Journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support getting a specific journal entry.
     *
     * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
     *
     */
    async get(
        req: operations.GetJournalEntryRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetJournalEntryResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetJournalEntryRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/data/journalEntries/{journalEntryId}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: any = retries;
        if (!retryConfig) {
            if (globalRetryConfig) {
                retryConfig = globalRetryConfig;
            } else {
                retryConfig = new utils.RetryConfig(
                    "backoff",
                    new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                    true
                );
            }
        }
        const httpRes: AxiosResponse = await utils.Retry(() => {
            return client.request({
                validateStatus: () => true,
                url: url,
                method: "get",
                headers: headers,
                responseType: "arraybuffer",
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetJournalEntryResponse = new operations.GetJournalEntryResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.journalEntry = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.JournalEntry
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [401, 404, 409, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get create journal entry model
     *
     * @remarks
     * The *Get create journal entry model* endpoint returns the expected data for the request payload when creating a [journal entry](https://docs.codat.io/accounting-api#/schemas/JournalEntry) for a given company and integration.
     *
     * [Journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.
     *
     * **Integration-specific behaviour**
     *
     * See the *response examples* for integration-specific indicative models.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating a journal entry.
     *
     */
    async getCreateModel(
        req: operations.GetCreateJournalEntriesModelRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetCreateJournalEntriesModelResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCreateJournalEntriesModelRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/options/journalEntries",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: any = retries;
        if (!retryConfig) {
            if (globalRetryConfig) {
                retryConfig = globalRetryConfig;
            } else {
                retryConfig = new utils.RetryConfig(
                    "backoff",
                    new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                    true
                );
            }
        }
        const httpRes: AxiosResponse = await utils.Retry(() => {
            return client.request({
                validateStatus: () => true,
                url: url,
                method: "get",
                headers: headers,
                responseType: "arraybuffer",
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetCreateJournalEntriesModelResponse =
            new operations.GetCreateJournalEntriesModelResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.pushOption = utils.objectToClass(JSON.parse(decodedRes), shared.PushOption);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List journal entries
     *
     * @remarks
     * The *List journal entries* endpoint returns a list of [journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) for a given company's connection.
     *
     * [Journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.
     *
     * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
     *
     */
    async list(
        req: operations.ListJournalEntriesRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.ListJournalEntriesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListJournalEntriesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/data/journalEntries",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: any = retries;
        if (!retryConfig) {
            if (globalRetryConfig) {
                retryConfig = globalRetryConfig;
            } else {
                retryConfig = new utils.RetryConfig(
                    "backoff",
                    new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                    true
                );
            }
        }
        const httpRes: AxiosResponse = await utils.Retry(() => {
            return client.request({
                validateStatus: () => true,
                url: url + queryParams,
                method: "get",
                headers: headers,
                responseType: "arraybuffer",
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ListJournalEntriesResponse =
            new operations.ListJournalEntriesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.journalEntries = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.JournalEntries
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [400, 401, 404, 409].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
