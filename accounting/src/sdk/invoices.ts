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
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DonwloadInvoiceAttachmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInvoiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sourceModifiedDate = plainToInstance(
                operations.GetInvoiceSourceModifiedDate,
                httpRes?.data as operations.GetInvoiceSourceModifiedDate,
                { excludeExtraneousValues: true }
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
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInvoiceAttachmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.attachment = plainToInstance(
                operations.GetInvoiceAttachmentAttachment,
                httpRes?.data as operations.GetInvoiceAttachmentAttachment,
                { excludeExtraneousValues: true }
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
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInvoiceAttachmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.attachments = plainToInstance(
                operations.GetInvoiceAttachmentsAttachments,
                httpRes?.data as operations.GetInvoiceAttachmentsAttachments,
                { excludeExtraneousValues: true }
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
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInvoicePdfResponse = {statusCode: httpRes.status, contentType: contentType};
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
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListInvoicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = plainToInstance(
                operations.ListInvoicesLinks,
                httpRes?.data as operations.ListInvoicesLinks,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postInvoice - Create invoice
   *
   * Posts a new invoice to the accounting package for a given company.
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support POST methods.
  **/
  postInvoice(
    req: operations.PostInvoiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostInvoiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostInvoiceRequest(req);
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
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.PostInvoiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postInvoice200ApplicationJSONObject = plainToInstance(
                operations.PostInvoice200ApplicationJSON,
                httpRes?.data as operations.PostInvoice200ApplicationJSON,
                { excludeExtraneousValues: true }
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
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PushInvoiceAttachmentResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support PUT methods.
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
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.UpdateInvoiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.updateInvoice200ApplicationJSONObject = plainToInstance(
                operations.UpdateInvoice200ApplicationJSON,
                httpRes?.data as operations.UpdateInvoice200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
