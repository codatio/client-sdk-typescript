import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class RefreshData {
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
   * createManyPullOperations - Queue pull operations
   *
   * Refreshes all data types marked Fetch on first link.
  **/
  createManyPullOperations(
    req: operations.CreateManyPullOperationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateManyPullOperationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateManyPullOperationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/all", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateManyPullOperationsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createManyPullOperations401ApplicationJSONObject = plainToInstance(
                operations.CreateManyPullOperations401ApplicationJSON,
                httpRes?.data as operations.CreateManyPullOperations401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createManyPullOperations404ApplicationJSONObject = plainToInstance(
                operations.CreateManyPullOperations404ApplicationJSON,
                httpRes?.data as operations.CreateManyPullOperations404ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createPullOperation - Queue pull operation
   *
   * Queue a single pull operation for the given company and data type.
   * 
   * This will bring updated data into Codat from the linked integration for you to view.
  **/
  createPullOperation(
    req: operations.CreatePullOperationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePullOperationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePullOperationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/queue/{dataType}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreatePullOperationResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.pullOperation = plainToInstance(
                operations.CreatePullOperationPullOperation,
                httpRes?.data as operations.CreatePullOperationPullOperation,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createPullOperation401ApplicationJSONObject = plainToInstance(
                operations.CreatePullOperation401ApplicationJSON,
                httpRes?.data as operations.CreatePullOperation401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createPullOperation404ApplicationJSONObject = plainToInstance(
                operations.CreatePullOperation404ApplicationJSON,
                httpRes?.data as operations.CreatePullOperation404ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
