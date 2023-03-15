import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class BillPayments {
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
   * createBillPayment - Create bill payments
   *
   * Posts a new bill payment to the accounting package for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call [Get create bill payment model](https://docs.codat.io/accounting-api#/operations/get-create-billPayments-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments) for integrations that support creating bill payments.
   **/
  createBillPayment(
    req: operations.CreateBillPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBillPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBillPaymentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/billPayments",
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
      const res: operations.CreateBillPaymentResponse =
        new operations.CreateBillPaymentResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createBillPayment200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateBillPayment200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId - Delete bill payment
   *
   * Deletes a bill payment from the accounting package for a given company.
   *
   * > **Supported Integrations**
   * >
   * > This functionality is currently only supported for our Oracle NetSuite integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.
   **/
  deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId(
    req: operations.DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/billPayments/{billPaymentId}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdResponse =
        new operations.DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getBillPayments - Get bill payment
   *
   * Get a bill payment
   **/
  getBillPayments(
    req: operations.GetBillPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBillPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBillPaymentsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/billPayments/{billPaymentId}",
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
      const res: operations.GetBillPaymentsResponse =
        new operations.GetBillPaymentsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.sourceModifiedDate = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetBillPaymentsSourceModifiedDate
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getCreateBillPaymentsModel - Get create bill payment model
   *
   * Get create bill payment model.
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments) for integrations that support creating and deleting bill payments.
   **/
  getCreateBillPaymentsModel(
    req: operations.GetCreateBillPaymentsModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateBillPaymentsModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateBillPaymentsModelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/billPayments",
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
      const res: operations.GetCreateBillPaymentsModelResponse =
        new operations.GetCreateBillPaymentsModelResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pushOption = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetCreateBillPaymentsModelPushOption
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listBillPayments - List bill payments
   *
   * Gets the latest billPayments for a company, with pagination
   **/
  listBillPayments(
    req: operations.ListBillPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBillPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBillPaymentsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/billPayments",
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
      const res: operations.ListBillPaymentsResponse =
        new operations.ListBillPaymentsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListBillPaymentsLinks
            );
          }
          break;
      }

      return res;
    });
  }
}
