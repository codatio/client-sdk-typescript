import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Webhooks {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * createRule - Create webhook
   *
   * Create a new webhook configuration
   **/
  createRule(
    req: operations.CreateRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRuleRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rules";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreateRuleResponse =
        new operations.CreateRuleResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.webhook = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.CreateRuleWebhook
            );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createRule401ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateRule401ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getWebhook - Get webhook
   *
   * Get a single webhook
   **/
  getWebhook(
    req: operations.GetWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhookRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/rules/{ruleId}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetWebhookResponse =
        new operations.GetWebhookResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.webhook = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetWebhookWebhook
            );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getWebhook401ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetWebhook401ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getWebhook404ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetWebhook404ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listRules - List webhooks
   *
   * List webhooks that you are subscribed to.
   **/
  listRules(
    req: operations.ListRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRulesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rules";

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListRulesResponse =
        new operations.ListRulesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListRulesLinks
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listRules400ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListRules400ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listRules401ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListRules401ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
