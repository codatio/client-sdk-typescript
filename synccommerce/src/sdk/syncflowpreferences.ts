/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Configure preferences for any given sync for commerce company using sync flow.
 */
export class SyncFlowPreferences {
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
   * Retrieve preferences for text fields on Sync Flow
   *
   * @remarks
   * To enable retrieval of preferences set for the text fields on Sync Flow.
   */
  getConfigTextSyncFlow(
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigTextSyncFlowResponse> {
    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/sync/commerce/config/ui/text";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetConfigTextSyncFlowResponse =
        new operations.GetConfigTextSyncFlowResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getConfigTextSyncFlow200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetConfigTextSyncFlow200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieve sync flow url
   *
   * @remarks
   * Get a URL for Sync Flow including a one time passcode.
   */
  getSyncFlowUrl(
    req: operations.GetSyncFlowUrlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSyncFlowUrlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSyncFlowUrlRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/config/sync/commerce/{commerceKey}/{accountingKey}/start",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetSyncFlowUrlResponse =
        new operations.GetSyncFlowUrlResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getSyncFlowUrl200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetSyncFlowUrl200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List visible accounts
   *
   * @remarks
   * Enable retrieval for accounts which are visible on sync flow.
   */
  getVisibleAccounts(
    req: operations.GetVisibleAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVisibleAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVisibleAccountsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/clients/{clientId}/config/ui/accounts/platform/{platformKey}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetVisibleAccountsResponse =
        new operations.GetVisibleAccountsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getVisibleAccounts200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetVisibleAccounts200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Update preferences for text fields on sync flow
   *
   * @remarks
   * To enable update of preferences set for the text fields on sync flow.
   */
  patchConfigTextSyncFlow(
    req: operations.PatchConfigTextSyncFlowRequestBody,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchConfigTextSyncFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchConfigTextSyncFlowRequestBody(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/sync/commerce/config/ui/text";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PatchConfigTextSyncFlowResponse =
        new operations.PatchConfigTextSyncFlowResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.patchConfigTextSyncFlow200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PatchConfigTextSyncFlow200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Update the visible accounts on Sync Flow
   *
   * @remarks
   * To enable update of accounts visible preferences set on Sync Flow.
   */
  patchVisibleAccountsSyncFlow(
    req: operations.PatchVisibleAccountsSyncFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchVisibleAccountsSyncFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchVisibleAccountsSyncFlowRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/sync/commerce/config/ui/accounts/platform/{commerceKey}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PatchVisibleAccountsSyncFlowResponse =
        new operations.PatchVisibleAccountsSyncFlowResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.patchVisibleAccountsSyncFlow200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PatchVisibleAccountsSyncFlow200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
