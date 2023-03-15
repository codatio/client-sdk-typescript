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
   * createPayment - Create payment
   *
   * Posts a new payment to the accounting package for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call [Get create payment model](https://docs.codat.io/accounting-api#/operations/get-create-payments-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments) for integrations that support creating payments.
   **/
  createPayment(
    req: operations.CreatePaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePaymentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/payments",
      req.pathParams
    );

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
    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreatePaymentResponse =
        new operations.CreatePaymentResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createPayment200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreatePayment200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getCreatePaymentsModel - Get create payment model
   *
   * Get create payment model. Returns the expected data for the request payload.
   *
   * See the examples for integration-specific indicative models.
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments) for integrations that support creating payments.
   **/
  getCreatePaymentsModel(
    req: operations.GetCreatePaymentsModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreatePaymentsModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreatePaymentsModelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/payments",
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
      const res: operations.GetCreatePaymentsModelResponse =
        new operations.GetCreatePaymentsModelResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pushOption = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetCreatePaymentsModelPushOption
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getPayment - Get payment
   *
   * Get payment
   **/
  getPayment(
    req: operations.GetPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/payments/{paymentId}",
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
      const res: operations.GetPaymentResponse =
        new operations.GetPaymentResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.sourceModifiedDate = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetPaymentSourceModifiedDate
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listPayments - List payments
   *
   * Gets the latest payments for a company, with pagination
   **/
  listPayments(
    req: operations.ListPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPaymentsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/payments",
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
      const res: operations.ListPaymentsResponse =
        new operations.ListPaymentsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListPaymentsLinks
            );
          }
          break;
      }

      return res;
    });
  }
}
