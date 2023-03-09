import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class JournalEntries {
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
   * createJournalEntry - Create journal entry
   *
   * Posts a new journalEntry to the accounting package for a given company.
   * 
   * Required data may vary by integration. To see what data to post, first call [Get create journal entry model](https://docs.codat.io/accounting-api#/operations/get-create-journalEntries-model).
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating journal entries.
  **/
  createJournalEntry(
    req: operations.CreateJournalEntryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateJournalEntryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateJournalEntryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/push/journalEntries", req.pathParams);

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
        const res: operations.CreateJournalEntryResponse =
            new operations.CreateJournalEntryResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createJournalEntry200ApplicationJSONObject = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.CreateJournalEntry200ApplicationJSON,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCreateJournalEntriesModel - Get create journal entry model
   *
   * Get create journal entry model. Returns the expected data for the request payload.
   * 
   * See the examples for integration-specific indicative models.
   * 
   * > **Supported Integrations**
   * > 
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating journal entries.
  **/
  getCreateJournalEntriesModel(
    req: operations.GetCreateJournalEntriesModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateJournalEntriesModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateJournalEntriesModelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/connections/{connectionId}/options/journalEntries", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCreateJournalEntriesModelResponse =
            new operations.GetCreateJournalEntriesModelResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.pushOption = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetCreateJournalEntriesModelPushOption,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getJournalEntry - Get journal entry
   *
   * Gets a single JournalEntry corresponding to the given Id
  **/
  getJournalEntry(
    req: operations.GetJournalEntryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetJournalEntryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetJournalEntryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/journalEntries/{journalEntryId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetJournalEntryResponse =
            new operations.GetJournalEntryResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sourceModifiedDate = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetJournalEntrySourceModifiedDate,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listJournalEntries - List journal entries
   *
   * Gets the latest journal entries for a company, with pagination
  **/
  listJournalEntries(
    req: operations.ListJournalEntriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListJournalEntriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListJournalEntriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/journalEntries", req.pathParams);
    
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
        const res: operations.ListJournalEntriesResponse =
            new operations.ListJournalEntriesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.links = utils.deserializeJSONResponse(
                httpRes?.data,
                operations.ListJournalEntriesLinks,
              );
            }
            break;
        }

        return res;
      })
  }

}
