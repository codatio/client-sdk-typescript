import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class BankFeedAccounts {
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
   * createBankFeed - Create bank feed bank accounts
   *
   * Put BankFeed BankAccounts for a single data source connected to a single company.
  **/
  createBankFeed(
    req: operations.CreateBankFeedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBankFeedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBankFeedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateBankFeedResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.bankFeedBankAccounts = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getBankFeeds - List bank feed bank accounts
   *
   * Get BankFeed BankAccounts for a single data source connected to a single company.
  **/
  getBankFeeds(
    req: operations.GetBankFeedsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBankFeedsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBankFeedsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBankFeedsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.bankFeedBankAccounts = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateBankFeed - Update bank feed bank account
   *
   * Update a single BankFeed BankAccount for a single data source connected to a single company.
  **/
  updateBankFeed(
    req: operations.UpdateBankFeedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBankFeedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBankFeedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts/{bankAccountId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateBankFeedResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.bankFeedBankAccount = plainToInstance(
                operations.UpdateBankFeedBankFeedBankAccount,
                httpRes?.data as operations.UpdateBankFeedBankFeedBankAccount,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
