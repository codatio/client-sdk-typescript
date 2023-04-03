/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Data integrity is important
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
   * Enhanced Balance Sheet Accounts
   *
   * @remarks
   * The Enhanced Balance Sheet Accounts endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.
   *
   * Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.
   */
  getAccountsForEnhancedBalanceSheet(
    req: operations.GetAccountsForEnhancedBalanceSheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsForEnhancedBalanceSheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsForEnhancedBalanceSheetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/reports/enhancedBalanceSheet/accounts",
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
      const res: operations.GetAccountsForEnhancedBalanceSheetResponse =
        new operations.GetAccountsForEnhancedBalanceSheetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.enhancedReport = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.EnhancedReport
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Enhanced Profit and Loss Accounts
   *
   * @remarks
   * The Enhanced Profit and Loss Accounts endpoint returns a list of categorized accounts that appear on a company’s Profit and Loss. It also includes a balance per the financial statement date.
   *
   * Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.
   */
  getAccountsForEnhancedProfitAndLoss(
    req: operations.GetAccountsForEnhancedProfitAndLossRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsForEnhancedProfitAndLossResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsForEnhancedProfitAndLossRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/reports/enhancedProfitAndLoss/accounts",
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
      const res: operations.GetAccountsForEnhancedProfitAndLossResponse =
        new operations.GetAccountsForEnhancedProfitAndLossResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.enhancedReport = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.EnhancedReport
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get the customer retention metrics for a specific company.
   *
   * @remarks
   * Gets the customer retention metrics for a specific company connection, over one or more periods of time.
   */
  getCommerceCustomerRetentionMetrics(
    req: operations.GetCommerceCustomerRetentionMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommerceCustomerRetentionMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommerceCustomerRetentionMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/customerRetention",
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
      const res: operations.GetCommerceCustomerRetentionMetricsResponse =
        new operations.GetCommerceCustomerRetentionMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.report = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Report
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get the lifetime value metric for a specific company.
   *
   * @remarks
   * Gets the lifetime value metric for a specific company connection, over one or more periods of time.
   */
  getCommerceLifetimeValueMetrics(
    req: operations.GetCommerceLifetimeValueMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommerceLifetimeValueMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommerceLifetimeValueMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/lifetimeValue",
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
      const res: operations.GetCommerceLifetimeValueMetricsResponse =
        new operations.GetCommerceLifetimeValueMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.report = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Report
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get order information for a specific company
   *
   * @remarks
   * Gets the order information for a specific company connection, over one or more periods of time.
   */
  getCommerceOrdersMetrics(
    req: operations.GetCommerceOrdersMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommerceOrdersMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommerceOrdersMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/orders",
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
      const res: operations.GetCommerceOrdersMetricsResponse =
        new operations.GetCommerceOrdersMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.report = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Report
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get the refunds information for a specific company
   *
   * @remarks
   * Gets the refunds information for a specific company connection, over one or more periods of time.
   */
  getCommerceRefundsMetrics(
    req: operations.GetCommerceRefundsMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommerceRefundsMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommerceRefundsMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/refunds",
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
      const res: operations.GetCommerceRefundsMetricsResponse =
        new operations.GetCommerceRefundsMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.report = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Report
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Commerce Revenue Metrics
   *
   * @remarks
   * Get the revenue and revenue growth for a specific company connection, over one or more periods of time.
   */
  getCommerceRevenueMetrics(
    req: operations.GetCommerceRevenueMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommerceRevenueMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommerceRevenueMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/revenue",
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
      const res: operations.GetCommerceRevenueMetricsResponse =
        new operations.GetCommerceRevenueMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.report = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Report
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Enhanced Balance Sheet
   *
   * @remarks
   * Gets a fully categorized balance sheet statement for a given company, over one or more period(s).
   */
  getEnhancedBalanceSheet(
    req: operations.GetEnhancedBalanceSheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnhancedBalanceSheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnhancedBalanceSheetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/enhancedBalanceSheet",
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
      const res: operations.GetEnhancedBalanceSheetResponse =
        new operations.GetEnhancedBalanceSheetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.report = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Report
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get enhanced cash flow report
   *
   * @remarks
   * The Enhanced Cash Flow Transactions endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.
   */
  getEnhancedCashFlowTransactions(
    req: operations.GetEnhancedCashFlowTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnhancedCashFlowTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnhancedCashFlowTransactionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/reports/enhancedCashFlow/transactions",
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
      const res: operations.GetEnhancedCashFlowTransactionsResponse =
        new operations.GetEnhancedCashFlowTransactionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.enhancedCashFlowTransactions = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.EnhancedCashFlowTransactions
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List financial metrics
   *
   * @remarks
   * Gets all the available financial metrics for a given company, over one or more periods.
   */
  getEnhancedFinancialMetrics(
    req: operations.GetEnhancedFinancialMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnhancedFinancialMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnhancedFinancialMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/financialMetrics",
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
      const res: operations.GetEnhancedFinancialMetricsResponse =
        new operations.GetEnhancedFinancialMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.financialMetrics = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.FinancialMetrics
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Enhanced Invoices Report
   *
   * @remarks
   * Gets a list of invoices linked to the corresponding banking transaction
   */
  getEnhancedInvoicesReport(
    req: operations.GetEnhancedInvoicesReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnhancedInvoicesReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnhancedInvoicesReportRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/reports/enhancedInvoices",
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
      const res: operations.GetEnhancedInvoicesReportResponse =
        new operations.GetEnhancedInvoicesReportResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.enhancedInvoicesReport = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.EnhancedInvoicesReport
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Enhanced Profit and Loss
   *
   * @remarks
   * Gets a fully categorized profit and loss statement for a given company, over one or more period(s).
   */
  getEnhancedProfitAndLoss(
    req: operations.GetEnhancedProfitAndLossRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEnhancedProfitAndLossResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEnhancedProfitAndLossRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/enhancedProfitAndLoss",
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
      const res: operations.GetEnhancedProfitAndLossResponse =
        new operations.GetEnhancedProfitAndLossResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.report = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Report
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get key metrics for subscription revenue
   *
   * @remarks
   * Gets key metrics for subscription revenue.
   */
  getRecurringRevenueMetrics(
    req: operations.GetRecurringRevenueMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRecurringRevenueMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRecurringRevenueMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/subscriptions/mrr",
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
      const res: operations.GetRecurringRevenueMetricsResponse =
        new operations.GetRecurringRevenueMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.report = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Report
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Request production of key subscription revenue metrics
   *
   * @remarks
   * Request production of key subscription revenue metrics.
   */
  requestRecurringRevenueMetrics(
    req: operations.RequestRecurringRevenueMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestRecurringRevenueMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestRecurringRevenueMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/subscriptions/process",
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
      const res: operations.RequestRecurringRevenueMetricsResponse =
        new operations.RequestRecurringRevenueMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.report = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Report
            );
          }
          break;
      }

      return res;
    });
  }
}
