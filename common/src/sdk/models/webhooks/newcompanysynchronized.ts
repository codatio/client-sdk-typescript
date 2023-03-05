import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class NewCompanySynchronizedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}

// NewCompanySynchronizedNewCompanySynchronizedWebhook
/** 
 * Webhook request body to notify that a new company has successfully synchronized at least one dataType for the first time.
**/
export class NewCompanySynchronizedNewCompanySynchronizedWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alertId" })
  alertId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

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

export class NewCompanySynchronizedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: NewCompanySynchronizedNewCompanySynchronizedWebhook;
}