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
   * createPartnerexpenseConnection - Create Partner Expense connection
   *
   * Creates a Partner Expense data connection
   **/
  createPartnerexpenseConnection(
    req: operations.CreatePartnerexpenseConnectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePartnerexpenseConnectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePartnerexpenseConnectionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/sync/expenses/connections/partnerExpense",
      req
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreatePartnerexpenseConnectionResponse =
        new operations.CreatePartnerexpenseConnectionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.connection = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.CreatePartnerexpenseConnectionConnection
            );
          }
          break;
      }

      return res;
    });
  }
}
