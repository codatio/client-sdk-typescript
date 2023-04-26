/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Customers
 */
export class Customers {
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
   * Create customer
   *
   * @remarks
   * Posts an individual customer for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating customers.
   */
  create(
    req: operations.CreateCustomerRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCustomerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCustomerRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/customers",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "customer",
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

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const r = utils.Retry(() => {
      return client.request({
        url: url + queryParams,
        method: "post",
        headers: headers,
        data: reqBody,
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreateCustomerResponse =
        new operations.CreateCustomerResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createCustomerResponse = utils.objectToClass(
              httpRes?.data,
              shared.CreateCustomerResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Download customer attachment
   *
   * @remarks
   * Download customer attachment
   */
  downloadAttachment(
    req: operations.DownloadCustomerAttachmentRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadCustomerAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadCustomerAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/customers/{customerId}/attachments/{attachmentId}/download",
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
        method: "get",
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DownloadCustomerAttachmentResponse =
        new operations.DownloadCustomerAttachmentResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/octet-stream`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.data = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get customer
   *
   * @remarks
   * Gets a single customer corresponding to the given ID.
   */
  get(
    req: operations.GetCustomerRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomerRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/customers/{customerId}",
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
        method: "get",
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetCustomerResponse =
        new operations.GetCustomerResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.customer = utils.objectToClass(httpRes?.data, shared.Customer);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get customer attachment
   *
   * @remarks
   * Get  customer attachment
   */
  getAttachment(
    req: operations.GetCustomerAttachmentRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomerAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomerAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/customers/{customerId}/attachments/{attachmentId}",
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
        method: "get",
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetCustomerAttachmentResponse =
        new operations.GetCustomerAttachmentResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.attachment = utils.objectToClass(
              httpRes?.data,
              shared.Attachment
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get create/update customer model
   *
   * @remarks
   * Get create/update customer model. Returns the expected data for the request payload.
   *
   * See the examples for integration-specific indicative models.
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating and updating customers.
   */
  getCreateUpdateModel(
    req: operations.GetCreateUpdateCustomersModelRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateUpdateCustomersModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateUpdateCustomersModelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/customers",
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
        method: "get",
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetCreateUpdateCustomersModelResponse =
        new operations.GetCreateUpdateCustomersModelResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pushOption = utils.objectToClass(
              httpRes?.data,
              shared.PushOption
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List customers
   *
   * @remarks
   * Gets the latest customers for a company, with pagination
   */
  list(
    req: operations.ListCustomersRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCustomersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCustomersRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/customers",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const r = utils.Retry(() => {
      return client.request({
        url: url + queryParams,
        method: "get",
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListCustomersResponse =
        new operations.ListCustomersResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.customers = utils.objectToClass(
              httpRes?.data,
              shared.Customers
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List customer attachments
   *
   * @remarks
   * List customer attachments
   */
  listAttachments(
    req: operations.ListCustomerAttachmentsRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCustomerAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCustomerAttachmentsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/customers/{customerId}/attachments",
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
        method: "get",
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListCustomerAttachmentsResponse =
        new operations.ListCustomerAttachmentsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.attachmentsDataset = utils.objectToClass(
              httpRes?.data,
              shared.AttachmentsDataset
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Update customer
   *
   * @remarks
   * Posts an updated customer for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support updating customers.
   */
  update(
    req: operations.UpdateCustomerRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCustomerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCustomerRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/customers/{customerId}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "customer",
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

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const r = utils.Retry(() => {
      return client.request({
        url: url + queryParams,
        method: "put",
        headers: headers,
        data: reqBody,
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdateCustomerResponse =
        new operations.UpdateCustomerResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updateCustomerResponse = utils.objectToClass(
              httpRes?.data,
              shared.UpdateCustomerResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
