import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class TaxComponents {
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
   * getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents - List tax components
   *
   * This endpoint returns a lits of tax rates from the commerce platform, including tax rate names and values. This supports the mapping of tax rates from the commerce platform to the accounting platform.
   **/
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents(
    req: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/commerce-taxComponents",
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
      const res: operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsResponse =
        new operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponents200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
