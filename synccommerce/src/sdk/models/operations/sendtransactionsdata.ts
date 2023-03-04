import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class SendTransactionsDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}
export enum SendTransactionsDataRequestBodyTransactionsTransactionSourceRefTypeEnum {
    Unknown = "Unknown",
    Fee = "Fee",
    Order = "Order",
    Payment = "Payment",
    ServiceCharge = "ServiceCharge"
}

export class SendTransactionsDataRequestBodyTransactionsTransactionSourceRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: SendTransactionsDataRequestBodyTransactionsTransactionSourceRefTypeEnum;
}
export enum SendTransactionsDataRequestBodyTransactionsTypeEnum {
    Unknown = "Unknown",
    Payment = "Payment",
    Refund = "Refund",
    Payout = "Payout",
    FailedPayout = "FailedPayout",
    Transfer = "Transfer",
    PaymentFee = "PaymentFee",
    PaymentFeeRefund = "PaymentFeeRefund"
}

export class SendTransactionsDataRequestBodyTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "subType" })
  subType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "transactionSourceRef" })
  @Type(() => SendTransactionsDataRequestBodyTransactionsTransactionSourceRef)
  transactionSourceRef?: SendTransactionsDataRequestBodyTransactionsTransactionSourceRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: SendTransactionsDataRequestBodyTransactionsTypeEnum;
}

export class SendTransactionsDataRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ elemType: SendTransactionsDataRequestBodyTransactions })
  @Expose({ name: "transactions" })
  @Type(() => SendTransactionsDataRequestBodyTransactions)
  transactions?: SendTransactionsDataRequestBodyTransactions[];
}

export class SendTransactionsDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendTransactionsDataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SendTransactionsDataRequestBody;
}
export enum SendTransactionsData200ApplicationJSONDataTransactionsTransactionSourceRefTypeEnum {
    Unknown = "Unknown",
    Fee = "Fee",
    Order = "Order",
    Payment = "Payment",
    ServiceCharge = "ServiceCharge"
}

export class SendTransactionsData200ApplicationJSONDataTransactionsTransactionSourceRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: SendTransactionsData200ApplicationJSONDataTransactionsTransactionSourceRefTypeEnum;
}
export enum SendTransactionsData200ApplicationJSONDataTransactionsTypeEnum {
    Unknown = "Unknown",
    Payment = "Payment",
    Refund = "Refund",
    Payout = "Payout",
    FailedPayout = "FailedPayout",
    Transfer = "Transfer",
    PaymentFee = "PaymentFee",
    PaymentFeeRefund = "PaymentFeeRefund"
}

export class SendTransactionsData200ApplicationJSONDataTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "subType" })
  subType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "transactionSourceRef" })
  @Type(() => SendTransactionsData200ApplicationJSONDataTransactionsTransactionSourceRef)
  transactionSourceRef?: SendTransactionsData200ApplicationJSONDataTransactionsTransactionSourceRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: SendTransactionsData200ApplicationJSONDataTransactionsTypeEnum;
}

export class SendTransactionsData200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ elemType: SendTransactionsData200ApplicationJSONDataTransactions })
  @Expose({ name: "transactions" })
  @Type(() => SendTransactionsData200ApplicationJSONDataTransactions)
  transactions?: SendTransactionsData200ApplicationJSONDataTransactions[];
}

export class SendTransactionsData200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => SendTransactionsData200ApplicationJSONData)
  data?: SendTransactionsData200ApplicationJSONData;

  @SpeakeasyMetadata()
  @Expose({ name: "datasetId" })
  datasetId?: string;
}

export class SendTransactionsDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  sendTransactionsData200ApplicationJSONObject?: SendTransactionsData200ApplicationJSON;
}