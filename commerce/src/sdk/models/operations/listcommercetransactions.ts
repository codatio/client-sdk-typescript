import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListCommerceTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class ListCommerceTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListCommerceTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCommerceTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCommerceTransactionsQueryParams;
}

export class ListCommerceTransactionsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommerceTransactionsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommerceTransactionsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}

export class ListCommerceTransactionsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}

export class ListCommerceTransactionsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current: ListCommerceTransactionsLinksLinksCurrent;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: ListCommerceTransactionsLinksLinksNext;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: ListCommerceTransactionsLinksLinksPrevious;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListCommerceTransactionsLinksLinksSelf;
}

export class ListCommerceTransactionsLinksSourceModifiedDateRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: any;
}
export enum ListCommerceTransactionsLinksSourceModifiedDateTypeEnum {
    Payment = "Payment",
    Refund = "Refund",
    Payout = "Payout",
    FailedPayout = "FailedPayout",
    Transfer = "Transfer",
    PaymentFee = "PaymentFee",
    PaymentFeeRefund = "PaymentFeeRefund",
    Unknown = "Unknown"
}

// ListCommerceTransactionsLinksSourceModifiedDate
/** 
 * A financial transaction recorded in the commerce or point of sale system
**/
export class ListCommerceTransactionsLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceCreatedDate" })
  sourceCreatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subType" })
  subType?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionSourceRef" })
  transactionSourceRef?: ListCommerceTransactionsLinksSourceModifiedDateRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListCommerceTransactionsLinksSourceModifiedDateTypeEnum;
}

// ListCommerceTransactionsLinks
/** 
 * Codat's Paging Model
**/
export class ListCommerceTransactionsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListCommerceTransactionsLinksLinks;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ListCommerceTransactionsLinksSourceModifiedDate })
  results?: ListCommerceTransactionsLinksSourceModifiedDate[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}

export class ListCommerceTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  links?: ListCommerceTransactionsLinks;
}