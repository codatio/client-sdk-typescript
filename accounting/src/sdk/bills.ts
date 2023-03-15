import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Bills {
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
   * createBill - Create bill
   *
   * Posts a new bill to the accounting package for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating a bill.
   **/
  createBill(
    req: operations.CreateBillRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBillResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBillRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/bills",
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
      const res: operations.CreateBillResponse =
        new operations.CreateBillResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createBill200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateBill200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * createBillAttachments - Create bill attachments
   *
   * Post bill attachments
   **/
  createBillAttachments(
    req: operations.CreateBillAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBillAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBillAttachmentsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/bills/{billId}/attachments",
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
      const res: operations.CreateBillAttachmentsResponse =
        new operations.CreateBillAttachmentsResponse({
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
   * deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId - Delete bill
   *
   * Deletes a bill from the accounting package for a given company.
   *
   * > **Supported Integrations**
   * >
   * > This functionality is currently only supported for our Oracle NetSuite integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.
   **/
  deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId(
    req: operations.DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/bills/{billId}",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdResponse =
        new operations.DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSON
              );
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            let out: Uint8Array = new Uint8Array(resBody.length);
            for (let i: number = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          if (utils.matchContentType(contentType, `multipart/form-data`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            let out: Uint8Array = new Uint8Array(resBody.length);
            for (let i: number = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * downloadBillAttachment - Download bill attachment
   *
   * Download bill attachment
   **/
  downloadBillAttachment(
    req: operations.DownloadBillAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadBillAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadBillAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/bills/{billId}/attachments/{attachmentId}/download",
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
      const res: operations.DownloadBillAttachmentResponse =
        new operations.DownloadBillAttachmentResponse({
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
   * getBill - Get bill
   *
   * Get bill
   **/
  getBill(
    req: operations.GetBillRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBillResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBillRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/bills/{billId}",
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
      const res: operations.GetBillResponse = new operations.GetBillResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.sourceModifiedDate = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetBillSourceModifiedDate
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getBillAttachment - Get bill attachment
   *
   * Get bill attachment
   **/
  getBillAttachment(
    req: operations.GetBillAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBillAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBillAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/bills/{billId}/attachments/{attachmentId}",
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
      const res: operations.GetBillAttachmentResponse =
        new operations.GetBillAttachmentResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.attachment = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetBillAttachmentAttachment
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getBillAttachments - List bill attachments
   *
   * Get bill attachments
   **/
  getBillAttachments(
    req: operations.GetBillAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBillAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBillAttachmentsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/bills/{billId}/attachments",
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
      const res: operations.GetBillAttachmentsResponse =
        new operations.GetBillAttachmentsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.attachments = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetBillAttachmentsAttachments
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getCreateUpdateBillsModel - Get create/update bill model
   *
   * Get create/update bill model.
   *
   *  > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating and updating a bill.
   **/
  getCreateUpdateBillsModel(
    req: operations.GetCreateUpdateBillsModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateUpdateBillsModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateUpdateBillsModelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/bills",
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
      const res: operations.GetCreateUpdateBillsModelResponse =
        new operations.GetCreateUpdateBillsModelResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pushOption = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.GetCreateUpdateBillsModelPushOption
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listBills - List bills
   *
   * Gets the latest bills for a company, with pagination
   **/
  listBills(
    req: operations.ListBillsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBillsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBillsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/bills",
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
      const res: operations.ListBillsResponse =
        new operations.ListBillsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.links = utils.deserializeJSONResponse(
              httpRes?.data,
              operations.ListBillsLinks
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * updateBill - Update bill
   *
   * Posts an updated bill to the accounting package for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support updating a bill.
   **/
  updateBill(
    req: operations.UpdateBillRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBillResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBillRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/bills/{billId}",
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
      const res: operations.UpdateBillResponse =
        new operations.UpdateBillResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updateBill200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.UpdateBill200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
