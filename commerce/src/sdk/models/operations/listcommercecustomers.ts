/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListCommerceCustomersRequest extends SpeakeasyBase {
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

export class ListCommerceCustomersLinksLinksHypertextReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceCustomersLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCommerceCustomersLinksLinksHypertextReference)
  current: ListCommerceCustomersLinksLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCommerceCustomersLinksLinksHypertextReference)
  next?: ListCommerceCustomersLinksLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCommerceCustomersLinksLinksHypertextReference)
  previous?: ListCommerceCustomersLinksLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCommerceCustomersLinksLinksHypertextReference)
  self: ListCommerceCustomersLinksLinksHypertextReference;
}

export enum ListCommerceCustomersLinksSourceModifiedDateAddressTypeEnum {
  Billing = "Billing",
  Delivery = "Delivery",
}

export class ListCommerceCustomersLinksSourceModifiedDateAddress extends SpeakeasyBase {
  /**
   * The third line of the address, or city
   */
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * The country for the address
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * The first line of the address
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  /**
   * The second line of the address
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  /**
   * The postal (or zip) code for the address
   */
  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: string;

  /**
   * The fourth line of the address, or region
   */
  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: ListCommerceCustomersLinksSourceModifiedDateAddressTypeEnum;
}

/**
 * Represents a customer who has placed an order in the commerce system"
 */
export class ListCommerceCustomersLinksSourceModifiedDate extends SpeakeasyBase {
  /**
   * Addresses of the customer
   */
  @SpeakeasyMetadata({
    elemType: ListCommerceCustomersLinksSourceModifiedDateAddress,
  })
  @Expose({ name: "addresses" })
  @Type(() => ListCommerceCustomersLinksSourceModifiedDateAddress)
  addresses?: ListCommerceCustomersLinksSourceModifiedDateAddress[];

  /**
   * The date the entity was created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  createdDate?: string;

  /**
   * Name of the customer
   */
  @SpeakeasyMetadata()
  @Expose({ name: "customerName" })
  customerName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "defaultCurrency" })
  defaultCurrency?: string;

  /**
   * Email address of the customer
   */
  @SpeakeasyMetadata()
  @Expose({ name: "emailAddress" })
  emailAddress?: string;

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
   * Any additional information about the customer
   */
  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  /**
   * A phone number
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;
}

/**
 * Codat's Paging Model
 */
export class ListCommerceCustomersLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCommerceCustomersLinksLinks)
  links: ListCommerceCustomersLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListCommerceCustomersLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListCommerceCustomersLinksSourceModifiedDate)
  results?: ListCommerceCustomersLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCommerceCustomersResponse extends SpeakeasyBase {
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
  links?: ListCommerceCustomersLinks;
}
