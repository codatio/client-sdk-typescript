/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * Configure preferences for any given Sync for Commerce company using sync flow.
 */

export class SyncFlowPreferences {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Retrieve preferences for text fields on sync flow
     *
     * @remarks
     * To enable retrieval of preferences set for the text fields on Sync Flow.
     */
    async getConfigTextSyncFlow(
        req: operations.GetConfigTextSyncFlowRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetConfigTextSyncFlowResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConfigTextSyncFlowRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/sync/commerce/config/ui/text";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: utils.RetryConfig | undefined = retries;
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
                url: operationUrl + queryParams,
                method: "get",
                headers: headers,
                responseType: "arraybuffer",
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetConfigTextSyncFlowResponse =
            new operations.GetConfigTextSyncFlowResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.localizationInfo = {};
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.localizationInfo = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Localization,
                        resFieldDepth
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [401, 402, 403, 429, 500, 503].includes(httpRes?.status):
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
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
     * Retrieve sync flow url
     *
     * @remarks
     * Get a URL for Sync Flow including a one time passcode.
     */
    async getSyncFlowUrl(
        req: operations.GetSyncFlowUrlRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetSyncFlowUrlResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSyncFlowUrlRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/config/sync/commerce/{commerceKey}/{accountingKey}/start",
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
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: utils.RetryConfig | undefined = retries;
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
                url: operationUrl + queryParams,
                method: "get",
                headers: headers,
                responseType: "arraybuffer",
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetSyncFlowUrlResponse = new operations.GetSyncFlowUrlResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.syncFlowUrl = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.SyncFlowUrl
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [400, 401, 402, 403, 404, 429, 500, 503].includes(httpRes?.status):
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
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
     * List visible accounts
     *
     * @remarks
     * Enable retrieval for accounts which are visible on sync flow.
     */
    async getVisibleAccounts(
        req: operations.GetVisibleAccountsRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetVisibleAccountsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetVisibleAccountsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/clients/{clientId}/config/ui/accounts/platform/{platformKey}",
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
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: utils.RetryConfig | undefined = retries;
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
                url: operationUrl,
                method: "get",
                headers: headers,
                responseType: "arraybuffer",
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetVisibleAccountsResponse =
            new operations.GetVisibleAccountsResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.visibleAccounts = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.VisibleAccounts
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [401, 402, 403, 404, 429, 500, 503].includes(httpRes?.status):
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
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
     * Update preferences for text fields on sync flow
     *
     * @remarks
     * To enable update of preferences set for the text fields on sync flow.
     */
    async updateConfigTextSyncFlow(
        req: operations.UpdateConfigTextSyncFlowRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateConfigTextSyncFlowResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateConfigTextSyncFlowRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/sync/commerce/config/ui/text";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
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
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: utils.RetryConfig | undefined = retries;
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
                url: operationUrl + queryParams,
                method: "patch",
                headers: headers,
                responseType: "arraybuffer",
                data: reqBody,
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateConfigTextSyncFlowResponse =
            new operations.UpdateConfigTextSyncFlowResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.localizationInfo = {};
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.localizationInfo = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Localization,
                        resFieldDepth
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [400, 401, 402, 403, 429, 500, 503].includes(httpRes?.status):
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
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
     * Update the visible accounts on sync flow
     *
     * @remarks
     * To enable update of accounts visible preferences set on Sync Flow.
     */
    async updateVisibleAccountsSyncFlow(
        req: operations.UpdateVisibleAccountsSyncFlowRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateVisibleAccountsSyncFlowResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateVisibleAccountsSyncFlowRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/sync/commerce/config/ui/accounts/platform/{platformKey}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "visibleAccounts", "json");
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
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: utils.RetryConfig | undefined = retries;
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
                url: operationUrl,
                method: "post",
                headers: headers,
                responseType: "arraybuffer",
                data: reqBody,
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateVisibleAccountsSyncFlowResponse =
            new operations.UpdateVisibleAccountsSyncFlowResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.visibleAccounts = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.VisibleAccounts
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [400, 401, 402, 403, 404, 429, 500, 503].includes(httpRes?.status):
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
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
