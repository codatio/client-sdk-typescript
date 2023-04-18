/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Manage your companies' data connections.
 */
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
   * Create a data connection
   *
   * @remarks
   * Create a data connection for a company
   */
  createDataConnection(
    req: operations.CreateDataConnectionRequest,
    retries?: utils.RetryConfig,
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

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const r = utils.Retry(() => {
      return client.request({
        url: url,
        method: "post",
        headers: headers,
        data: reqBody,
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

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
            res.connection = utils.objectToClass(
              httpRes?.data,
              shared.Connection
            );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.objectToClass(
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
   * Delete connection
   *
   * @remarks
   * Revoke and remove a connection from a company.
   * This operation is not reversible - the end user would need to reauthorize a new data connection if you wish to view new data for this company.
   */
  deleteCompanyConnection(
    req: operations.DeleteCompanyConnectionRequest,
    retries?: utils.RetryConfig,
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

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const r = utils.Retry(() => {
      return client.request({
        url: url,
        method: "delete",
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

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
        case [401, 404].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.objectToClass(
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
   * Get connection
   *
   * @remarks
   * Get a single connection for a company
   */
  getCompanyConnection(
    req: operations.GetCompanyConnectionRequest,
    retries?: utils.RetryConfig,
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

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const r = utils.Retry(() => {
      return client.request({
        url: url,
        method: "get",
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

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
            res.connection = utils.objectToClass(
              httpRes?.data,
              shared.Connection
            );
          }
          break;
        case [401, 404].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.objectToClass(
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
   * List connections
   *
   * @remarks
   * List the connections for a company
   */
  listCompanyConnections(
    req: operations.ListCompanyConnectionsRequest,
    retries?: utils.RetryConfig,
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

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const r = utils.Retry(() => {
      return client.request({
        url: url + queryParams,
        method: "get",
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

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
            res.connections = utils.objectToClass(
              httpRes?.data,
              shared.Connections
            );
          }
          break;
        case [400, 401].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.objectToClass(
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
   * Unlink connection
   *
   * @remarks
   * This allows you to deauthorize a connection, without deleting it from Codat. This means you can still view any data that has previously been pulled into Codat, and also lets you re-authorize in future if your customer wishes to resume sharing their data.
   */
  unlinkCompanyConnection(
    req: operations.UnlinkCompanyConnectionRequest,
    retries?: utils.RetryConfig,
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

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const r = utils.Retry(() => {
      return client.request({
        url: url,
        method: "patch",
        headers: headers,
        data: reqBody,
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

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
            res.connection = utils.objectToClass(
              httpRes?.data,
              shared.Connection
            );
          }
          break;
        case [400, 401, 404].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.objectToClass(
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
   * Update authorization
   *
   * @remarks
   * Update data connection's authorization.
   */
  updateConnectionAuthorization(
    req: operations.UpdateConnectionAuthorizationRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConnectionAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConnectionAuthorizationRequest(req);
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

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const r = utils.Retry(() => {
      return client.request({
        url: url,
        method: "put",
        headers: headers,
        data: reqBody,
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdateConnectionAuthorizationResponse =
        new operations.UpdateConnectionAuthorizationResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.connection = utils.objectToClass(
              httpRes?.data,
              shared.Connection
            );
          }
          break;
      }

      return res;
    });
  }
}
