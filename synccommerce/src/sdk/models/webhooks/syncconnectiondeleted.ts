import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class SyncConnectionDeletedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}

// SyncConnectionDeletedAccountCategoriesUpdatedWebhook
/**
 * Webhook request body for account categories updated.
 **/
export class SyncConnectionDeletedAccountCategoriesUpdatedWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alertId" })
  alertId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "clientId" })
  clientId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "clientName" })
  clientName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionId" })
  dataConnectionId?: string;

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

export class SyncConnectionDeletedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SyncConnectionDeletedAccountCategoriesUpdatedWebhook;
}
