import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class DataSyncCompletedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}

export class DataSyncCompletedDataSyncCompleteWebhookData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "datasetId" })
  datasetId?: string;
}

// DataSyncCompletedDataSyncCompleteWebhook
/**
 * Webhook request body to notify the completion of a data sync.
 **/
export class DataSyncCompletedDataSyncCompleteWebhook extends SpeakeasyBase {
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
  @Type(() => DataSyncCompletedDataSyncCompleteWebhookData)
  data?: DataSyncCompletedDataSyncCompleteWebhookData;

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
