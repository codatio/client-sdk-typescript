import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=paymentProvider" })
  paymentProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SendPaymentsDataRequestBodyPaymentsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SendPaymentsDataRequestBodyPaymentsTypeEnum;
}

export class SendPaymentsDataRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=payments", elemType: SendPaymentsDataRequestBodyPayments })
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
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=paymentProvider" })
  paymentProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SendPaymentsData200ApplicationJSONDataPaymentsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SendPaymentsData200ApplicationJSONDataPaymentsTypeEnum;
}

export class SendPaymentsData200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=payments", elemType: SendPaymentsData200ApplicationJSONDataPayments })
  payments?: SendPaymentsData200ApplicationJSONDataPayments[];
}

export class SendPaymentsData200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: SendPaymentsData200ApplicationJSONData;

  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;
}

export class SendPaymentsDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendPaymentsData200ApplicationJSONObject?: SendPaymentsData200ApplicationJSON;
}