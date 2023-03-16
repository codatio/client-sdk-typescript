import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

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
   * getLastSuccessfulSync - Last successful sync
   *
   * Gets the status of the last successfull sync
   **/
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
      const res: operations.GetLastSuccessfulSyncResponse =
        new operations.GetLastSuccessfulSyncResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getLastSuccessfulSync200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetLastSuccessfulSync200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getLatestSync - Latest sync status
   *
   * Gets the latest sync status
   **/
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
      const res: operations.GetLatestSyncResponse =
        new operations.GetLatestSyncResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getLatestSync200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetLatestSync200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getSyncById - Get Sync status
   *
   * Get the sync status for a specified sync
   **/
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
      const res: operations.GetSyncByIdResponse =
        new operations.GetSyncByIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getSyncById200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetSyncById200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listSyncs - List sync statuses
   *
   * Gets a list of sync statuses
   **/
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
      const res: operations.ListSyncsResponse =
        new operations.ListSyncsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listSyncs200ApplicationJSONObjects = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.listSyncs200ApplicationJSONObjects =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListSyncs200ApplicationJSON,
                resFieldDepth
              );
          }
          break;
      }

      return res;
    });
  }
}
