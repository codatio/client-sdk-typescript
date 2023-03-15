import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CreateRuleWebhookNotifiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "emails" })
  emails?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "webhook" })
  webhook?: string;
}

// CreateRuleWebhook
/**
 * Configuration to alert to a url or list of email addresses based on the given type / condition.
 **/
export class CreateRuleWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "notifiers" })
  @Type(() => CreateRuleWebhookNotifiers)
  notifiers: CreateRuleWebhookNotifiers;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

export class CreateRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateRuleWebhook;
}

export class CreateRule401ApplicationJSON extends SpeakeasyBase {
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

export class CreateRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  webhook?: CreateRuleWebhook;

  @SpeakeasyMetadata()
  createRule401ApplicationJSONObject?: CreateRule401ApplicationJSON;
}
