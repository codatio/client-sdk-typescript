/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Direct costs
 */
export class DirectCosts {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create direct cost
     *
     * @remarks
     * Posts a new direct cost to the accounting package for a given company.
     *
     * Required data may vary by integration. To see what data to post, first call [Get create direct cost model](https://docs.codat.io/accounting-api#/operations/get-create-directCosts-model).
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) to see which integrations support this endpoint.
     */
    async create(
        req: operations.CreateDirectCostRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateDirectCostResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateDirectCostRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/push/directCosts",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "directCost", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        let retryConfig: any = retries;
        if (!retryConfig) {
            retryConfig = new utils.RetryConfig(
                "backoff",
                new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                true
            );
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

        const res: operations.CreateDirectCostResponse = new operations.CreateDirectCostResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createDirectCostResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CreateDirectCostResponse
                    );
                }
                break;
            case [400, 401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
        }

        return res;
    }

    /**
     * Download direct cost attachment
     *
     * @remarks
     * Downloads an attachment for the specified direct cost for a given company.
     */
    async downloadAttachment(
        req: operations.DownloadDirectCostAttachmentRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.DownloadDirectCostAttachmentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DownloadDirectCostAttachmentRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments/{attachmentId}/download",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/octet-stream;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        let retryConfig: any = retries;
        if (!retryConfig) {
            retryConfig = new utils.RetryConfig(
                "backoff",
                new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                true
            );
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

        const res: operations.DownloadDirectCostAttachmentResponse =
            new operations.DownloadDirectCostAttachmentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/octet-stream`)) {
                    res.data = httpRes?.data;
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
        }

        return res;
    }

    /**
     * Get direct cost
     *
     * @remarks
     * Gets the specified direct cost for a given company.
     */
    async get(
        req: operations.GetDirectCostRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDirectCostResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDirectCostRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0.7, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        let retryConfig: any = retries;
        if (!retryConfig) {
            retryConfig = new utils.RetryConfig(
                "backoff",
                new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                true
            );
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

        const res: operations.GetDirectCostResponse = new operations.GetDirectCostResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.directCost = utils.objectToClass(JSON.parse(decodedRes), shared.DirectCost);
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
            case httpRes?.status == 409:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDirectCost409ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetDirectCost409ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get direct cost attachment
     *
     * @remarks
     * Gets the specified direct cost attachment for a given company.
     */
    async getAttachment(
        req: operations.GetDirectCostAttachmentRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDirectCostAttachmentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDirectCostAttachmentRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments/{attachmentId}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        let retryConfig: any = retries;
        if (!retryConfig) {
            retryConfig = new utils.RetryConfig(
                "backoff",
                new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                true
            );
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

        const res: operations.GetDirectCostAttachmentResponse =
            new operations.GetDirectCostAttachmentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.attachment = utils.objectToClass(JSON.parse(decodedRes), shared.Attachment);
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
        }

        return res;
    }

    /**
     * Get create direct cost model
     *
     * @remarks
     * Get create direct cost model. Returns the expected data for the request payload.
     *
     * See the examples for integration-specific indicative models.
     *
     * > **Supported Integrations**
     * >
     * > Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating direct costs.
     */
    async getCreateModel(
        req: operations.GetCreateDirectCostsModelRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetCreateDirectCostsModelResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCreateDirectCostsModelRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/options/directCosts",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        let retryConfig: any = retries;
        if (!retryConfig) {
            retryConfig = new utils.RetryConfig(
                "backoff",
                new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                true
            );
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

        const res: operations.GetCreateDirectCostsModelResponse =
            new operations.GetCreateDirectCostsModelResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.pushOption = utils.objectToClass(JSON.parse(decodedRes), shared.PushOption);
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
        }

        return res;
    }

    /**
     * List direct costs
     *
     * @remarks
     * Gets the direct costs for the company.
     */
    async list(
        req: operations.ListDirectCostsRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.ListDirectCostsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListDirectCostsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/directCosts",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0.7, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        let retryConfig: any = retries;
        if (!retryConfig) {
            retryConfig = new utils.RetryConfig(
                "backoff",
                new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                true
            );
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

        const res: operations.ListDirectCostsResponse = new operations.ListDirectCostsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.directCosts = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.DirectCosts
                    );
                }
                break;
            case [400, 401, 404].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
            case httpRes?.status == 409:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listDirectCosts409ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.ListDirectCosts409ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List direct cost attachments
     *
     * @remarks
     * Gets all attachments for the specified direct cost for a given company.
     */
    async listAttachments(
        req: operations.ListDirectCostAttachmentsRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.ListDirectCostAttachmentsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListDirectCostAttachmentsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        let retryConfig: any = retries;
        if (!retryConfig) {
            retryConfig = new utils.RetryConfig(
                "backoff",
                new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                true
            );
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

        const res: operations.ListDirectCostAttachmentsResponse =
            new operations.ListDirectCostAttachmentsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.attachmentsDataset = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.AttachmentsDataset
                    );
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
        }

        return res;
    }

    /**
     * Upload direct cost attachment
     *
     * @remarks
     * Posts a new direct cost attachment for a given company.
     */
    async uploadAttachment(
        req: operations.UploadDirectCostAttachmentRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.UploadDirectCostAttachmentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UploadDirectCostAttachmentRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/push/directCosts/{directCostId}/attachment",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "multipart");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        let retryConfig: any = retries;
        if (!retryConfig) {
            retryConfig = new utils.RetryConfig(
                "backoff",
                new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                true
            );
        }
        const httpRes: AxiosResponse = await utils.Retry(() => {
            return client.request({
                validateStatus: () => true,
                url: url,
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

        const res: operations.UploadDirectCostAttachmentResponse =
            new operations.UploadDirectCostAttachmentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
        }

        return res;
    }
}
