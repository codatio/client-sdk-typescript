import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Invoices {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * createInvoice - Create invoice
   *
   * Posts a new invoice to the accounting package for a given company.
   * 
   * Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating invoices.
  **/
  createInvoice(
    req: operations.CreateInvoiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInvoiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInvoiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/invoices", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
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

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateInvoiceResponse =
            new operations.CreateInvoiceResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createInvoice200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateInvoice200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * donwloadInvoiceAttachment - Download invoice attachment
   *
   * Download invoice attachments
  **/
  donwloadInvoiceAttachment(
    req: operations.DonwloadInvoiceAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DonwloadInvoiceAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DonwloadInvoiceAttachmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments/{attachmentId}/download", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DonwloadInvoiceAttachmentResponse =
            new operations.DonwloadInvoiceAttachmentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getCreateUpdateInvoicesModel - Get create/update invoice model
   *
   * Get create/update invoice model. Returns the expected data for the request payload.
   * 
   * See the examples for integration-specific indicative models.
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating and updating invoices.
  **/
  getCreateUpdateInvoicesModel(
    req: operations.GetCreateUpdateInvoicesModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateUpdateInvoicesModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateUpdateInvoicesModelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/options/invoices", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCreateUpdateInvoicesModelResponse =
            new operations.GetCreateUpdateInvoicesModelResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.pushOption = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCreateUpdateInvoicesModelPushOption,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getInvoice - Get invoice
   *
   * Get invoice
  **/
  getInvoice(
    req: operations.GetInvoiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/invoices/{invoiceId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInvoiceResponse =
            new operations.GetInvoiceResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sourceModifiedDate = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInvoiceSourceModifiedDate,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getInvoiceAttachment - Get invoice attachment
   *
   * Get invoice attachments
  **/
  getInvoiceAttachment(
    req: operations.GetInvoiceAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceAttachmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments/{attachmentId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInvoiceAttachmentResponse =
            new operations.GetInvoiceAttachmentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.attachment = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInvoiceAttachmentAttachment,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getInvoiceAttachments - Get invoice attachments
   *
   * Get invoice attachments
  **/
  getInvoiceAttachments(
    req: operations.GetInvoiceAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceAttachmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInvoiceAttachmentsResponse =
            new operations.GetInvoiceAttachmentsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.attachments = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetInvoiceAttachmentsAttachments,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getInvoicePdf - Get invoice as PDF
   *
   * Get invoice as PDF
  **/
  getInvoicePdf(
    req: operations.GetInvoicePdfRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoicePdfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoicePdfRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/invoices/{invoiceId}/pdf", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInvoicePdfResponse =
            new operations.GetInvoicePdfResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * listInvoices - List invoices
   *
   * Gets the latest invoices for a company, with pagination
  **/
  listInvoices(
    req: operations.ListInvoicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListInvoicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListInvoicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/invoices", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListInvoicesResponse =
            new operations.ListInvoicesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListInvoicesLinks,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * pushInvoiceAttachment - Push invoice attachment
   *
   * Push invoice attachment
  **/
  pushInvoiceAttachment(
    req: operations.PushInvoiceAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PushInvoiceAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PushInvoiceAttachmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/invoices/{invoiceId}/attachment", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PushInvoiceAttachmentResponse =
            new operations.PushInvoiceAttachmentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * updateInvoice - Update invoice
   *
   * Posts an updated invoice to the accounting package for a given company.
   * 
   * Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support updating invoices.
  **/
  updateInvoice(
    req: operations.UpdateInvoiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateInvoiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateInvoiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/invoices/{invoiceId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
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

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateInvoiceResponse =
            new operations.UpdateInvoiceResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.updateInvoice200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.UpdateInvoice200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

}
