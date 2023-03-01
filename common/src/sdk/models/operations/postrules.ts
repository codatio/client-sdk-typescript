import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PostRulesWebhookNotifiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}

// PostRulesWebhook
/** 
 * Configuration to alert to a url or list of email addresses based on the given type / condition.
**/
export class PostRulesWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=notifiers" })
  notifiers: PostRulesWebhookNotifiers;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export class PostRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostRulesWebhook;
}

export class PostRules401ApplicationJSON extends SpeakeasyBase {
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

export class PostRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: PostRulesWebhook;

  @SpeakeasyMetadata()
  postRules401ApplicationJSONObject?: PostRules401ApplicationJSON;
}