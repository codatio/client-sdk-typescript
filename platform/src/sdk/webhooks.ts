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
 * Create and manage webhooks that listen to Codat's events.
 */

export class Webhooks {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create webhook
     *
     * @remarks
     * Create a new webhook configuration
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async create(
        req: shared.CreateRule,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateRuleResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.CreateRule(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/rules";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
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

        const res: operations.CreateRuleResponse = new operations.CreateRuleResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.webhook = utils.objectToClass(JSON.parse(decodedRes), shared.Webhook);
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
     * Create webhook consumer
     *
     * @remarks
     * Use the *Create webhook consumer* endpoint to create a new webhook consumer that will listen to messages we send you.
     *
     * [Webhook consumer](https://docs.codat.io/platform-api#/schemas/WebhookConsumer) is an HTTP endpoint that you configure to subscribe to specific events. See our documentation for more details on [Codat's webhook service](https://docs.codat.io/using-the-api/webhooks/overview).
     */
    async createConsumer(
        req: shared.WebhookConsumerPrototype,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateWebhookConsumerResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.WebhookConsumerPrototype(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/webhooks";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
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

        const res: operations.CreateWebhookConsumerResponse =
            new operations.CreateWebhookConsumerResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.webhookConsumer = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WebhookConsumer
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
     * Delete webhook consumer
     *
     * @remarks
     * Use the *Delete webhook consumer* endpoint to delete an existing webhoook consumer, providing its valid `id` as a parameter.
     *
     * [Webhook consumer](https://docs.codat.io/platform-api#/schemas/WebhookConsumer) is an HTTP endpoint that you configure to subscribe to specific events. See our documentation for more details on [Codat's webhook service](https://docs.codat.io/using-the-api/webhooks/overview).
     */
    async deleteConsumer(
        req: operations.DeleteWebhookConsumerRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteWebhookConsumerResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteWebhookConsumerRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(baseURL, "/webhooks/{webhookId}", req);
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
                method: "delete",
                headers: headers,
                responseType: "arraybuffer",
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteWebhookConsumerResponse =
            new operations.DeleteWebhookConsumerResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 204:
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
     * Get webhook
     *
     * @remarks
     * Get a single webhook
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async get(
        req: operations.GetWebhookRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetWebhookResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWebhookRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(baseURL, "/rules/{ruleId}", req);
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

        const res: operations.GetWebhookResponse = new operations.GetWebhookResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.webhook = utils.objectToClass(JSON.parse(decodedRes), shared.Webhook);
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
     * List webhooks
     *
     * @remarks
     * List webhooks that you are subscribed to.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async list(
        req: operations.ListRulesRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.ListRulesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListRulesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/rules";
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

        const res: operations.ListRulesResponse = new operations.ListRulesResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.webhooks = utils.objectToClass(JSON.parse(decodedRes), shared.Webhooks);
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
     * List webhook consumers
     *
     * @remarks
     * Use the *List webhook consumers* endpoint to return a list of all webhook consumers that currently exist for your client.
     *
     * [Webhook consumer](https://docs.codat.io/platform-api#/schemas/WebhookConsumer) is an HTTP endpoint that you configure to subscribe to specific events. See our documentation for more details on [Codat's webhook service](https://docs.codat.io/using-the-api/webhooks/overview).
     */
    async listConsumers(
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.ListWebhookConsumersResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/webhooks";
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

        const res: operations.ListWebhookConsumersResponse =
            new operations.ListWebhookConsumersResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.webhookConsumers = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.WebhookConsumers
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
}
