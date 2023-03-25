/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Direct costs
 */
export class DirectCosts {
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
   * Create direct cost
   *
   * @remarks
   * Posts a new direct cost to the accounting package for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call [Get create direct cost model](https://docs.codat.io/accounting-api#/operations/get-create-directCosts-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating direct costs.
   */
  createDirectCost(
    req: operations.CreateDirectCostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDirectCostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDirectCostRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/directCosts",
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

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

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
      const res: operations.CreateDirectCostResponse =
        new operations.CreateDirectCostResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createDirectCost200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateDirectCost200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Download direct cost attachment
   *
   * @remarks
   * Downloads an attachment for the specified direct cost for a given company.
   */
  downloadDirectCostAttachment(
    req: operations.DownloadDirectCostAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadDirectCostAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadDirectCostAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments/{attachmentId}/download",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DownloadDirectCostAttachmentResponse =
        new operations.DownloadDirectCostAttachmentResponse({
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
   * Get create direct cost model
   *
   * @remarks
   * Get create direct cost model. Returns the expected data for the request payload.
   *
   * See the examples for integration-specific indicative models.
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating direct costs.
   */
  getCreateDirectCostsModel(
    req: operations.GetCreateDirectCostsModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateDirectCostsModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateDirectCostsModelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/directCosts",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetCreateDirectCostsModelResponse =
        new operations.GetCreateDirectCostsModelResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pushOption = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetCreateDirectCostsModelPushOption
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get direct cost
   *
   * @remarks
   * Gets the specified direct cost for a given company.
   */
  getDirectCost(
    req: operations.GetDirectCostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectCostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectCostRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetDirectCostResponse =
        new operations.GetDirectCostResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.sourceModifiedDate = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetDirectCostSourceModifiedDate
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get direct cost attachment
   *
   * @remarks
   * Gets the specified direct cost attachment for a given company.
   */
  getDirectCostAttachment(
    req: operations.GetDirectCostAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectCostAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectCostAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments/{attachmentId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetDirectCostAttachmentResponse =
        new operations.GetDirectCostAttachmentResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.attachment = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetDirectCostAttachmentAttachment
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List direct costs
   *
   * @remarks
   * Gets the direct costs for the company.
   */
  getDirectCosts(
    req: operations.GetDirectCostsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectCostsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectCostsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/directCosts",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetDirectCostsResponse =
        new operations.GetDirectCostsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetDirectCostsLinks
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List direct cost attachments
   *
   * @remarks
   * Gets all attachments for the specified direct cost for a given company.
   */
  listDirectCostAttachments(
    req: operations.ListDirectCostAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDirectCostAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDirectCostAttachmentsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListDirectCostAttachmentsResponse =
        new operations.ListDirectCostAttachmentsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.attachments = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListDirectCostAttachmentsAttachments
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Create direct cost attachment
   *
   * @remarks
   * Posts a new direct cost attachment for a given company.
   */
  postDirectCostAttachment(
    req: operations.PostDirectCostAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDirectCostAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDirectCostAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/directCosts/{directCostId}/attachment",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PostDirectCostAttachmentResponse =
        new operations.PostDirectCostAttachmentResponse({
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
