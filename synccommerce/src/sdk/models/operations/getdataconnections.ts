/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetDataconnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  /**
   * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=orderBy",
  })
  orderBy?: string;

  /**
   * Page number. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  /**
   * Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;

  /**
   * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetDataconnections200ApplicationJSONLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetDataconnections200ApplicationJSONLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetDataconnections200ApplicationJSONLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetDataconnections200ApplicationJSONLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetDataconnections200ApplicationJSONLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => GetDataconnections200ApplicationJSONLinksCurrent)
  current?: GetDataconnections200ApplicationJSONLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => GetDataconnections200ApplicationJSONLinksNext)
  next?: GetDataconnections200ApplicationJSONLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => GetDataconnections200ApplicationJSONLinksPrevious)
  previous?: GetDataconnections200ApplicationJSONLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => GetDataconnections200ApplicationJSONLinksSelf)
  self?: GetDataconnections200ApplicationJSONLinksSelf;
}

export class GetDataconnections200ApplicationJSONResultsDataConnectionErrors extends SpeakeasyBase {
  /**
   * Message on the data connection error.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  /**
   * In Codat's data model, dates and times are represented using the ISO 8601 standard. Date and time fields are formatted as strings.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "erroredOnUtc" })
  erroredOnUtc?: string;

  /**
   * Codat's error status code for the connection error.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: string;

  /**
   * Descriptive text for the data connection error.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "statusText" })
  statusText?: string;
}

/**
 * The type of platform of the connection.
 */
export enum GetDataconnections200ApplicationJSONResultsSourceTypeEnum {
  Accounting = "Accounting",
  Banking = "Banking",
  Commerce = "Commerce",
  Other = "Other",
  Unknown = "Unknown",
}

/**
 * The current authorization status of the data connection.
 */
export enum GetDataconnections200ApplicationJSONResultsStatusEnum {
  PendingAuth = "PendingAuth",
  Linked = "Linked",
  Unlinked = "Unlinked",
  Deauthorized = "Deauthorized",
}

export class GetDataconnections200ApplicationJSONResults extends SpeakeasyBase {
  /**
   * In Codat's data model, dates and times are represented using the ISO 8601 standard. Date and time fields are formatted as string.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  created?: string;

  /**
   * Array containing errors on data connections.
   */
  @SpeakeasyMetadata({
    elemType: GetDataconnections200ApplicationJSONResultsDataConnectionErrors,
  })
  @Expose({ name: "dataConnectionErrors" })
  @Type(() => GetDataconnections200ApplicationJSONResultsDataConnectionErrors)
  dataConnectionErrors?: GetDataconnections200ApplicationJSONResultsDataConnectionErrors[];

  /**
   * Unique identifier for a company's data connection.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * A Codat ID representing the integration.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "integrationId" })
  integrationId: string;

  /**
   * In Codat's data model, dates and times are represented using the ISO 8601 standard. Date and time fields are formatted as string.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "lastSync" })
  lastSync?: string;

  /**
   * Whitelabelled link site URL for the user link flow.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "linkUrl" })
  linkUrl: string;

  /**
   * The name of the platform to which the data connection is established.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "platformName" })
  platformName: string;

  /**
   * A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, sourceId is associated with a specific bank and has a many-to-one relationship with the integrationId.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceId" })
  sourceId: string;

  /**
   * The type of platform of the connection.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType?: GetDataconnections200ApplicationJSONResultsSourceTypeEnum;

  /**
   * The current authorization status of the data connection.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetDataconnections200ApplicationJSONResultsStatusEnum;
}

/**
 * Success
 */
export class GetDataconnections200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => GetDataconnections200ApplicationJSONLinks)
  links?: GetDataconnections200ApplicationJSONLinks;

  /**
   * Page number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  /**
   * Specified number of results.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  /**
   * Array of data connection objects.
   */
  @SpeakeasyMetadata({ elemType: GetDataconnections200ApplicationJSONResults })
  @Expose({ name: "results" })
  @Type(() => GetDataconnections200ApplicationJSONResults)
  results?: GetDataconnections200ApplicationJSONResults[];

  /**
   * Total number of records in the result set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}

export class GetDataconnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  getDataconnections200ApplicationJSONObject?: GetDataconnections200ApplicationJSON;
}
