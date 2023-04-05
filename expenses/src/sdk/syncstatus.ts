/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Check the status of ongoing or previous expense syncs.
 */
export class SyncStatus {
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
   * Last successful sync
   *
   * @remarks
   * Gets the status of the last successfull sync
   */
  getLastSuccessfulSync(
    req: operations.GetLastSuccessfulSyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLastSuccessfulSyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLastSuccessfulSyncRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/sync/expenses/syncs/lastSuccessful/status",
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
      const res: operations.GetLastSuccessfulSyncResponse =
        new operations.GetLastSuccessfulSyncResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companySyncStatus = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CompanySyncStatus
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Latest sync status
   *
   * @remarks
   * Gets the latest sync status
   */
  getLatestSync(
    req: operations.GetLatestSyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLatestSyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLatestSyncRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/sync/expenses/syncs/latest/status",
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
      const res: operations.GetLatestSyncResponse =
        new operations.GetLatestSyncResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companySyncStatus = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CompanySyncStatus
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get Sync status
   *
   * @remarks
   * Get the sync status for a specified sync
   */
  getSyncById(
    req: operations.GetSyncByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSyncByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSyncByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/sync/expenses/syncs/{syncId}/status",
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
      const res: operations.GetSyncByIdResponse =
        new operations.GetSyncByIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companySyncStatus = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CompanySyncStatus
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List sync statuses
   *
   * @remarks
   * Gets a list of sync statuses
   */
  listSyncs(
    req: operations.ListSyncsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSyncsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSyncsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/sync/expenses/syncs/list/status",
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
      const res: operations.ListSyncsResponse =
        new operations.ListSyncsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companySyncStatuses = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.companySyncStatuses = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CompanySyncStatus,
              resFieldDepth
            );
          }
          break;
      }

      return res;
    });
  }
}
