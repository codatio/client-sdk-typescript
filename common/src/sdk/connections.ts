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
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

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
      const res: operations.CreateDataConnectionResponse =
        new operations.CreateDataConnectionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.connection = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.CreateDataConnectionConnection
            );
          }
          break;
      }

      return res;
    });
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
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}",
      req
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteCompanyConnectionResponse =
        new operations.DeleteCompanyConnectionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.deleteCompanyConnection401ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteCompanyConnection401ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.deleteCompanyConnection404ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteCompanyConnection404ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
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
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/authorization",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

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
      const res: operations.GetCompanyAuthorizationResponse =
        new operations.GetCompanyAuthorizationResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.connection = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetCompanyAuthorizationConnection
            );
          }
          break;
      }

      return res;
    });
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
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}",
      req
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
      const res: operations.GetCompanyConnectionResponse =
        new operations.GetCompanyConnectionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.connection = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetCompanyConnectionConnection
            );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getCompanyConnection401ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCompanyConnection401ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getCompanyConnection404ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCompanyConnection404ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
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
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections",
      req
    );

    const client: AxiosInstance = this._securityClient!;

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
      const res: operations.ListCompanyConnectionsResponse =
        new operations.ListCompanyConnectionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListCompanyConnectionsLinks
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listCompanyConnections400ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListCompanyConnections400ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listCompanyConnections401ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListCompanyConnections401ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
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
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
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
      const res: operations.UnlinkCompanyConnectionResponse =
        new operations.UnlinkCompanyConnectionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.connection = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.UnlinkCompanyConnectionConnection
            );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unlinkCompanyConnection401ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.UnlinkCompanyConnection401ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unlinkCompanyConnection404ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.UnlinkCompanyConnection404ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
