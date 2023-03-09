import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Accounts {
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
   * getBankingAccount - Get account
   *
   * Gets a specified bank account for a given company
  **/
  getBankingAccount(
    req: operations.GetBankingAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBankingAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBankingAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/banking-accounts/{accountId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBankingAccountResponse =
            new operations.GetBankingAccountResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sourceModifiedDate = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetBankingAccountSourceModifiedDate,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listBankingAccounts - List accounts
   *
   * Gets a list of all bank accounts of the SMB, with rich data like balances, account numbers and institutions holdingthe accounts.
  **/
  listBankingAccounts(
    req: operations.ListBankingAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBankingAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBankingAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/banking-accounts", req.pathParams);
    
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
        const res: operations.ListBankingAccountsResponse =
            new operations.ListBankingAccountsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListBankingAccountsLinks,
              );
            }
            break;
        }

        return res;
      })
  }

}
