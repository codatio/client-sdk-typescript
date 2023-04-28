/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Initiate a sync of Sync for Commerce company data into their respective accounting software.
 */
export class Sync {
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
   * Run a Commerce sync from the last successful sync
   *
   * @remarks
   * Run a Commerce sync from the last successful sync up to the date provided (optional), otherwise UtcNow is used.
   * If there was no previously successful sync, the start date in the config is used.
   */
  async requestSync(
    req: operations.RequestSyncRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestSyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestSyncRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/sync/commerce/latest",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "syncToLatestArgs",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const httpRes: AxiosResponse = await utils.Retry(() => {
      return client.request({
        validateStatus: () => true,
        url: url,
        method: "post",
        headers: headers,
        data: reqBody,
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.RequestSyncResponse =
      new operations.RequestSyncResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.syncSummary = utils.objectToClass(
            httpRes?.data,
            shared.SyncSummary
          );
        }
        break;
    }

    return res;
  }

  /**
   * Run a Commerce sync from a given date range
   *
   * @remarks
   * Run a Commerce sync from the specified start date to the specified finish date in the request payload.
   */
  async requestSyncForDateRange(
    req: operations.RequestSyncForDateRangeRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestSyncForDateRangeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestSyncForDateRangeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/meta/companies/{companyId}/sync/commerce/historic",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "dateRange",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const httpRes: AxiosResponse = await utils.Retry(() => {
      return client.request({
        validateStatus: () => true,
        url: url,
        method: "post",
        headers: headers,
        data: reqBody,
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.RequestSyncForDateRangeResponse =
      new operations.RequestSyncForDateRangeResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.syncSummary = utils.objectToClass(
            httpRes?.data,
            shared.SyncSummary
          );
        }
        break;
    }

    return res;
  }
}
