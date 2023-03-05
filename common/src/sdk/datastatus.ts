import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class DataStatus {
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
   * getCompaniesCompanyIdDataStatus - Get data status
   *
   * Get the state of each data type for a company
  **/
  getCompaniesCompanyIdDataStatus(
    req: operations.GetCompaniesCompanyIdDataStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdDataStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdDataStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/dataStatus", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompaniesCompanyIdDataStatusResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompaniesCompanyIdDataStatus200ApplicationJSONObject = plainToInstance(
                operations.GetCompaniesCompanyIdDataStatus200ApplicationJSON,
                httpRes?.data as operations.GetCompaniesCompanyIdDataStatus200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompaniesCompanyIdDataStatus401ApplicationJSONObject = plainToInstance(
                operations.GetCompaniesCompanyIdDataStatus401ApplicationJSON,
                httpRes?.data as operations.GetCompaniesCompanyIdDataStatus401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompaniesCompanyIdDataStatus404ApplicationJSONObject = plainToInstance(
                operations.GetCompaniesCompanyIdDataStatus404ApplicationJSON,
                httpRes?.data as operations.GetCompaniesCompanyIdDataStatus404ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompanyDataHistory - Get pull operations
   *
   * Gets the pull operation history (datasets) for a given company.
  **/
  getCompanyDataHistory(
    req: operations.GetCompanyDataHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompanyDataHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompanyDataHistoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/history", req.pathParams);
    
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
        const res: operations.GetCompanyDataHistoryResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = plainToInstance(
                operations.GetCompanyDataHistoryLinks,
                httpRes?.data as operations.GetCompanyDataHistoryLinks,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompanyDataHistory400ApplicationJSONObject = plainToInstance(
                operations.GetCompanyDataHistory400ApplicationJSON,
                httpRes?.data as operations.GetCompanyDataHistory400ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompanyDataHistory401ApplicationJSONObject = plainToInstance(
                operations.GetCompanyDataHistory401ApplicationJSON,
                httpRes?.data as operations.GetCompanyDataHistory401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompanyDataHistory404ApplicationJSONObject = plainToInstance(
                operations.GetCompanyDataHistory404ApplicationJSON,
                httpRes?.data as operations.GetCompanyDataHistory404ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPullOperation - Get pull operation
   *
   * Retrieve information about a single dataset or pull operation.
  **/
  getPullOperation(
    req: operations.GetPullOperationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPullOperationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPullOperationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/history/{datasetId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPullOperationResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.pullOperation = plainToInstance(
                operations.GetPullOperationPullOperation,
                httpRes?.data as operations.GetPullOperationPullOperation,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getPullOperation401ApplicationJSONObject = plainToInstance(
                operations.GetPullOperation401ApplicationJSON,
                httpRes?.data as operations.GetPullOperation401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getPullOperation404ApplicationJSONObject = plainToInstance(
                operations.GetPullOperation404ApplicationJSON,
                httpRes?.data as operations.GetPullOperation404ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
