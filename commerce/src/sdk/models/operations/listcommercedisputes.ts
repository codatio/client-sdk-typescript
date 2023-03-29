/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListCommerceDisputesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

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

export class ListCommerceDisputes200ApplicationJSONLinksHypertextReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceDisputes200ApplicationJSONLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCommerceDisputes200ApplicationJSONLinksHypertextReference)
  current: ListCommerceDisputes200ApplicationJSONLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCommerceDisputes200ApplicationJSONLinksHypertextReference)
  next?: ListCommerceDisputes200ApplicationJSONLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCommerceDisputes200ApplicationJSONLinksHypertextReference)
  previous?: ListCommerceDisputes200ApplicationJSONLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCommerceDisputes200ApplicationJSONLinksHypertextReference)
  self: ListCommerceDisputes200ApplicationJSONLinksHypertextReference;
}

export enum ListCommerceDisputes200ApplicationJSONSourceModifiedDateRecordRefTypeEnum {
  Fee = "Fee",
  Order = "Order",
  Payment = "Payment",
  ServiceCharge = "ServiceCharge",
  Unknown = "Unknown",
}

export class ListCommerceDisputes200ApplicationJSONSourceModifiedDateRecordRef extends SpeakeasyBase {
  /**
   * The unique identitifer of the record being referenced
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ListCommerceDisputes200ApplicationJSONSourceModifiedDateRecordRefTypeEnum;
}

/**
 * Current status of the dispute
 */
export enum ListCommerceDisputes200ApplicationJSONSourceModifiedDateStatusEnum {
  Won = "Won",
  Lost = "Lost",
  Accepted = "Accepted",
  Processing = "Processing",
  ChargeRefunded = "ChargeRefunded",
  EvidenceRequired = "EvidenceRequired",
  InquiryEvidenceRequired = "InquiryEvidenceRequired",
  InquiryProcessing = "InquiryProcessing",
  InquiryClosed = "InquiryClosed",
  WaitingThirdParty = "WaitingThirdParty",
  Unknown = "Unknown",
}

/**
 * A customer may file a payment dispute with their bank or other card issuer when they're unsatisfied with their purchase or believe they have been charged incorrectly. For example:
 *
 * @remarks
 * - They didn't receive an order.
 * - The product they received was different to the commerce store's description.
 * - They've been the victim of online fraud.
 *
 * You can use data from the Disputes endpoints to calculate key metrics, such as the number of chargebacks.
 *
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-disputes) for this data type.
 */
export class ListCommerceDisputes200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  /**
   * The date the entity was created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  createdDate?: string;

  /**
   * Currency of the disputed transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  /**
   * Link to the source event which triggered this transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "disputedTransactions" })
  @Type(() => ListCommerceDisputes200ApplicationJSONSourceModifiedDateRecordRef)
  disputedTransactions?: ListCommerceDisputes200ApplicationJSONSourceModifiedDateRecordRef;

  /**
   * Date when the next action in the dispute resolution is due
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dueDate" })
  dueDate?: string;

  /**
   * A unique, persistent identifier for this record
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Reason for the dispute
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Current status of the dispute
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ListCommerceDisputes200ApplicationJSONSourceModifiedDateStatusEnum;

  /**
   * Total transaction amount that is under dispute.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

/**
 * OK
 */
export class ListCommerceDisputes200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCommerceDisputes200ApplicationJSONLinks)
  links: ListCommerceDisputes200ApplicationJSONLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({
    elemType: ListCommerceDisputes200ApplicationJSONSourceModifiedDate,
  })
  @Expose({ name: "results" })
  @Type(() => ListCommerceDisputes200ApplicationJSONSourceModifiedDate)
  results?: ListCommerceDisputes200ApplicationJSONSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCommerceDisputesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  listCommerceDisputes200ApplicationJSONObject?: ListCommerceDisputes200ApplicationJSON;
}
