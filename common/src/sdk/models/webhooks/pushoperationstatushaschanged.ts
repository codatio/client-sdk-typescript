import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PushOperationStatusHasChangedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}

export class PushOperationStatusHasChangedPushOperationStatusChangedWebhookData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}

// PushOperationStatusHasChangedPushOperationStatusChangedWebhook
/** 
 * Webhook request body for a push operation status change.
**/
export class PushOperationStatusHasChangedPushOperationStatusChangedWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alertId" })
  alertId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => PushOperationStatusHasChangedPushOperationStatusChangedWebhookData)
  data?: PushOperationStatusHasChangedPushOperationStatusChangedWebhookData;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ruleId" })
  ruleId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ruleType" })
  ruleType?: string;
}

export class PushOperationStatusHasChangedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PushOperationStatusHasChangedPushOperationStatusChangedWebhook;
}