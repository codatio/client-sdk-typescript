import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class ExcelReports {
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
   * getAccountingMarketingMetrics - Get the marketing metrics from an accounting source for a given company.
   *
   * Request an Excel report for download.
   **/
  getAccountingMarketingMetrics(
    req: operations.GetAccountingMarketingMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountingMarketingMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountingMarketingMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/accountingMetrics/marketing",
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
      const res: operations.GetAccountingMarketingMetricsResponse =
        new operations.GetAccountingMarketingMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getAccountingMarketingMetrics200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetAccountingMarketingMetrics200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getExcelReport - Download generated excel report
   *
   * Download the Excel report to a local drive.
   **/
  getExcelReport(
    req: operations.GetExcelReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExcelReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExcelReportRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/assess/excel/download",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetExcelReportResponse =
        new operations.GetExcelReportResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/octet-stream`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            let out: Uint8Array = new Uint8Array(resBody.length);
            for (let i: number = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * makeRequestToDownloadExcelReport - Request an Excel report for download
   *
   * Returns the status of the latest report requested.
   **/
  makeRequestToDownloadExcelReport(
    req: operations.MakeRequestToDownloadExcelReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MakeRequestToDownloadExcelReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MakeRequestToDownloadExcelReportRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/assess/excel",
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
      const res: operations.MakeRequestToDownloadExcelReportResponse =
        new operations.MakeRequestToDownloadExcelReportResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.makeRequestToDownloadExcelReport200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.MakeRequestToDownloadExcelReport200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * requestExcelReportForDownload - Request an Excel report for download
   *
   * Request an Excel report for download.
   **/
  requestExcelReportForDownload(
    req: operations.RequestExcelReportForDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestExcelReportForDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestExcelReportForDownloadRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/assess/excel",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.RequestExcelReportForDownloadResponse =
        new operations.RequestExcelReportForDownloadResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.requestExcelReportForDownload200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.RequestExcelReportForDownload200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
