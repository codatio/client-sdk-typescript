import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class TransactionStatus {
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
   * getSyncTransaction - Get Sync Transaction
   *
   * Gets the status of a transaction for a sync
   **/
  getSyncTransaction(
    req: operations.GetSyncTransactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSyncTransactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSyncTransactionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}",
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
      const res: operations.GetSyncTransactionResponse =
        new operations.GetSyncTransactionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getSyncTransaction200ApplicationJSONObjects = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.getSyncTransaction200ApplicationJSONObjects =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetSyncTransaction200ApplicationJSON,
                resFieldDepth
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getSyncTransactions - Get Sync transactions
   *
   * Get's the transactions and status for a sync
   **/
  getSyncTransactions(
    req: operations.GetSyncTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSyncTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSyncTransactionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions",
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
      const res: operations.GetSyncTransactionsResponse =
        new operations.GetSyncTransactionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getSyncTransactions200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetSyncTransactions200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
