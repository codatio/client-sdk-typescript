import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Suppliers {
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
   * createSuppliers - Create suppliers
   *
   * Push suppliers
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/accounting-api#/operations/get-create-update-suppliers-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support creating suppliers.
   **/
  createSuppliers(
    req: operations.CreateSuppliersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSuppliersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSuppliersRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/suppliers",
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
      const res: operations.CreateSuppliersResponse =
        new operations.CreateSuppliersResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createSuppliers200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateSuppliers200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * downloadSupplierAttachment - Download supplier attachment
   *
   * Download supplier attachment
   **/
  downloadSupplierAttachment(
    req: operations.DownloadSupplierAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadSupplierAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadSupplierAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/suppliers/{supplierId}/attachments/{attachmentId}/download",
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
      const res: operations.DownloadSupplierAttachmentResponse =
        new operations.DownloadSupplierAttachmentResponse({
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
   * getCreateUpdateSuppliersModel - Get create/update supplier model
   *
   * Get create/update supplier model. Returns the expected data for the request payload.
   *
   * See the examples for integration-specific indicative models.
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support creating and updating suppliers.
   **/
  getCreateUpdateSuppliersModel(
    req: operations.GetCreateUpdateSuppliersModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateUpdateSuppliersModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateUpdateSuppliersModelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/suppliers",
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
      const res: operations.GetCreateUpdateSuppliersModelResponse =
        new operations.GetCreateUpdateSuppliersModelResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pushOption = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetCreateUpdateSuppliersModelPushOption
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getSupplier - Get supplier
   *
   * Gets a single supplier corresponding to the given ID.
   **/
  getSupplier(
    req: operations.GetSupplierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSupplierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSupplierRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/suppliers/{supplierId}",
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
      const res: operations.GetSupplierResponse =
        new operations.GetSupplierResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.sourceModifiedDate = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetSupplierSourceModifiedDate
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getSupplierAttachment - Get supplier attachment
   *
   * Get supplier attachment
   **/
  getSupplierAttachment(
    req: operations.GetSupplierAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSupplierAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSupplierAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/suppliers/{supplierId}/attachments/{attachmentId}",
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
      const res: operations.GetSupplierAttachmentResponse =
        new operations.GetSupplierAttachmentResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.attachment = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetSupplierAttachmentAttachment
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listSupplierAttachments - List supplier attachments
   *
   * Get supplier attachments
   **/
  listSupplierAttachments(
    req: operations.ListSupplierAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSupplierAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSupplierAttachmentsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/suppliers/{supplierId}/attachments",
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
      const res: operations.ListSupplierAttachmentsResponse =
        new operations.ListSupplierAttachmentsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.attachments = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListSupplierAttachmentsAttachments
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listSuppliers - List suppliers
   *
   * Gets the latest suppliers for a company, with pagination
   **/
  listSuppliers(
    req: operations.ListSuppliersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSuppliersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSuppliersRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/suppliers",
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
      const res: operations.ListSuppliersResponse =
        new operations.ListSuppliersResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListSuppliersLinks
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * putSupplier - Update supplier
   *
   * Push supplier
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/accounting-api#/operations/get-create-update-suppliers-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support updating suppliers.
   **/
  putSupplier(
    req: operations.PutSupplierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSupplierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSupplierRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/suppliers/{supplierId}",
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
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PutSupplierResponse =
        new operations.PutSupplierResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.putSupplier200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PutSupplier200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
