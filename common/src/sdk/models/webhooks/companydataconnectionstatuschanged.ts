import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CompanyDataConnectionStatusChangedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
export enum CompanyDataConnectionStatusChangedCompanyDataConnectionStatusChangedWebhookDataDataConnectionStatusEnum {
  PendingAuth = "PendingAuth",
  Linked = "Linked",
  Unlinked = "Unlinked",
  Deauthorized = "Deauthorized",
}

export class CompanyDataConnectionStatusChangedCompanyDataConnectionStatusChangedWebhookData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionId" })
  dataConnectionId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "newStatus" })
  newStatus?: CompanyDataConnectionStatusChangedCompanyDataConnectionStatusChangedWebhookDataDataConnectionStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "oldStatus" })
  oldStatus?: CompanyDataConnectionStatusChangedCompanyDataConnectionStatusChangedWebhookDataDataConnectionStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "platformKey" })
  platformKey?: string;
}

// CompanyDataConnectionStatusChangedCompanyDataConnectionStatusChangedWebhook
/**
 * Webhook request body for a company's data connection status changed.
 **/
export class CompanyDataConnectionStatusChangedCompanyDataConnectionStatusChangedWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alertId" })
  alertId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(
    () =>
      CompanyDataConnectionStatusChangedCompanyDataConnectionStatusChangedWebhookData
  )
  data?: CompanyDataConnectionStatusChangedCompanyDataConnectionStatusChangedWebhookData;

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

export class CompanyDataConnectionStatusChangedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CompanyDataConnectionStatusChangedCompanyDataConnectionStatusChangedWebhook;
}
