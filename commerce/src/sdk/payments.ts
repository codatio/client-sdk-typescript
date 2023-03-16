import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Payments {
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
   * listCommercePaymentMethods - List payment methods
   *
   * Retrieve a list of payment methods, such as card, cash or other online payment methods, as held in the linked commerce platform.
   **/
  listCommercePaymentMethods(
    req: operations.ListCommercePaymentMethodsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCommercePaymentMethodsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCommercePaymentMethodsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/commerce-paymentMethods",
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
      const res: operations.ListCommercePaymentMethodsResponse =
        new operations.ListCommercePaymentMethodsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListCommercePaymentMethodsLinks
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listCommercePayments - List payments
   *
   * List commerce payments for the given company & data connection.
   **/
  listCommercePayments(
    req: operations.ListCommercePaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCommercePaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCommercePaymentsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/commerce-payments",
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
      const res: operations.ListCommercePaymentsResponse =
        new operations.ListCommercePaymentsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListCommercePaymentsLinks
            );
          }
          break;
      }

      return res;
    });
  }
}
