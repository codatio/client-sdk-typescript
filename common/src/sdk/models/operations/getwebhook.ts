import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ruleId",
  })
  ruleId: string;
}

export class GetWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWebhookPathParams;
}

export class GetWebhook404ApplicationJSON extends SpeakeasyBase {
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

export class GetWebhook401ApplicationJSON extends SpeakeasyBase {
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

// GetWebhookWebhook
/**
 * Configuration to alert to a url or list of email addresses based on the given type / condition.
 **/
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

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  webhook?: GetWebhookWebhook;

  @SpeakeasyMetadata()
  getWebhook401ApplicationJSONObject?: GetWebhook401ApplicationJSON;

  @SpeakeasyMetadata()
  getWebhook404ApplicationJSONObject?: GetWebhook404ApplicationJSON;
}
