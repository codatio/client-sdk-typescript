import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class DirectIncomes {
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
   * createDirectIncome - Create direct income
   *
   * Posts a new direct income to the accounting package for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call [Get create direct income model](https://docs.codat.io/accounting-api#/operations/get-create-directIncomes-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating direct incomes.
   **/
  createDirectIncome(
    req: operations.CreateDirectIncomeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDirectIncomeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDirectIncomeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/directIncomes",
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
    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreateDirectIncomeResponse =
        new operations.CreateDirectIncomeResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createDirectIncome200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateDirectIncome200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * downloadDirectIncomeAttachment - Download direct income attachment
   *
   * Downloads an attachment for the specified direct income for a given company.
   **/
  downloadDirectIncomeAttachment(
    req: operations.DownloadDirectIncomeAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadDirectIncomeAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadDirectIncomeAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}/attachments/{attachmentId}/download",
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
      const res: operations.DownloadDirectIncomeAttachmentResponse =
        new operations.DownloadDirectIncomeAttachmentResponse({
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
   * getCreateDirectIncomesModel - Get create direct income model
   *
   * Get create direct income model. Returns the expected data for the request payload.
   *
   * See the examples for integration-specific indicative models.
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating direct incomes.
   **/
  getCreateDirectIncomesModel(
    req: operations.GetCreateDirectIncomesModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateDirectIncomesModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateDirectIncomesModelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/directIncomes",
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
      const res: operations.GetCreateDirectIncomesModelResponse =
        new operations.GetCreateDirectIncomesModelResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pushOption = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetCreateDirectIncomesModelPushOption
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getDirectIncome - Get direct income
   *
   * Gets the specified direct income for a given company and connection.
   **/
  getDirectIncome(
    req: operations.GetDirectIncomeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectIncomeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectIncomeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}",
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
      const res: operations.GetDirectIncomeResponse =
        new operations.GetDirectIncomeResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.sourceModifiedDate = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetDirectIncomeSourceModifiedDate
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getDirectIncomeAttachment - Get direct income attachment
   *
   * Gets the specified direct income attachment for a given company.
   **/
  getDirectIncomeAttachment(
    req: operations.GetDirectIncomeAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectIncomeAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectIncomeAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}/attachments/{attachmentId}",
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
      const res: operations.GetDirectIncomeAttachmentResponse =
        new operations.GetDirectIncomeAttachmentResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.attachment = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetDirectIncomeAttachmentAttachment
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getDirectIncomes - Get direct incomes
   *
   * Gets the direct incomes for a given company.
   **/
  getDirectIncomes(
    req: operations.GetDirectIncomesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectIncomesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectIncomesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/directIncomes",
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
      const res: operations.GetDirectIncomesResponse =
        new operations.GetDirectIncomesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetDirectIncomesLinks
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listDirectIncomeAttachments - List direct income attachments
   *
   * Gets all attachments for the specified direct income for a given company.
   **/
  listDirectIncomeAttachments(
    req: operations.ListDirectIncomeAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDirectIncomeAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDirectIncomeAttachmentsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}/attachments",
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
      const res: operations.ListDirectIncomeAttachmentsResponse =
        new operations.ListDirectIncomeAttachmentsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.attachments = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListDirectIncomeAttachmentsAttachments
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * postDirectIncomeAttachment - Create direct income attachment
   *
   * Posts a new direct income attachment for a given company.
   **/
  postDirectIncomeAttachment(
    req: operations.PostDirectIncomeAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDirectIncomeAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDirectIncomeAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/directIncomes/{directIncomeId}/attachment",
      req.pathParams
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
      const res: operations.PostDirectIncomeAttachmentResponse =
        new operations.PostDirectIncomeAttachmentResponse({
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
}
