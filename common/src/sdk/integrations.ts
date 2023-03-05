import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Integrations {
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
   * getIntegrationsPlatformKey - Get integration
   *
   * Get single integration, by platformKey
  **/
  getIntegrationsPlatformKey(
    req: operations.GetIntegrationsPlatformKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationsPlatformKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationsPlatformKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/integrations/{platformKey}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntegrationsPlatformKeyResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.integration = plainToInstance(
                operations.GetIntegrationsPlatformKeyIntegration,
                httpRes?.data as operations.GetIntegrationsPlatformKeyIntegration,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getIntegrationsPlatformKey401ApplicationJSONObject = plainToInstance(
                operations.GetIntegrationsPlatformKey401ApplicationJSON,
                httpRes?.data as operations.GetIntegrationsPlatformKey401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getIntegrationsPlatformKey404ApplicationJSONObject = plainToInstance(
                operations.GetIntegrationsPlatformKey404ApplicationJSON,
                httpRes?.data as operations.GetIntegrationsPlatformKey404ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getIntegrationsPlatformKeyBranding - Get branding
   *
   * Get branding for platform.
  **/
  getIntegrationsPlatformKeyBranding(
    req: operations.GetIntegrationsPlatformKeyBrandingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationsPlatformKeyBrandingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationsPlatformKeyBrandingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/integrations/{platformKey}/branding", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntegrationsPlatformKeyBrandingResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.branding = plainToInstance(
                operations.GetIntegrationsPlatformKeyBrandingBranding,
                httpRes?.data as operations.GetIntegrationsPlatformKeyBrandingBranding,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listIntegrations - List integrations
   *
   * List your available integrations
  **/
  listIntegrations(
    req: operations.ListIntegrationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIntegrationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIntegrationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/integrations";
    
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
        const res: operations.ListIntegrationsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = plainToInstance(
                operations.ListIntegrationsLinks,
                httpRes?.data as operations.ListIntegrationsLinks,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listIntegrations400ApplicationJSONObject = plainToInstance(
                operations.ListIntegrations400ApplicationJSON,
                httpRes?.data as operations.ListIntegrations400ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listIntegrations401ApplicationJSONObject = plainToInstance(
                operations.ListIntegrations401ApplicationJSON,
                httpRes?.data as operations.ListIntegrations401ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
