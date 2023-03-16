import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class SyncConfiguration {
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
   * configureSync - Update Sync for Commerce settings
   *
   * Configure Sync for Commerce for a Company.
   **/
  configureSync(
    req: operations.ConfigureSyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfigureSyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfigureSyncRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/config/companies/{companyId}/sync/commerce",
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
      const res: operations.ConfigureSyncResponse =
        new operations.ConfigureSyncResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.configureSync200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ConfigureSync200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getCompanyCommerceSyncStatus - Get Sync for Commerce status
   *
   * Check the sync history and status for a company.
   **/
  getCompanyCommerceSyncStatus(
    req: operations.GetCompanyCommerceSyncStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompanyCommerceSyncStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompanyCommerceSyncStatusRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/meta/companies/{companyId}/sync/commerce/status",
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
      const res: operations.GetCompanyCommerceSyncStatusResponse =
        new operations.GetCompanyCommerceSyncStatusResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }

  /**
   * getSyncFlowUrl - Get Sync Flow Url
   *
   * To get a URL for Sync Flow including a one time passcode.
   **/
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

    const client: AxiosInstance = this._securityClient!;

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
          break;
      }

      return res;
    });
  }

  /**
   * getSyncOptions - List options for Sync for Commerce settings
   *
   * Retrieve sync options and current sync configuration for a Company
   **/
  getSyncOptions(
    req: operations.GetSyncOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSyncOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSyncOptionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/config/companies/{companyId}/sync/commerce",
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
      const res: operations.GetSyncOptionsResponse =
        new operations.GetSyncOptionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getSyncOptions200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetSyncOptions200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
