/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListCommerceTransactionsRequest extends SpeakeasyBase {
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

export class ListCommerceTransactionsLinksLinksHypertextReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceTransactionsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCommerceTransactionsLinksLinksHypertextReference)
  current: ListCommerceTransactionsLinksLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCommerceTransactionsLinksLinksHypertextReference)
  next?: ListCommerceTransactionsLinksLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCommerceTransactionsLinksLinksHypertextReference)
  previous?: ListCommerceTransactionsLinksLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCommerceTransactionsLinksLinksHypertextReference)
  self: ListCommerceTransactionsLinksLinksHypertextReference;
}

export enum ListCommerceTransactionsLinksSourceModifiedDateRecordRefTypeEnum {
  Fee = "Fee",
  Order = "Order",
  Payment = "Payment",
  ServiceCharge = "ServiceCharge",
  Unknown = "Unknown",
}

export class ListCommerceTransactionsLinksSourceModifiedDateRecordRef extends SpeakeasyBase {
  /**
   * The unique identitifer of the record being referenced
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: ListCommerceTransactionsLinksSourceModifiedDateRecordRefTypeEnum;
}

/**
 * The type of the platform transaction
 */
export enum ListCommerceTransactionsLinksSourceModifiedDateTypeEnum {
  Payment = "Payment",
  Refund = "Refund",
  Payout = "Payout",
  FailedPayout = "FailedPayout",
  Transfer = "Transfer",
  PaymentFee = "PaymentFee",
  PaymentFeeRefund = "PaymentFeeRefund",
  Unknown = "Unknown",
}

/**
 * A financial transaction recorded in the commerce or point of sale system
 */
export class ListCommerceTransactionsLinksSourceModifiedDate extends SpeakeasyBase {
  /**
   * The date the entity was created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  createdDate?: string;

  /**
   * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code. e.g. _GBP_.
   *
   * @remarks
   *
   * ## Unknown currencies
   *
   * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
   *
   * There are only a very small number of edge cases where this currency code is returned by the Codat system.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

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
   * The date on which this record was created in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceCreatedDate" })
  sourceCreatedDate?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Non-standardised transaction type data from the commerce platform
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subType" })
  subType?: string;

  /**
   * The total transaction amount
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * Link to the source event which triggered this transaction
   */
  @SpeakeasyMetadata()
  @Expose({ name: "transactionSourceRef" })
  @Type(() => ListCommerceTransactionsLinksSourceModifiedDateRecordRef)
  transactionSourceRef?: ListCommerceTransactionsLinksSourceModifiedDateRecordRef;

  /**
   * The type of the platform transaction
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: ListCommerceTransactionsLinksSourceModifiedDateTypeEnum;
}

/**
 * Codat's Paging Model
 */
export class ListCommerceTransactionsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCommerceTransactionsLinksLinks)
  links: ListCommerceTransactionsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({
    elemType: ListCommerceTransactionsLinksSourceModifiedDate,
  })
  @Expose({ name: "results" })
  @Type(() => ListCommerceTransactionsLinksSourceModifiedDate)
  results?: ListCommerceTransactionsLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCommerceTransactionsResponse extends SpeakeasyBase {
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
  links?: ListCommerceTransactionsLinks;
}
