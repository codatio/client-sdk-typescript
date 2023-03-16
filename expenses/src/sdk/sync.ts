import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Sync {
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
   * intiateSync - Initiate sync
   *
   * Initiate sync of pending transactions.
   **/
  intiateSync(
    req: operations.IntiateSyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IntiateSyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IntiateSyncRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/sync/expenses/syncs",
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
      const res: operations.IntiateSyncResponse =
        new operations.IntiateSyncResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 202:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.intiateSync202ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.IntiateSync202ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.intiateSync400ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.IntiateSync400ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.intiateSync404ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.IntiateSync404ApplicationJSON
              );
          }
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.intiateSync422ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.IntiateSync422ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
