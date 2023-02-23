import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class Categories {
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
   * getDataAssessAccountsCategories - List account categories
   *
   * Lists available account categories Codat's categorisation engine can provide. 
  **/
  getDataAssessAccountsCategories(
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataAssessAccountsCategoriesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/data/assess/accounts/categories";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataAssessAccountsCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDataAssessAccountsCategoriesChartOfAccountCategoryAllOfs = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories - Get suggested and/or confirmed category for a specific account
   *
   * Get category for specific nominal account.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.categorisedAccount = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories - List suggested and confirmed account categories
   *
   * Lists suggested and confirmed chart of account categories for the given company and data connection.
  **/
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories(
    req: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories", req.pathParams);
    
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
        const res: operations.GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories - Patch account categories
   *
   * Update category for a specific nominal account
  **/
  patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories(
    req: operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.categorisedAccount = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories - Confirm categories for accounts
   *
   * Comfirms the categories for all or a batch of accounts for a specific connection.
  **/
  patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories(
    req: operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.categorisedAccounts = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
