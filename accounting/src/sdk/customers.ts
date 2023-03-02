import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Customers {
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
   * downloadCustomerAttachment - Download customer attachment
   *
   * Download customer attachment
  **/
  downloadCustomerAttachment(
    req: operations.DownloadCustomerAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadCustomerAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadCustomerAttachmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/customers/{customerId}/attachments/{attachmentId}/download", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DownloadCustomerAttachmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomer - Get customer
   *
   * Gets a single customer corresponding to the supplied Id
  **/
  getCustomer(
    req: operations.GetCustomerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/customers/{customerId}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCustomerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sourceModifiedDate = plainToInstance(
                operations.GetCustomerSourceModifiedDate,
                httpRes?.data as operations.GetCustomerSourceModifiedDate,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomerAttachment - Get customer attachment
   *
   * Get  customer attachment
  **/
  getCustomerAttachment(
    req: operations.GetCustomerAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomerAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomerAttachmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/customers/{customerId}/attachments/{attachmentId}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCustomerAttachmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.attachment = plainToInstance(
                operations.GetCustomerAttachmentAttachment,
                httpRes?.data as operations.GetCustomerAttachmentAttachment,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomerAttachments - List customer attachments
   *
   * Get customer attachments
  **/
  getCustomerAttachments(
    req: operations.GetCustomerAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomerAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomerAttachmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/data/customers/{customerId}/attachments", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCustomerAttachmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.attachments = plainToInstance(
                operations.GetCustomerAttachmentsAttachments,
                httpRes?.data as operations.GetCustomerAttachmentsAttachments,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCustomers - List customers
   *
   * Gets the latest customers for a company, with pagination
  **/
  getCustomers(
    req: operations.GetCustomersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/customers", req.pathParams);
    
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
        const res: operations.GetCustomersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = plainToInstance(
                operations.GetCustomersLinks,
                httpRes?.data as operations.GetCustomersLinks,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCustomer - Create customer
   *
   * Posts an individual customer for a given company.
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support POST methods.
  **/
  postCustomer(
    req: operations.PostCustomerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCustomerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCustomerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/customers", req.pathParams);

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
        const res: operations.PostCustomerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.postCustomer200ApplicationJSONObject = plainToInstance(
                operations.PostCustomer200ApplicationJSON,
                httpRes?.data as operations.PostCustomer200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateCustomer - Update customer
   *
   * Posts an updated customer for a given company.
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support PUT methods.
  **/
  updateCustomer(
    req: operations.UpdateCustomerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCustomerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCustomerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/customers/{customerId}", req.pathParams);

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
        const res: operations.UpdateCustomerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.updateCustomer200ApplicationJSONObject = plainToInstance(
                operations.UpdateCustomer200ApplicationJSON,
                httpRes?.data as operations.UpdateCustomer200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
