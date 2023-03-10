import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

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
   * getBankAccountPushOptions - List push options for bank account bank transactions
   *
   * Gets the options of pushing bank account transactions.
   **/
  getBankAccountPushOptions(
    req: operations.GetBankAccountPushOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBankAccountPushOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBankAccountPushOptionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/bankAccounts/{accountId}/bankTransactions",
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
      const res: operations.GetBankAccountPushOptionsResponse =
        new operations.GetBankAccountPushOptionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pushOption = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetBankAccountPushOptionsPushOption
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listBankAccountTransactions - List bank transactions for bank account
   *
   * Gets bank transactions for a given bank account ID
   **/
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
      const res: operations.ListBankAccountTransactionsResponse =
        new operations.ListBankAccountTransactionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListBankAccountTransactionsLinks
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * postBankTransactions - Create bank transactions
   *
   * Posts bank transactions to the accounting package for a given company.
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support POST methods.
   **/
  postBankTransactions(
    req: operations.PostBankTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostBankTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostBankTransactionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}}/bankTransactions",
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
      const res: operations.PostBankTransactionsResponse =
        new operations.PostBankTransactionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.postBankTransactions200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostBankTransactions200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
