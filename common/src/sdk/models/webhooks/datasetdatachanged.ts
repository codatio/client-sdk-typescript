import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class DatasetDataChangedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}

export class DatasetDataChangedDatasetDataChangedWebhookData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "datasetId" })
  datasetId?: string;
}

// DatasetDataChangedDatasetDataChangedWebhook
/** 
 * Webhook request body to notify that a data synchronization has completed.
**/
export class DatasetDataChangedDatasetDataChangedWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alertId" })
  alertId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => DatasetDataChangedDatasetDataChangedWebhookData)
  data?: DatasetDataChangedDatasetDataChangedWebhookData;

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

export class DatasetDataChangedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DatasetDataChangedDatasetDataChangedWebhook;
}