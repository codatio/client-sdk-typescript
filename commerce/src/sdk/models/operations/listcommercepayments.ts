import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListCommercePaymentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class ListCommercePaymentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=orderBy",
  })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListCommercePaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCommercePaymentsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCommercePaymentsQueryParams;
}

export class ListCommercePaymentsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommercePaymentsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommercePaymentsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommercePaymentsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommercePaymentsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCommercePaymentsLinksLinksCurrent)
  current: ListCommercePaymentsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCommercePaymentsLinksLinksNext)
  next?: ListCommercePaymentsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCommercePaymentsLinksLinksPrevious)
  previous?: ListCommercePaymentsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCommercePaymentsLinksLinksSelf)
  self: ListCommercePaymentsLinksLinksSelf;
}

// ListCommercePaymentsLinksSourceModifiedDateNameRef
/**
 * The payment method the payment is linked to in the commerce platform.
 **/
export class ListCommercePaymentsLinksSourceModifiedDateNameRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}
export enum ListCommercePaymentsLinksSourceModifiedDateStatusEnum {
  Pending = "Pending",
  Authorized = "Authorized",
  Paid = "Paid",
  Failed = "Failed",
  Cancelled = "Cancelled",
  Unknown = "Unknown",
}

// ListCommercePaymentsLinksSourceModifiedDate
/**
 * A payment made in a commerce platform
 **/
export class ListCommercePaymentsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dueDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "paymentMethodRef" })
  @Type(() => ListCommercePaymentsLinksSourceModifiedDateNameRef)
  paymentMethodRef?: ListCommercePaymentsLinksSourceModifiedDateNameRef;

  @SpeakeasyMetadata()
  @Expose({ name: "paymentProvider" })
  paymentProvider?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ListCommercePaymentsLinksSourceModifiedDateStatusEnum;
}

// ListCommercePaymentsLinks
/**
 * Codat's Paging Model
 **/
export class ListCommercePaymentsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCommercePaymentsLinksLinks)
  links: ListCommercePaymentsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListCommercePaymentsLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListCommercePaymentsLinksSourceModifiedDate)
  results?: ListCommercePaymentsLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCommercePaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListCommercePaymentsLinks;
}
