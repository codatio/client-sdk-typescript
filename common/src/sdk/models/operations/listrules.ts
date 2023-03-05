import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class ListRulesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListRulesQueryParams;
}

export class ListRules401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "service" })
  service?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: number;
}

export class ListRules400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "service" })
  service?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: number;
}

export class ListRulesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListRulesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListRulesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListRulesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListRulesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListRulesLinksLinksCurrent)
  current: ListRulesLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListRulesLinksLinksNext)
  next?: ListRulesLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListRulesLinksLinksPrevious)
  previous?: ListRulesLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListRulesLinksLinksSelf)
  self: ListRulesLinksLinksSelf;
}

export class ListRulesLinksWebhookNotifiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "emails" })
  emails?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "webhook" })
  webhook?: string;
}

// ListRulesLinksWebhook
/** 
 * Configuration to alert to a url or list of email addresses based on the given type / condition.
**/
export class ListRulesLinksWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "notifiers" })
  @Type(() => ListRulesLinksWebhookNotifiers)
  notifiers: ListRulesLinksWebhookNotifiers;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

// ListRulesLinks
/** 
 * Codat's Paging Model
**/
export class ListRulesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListRulesLinksLinks)
  links: ListRulesLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListRulesLinksWebhook })
  @Expose({ name: "results" })
  @Type(() => ListRulesLinksWebhook)
  results?: ListRulesLinksWebhook[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  links?: ListRulesLinks;

  @SpeakeasyMetadata()
  listRules400ApplicationJSONObject?: ListRules400ApplicationJSON;

  @SpeakeasyMetadata()
  listRules401ApplicationJSONObject?: ListRules401ApplicationJSON;
}