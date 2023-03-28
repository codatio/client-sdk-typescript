/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetWebhookRequest extends SpeakeasyBase {
  /**
   * Unique ID of the webhook or rule.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ruleId",
  })
  ruleId: string;
}

/**
 * One or more of the resources you referenced could not be found.
 *
 * @remarks
 * This might be because your company or data connection id is wrong, or was already deleted.
 */
export class GetWebhookNotFound extends SpeakeasyBase {
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

/**
 * Your API request was not properly authorized.
 */
export class GetWebhookUnauthorized extends SpeakeasyBase {
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

export class GetWebhookWebhookNotifiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "emails" })
  emails?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "webhook" })
  webhook?: string;
}

/**
 * Configuration to alert to a url or list of email addresses based on the given type / condition.
 */
export class GetWebhookWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "notifiers" })
  @Type(() => GetWebhookWebhookNotifiers)
  notifiers: GetWebhookWebhookNotifiers;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

export class GetWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * One or more of the resources you referenced could not be found.
   *
   * @remarks
   * This might be because your company or data connection id is wrong, or was already deleted.
   */
  @SpeakeasyMetadata()
  notFound?: GetWebhookNotFound;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Your API request was not properly authorized.
   */
  @SpeakeasyMetadata()
  unauthorized?: GetWebhookUnauthorized;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  webhook?: GetWebhookWebhook;
}
