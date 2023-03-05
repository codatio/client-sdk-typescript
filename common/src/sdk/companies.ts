import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Companies {
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
   * createCompany - Create company
   *
   * Create a new company
  **/
  createCompany(
    req: operations.CreateCompanyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCompanyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCompanyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/companies";

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
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateCompanyResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createCompany200ApplicationJSONObject = plainToInstance(
                operations.CreateCompany200ApplicationJSON,
                httpRes?.data as operations.CreateCompany200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createCompany401ApplicationJSONObject = plainToInstance(
                operations.CreateCompany401ApplicationJSON,
                httpRes?.data as operations.CreateCompany401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteCompany - Delete a company
   *
   * Delete the given company from Codat.
   * This operation is not reversible.
  **/
  deleteCompany(
    req: operations.DeleteCompanyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCompanyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCompanyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCompanyResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteCompany401ApplicationJSONObject = plainToInstance(
                operations.DeleteCompany401ApplicationJSON,
                httpRes?.data as operations.DeleteCompany401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompany - Get company
   *
   * Get metadata for a single company
  **/
  getCompany(
    req: operations.GetCompanyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompanyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompanyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompanyResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.company = plainToInstance(
                operations.GetCompanyCompany,
                httpRes?.data as operations.GetCompanyCompany,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompany401ApplicationJSONObject = plainToInstance(
                operations.GetCompany401ApplicationJSON,
                httpRes?.data as operations.GetCompany401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listCompanies - List companies
   *
   * List all companies that you have created in Codat.
  **/
  listCompanies(
    req: operations.ListCompaniesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCompaniesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCompaniesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/companies";
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListCompaniesResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = plainToInstance(
                operations.ListCompaniesLinks,
                httpRes?.data as operations.ListCompaniesLinks,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listCompanies400ApplicationJSONObject = plainToInstance(
                operations.ListCompanies400ApplicationJSON,
                httpRes?.data as operations.ListCompanies400ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listCompanies401ApplicationJSONObject = plainToInstance(
                operations.ListCompanies401ApplicationJSON,
                httpRes?.data as operations.ListCompanies401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateCompany - Update company
   *
   * Updates the given company with a new name and description
  **/
  updateCompany(
    req: operations.UpdateCompanyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCompanyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCompanyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateCompanyResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.company = plainToInstance(
                operations.UpdateCompanyCompany,
                httpRes?.data as operations.UpdateCompanyCompany,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.updateCompany401ApplicationJSONObject = plainToInstance(
                operations.UpdateCompany401ApplicationJSON,
                httpRes?.data as operations.UpdateCompany401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
