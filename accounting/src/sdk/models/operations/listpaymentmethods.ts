import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class ListPaymentMethodsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ListPaymentMethodsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListPaymentMethodsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class ListPaymentMethodsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListPaymentMethodsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListPaymentMethodsQueryParams;

  @SpeakeasyMetadata()
  security: ListPaymentMethodsSecurity;
}

export class ListPaymentMethodsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListPaymentMethodsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListPaymentMethodsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListPaymentMethodsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListPaymentMethodsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListPaymentMethodsLinksLinksCurrent)
  current: ListPaymentMethodsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListPaymentMethodsLinksLinksNext)
  next?: ListPaymentMethodsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListPaymentMethodsLinksLinksPrevious)
  previous?: ListPaymentMethodsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListPaymentMethodsLinksLinksSelf)
  self: ListPaymentMethodsLinksLinksSelf;
}

export class ListPaymentMethodsLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum ListPaymentMethodsLinksSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}
export enum ListPaymentMethodsLinksSourceModifiedDateTypeEnum {
    Unknown = "Unknown",
    Cash = "Cash",
    Check = "Check",
    CreditCard = "CreditCard",
    DebitCard = "DebitCard",
    BankTransfer = "BankTransfer",
    Other = "Other"
}

// ListPaymentMethodsLinksSourceModifiedDate
/** 
 * > View the coverage for payment methods in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=paymentMethods" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * A Payment Method represents the payment method(s) used to pay a Bill. Payment Methods are referenced on [Bill Payments](https://docs.codat.io/accounting-api#/schemas/BillPayment) and [Payments](https://docs.codat.io/accounting-api#/schemas/Payment).
 * 
 * From the Payment Methods endpoints you can retrieve:
 * 
 * - A list of all the Payment Methods used by a company: `GET/companies/{companyId}/data/paymentMethods`.
 * - The details of an individual Payment Method:  
 *   `GET /companies/{companyId}/data/paymentMethods/{paymentMethodId}`.
**/
export class ListPaymentMethodsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ListPaymentMethodsLinksSourceModifiedDateMetadata)
  metadata?: ListPaymentMethodsLinksSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ListPaymentMethodsLinksSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: ListPaymentMethodsLinksSourceModifiedDateTypeEnum;
}

// ListPaymentMethodsLinks
/** 
 * Codat's Paging Model
**/
export class ListPaymentMethodsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListPaymentMethodsLinksLinks)
  links: ListPaymentMethodsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListPaymentMethodsLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListPaymentMethodsLinksSourceModifiedDate)
  results?: ListPaymentMethodsLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListPaymentMethodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListPaymentMethodsLinks;
}