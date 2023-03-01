import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}

export class GetWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWebhookPathParams;
}

export class GetWebhook404ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata({ data: "json, name=correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata({ data: "json, name=detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}

export class GetWebhook401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata({ data: "json, name=correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata({ data: "json, name=detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}

export class GetWebhookWebhookNotifiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}

// GetWebhookWebhook
/** 
 * Configuration to alert to a url or list of email addresses based on the given type / condition.
**/
export class GetWebhookWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=notifiers" })
  notifiers: GetWebhookWebhookNotifiers;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export class GetWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: GetWebhookWebhook;

  @SpeakeasyMetadata()
  getWebhook401ApplicationJSONObject?: GetWebhook401ApplicationJSON;

  @SpeakeasyMetadata()
  getWebhook404ApplicationJSONObject?: GetWebhook404ApplicationJSON;
}