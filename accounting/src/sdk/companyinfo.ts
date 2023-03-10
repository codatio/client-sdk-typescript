import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class CompanyInfo {
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
   * getCompanyInfo - Get company info
   *
   * Gets the latest basic info for a company.
   **/
  getCompanyInfo(
    req: operations.GetCompanyInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompanyInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompanyInfoRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/info",
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
      const res: operations.GetCompanyInfoResponse =
        new operations.GetCompanyInfoResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companyInfo = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetCompanyInfoCompanyInfo
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * postSyncInfo - Refresh company info
   *
   * Initiates the process of synchronising basic info for a company
   **/
  postSyncInfo(
    req: operations.PostSyncInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSyncInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSyncInfoRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/info",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PostSyncInfoResponse =
        new operations.PostSyncInfoResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.postSyncInfo200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostSyncInfo200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
