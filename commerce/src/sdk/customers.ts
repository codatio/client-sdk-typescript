import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Customers {
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
   * listCommerceCustomers - List customers
   *
   * List all commerce customers for the given company and data connection
   **/
  listCommerceCustomers(
    req: operations.ListCommerceCustomersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCommerceCustomersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCommerceCustomersRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/commerce-customers",
      req.pathParams
    );

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
      const res: operations.ListCommerceCustomersResponse =
        new operations.ListCommerceCustomersResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListCommerceCustomersLinks
            );
          }
          break;
      }

      return res;
    });
  }
}
