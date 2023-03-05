import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Connections {
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
   * createDataConnection - Create a data connection
   *
   * Create a data connection for a company
  **/
  createDataConnection(
    req: operations.CreateDataConnectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDataConnectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDataConnectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateDataConnectionResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.connection = plainToInstance(
                operations.CreateDataConnectionConnection,
                httpRes?.data as operations.CreateDataConnectionConnection,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteCompanyConnection - Delete connection
   *
   * Revoke and remove a connection from a company.
   * This operation is not reversible - the end user would need to reauthorize a new data connection if you wish to view new data for this company.
  **/
  deleteCompanyConnection(
    req: operations.DeleteCompanyConnectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCompanyConnectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCompanyConnectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCompanyConnectionResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteCompanyConnection401ApplicationJSONObject = plainToInstance(
                operations.DeleteCompanyConnection401ApplicationJSON,
                httpRes?.data as operations.DeleteCompanyConnection401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteCompanyConnection404ApplicationJSONObject = plainToInstance(
                operations.DeleteCompanyConnection404ApplicationJSON,
                httpRes?.data as operations.DeleteCompanyConnection404ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompanyAuthorization - Update authorization
   *
   * Update data connection's authorization.
  **/
  getCompanyAuthorization(
    req: operations.GetCompanyAuthorizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompanyAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompanyAuthorizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/authorization", req.pathParams);

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
        const res: operations.GetCompanyAuthorizationResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.connection = plainToInstance(
                operations.GetCompanyAuthorizationConnection,
                httpRes?.data as operations.GetCompanyAuthorizationConnection,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCompanyConnection - Get connection
   *
   * Get a single connection for a company
  **/
  getCompanyConnection(
    req: operations.GetCompanyConnectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompanyConnectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompanyConnectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompanyConnectionResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.connection = plainToInstance(
                operations.GetCompanyConnectionConnection,
                httpRes?.data as operations.GetCompanyConnectionConnection,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompanyConnection401ApplicationJSONObject = plainToInstance(
                operations.GetCompanyConnection401ApplicationJSON,
                httpRes?.data as operations.GetCompanyConnection401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompanyConnection404ApplicationJSONObject = plainToInstance(
                operations.GetCompanyConnection404ApplicationJSON,
                httpRes?.data as operations.GetCompanyConnection404ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listCompanyConnections - List connections
   *
   * List the connections for a company
  **/
  listCompanyConnections(
    req: operations.ListCompanyConnectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCompanyConnectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCompanyConnectionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections", req.pathParams);
    
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
        const res: operations.ListCompanyConnectionsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = plainToInstance(
                operations.ListCompanyConnectionsLinks,
                httpRes?.data as operations.ListCompanyConnectionsLinks,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listCompanyConnections400ApplicationJSONObject = plainToInstance(
                operations.ListCompanyConnections400ApplicationJSON,
                httpRes?.data as operations.ListCompanyConnections400ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listCompanyConnections401ApplicationJSONObject = plainToInstance(
                operations.ListCompanyConnections401ApplicationJSON,
                httpRes?.data as operations.ListCompanyConnections401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * unlinkCompanyConnection - Unlink connection
   *
   * This allows you to deauthorize a connection, without deleting it from Codat. This means you can still view any data that has previously been pulled into Codat, and also lets you re-authorize in future if your customer wishes to resume sharing their data.
  **/
  unlinkCompanyConnection(
    req: operations.UnlinkCompanyConnectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnlinkCompanyConnectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnlinkCompanyConnectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}", req.pathParams);

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
        const res: operations.UnlinkCompanyConnectionResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.connection = plainToInstance(
                operations.UnlinkCompanyConnectionConnection,
                httpRes?.data as operations.UnlinkCompanyConnectionConnection,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.unlinkCompanyConnection401ApplicationJSONObject = plainToInstance(
                operations.UnlinkCompanyConnection401ApplicationJSON,
                httpRes?.data as operations.UnlinkCompanyConnection401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.unlinkCompanyConnection404ApplicationJSONObject = plainToInstance(
                operations.UnlinkCompanyConnection404ApplicationJSON,
                httpRes?.data as operations.UnlinkCompanyConnection404ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
