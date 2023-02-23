import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SendOrdersDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class SendOrdersDataRequestBodyOrdersCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class SendOrdersDataRequestBodyOrdersLocationRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class SendOrdersDataRequestBodyOrdersOrderLineItemsDiscountAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

export class SendOrdersDataRequestBodyOrdersOrderLineItemsProductRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class SendOrdersDataRequestBodyOrdersOrderLineItemsProductVariantRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class SendOrdersDataRequestBodyOrdersOrderLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discountAllocations", elemType: SendOrdersDataRequestBodyOrdersOrderLineItemsDiscountAllocations })
  discountAllocations?: SendOrdersDataRequestBodyOrdersOrderLineItemsDiscountAllocations[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=productRef" })
  productRef?: SendOrdersDataRequestBodyOrdersOrderLineItemsProductRef;

  @SpeakeasyMetadata({ data: "json, name=productVariantRef" })
  productVariantRef?: SendOrdersDataRequestBodyOrdersOrderLineItemsProductVariantRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;
}
export enum SendOrdersDataRequestBodyOrdersPaymentsStatusEnum {
    Unknown = "Unknown",
    Pending = "Pending",
    Authorized = "Authorized",
    Paid = "Paid",
    Failed = "Failed",
    Cancelled = "Cancelled"
}
export enum SendOrdersDataRequestBodyOrdersPaymentsTypeEnum {
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

export class SendOrdersDataRequestBodyOrdersPayments extends SpeakeasyBase {
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
  status?: SendOrdersDataRequestBodyOrdersPaymentsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SendOrdersDataRequestBodyOrdersPaymentsTypeEnum;
}
export enum SendOrdersDataRequestBodyOrdersServiceChargesTypeEnum {
    Unknown = "Unknown",
    Generic = "Generic",
    Shipping = "Shipping",
    Overpayment = "Overpayment"
}

export class SendOrdersDataRequestBodyOrdersServiceCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SendOrdersDataRequestBodyOrdersServiceChargesTypeEnum;
}

export class SendOrdersDataRequestBodyOrders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closedDate" })
  closedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: SendOrdersDataRequestBodyOrdersCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=locationRef" })
  locationRef?: SendOrdersDataRequestBodyOrdersLocationRef;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: SendOrdersDataRequestBodyOrdersOrderLineItems })
  orderLineItems?: SendOrdersDataRequestBodyOrdersOrderLineItems[];

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=payments", elemType: SendOrdersDataRequestBodyOrdersPayments })
  payments?: SendOrdersDataRequestBodyOrdersPayments[];

  @SpeakeasyMetadata({ data: "json, name=serviceCharges", elemType: SendOrdersDataRequestBodyOrdersServiceCharges })
  serviceCharges?: SendOrdersDataRequestBodyOrdersServiceCharges[];

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalGratuity" })
  totalGratuity?: number;

  @SpeakeasyMetadata({ data: "json, name=totalRefund" })
  totalRefund?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;
}

export class SendOrdersDataRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=orders", elemType: SendOrdersDataRequestBodyOrders })
  orders?: SendOrdersDataRequestBodyOrders[];
}

export class SendOrdersDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendOrdersDataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SendOrdersDataRequestBody;
}

export class SendOrdersData200ApplicationJSONDataOrdersCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class SendOrdersData200ApplicationJSONDataOrdersLocationRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsDiscountAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

export class SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsProductRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsProductVariantRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class SendOrdersData200ApplicationJSONDataOrdersOrderLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discountAllocations", elemType: SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsDiscountAllocations })
  discountAllocations?: SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsDiscountAllocations[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=productRef" })
  productRef?: SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsProductRef;

  @SpeakeasyMetadata({ data: "json, name=productVariantRef" })
  productVariantRef?: SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsProductVariantRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;
}
export enum SendOrdersData200ApplicationJSONDataOrdersPaymentsStatusEnum {
    Unknown = "Unknown",
    Pending = "Pending",
    Authorized = "Authorized",
    Paid = "Paid",
    Failed = "Failed",
    Cancelled = "Cancelled"
}
export enum SendOrdersData200ApplicationJSONDataOrdersPaymentsTypeEnum {
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

export class SendOrdersData200ApplicationJSONDataOrdersPayments extends SpeakeasyBase {
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
  status?: SendOrdersData200ApplicationJSONDataOrdersPaymentsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SendOrdersData200ApplicationJSONDataOrdersPaymentsTypeEnum;
}
export enum SendOrdersData200ApplicationJSONDataOrdersServiceChargesTypeEnum {
    Unknown = "Unknown",
    Generic = "Generic",
    Shipping = "Shipping",
    Overpayment = "Overpayment"
}

export class SendOrdersData200ApplicationJSONDataOrdersServiceCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SendOrdersData200ApplicationJSONDataOrdersServiceChargesTypeEnum;
}

export class SendOrdersData200ApplicationJSONDataOrders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closedDate" })
  closedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: SendOrdersData200ApplicationJSONDataOrdersCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=locationRef" })
  locationRef?: SendOrdersData200ApplicationJSONDataOrdersLocationRef;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: SendOrdersData200ApplicationJSONDataOrdersOrderLineItems })
  orderLineItems?: SendOrdersData200ApplicationJSONDataOrdersOrderLineItems[];

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=payments", elemType: SendOrdersData200ApplicationJSONDataOrdersPayments })
  payments?: SendOrdersData200ApplicationJSONDataOrdersPayments[];

  @SpeakeasyMetadata({ data: "json, name=serviceCharges", elemType: SendOrdersData200ApplicationJSONDataOrdersServiceCharges })
  serviceCharges?: SendOrdersData200ApplicationJSONDataOrdersServiceCharges[];

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalGratuity" })
  totalGratuity?: number;

  @SpeakeasyMetadata({ data: "json, name=totalRefund" })
  totalRefund?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;
}

export class SendOrdersData200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=orders", elemType: SendOrdersData200ApplicationJSONDataOrders })
  orders?: SendOrdersData200ApplicationJSONDataOrders[];
}

export class SendOrdersData200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: SendOrdersData200ApplicationJSONData;

  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;
}

export class SendOrdersDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendOrdersData200ApplicationJSONObject?: SendOrdersData200ApplicationJSON;
}