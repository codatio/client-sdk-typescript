/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Create and manage partner expense connection.
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
   * Create Partner Expense connection
   *
   * @remarks
   * Creates a Partner Expense data connection
   */
  createPartnerExpenseConnection(
    req: operations.CreatePartnerExpenseConnectionRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePartnerExpenseConnectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePartnerExpenseConnectionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/sync/expenses/connections/partnerExpense",
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
        method: "post",
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreatePartnerExpenseConnectionResponse =
        new operations.CreatePartnerExpenseConnectionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.dataConnection = utils.objectToClass(
              httpRes?.data,
              shared.DataConnection
            );
          }
          break;
      }

      return res;
    });
  }
}
