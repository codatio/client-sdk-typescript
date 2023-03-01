import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class Reports {
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
   * getCompaniesCompanyIdReportsEnhancedBalanaceSheetAccounts - Enhanced Balance Sheet Accounts
   *
   * Gets a list of accounts with account categories per statement period, specific to balance sheet
  **/
  getCompaniesCompanyIdReportsEnhancedBalanaceSheetAccounts(
    req: operations.GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/reports/enhancedBalanceSheet/accounts", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.enhancedReport = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdReportsEnhancedCashFlowTransactions - Get enhanced cash flow report
   *
   * Gets a list of banking transactions and their categories.
  **/
  getCompaniesCompanyIdReportsEnhancedCashFlowTransactions(
    req: operations.GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/reports/enhancedCashFlow/transactions", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.enhancedCashFlowTransactions = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompaniesCompanyIdReportsEnhancedProfitAndLossAccounts - Enhanced Profit and Loss Accounts
   *
   * Gets a list of accounts with account categories per statement period, specific to profit and loss
  **/
  getCompaniesCompanyIdReportsEnhancedProfitAndLossAccounts(
    req: operations.GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/reports/enhancedProfitAndLoss/accounts", req.pathParams);
    
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
        const res: operations.GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.enhancedReport = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetention - Get the customer retention metrics for a specific company.
   *
   * Gets the customer retention metrics for a specific company connection, over one or more periods of time.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetention(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/customerRetention", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetention200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValue - Get the lifetime value metric for a specific company.
   *
   * Gets the lifetime value metric for a specific company connection, over one or more periods of time.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValue(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/lifetimeValue", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValue200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders - Get order information for a specific company
   *
   * Gets the order information for a specific company connection, over one or more periods of time.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/orders", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefunds - Get the refunds information for a specific company
   *
   * Gets the refunds information for a specific company connection, over one or more periods of time.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefunds(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/refunds", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefunds200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue - Commerce Revenue Metrics
   *
   * Get the revenue and revenue growth for a specific company connection, over one or more periods of time.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/revenue", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheet - Enhanced Balance Sheet
   *
   * Gets a fully categorized balance sheet statement for a given company, over one or more period(s).
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheet(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/enhancedBalanceSheet", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheet200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss - Enhanced Profit and Loss
   *
   * Gets a fully categorized profit and loss statement for a given company, over one or more period(s).
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/enhancedProfitAndLoss", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics - List finanicial metrics
   *
   * Gets all the available financial metrics for a given company, over one or more periods.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/financialMetrics", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr - Get key metrics for subscription revenue
   *
   * Gets key metrics for subscription revenue.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/subscriptions/mrr", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess - Request production of key subscription revenue metrics
   *
   * Request production of key subscription revenue metrics.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/subscriptions/process", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
