import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Sync {
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
   * postSyncLatest - Run a Commerce sync from the last successful sync...
   *
   * Run a Commerce sync from the last successful sync up to the date provided (optional), otherwise UtcNow is used.
   * If there was no previously successful sync, the start date in the config is used.
  **/
  postSyncLatest(
    req: operations.PostSyncLatestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSyncLatestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSyncLatestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/sync/commerce/latest", req.pathParams);

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
        const res: operations.PostSyncLatestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postSyncLatest200ApplicationJSONObject = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.postSyncLatest200TextJSONObject = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/plain`)) {
                res.postSyncLatest200TextPlainObject = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

}
