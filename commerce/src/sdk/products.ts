import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Products {
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
   * listCommerceProductCategories - List product categories
   *
   * Product categories are used to classify a group of products together, either by type (eg "Furniture"), or sometimes by tax profile.
   **/
  listCommerceProductCategories(
    req: operations.ListCommerceProductCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCommerceProductCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCommerceProductCategoriesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/commerce-productCategories",
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
      const res: operations.ListCommerceProductCategoriesResponse =
        new operations.ListCommerceProductCategoriesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListCommerceProductCategoriesLinks
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listCommerceProducts - List products
   *
   * The Products data type provides the company's product inventory, and includes the price and quantity of all products, and product variants, available for sale.
   **/
  listCommerceProducts(
    req: operations.ListCommerceProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCommerceProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCommerceProductsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/commerce-products",
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
      const res: operations.ListCommerceProductsResponse =
        new operations.ListCommerceProductsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListCommerceProductsLinks
            );
          }
          break;
      }

      return res;
    });
  }
}
