import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Categories {
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
   * getAccountCategory - Get suggested and/or confirmed category for a specific account
   *
   * Get category for specific nominal account.
   **/
  getAccountCategory(
    req: operations.GetAccountCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountCategoryRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories",
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
      const res: operations.GetAccountCategoryResponse =
        new operations.GetAccountCategoryResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.categorisedAccount = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetAccountCategoryCategorisedAccount
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listAccountsCategories - List suggested and confirmed account categories
   *
   * Lists suggested and confirmed chart of account categories for the given company and data connection.
   **/
  listAccountsCategories(
    req: operations.ListAccountsCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAccountsCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAccountsCategoriesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories",
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
      const res: operations.ListAccountsCategoriesResponse =
        new operations.ListAccountsCategoriesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListAccountsCategoriesLinks
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listAvailableAccountCategories - List account categories
   *
   * Lists available account categories Codat's categorisation engine can provide.
   **/
  listAvailableAccountCategories(
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailableAccountCategoriesResponse> {
    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/data/assess/accounts/categories";

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
      const res: operations.ListAvailableAccountCategoriesResponse =
        new operations.ListAvailableAccountCategoriesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listAvailableAccountCategoriesChartOfAccountCategoryAnies = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.listAvailableAccountCategoriesChartOfAccountCategoryAnies =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListAvailableAccountCategoriesChartOfAccountCategory,
                resFieldDepth
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * updateAccountCategory - Patch account categories
   *
   * Update category for a specific nominal account
   **/
  updateAccountCategory(
    req: operations.UpdateAccountCategoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAccountCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAccountCategoryRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdateAccountCategoryResponse =
        new operations.UpdateAccountCategoryResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.categorisedAccount = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.UpdateAccountCategoryCategorisedAccount
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * updateAccountsCategories - Confirm categories for accounts
   *
   * Comfirms the categories for all or a batch of accounts for a specific connection.
   **/
  updateAccountsCategories(
    req: operations.UpdateAccountsCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAccountsCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAccountsCategoriesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdateAccountsCategoriesResponse =
        new operations.UpdateAccountsCategoriesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.categorisedAccounts = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.categorisedAccounts = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.UpdateAccountsCategoriesCategorisedAccount,
              resFieldDepth
            );
          }
          break;
      }

      return res;
    });
  }
}
