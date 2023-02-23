import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

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
   * getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetails - Lists data integrity details for date type
   *
   * Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.
  **/
  getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetails(
    req: operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/details", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.links = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries - Get data integrity summary
   *
   * Gets match summary for a given company and datatype, optionally restricted by a Codat query string.
  **/
  getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries(
    req: operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/summaries", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataIntegrityStatusForDataType - Get data integrity status
   *
   * Gets match status for a given company and datatype.
  **/
  getDataIntegrityStatusForDataType(
    req: operations.GetDataIntegrityStatusForDataTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataIntegrityStatusForDataTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataIntegrityStatusForDataTypeRequest(req);
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
        const res: operations.GetDataIntegrityStatusForDataTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataIntegrityStatusForDataType200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
