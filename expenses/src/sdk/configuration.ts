import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Configuration {
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
   * getCompanyConfiguration - Get Company configuration
   *
   * Gets a companies expense sync configuration
  **/
  getCompanyConfiguration(
    req: operations.GetCompanyConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompanyConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompanyConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCompanyConfigurationResponse =
            new operations.GetCompanyConfigurationResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCompanyConfiguration200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCompanyConfiguration200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * saveCompanyConfiguration - Set Company configuration
   *
   * Sets a companies expense sync configuration
  **/
  saveCompanyConfiguration(
    req: operations.SaveCompanyConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SaveCompanyConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SaveCompanyConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/config", req.pathParams);

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
        const res: operations.SaveCompanyConfigurationResponse =
            new operations.SaveCompanyConfigurationResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.saveCompanyConfiguration200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.SaveCompanyConfiguration200ApplicationJSON,
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.saveCompanyConfiguration400ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.SaveCompanyConfiguration400ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

}
