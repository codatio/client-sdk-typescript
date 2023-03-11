import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Expenses {
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
   * createExpenseDataset - Create expense-transactions
   *
   * Create an expense transaction
  **/
  createExpenseDataset(
    req: operations.CreateExpenseDatasetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateExpenseDatasetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateExpenseDatasetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/sync/expenses/data/expense-transactions", req.pathParams);

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
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateExpenseDatasetResponse =
            new operations.CreateExpenseDatasetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createExpenseDataset200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateExpenseDataset200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * uploadAttachment - Upload attachment
   *
   * Creates an attachment in the accounting software against the given transactionId
  **/
  uploadAttachment(
    req: operations.UploadAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadAttachmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}/attachments", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UploadAttachmentResponse =
            new operations.UploadAttachmentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.uploadAttachment200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.UploadAttachment200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

}
