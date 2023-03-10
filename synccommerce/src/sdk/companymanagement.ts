import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class CompanyManagement {
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
   * addDataConnection - Create data connection
   *
   * Create a data connection.
   **/
  addDataConnection(
    req: operations.AddDataConnectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddDataConnectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddDataConnectionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/meta/companies/{companyId}/connections",
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
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.AddDataConnectionResponse =
        new operations.AddDataConnectionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.addDataConnection200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.AddDataConnection200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * companies - List companies
   *
   * Retrieve a list of all companies the client has created.
   **/
  companies(
    req: operations.CompaniesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompaniesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompaniesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/meta/companies";

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
      const res: operations.CompaniesResponse =
        new operations.CompaniesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companies200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.Companies200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getDataconnections - List connections
   *
   * Retrieve previously created data connections.
   **/
  getDataconnections(
    req: operations.GetDataconnectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDataconnectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDataconnectionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/meta/companies/{companyId}/connections",
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
      const res: operations.GetDataconnectionsResponse =
        new operations.GetDataconnectionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getDataconnections200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetDataconnections200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * postCompanies - Create a Sync for Commerce company
   *
   * Creates a Codat company with a commerce partner data connection.
   **/
  postCompanies(
    req: operations.PostCompaniesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCompaniesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCompaniesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/meta/companies/sync";

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
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PostCompaniesResponse =
        new operations.PostCompaniesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.postCompanies200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostCompanies200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * updateDataConnection - Update data connection
   *
   * Update a data connection
   **/
  updateDataConnection(
    req: operations.UpdateDataConnectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDataConnectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDataConnectionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/meta/companies/{companyId}/connections/{connectionId}",
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
      const res: operations.UpdateDataConnectionResponse =
        new operations.UpdateDataConnectionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updateDataConnection200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.UpdateDataConnection200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
