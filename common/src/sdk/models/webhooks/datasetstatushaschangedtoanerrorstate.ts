import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class DatasetStatusHasChangedToAnErrorStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}

export class DatasetStatusHasChangedToAnErrorStateDatasetDataErrorWebhookData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "datasetStatus" })
  datasetStatus?: string;
}

// DatasetStatusHasChangedToAnErrorStateDatasetDataErrorWebhook
/** 
 * Webhook request body to notify that a data synchronization has completed.
**/
export class DatasetStatusHasChangedToAnErrorStateDatasetDataErrorWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alertId" })
  alertId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => DatasetStatusHasChangedToAnErrorStateDatasetDataErrorWebhookData)
  data?: DatasetStatusHasChangedToAnErrorStateDatasetDataErrorWebhookData;

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

export class DatasetStatusHasChangedToAnErrorStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DatasetStatusHasChangedToAnErrorStateDatasetDataErrorWebhook;
}