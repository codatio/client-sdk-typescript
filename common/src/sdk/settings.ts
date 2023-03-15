import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Settings {
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
   * getProfileSyncSettings - Get sync settings
   *
   * Retrieve the sync settings for your client. This includes how often data types should be queued to be updated, and how much history should be fetched.
   **/
  getProfileSyncSettings(
    config?: AxiosRequestConfig
  ): Promise<operations.GetProfileSyncSettingsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/profile/syncSettings";

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
      const res: operations.GetProfileSyncSettingsResponse =
        new operations.GetProfileSyncSettingsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProfileSyncSettings200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProfileSyncSettings200ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getProfileSyncSettings401ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetProfileSyncSettings401ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getSettingsProfile - Get profile
   *
   * Fetch your Codat profile.
   **/
  getSettingsProfile(
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsProfileResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/profile";

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
      const res: operations.GetSettingsProfileResponse =
        new operations.GetSettingsProfileResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.profile = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetSettingsProfileProfile
            );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getSettingsProfile401ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetSettingsProfile401ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * postProfileSyncSettings - Update all sync settings
   *
   * Update sync settings for all data types.
   **/
  postProfileSyncSettings(
    req: operations.PostProfileSyncSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProfileSyncSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProfileSyncSettingsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/profile/syncSettings";

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
      const res: operations.PostProfileSyncSettingsResponse =
        new operations.PostProfileSyncSettingsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 204:
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.postProfileSyncSettings401ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PostProfileSyncSettings401ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * putProfile - Update profile
   *
   * Update your Codat profile
   **/
  putProfile(
    req: operations.PutProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutProfileRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/profile";

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
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PutProfileResponse =
        new operations.PutProfileResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.profile = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.PutProfileProfile
            );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.putProfile401ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PutProfile401ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
