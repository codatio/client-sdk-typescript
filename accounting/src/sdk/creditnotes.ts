import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class CreditNotes {
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
   * createCreditNote - Update creditNote
   *
   * Posts an updated credit note to the accounting package for a given company.
   * 
   * Required data may vary by integration. To see what data to post, first call [Get create/update credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-creditNotes-model).
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support updating a credit note.
  **/
  createCreditNote(
    req: operations.CreateCreditNoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCreditNoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCreditNoteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/creditNotes/{creditNoteId}", req.pathParams);

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
        const res: operations.CreateCreditNoteResponse =
            new operations.CreateCreditNoteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createCreditNote200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateCreditNote200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCreateUpdateCreditNotesModel - Get create/update credit note model
   *
   * Get create/update credit note model. Returns the expected data for the request payload.
   * 
   * See the examples for integration-specific indicative models.
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support creating and updating a credit note.
  **/
  getCreateUpdateCreditNotesModel(
    req: operations.GetCreateUpdateCreditNotesModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateUpdateCreditNotesModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateUpdateCreditNotesModelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/options/creditNotes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCreateUpdateCreditNotesModelResponse =
            new operations.GetCreateUpdateCreditNotesModelResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.pushOption = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCreateUpdateCreditNotesModelPushOption,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCreditNote - Get credit note
   *
   * Gets a single creditNote corresponding to the given Id
  **/
  getCreditNote(
    req: operations.GetCreditNoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreditNoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreditNoteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/creditNotes/{creditNoteId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCreditNoteResponse =
            new operations.GetCreditNoteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sourceModifiedDate = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCreditNoteSourceModifiedDate,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listCreditNotes - List credit notes
   *
   * Gets a list of all credit notes for a company, with pagination
  **/
  listCreditNotes(
    req: operations.ListCreditNotesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCreditNotesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCreditNotesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/creditNotes", req.pathParams);
    
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
        const res: operations.ListCreditNotesResponse =
            new operations.ListCreditNotesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListCreditNotesLinks,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * pushCreditNote - Create credit note
   *
   * Push credit note
   * 
   * 
   * Required data may vary by integration. To see what data to post, first call [Get create/update credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-creditNotes-model).
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support creating a credit note.
  **/
  pushCreditNote(
    req: operations.PushCreditNoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PushCreditNoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PushCreditNoteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/creditNotes", req.pathParams);

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
        const res: operations.PushCreditNoteResponse =
            new operations.PushCreditNoteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.pushCreditNote200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.PushCreditNote200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

}
