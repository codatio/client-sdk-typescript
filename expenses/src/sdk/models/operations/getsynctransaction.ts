import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetSyncTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=syncId",
  })
  syncId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=transactionId",
  })
  transactionId: string;
}
export enum GetSyncTransaction200ApplicationJSONIntegrationTypeEnum {
  Expenses = "expenses",
  Bankfeeds = "bankfeeds",
}
export enum GetSyncTransaction200ApplicationJSONStatusEnum {
  Unknown = "Unknown",
  Pending = "Pending",
  ValidationError = "ValidationError",
  Completed = "Completed",
  PushError = "PushError",
}

export class GetSyncTransaction200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "integrationType" })
  integrationType?: GetSyncTransaction200ApplicationJSONIntegrationTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetSyncTransaction200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "transactionId" })
  transactionId?: string;
}

export class GetSyncTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata({ elemType: GetSyncTransaction200ApplicationJSON })
  getSyncTransaction200ApplicationJSONObjects?: GetSyncTransaction200ApplicationJSON[];
}
