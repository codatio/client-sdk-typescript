import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class SendPaymentsDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}
export enum SendPaymentsDataRequestBodyPaymentsStatusEnum {
    Unknown = "Unknown",
    Pending = "Pending",
    Authorized = "Authorized",
    Paid = "Paid",
    Failed = "Failed",
    Cancelled = "Cancelled"
}
export enum SendPaymentsDataRequestBodyPaymentsTypeEnum {
    Unknown = "Unknown",
    Cash = "Cash",
    Card = "Card",
    Invoice = "Invoice",
    OnlineCard = "OnlineCard",
    Swish = "Swish",
    Vipps = "Vipps",
    Mobile = "Mobile",
    StoreCredit = "StoreCredit",
    Paypal = "Paypal",
    Custom = "Custom",
    Prepaid = "Prepaid"
}

export class SendPaymentsDataRequestBodyPayments extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dueDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "paymentProvider" })
  paymentProvider?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: SendPaymentsDataRequestBodyPaymentsStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: SendPaymentsDataRequestBodyPaymentsTypeEnum;
}

export class SendPaymentsDataRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ elemType: SendPaymentsDataRequestBodyPayments })
  @Expose({ name: "payments" })
  @Type(() => SendPaymentsDataRequestBodyPayments)
  payments?: SendPaymentsDataRequestBodyPayments[];
}

export class SendPaymentsDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendPaymentsDataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SendPaymentsDataRequestBody;
}
export enum SendPaymentsData200ApplicationJSONDataPaymentsStatusEnum {
    Unknown = "Unknown",
    Pending = "Pending",
    Authorized = "Authorized",
    Paid = "Paid",
    Failed = "Failed",
    Cancelled = "Cancelled"
}
export enum SendPaymentsData200ApplicationJSONDataPaymentsTypeEnum {
    Unknown = "Unknown",
    Cash = "Cash",
    Card = "Card",
    Invoice = "Invoice",
    OnlineCard = "OnlineCard",
    Swish = "Swish",
    Vipps = "Vipps",
    Mobile = "Mobile",
    StoreCredit = "StoreCredit",
    Paypal = "Paypal",
    Custom = "Custom",
    Prepaid = "Prepaid"
}

export class SendPaymentsData200ApplicationJSONDataPayments extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dueDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "paymentProvider" })
  paymentProvider?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: SendPaymentsData200ApplicationJSONDataPaymentsStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: SendPaymentsData200ApplicationJSONDataPaymentsTypeEnum;
}

export class SendPaymentsData200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ elemType: SendPaymentsData200ApplicationJSONDataPayments })
  @Expose({ name: "payments" })
  @Type(() => SendPaymentsData200ApplicationJSONDataPayments)
  payments?: SendPaymentsData200ApplicationJSONDataPayments[];
}

export class SendPaymentsData200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => SendPaymentsData200ApplicationJSONData)
  data?: SendPaymentsData200ApplicationJSONData;

  @SpeakeasyMetadata()
  @Expose({ name: "datasetId" })
  datasetId?: string;
}

export class SendPaymentsDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  sendPaymentsData200ApplicationJSONObject?: SendPaymentsData200ApplicationJSON;
}