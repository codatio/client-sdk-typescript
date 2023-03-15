import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListCommerceDisputesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class ListCommerceDisputesQueryParams extends SpeakeasyBase {
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

export class ListCommerceDisputesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCommerceDisputesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCommerceDisputesQueryParams;
}

export class ListCommerceDisputesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommerceDisputesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceDisputesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceDisputesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommerceDisputesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCommerceDisputesLinksLinksCurrent)
  current: ListCommerceDisputesLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCommerceDisputesLinksLinksNext)
  next?: ListCommerceDisputesLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCommerceDisputesLinksLinksPrevious)
  previous?: ListCommerceDisputesLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCommerceDisputesLinksLinksSelf)
  self: ListCommerceDisputesLinksLinksSelf;
}

export class ListCommerceDisputesLinksSourceModifiedDateRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: any;
}
export enum ListCommerceDisputesLinksSourceModifiedDateStatusEnum {
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

export class ListCommerceDisputesLinksSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "disputedTransactions" })
  @Type(() => ListCommerceDisputesLinksSourceModifiedDateRecordRef)
  disputedTransactions?: ListCommerceDisputesLinksSourceModifiedDateRecordRef;

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
  @Expose({ name: "reason" })
  reason?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ListCommerceDisputesLinksSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

// ListCommerceDisputesLinks
/**
 * Codat's Paging Model
 **/
export class ListCommerceDisputesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCommerceDisputesLinksLinks)
  links: ListCommerceDisputesLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListCommerceDisputesLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListCommerceDisputesLinksSourceModifiedDate)
  results?: ListCommerceDisputesLinksSourceModifiedDate[];

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

  @SpeakeasyMetadata()
  links?: ListCommerceDisputesLinks;
}
