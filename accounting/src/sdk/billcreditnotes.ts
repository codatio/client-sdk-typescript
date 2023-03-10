import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class BillCreditNotes {
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
   * createBillCreditNote - Create bill credit note
   *
   * Posts a new billCreditNote to the accounting package for a given company.
   * 
   * Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating bill credit notes.
  **/
  createBillCreditNote(
    req: operations.CreateBillCreditNoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBillCreditNoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBillCreditNoteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/billCreditNotes", req.pathParams);

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
        const res: operations.CreateBillCreditNoteResponse =
            new operations.CreateBillCreditNoteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createBillCreditNote200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateBillCreditNote200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getBillCreditNote - Get bill credit note
   *
   * Gets a single billCreditNote corresponding to the given ID.
  **/
  getBillCreditNote(
    req: operations.GetBillCreditNoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBillCreditNoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBillCreditNoteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/billCreditNotes/{billCreditNoteId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBillCreditNoteResponse =
            new operations.GetBillCreditNoteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sourceModifiedDate = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetBillCreditNoteSourceModifiedDate,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCreateUpdateBillCreditNotesModel - Get create/update bill credit note model
   *
   * Get create/update bill credit note model.
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating and updating bill credit notes.
  **/
  getCreateUpdateBillCreditNotesModel(
    req: operations.GetCreateUpdateBillCreditNotesModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateUpdateBillCreditNotesModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateUpdateBillCreditNotesModelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/options/billCreditNotes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCreateUpdateBillCreditNotesModelResponse =
            new operations.GetCreateUpdateBillCreditNotesModelResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.pushOption = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCreateUpdateBillCreditNotesModelPushOption,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listBillCreditNotes - List bill credit notes
   *
   * Gets a list of all bill credit notes for a company, with pagination
  **/
  listBillCreditNotes(
    req: operations.ListBillCreditNotesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBillCreditNotesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBillCreditNotesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/billCreditNotes", req.pathParams);
    
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
        const res: operations.ListBillCreditNotesResponse =
            new operations.ListBillCreditNotesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListBillCreditNotesLinks,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateBillCreditNote - Update bill credit note
   *
   * Posts an updated billCreditNote to the accounting package for a given company.
   * 
   * Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support updating bill credit notes.
  **/
  updateBillCreditNote(
    req: operations.UpdateBillCreditNoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBillCreditNoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBillCreditNoteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/billCreditNotes/{billCreditNoteId}", req.pathParams);

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
        const res: operations.UpdateBillCreditNoteResponse =
            new operations.UpdateBillCreditNoteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.updateBillCreditNote200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.UpdateBillCreditNote200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

}
