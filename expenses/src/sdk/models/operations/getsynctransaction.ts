import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetSyncTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=syncId" })
  syncId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}

export class GetSyncTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSyncTransactionPathParams;
}
export enum GetSyncTransaction200TextJSONIntegrationTypeEnum {
    Expenses = "expenses",
    Bankfeeds = "bankfeeds"
}
export enum GetSyncTransaction200TextJSONStatusEnum {
    Unknown = "Unknown",
    Pending = "Pending",
    ValidationError = "ValidationError",
    Completed = "Completed",
    PushError = "PushError"
}

export class GetSyncTransaction200TextJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrationType" })
  integrationType?: GetSyncTransaction200TextJSONIntegrationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetSyncTransaction200TextJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
export enum GetSyncTransaction200ApplicationJSONIntegrationTypeEnum {
    Expenses = "expenses",
    Bankfeeds = "bankfeeds"
}
export enum GetSyncTransaction200ApplicationJSONStatusEnum {
    Unknown = "Unknown",
    Pending = "Pending",
    ValidationError = "ValidationError",
    Completed = "Completed",
    PushError = "PushError"
}

export class GetSyncTransaction200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrationType" })
  integrationType?: GetSyncTransaction200ApplicationJSONIntegrationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetSyncTransaction200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}

export class GetSyncTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetSyncTransaction200ApplicationJSON })
  getSyncTransaction200ApplicationJSONObjects?: GetSyncTransaction200ApplicationJSON[];

  @SpeakeasyMetadata({ elemType: GetSyncTransaction200TextJSON })
  getSyncTransaction200TextJSONObjects?: GetSyncTransaction200TextJSON[];

  @SpeakeasyMetadata()
  getSyncTransaction200TextPlainArray?: string;
}