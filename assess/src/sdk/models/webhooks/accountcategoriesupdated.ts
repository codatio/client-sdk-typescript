import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class AccountCategoriesUpdatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}

export class AccountCategoriesUpdatedAccountCategoriesUpdatedWebhookData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;
}

// AccountCategoriesUpdatedAccountCategoriesUpdatedWebhook
/**
 * Webhook request body for account categories updated.
 **/
export class AccountCategoriesUpdatedAccountCategoriesUpdatedWebhook extends SpeakeasyBase {
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
  @Expose({ name: "data" })
  @Type(() => AccountCategoriesUpdatedAccountCategoriesUpdatedWebhookData)
  data?: AccountCategoriesUpdatedAccountCategoriesUpdatedWebhookData;

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
