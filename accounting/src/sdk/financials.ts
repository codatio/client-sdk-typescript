/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Financials
 */
export class Financials {
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
   * Get balance sheet
   *
   * @remarks
   * Gets the latest balance sheet for a company.
   */
  getBalanceSheet(
    req: operations.GetBalanceSheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBalanceSheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBalanceSheetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/financials/balanceSheet",
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
      const res: operations.GetBalanceSheetResponse =
        new operations.GetBalanceSheetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.balanceSheetResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.BalanceSheetResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get cash flow statement
   *
   * @remarks
   * Gets the latest cash flow statement for a company.
   */
  getCashFlowStatement(
    req: operations.GetCashFlowStatementRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCashFlowStatementResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCashFlowStatementRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/financials/cashFlowStatement",
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
      const res: operations.GetCashFlowStatementResponse =
        new operations.GetCashFlowStatementResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.cashFlowStatementResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CashFlowStatementResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get profit and loss
   *
   * @remarks
   * Gets the latest profit and loss for a company.
   */
  getProfitAndLoss(
    req: operations.GetProfitAndLossRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProfitAndLossResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProfitAndLossRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/financials/profitAndLoss",
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
      const res: operations.GetProfitAndLossResponse =
        new operations.GetProfitAndLossResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.profitAndLossResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ProfitAndLossResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
