import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
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
  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subType" })
  subType?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionSourceRef" })
  transactionSourceRef?: SendTransactionsDataRequestBodyTransactionsTransactionSourceRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SendTransactionsDataRequestBodyTransactionsTypeEnum;
}

export class SendTransactionsDataRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: SendTransactionsDataRequestBodyTransactions })
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
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
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
  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subType" })
  subType?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionSourceRef" })
  transactionSourceRef?: SendTransactionsData200ApplicationJSONDataTransactionsTransactionSourceRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SendTransactionsData200ApplicationJSONDataTransactionsTypeEnum;
}

export class SendTransactionsData200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: SendTransactionsData200ApplicationJSONDataTransactions })
  transactions?: SendTransactionsData200ApplicationJSONDataTransactions[];
}

export class SendTransactionsData200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: SendTransactionsData200ApplicationJSONData;

  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;
}

export class SendTransactionsDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendTransactionsData200ApplicationJSONObject?: SendTransactionsData200ApplicationJSON;
}