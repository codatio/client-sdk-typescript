import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class PurchaseOrders {
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
   * createPurchaseOrder - Create purchase order
   *
   * Posts a new purchase order to the accounting package for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update purchase order model](https://docs.codat.io/accounting-api#/operations/get-create-update-purchaseOrders-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support creating purchase orders.
   **/
  createPurchaseOrder(
    req: operations.CreatePurchaseOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePurchaseOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePurchaseOrderRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/purchaseOrders",
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
      const res: operations.CreatePurchaseOrderResponse =
        new operations.CreatePurchaseOrderResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createPurchaseOrder200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreatePurchaseOrder200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getCreateUpdatePurchaseOrdersModel - Get create/update purchase order model
   *
   * Get create/update purchase order model. Returns the expected data for the request payload.
   *
   * See the examples for integration-specific indicative models.
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support creating and updating purchase orders.
   **/
  getCreateUpdatePurchaseOrdersModel(
    req: operations.GetCreateUpdatePurchaseOrdersModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateUpdatePurchaseOrdersModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateUpdatePurchaseOrdersModelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/purchaseOrders",
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
      const res: operations.GetCreateUpdatePurchaseOrdersModelResponse =
        new operations.GetCreateUpdatePurchaseOrdersModelResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pushOption = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetCreateUpdatePurchaseOrdersModelPushOption
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getPurchaseOrder - Get purchase order
   *
   * Get purchase order
   **/
  getPurchaseOrder(
    req: operations.GetPurchaseOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPurchaseOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPurchaseOrderRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/purchaseOrders/{purchaseOrderId}",
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
      const res: operations.GetPurchaseOrderResponse =
        new operations.GetPurchaseOrderResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.sourceModifiedDate = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetPurchaseOrderSourceModifiedDate
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listPurchaseOrders - List purchase orders
   *
   * Get purchase orders
   **/
  listPurchaseOrders(
    req: operations.ListPurchaseOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPurchaseOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPurchaseOrdersRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/purchaseOrders",
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
      const res: operations.ListPurchaseOrdersResponse =
        new operations.ListPurchaseOrdersResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListPurchaseOrdersLinks
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * updatePurchaseOrder - Update purchase order
   *
   * Posts an updated purchase order to the accounting package for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call []().
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support updating purchase orders.
   **/
  updatePurchaseOrder(
    req: operations.UpdatePurchaseOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePurchaseOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePurchaseOrderRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/purchaseOrders/{purchaseOrderId}",
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
      const res: operations.UpdatePurchaseOrderResponse =
        new operations.UpdatePurchaseOrderResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updatePurchaseOrder200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.UpdatePurchaseOrder200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
