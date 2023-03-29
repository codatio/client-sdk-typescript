/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Create and manage your Codat companies.
 */
export class Companies {
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
   * Create company
   *
   * @remarks
   * Create a new company
   */
  createCompany(
    req: shared.CompanyRequestBody,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCompanyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.CompanyRequestBody(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/companies";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreateCompanyResponse =
        new operations.CreateCompanyResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.company = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Company
            );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorMessage
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Delete a company
   *
   * @remarks
   * Delete the given company from Codat.
   * This operation is not reversible.
   */
  deleteCompany(
    req: operations.DeleteCompanyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCompanyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCompanyRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteCompanyResponse =
        new operations.DeleteCompanyResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 204:
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorMessage
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get company
   *
   * @remarks
   * Get metadata for a single company
   */
  getCompany(
    req: operations.GetCompanyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompanyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompanyRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}",
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
      const res: operations.GetCompanyResponse =
        new operations.GetCompanyResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.company = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Company
            );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorMessage
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List companies
   *
   * @remarks
   * List all companies that you have created in Codat.
   */
  listCompanies(
    req: operations.ListCompaniesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCompaniesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCompaniesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/companies";

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
      const res: operations.ListCompaniesResponse =
        new operations.ListCompaniesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companies = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Companies
            );
          }
          break;
        case [400, 401].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorMessage
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Update company
   *
   * @remarks
   * Updates the given company with a new name and description
   */
  updateCompany(
    req: operations.UpdateCompanyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCompanyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCompanyRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "companyRequestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdateCompanyResponse =
        new operations.UpdateCompanyResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.company = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.Company
            );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorMessage
            );
          }
          break;
      }

      return res;
    });
  }
}
