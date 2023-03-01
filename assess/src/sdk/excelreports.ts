import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class ExcelReports {
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
   * getDataCompaniesCompanyIdAssessExcel - Request an Excel report for download
   *
   * Returns the status of the latest report requested.
  **/
  getDataCompaniesCompanyIdAssessExcel(
    req: operations.GetDataCompaniesCompanyIdAssessExcelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdAssessExcelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdAssessExcelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/excel", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdAssessExcelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdAssessExcel200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketing - Get the marketing metrics from an accounting source for a given company.
   *
   * Request an Excel report for download.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketing(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accountingMetrics/marketing", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketing200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postDataCompaniesCompanyIdAssessExcel - Request an Excel report for download
   *
   * Request an Excel report for download.
  **/
  postDataCompaniesCompanyIdAssessExcel(
    req: operations.PostDataCompaniesCompanyIdAssessExcelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDataCompaniesCompanyIdAssessExcelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDataCompaniesCompanyIdAssessExcelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/excel", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostDataCompaniesCompanyIdAssessExcelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postDataCompaniesCompanyIdAssessExcel200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postDataCompaniesCompanyIdAssessExcelDownload - Download generated excel report
   *
   * Download the Excel report to a local drive.
  **/
  postDataCompaniesCompanyIdAssessExcelDownload(
    req: operations.PostDataCompaniesCompanyIdAssessExcelDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDataCompaniesCompanyIdAssessExcelDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDataCompaniesCompanyIdAssessExcelDownloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/assess/excel/download", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostDataCompaniesCompanyIdAssessExcelDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

}
