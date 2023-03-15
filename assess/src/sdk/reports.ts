import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

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
   * getAccountsForEnhancedBalanceSheet - Enhanced Balance Sheet Accounts
   *
   * Gets a list of accounts with account categories per statement period, specific to balance sheet
   **/
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
              operations.GetAccountsForEnhancedBalanceSheetEnhancedReport
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getAccountsForEnhancedProfitAndLoss - Enhanced Profit and Loss Accounts
   *
   * Gets a list of accounts with account categories per statement period, specific to profit and loss
   **/
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
              operations.GetAccountsForEnhancedProfitAndLossEnhancedReport
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getCommerceCustomerRetentionMetrics - Get the customer retention metrics for a specific company.
   *
   * Gets the customer retention metrics for a specific company connection, over one or more periods of time.
   **/
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
      const res: operations.GetCommerceCustomerRetentionMetricsResponse =
        new operations.GetCommerceCustomerRetentionMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getCommerceCustomerRetentionMetrics200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCommerceCustomerRetentionMetrics200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getCommerceLifetimeValueMetrics - Get the lifetime value metric for a specific company.
   *
   * Gets the lifetime value metric for a specific company connection, over one or more periods of time.
   **/
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
      const res: operations.GetCommerceLifetimeValueMetricsResponse =
        new operations.GetCommerceLifetimeValueMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getCommerceLifetimeValueMetrics200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCommerceLifetimeValueMetrics200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getCommerceOrdersMetrics - Get order information for a specific company
   *
   * Gets the order information for a specific company connection, over one or more periods of time.
   **/
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
      const res: operations.GetCommerceOrdersMetricsResponse =
        new operations.GetCommerceOrdersMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getCommerceOrdersMetrics200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCommerceOrdersMetrics200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getCommerceRefundsMetrics - Get the refunds information for a specific company
   *
   * Gets the refunds information for a specific company connection, over one or more periods of time.
   **/
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
      const res: operations.GetCommerceRefundsMetricsResponse =
        new operations.GetCommerceRefundsMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getCommerceRefundsMetrics200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCommerceRefundsMetrics200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getCommerceRevenueMetrics - Commerce Revenue Metrics
   *
   * Get the revenue and revenue growth for a specific company connection, over one or more periods of time.
   **/
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
      const res: operations.GetCommerceRevenueMetricsResponse =
        new operations.GetCommerceRevenueMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getCommerceRevenueMetrics200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCommerceRevenueMetrics200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getEnhancedBalanceSheet - Enhanced Balance Sheet
   *
   * Gets a fully categorized balance sheet statement for a given company, over one or more period(s).
   **/
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
      const res: operations.GetEnhancedBalanceSheetResponse =
        new operations.GetEnhancedBalanceSheetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getEnhancedBalanceSheet200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEnhancedBalanceSheet200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getEnhancedCashFlowTransactions - Get enhanced cash flow report
   *
   * Gets a list of banking transactions and their categories.
   **/
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
              operations.GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactions
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getEnhancedFinancialMetrics - List finanicial metrics
   *
   * Gets all the available financial metrics for a given company, over one or more periods.
   **/
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
      const res: operations.GetEnhancedFinancialMetricsResponse =
        new operations.GetEnhancedFinancialMetricsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getEnhancedFinancialMetrics200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEnhancedFinancialMetrics200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getEnhancedProfitAndLoss - Enhanced Profit and Loss
   *
   * Gets a fully categorized profit and loss statement for a given company, over one or more period(s).
   **/
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
      const res: operations.GetEnhancedProfitAndLossResponse =
        new operations.GetEnhancedProfitAndLossResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getEnhancedProfitAndLoss200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetEnhancedProfitAndLoss200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getRecurringRevenueMetrics - Get key metrics for subscription revenue
   *
   * Gets key metrics for subscription revenue.
   **/
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
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

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
            res.getRecurringRevenueMetrics200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetRecurringRevenueMetrics200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * requestRecurringRevenueMetrics - Request production of key subscription revenue metrics
   *
   * Request production of key subscription revenue metrics.
   **/
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
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

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
            res.requestRecurringRevenueMetrics200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.RequestRecurringRevenueMetrics200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
