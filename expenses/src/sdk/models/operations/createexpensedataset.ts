import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateExpenseDatasetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class CreateExpenseDatasetRequestBodyItemsLinesRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export class CreateExpenseDatasetRequestBodyItemsLines extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef: CreateExpenseDatasetRequestBodyItemsLinesRecordRef;

  @SpeakeasyMetadata({ data: "json, name=netAmount" })
  netAmount: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: CreateExpenseDatasetRequestBodyItemsLinesRecordRef;

  @SpeakeasyMetadata({ data: "json, name=trackingRefs", elemType: CreateExpenseDatasetRequestBodyItemsLinesRecordRef })
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
    AdjustmentOut = "AdjustmentOut"
}

export class CreateExpenseDatasetRequestBodyItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate: Date;

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: CreateExpenseDatasetRequestBodyItemsLines })
  lines?: CreateExpenseDatasetRequestBodyItemsLines[];

  @SpeakeasyMetadata({ data: "json, name=merchantName" })
  merchantName?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateExpenseDatasetRequestBodyItemsTypeEnum;
}

export class CreateExpenseDatasetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: CreateExpenseDatasetRequestBodyItems })
  items?: CreateExpenseDatasetRequestBodyItems[];
}

export class CreateExpenseDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateExpenseDatasetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateExpenseDatasetRequestBody;
}

export class CreateExpenseDataset200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;
}

export class CreateExpenseDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createExpenseDataset200ApplicationJSONObject?: CreateExpenseDataset200ApplicationJSON;
}