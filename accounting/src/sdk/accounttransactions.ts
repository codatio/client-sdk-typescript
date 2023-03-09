import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class AccountTransactions {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getCreateUpdateAccountTransactionsModel - Get account transaction
   *
   * Get create/update account transactions model.
  **/
  getCreateUpdateAccountTransactionsModel(
    req: operations.GetCreateUpdateAccountTransactionsModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateUpdateAccountTransactionsModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateUpdateAccountTransactionsModelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/accountTransactions/{accountTransactionId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCreateUpdateAccountTransactionsModelResponse =
            new operations.GetCreateUpdateAccountTransactionsModelResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sourceModifiedDate = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCreateUpdateAccountTransactionsModelSourceModifiedDate,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listAccountTransactions - List account transactions
   *
   * Gets the account transactions for a given company.
  **/
  listAccountTransactions(
    req: operations.ListAccountTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAccountTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAccountTransactionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/accountTransactions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListAccountTransactionsResponse =
            new operations.ListAccountTransactionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListAccountTransactionsLinks,
              );
            }
            break;
        }

        return res;
      })
  }

}
