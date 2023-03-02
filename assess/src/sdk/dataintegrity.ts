import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class DataIntegrity {
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
   * getDataIntegrityDetails - Lists data integrity details for date type
   *
   * Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.
  **/
  getDataIntegrityDetails(
    req: operations.GetDataIntegrityDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataIntegrityDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataIntegrityDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/details", req.pathParams);
    
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
        const res: operations.GetDataIntegrityDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = plainToInstance(
                operations.GetDataIntegrityDetailsLinks,
                httpRes?.data as operations.GetDataIntegrityDetailsLinks,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataIntegrityStatus - Get data integrity status
   *
   * Gets match status for a given company and datatype.
  **/
  getDataIntegrityStatus(
    req: operations.GetDataIntegrityStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataIntegrityStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataIntegrityStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/status", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataIntegrityStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getDataIntegrityStatus200ApplicationJSONObject = plainToInstance(
                operations.GetDataIntegrityStatus200ApplicationJSON,
                httpRes?.data as operations.GetDataIntegrityStatus200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataIntegritySummaries - Get data integrity summary
   *
   * Gets match summary for a given company and datatype, optionally restricted by a Codat query string.
  **/
  getDataIntegritySummaries(
    req: operations.GetDataIntegritySummariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataIntegritySummariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataIntegritySummariesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/summaries", req.pathParams);
    
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
        const res: operations.GetDataIntegritySummariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getDataIntegritySummaries200ApplicationJSONObject = plainToInstance(
                operations.GetDataIntegritySummaries200ApplicationJSON,
                httpRes?.data as operations.GetDataIntegritySummaries200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
