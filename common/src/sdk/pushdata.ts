import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class PushData {
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
   * getCompaniesCompanyIdConnectionsConnectionIdPush - List push options
   *
   * This is the generic documentation for creation and updating of data. See the equivalent endpoint for a given data type for more specific information.
   *
   * Before pushing data into accounting software, it is often necessary to collect some details from the user as to how they would like the data to be inserted. This includes names and amounts on transactional entities, but also factors such as categorisation of entities, which is often handled differently between different accounting packages. A good example of this is specifying where on the balance sheet/profit and loss reports the user would like a newly-created nominal account to appear.
   *
   * Codat tries not to limit users to pushing to a very limited number of standard categories, so we have implemented "options" endpoints, which allow us to expose to our clients the fields which are required to be pushed for a specific linked company, and the options which may be selected for each field.
   *
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/) for integrations that support push (POST/PUT methods).
   **/
  getCompaniesCompanyIdConnectionsConnectionIdPush(
    req: operations.GetCompaniesCompanyIdConnectionsConnectionIdPushRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdConnectionsConnectionIdPushResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.GetCompaniesCompanyIdConnectionsConnectionIdPushRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/{dataType}",
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
      const res: operations.GetCompaniesCompanyIdConnectionsConnectionIdPushResponse =
        new operations.GetCompaniesCompanyIdConnectionsConnectionIdPushResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pushOption = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetCompaniesCompanyIdConnectionsConnectionIdPushPushOption
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getCompaniesCompanyIdPush - List push operations
   *
   * List push operation records.
   **/
  getCompaniesCompanyIdPush(
    req: operations.GetCompaniesCompanyIdPushRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdPushResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdPushRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/push",
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
      const res: operations.GetCompaniesCompanyIdPushResponse =
        new operations.GetCompaniesCompanyIdPushResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetCompaniesCompanyIdPushLinks
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getCompaniesCompanyIdPushPushOperationKey - Get push operation
   *
   * Retrieve push operation.
   **/
  getCompaniesCompanyIdPushPushOperationKey(
    req: operations.GetCompaniesCompanyIdPushPushOperationKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompaniesCompanyIdPushPushOperationKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompaniesCompanyIdPushPushOperationKeyRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/push/{pushOperationKey}",
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
      const res: operations.GetCompaniesCompanyIdPushPushOperationKeyResponse =
        new operations.GetCompaniesCompanyIdPushPushOperationKeyResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getCompaniesCompanyIdPushPushOperationKey200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
