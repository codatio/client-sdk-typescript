/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Reports
 */
export class Reports {
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
   * Aged creditors report
   *
   * @remarks
   * Returns aged creditors report for company that shows the total balance owed by a business to its suppliers over time.
   */
  getAgedCreditorsReport(
    req: operations.GetAgedCreditorsReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAgedCreditorsReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAgedCreditorsReportRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/reports/agedCreditor",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetAgedCreditorsReportResponse =
        new operations.GetAgedCreditorsReportResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.agedCreditorReport = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.AgedCreditorReport
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Aged debtors report
   *
   * @remarks
   * Returns aged debtors report for company that shows the total outstanding balance due from customers to the business over time.
   */
  getAgedDebtorsReport(
    req: operations.GetAgedDebtorsReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAgedDebtorsReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAgedDebtorsReportRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/reports/agedDebtor",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetAgedDebtorsReportResponse =
        new operations.GetAgedDebtorsReportResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.agedDebtorReport = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.AgedDebtorReport
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Aged creditors report available
   *
   * @remarks
   * Indicates whether the aged creditor report is available for the company.
   */
  isAgedCreditorsReportAvailable(
    req: operations.IsAgedCreditorsReportAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IsAgedCreditorsReportAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IsAgedCreditorsReportAvailableRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/reports/agedCreditor/available",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.IsAgedCreditorsReportAvailableResponse =
        new operations.IsAgedCreditorsReportAvailableResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.isAgedCreditorsReportAvailable200ApplicationJSONBoolean =
              httpRes?.data;
          }
          break;
      }

      return res;
    });
  }

  /**
   * Aged debtors report available
   *
   * @remarks
   * Indicates whether the aged debtor report is available for the company.
   */
  isAgedDebtorReportAvailable(
    req: operations.IsAgedDebtorReportAvailableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IsAgedDebtorReportAvailableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IsAgedDebtorReportAvailableRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/reports/agedDebtor/available",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.IsAgedDebtorReportAvailableResponse =
        new operations.IsAgedDebtorReportAvailableResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.isAgedDebtorReportAvailable200ApplicationJSONBoolean =
              httpRes?.data;
          }
          break;
      }

      return res;
    });
  }
}
