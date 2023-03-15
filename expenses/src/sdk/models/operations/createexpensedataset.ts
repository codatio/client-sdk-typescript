import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class CreateExpenseDatasetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}

export class CreateExpenseDatasetRequestBodyItemsLinesRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class CreateExpenseDatasetRequestBodyItemsLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateExpenseDatasetRequestBodyItemsLinesRecordRef)
  accountRef: CreateExpenseDatasetRequestBodyItemsLinesRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "netAmount" })
  netAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => CreateExpenseDatasetRequestBodyItemsLinesRecordRef)
  taxRateRef?: CreateExpenseDatasetRequestBodyItemsLinesRecordRef;

  @SpeakeasyMetadata({
    elemType: CreateExpenseDatasetRequestBodyItemsLinesRecordRef,
  })
  @Expose({ name: "trackingRefs" })
  @Type(() => CreateExpenseDatasetRequestBodyItemsLinesRecordRef)
  trackingRefs?: CreateExpenseDatasetRequestBodyItemsLinesRecordRef[];
}
export enum CreateExpenseDatasetRequestBodyItemsTypeEnum {
  Payment = "Payment",
  Refund = "Refund",
  Reward = "Reward",
  Chargeback = "Chargeback",
  TransferIn = "TransferIn",
  TransferOut = "TransferOut",
  AdjustmentIn = "AdjustmentIn",
  AdjustmentOut = "AdjustmentOut",
}

export class CreateExpenseDatasetRequestBodyItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issueDate: Date;

  @SpeakeasyMetadata({ elemType: CreateExpenseDatasetRequestBodyItemsLines })
  @Expose({ name: "lines" })
  @Type(() => CreateExpenseDatasetRequestBodyItemsLines)
  lines?: CreateExpenseDatasetRequestBodyItemsLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "merchantName" })
  merchantName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "notes" })
  notes?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CreateExpenseDatasetRequestBodyItemsTypeEnum;
}

export class CreateExpenseDatasetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateExpenseDatasetRequestBodyItems })
  @Expose({ name: "items" })
  @Type(() => CreateExpenseDatasetRequestBodyItems)
  items?: CreateExpenseDatasetRequestBodyItems[];
}

export class CreateExpenseDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateExpenseDatasetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateExpenseDatasetRequestBody;
}

export class CreateExpenseDataset200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "datasetId" })
  datasetId?: string;
}

export class CreateExpenseDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createExpenseDataset200ApplicationJSONObject?: CreateExpenseDataset200ApplicationJSON;
}
