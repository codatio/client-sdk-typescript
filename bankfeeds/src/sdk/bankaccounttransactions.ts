/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Bank feed bank accounts
 */
export class BankAccountTransactions {
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
   * Create bank transactions
   *
   * @remarks
   * Posts bank transactions to the accounting package for a given company.
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support POST methods.
   */
  createBankTransactions(
    req: operations.CreateBankTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBankTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBankTransactionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "bankTransactions",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

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
      const res: operations.CreateBankTransactionsResponse =
        new operations.CreateBankTransactionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createBankTransactionsResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CreateBankTransactionsResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List push options for bank account bank transactions
   *
   * @remarks
   * Gets the options of pushing bank account transactions.
   */
  getCreateBankAccountModel(
    req: operations.GetCreateBankAccountModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateBankAccountModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateBankAccountModelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/bankAccounts/{accountId}/bankTransactions",
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
      const res: operations.GetCreateBankAccountModelResponse =
        new operations.GetCreateBankAccountModelResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pushOption = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.PushOption
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List bank transactions for bank account
   *
   * @remarks
   * Gets bank transactions for a given bank account ID
   */
  listBankAccountTransactions(
    req: operations.ListBankAccountTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBankAccountTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBankAccountTransactionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}/bankTransactions",
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
      const res: operations.ListBankAccountTransactionsResponse =
        new operations.ListBankAccountTransactionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.bankTransactionsResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.BankTransactionsResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
