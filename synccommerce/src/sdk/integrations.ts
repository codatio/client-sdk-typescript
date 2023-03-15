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
   * getIntegrationBranding - Get branding for an integration
   *
   * Retrieve Integration branding assets.
   **/
  getIntegrationBranding(
    req: operations.GetIntegrationBrandingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationBrandingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationBrandingRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/config/integrations/{platformKey}/branding",
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
      const res: operations.GetIntegrationBrandingResponse =
        new operations.GetIntegrationBrandingResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }

  /**
   * getIntegrations - List Codat's integrations
   *
   * Retrieve a list of available integrations.
   **/
  getIntegrations(
    req: operations.GetIntegrationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntegrationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntegrationsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/config/integrations";

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
      const res: operations.GetIntegrationsResponse =
        new operations.GetIntegrationsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getIntegrations200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetIntegrations200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
