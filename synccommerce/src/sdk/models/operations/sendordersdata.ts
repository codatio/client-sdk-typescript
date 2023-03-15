import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class SendOrdersDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}

export class SendOrdersDataRequestBodyOrdersCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class SendOrdersDataRequestBodyOrdersLocationRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class SendOrdersDataRequestBodyOrdersOrderLineItemsDiscountAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

export class SendOrdersDataRequestBodyOrdersOrderLineItemsProductRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class SendOrdersDataRequestBodyOrdersOrderLineItemsProductVariantRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class SendOrdersDataRequestBodyOrdersOrderLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: SendOrdersDataRequestBodyOrdersOrderLineItemsDiscountAllocations,
  })
  @Expose({ name: "discountAllocations" })
  @Type(() => SendOrdersDataRequestBodyOrdersOrderLineItemsDiscountAllocations)
  discountAllocations?: SendOrdersDataRequestBodyOrdersOrderLineItemsDiscountAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "productRef" })
  @Type(() => SendOrdersDataRequestBodyOrdersOrderLineItemsProductRef)
  productRef?: SendOrdersDataRequestBodyOrdersOrderLineItemsProductRef;

  @SpeakeasyMetadata()
  @Expose({ name: "productVariantRef" })
  @Type(() => SendOrdersDataRequestBodyOrdersOrderLineItemsProductVariantRef)
  productVariantRef?: SendOrdersDataRequestBodyOrdersOrderLineItemsProductVariantRef;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}
export enum SendOrdersDataRequestBodyOrdersPaymentsStatusEnum {
  Unknown = "Unknown",
  Pending = "Pending",
  Authorized = "Authorized",
  Paid = "Paid",
  Failed = "Failed",
  Cancelled = "Cancelled",
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
  Prepaid = "Prepaid",
}

export class SendOrdersDataRequestBodyOrdersPayments extends SpeakeasyBase {
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
  status?: SendOrdersDataRequestBodyOrdersPaymentsStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: SendOrdersDataRequestBodyOrdersPaymentsTypeEnum;
}
export enum SendOrdersDataRequestBodyOrdersServiceChargesTypeEnum {
  Unknown = "Unknown",
  Generic = "Generic",
  Shipping = "Shipping",
  Overpayment = "Overpayment",
}

export class SendOrdersDataRequestBodyOrdersServiceCharges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: SendOrdersDataRequestBodyOrdersServiceChargesTypeEnum;
}

export class SendOrdersDataRequestBodyOrders extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "closedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  closedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => SendOrdersDataRequestBodyOrdersCustomerRef)
  customerRef?: SendOrdersDataRequestBodyOrdersCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "locationRef" })
  @Type(() => SendOrdersDataRequestBodyOrdersLocationRef)
  locationRef?: SendOrdersDataRequestBodyOrdersLocationRef;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata({
    elemType: SendOrdersDataRequestBodyOrdersOrderLineItems,
  })
  @Expose({ name: "orderLineItems" })
  @Type(() => SendOrdersDataRequestBodyOrdersOrderLineItems)
  orderLineItems?: SendOrdersDataRequestBodyOrdersOrderLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ elemType: SendOrdersDataRequestBodyOrdersPayments })
  @Expose({ name: "payments" })
  @Type(() => SendOrdersDataRequestBodyOrdersPayments)
  payments?: SendOrdersDataRequestBodyOrdersPayments[];

  @SpeakeasyMetadata({
    elemType: SendOrdersDataRequestBodyOrdersServiceCharges,
  })
  @Expose({ name: "serviceCharges" })
  @Type(() => SendOrdersDataRequestBodyOrdersServiceCharges)
  serviceCharges?: SendOrdersDataRequestBodyOrdersServiceCharges[];

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalGratuity" })
  totalGratuity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalRefund" })
  totalRefund?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;
}

export class SendOrdersDataRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ elemType: SendOrdersDataRequestBodyOrders })
  @Expose({ name: "orders" })
  @Type(() => SendOrdersDataRequestBodyOrders)
  orders?: SendOrdersDataRequestBodyOrders[];
}

export class SendOrdersDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendOrdersDataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SendOrdersDataRequestBody;
}

export class SendOrdersData200ApplicationJSONDataOrdersCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class SendOrdersData200ApplicationJSONDataOrdersLocationRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsDiscountAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

export class SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsProductRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsProductVariantRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class SendOrdersData200ApplicationJSONDataOrdersOrderLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsDiscountAllocations,
  })
  @Expose({ name: "discountAllocations" })
  @Type(
    () =>
      SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsDiscountAllocations
  )
  discountAllocations?: SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsDiscountAllocations[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "productRef" })
  @Type(
    () => SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsProductRef
  )
  productRef?: SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsProductRef;

  @SpeakeasyMetadata()
  @Expose({ name: "productVariantRef" })
  @Type(
    () =>
      SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsProductVariantRef
  )
  productVariantRef?: SendOrdersData200ApplicationJSONDataOrdersOrderLineItemsProductVariantRef;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}
export enum SendOrdersData200ApplicationJSONDataOrdersPaymentsStatusEnum {
  Unknown = "Unknown",
  Pending = "Pending",
  Authorized = "Authorized",
  Paid = "Paid",
  Failed = "Failed",
  Cancelled = "Cancelled",
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
  Prepaid = "Prepaid",
}

export class SendOrdersData200ApplicationJSONDataOrdersPayments extends SpeakeasyBase {
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
  status?: SendOrdersData200ApplicationJSONDataOrdersPaymentsStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: SendOrdersData200ApplicationJSONDataOrdersPaymentsTypeEnum;
}
export enum SendOrdersData200ApplicationJSONDataOrdersServiceChargesTypeEnum {
  Unknown = "Unknown",
  Generic = "Generic",
  Shipping = "Shipping",
  Overpayment = "Overpayment",
}

export class SendOrdersData200ApplicationJSONDataOrdersServiceCharges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: SendOrdersData200ApplicationJSONDataOrdersServiceChargesTypeEnum;
}

export class SendOrdersData200ApplicationJSONDataOrders extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "closedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  closedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => SendOrdersData200ApplicationJSONDataOrdersCustomerRef)
  customerRef?: SendOrdersData200ApplicationJSONDataOrdersCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "locationRef" })
  @Type(() => SendOrdersData200ApplicationJSONDataOrdersLocationRef)
  locationRef?: SendOrdersData200ApplicationJSONDataOrdersLocationRef;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata({
    elemType: SendOrdersData200ApplicationJSONDataOrdersOrderLineItems,
  })
  @Expose({ name: "orderLineItems" })
  @Type(() => SendOrdersData200ApplicationJSONDataOrdersOrderLineItems)
  orderLineItems?: SendOrdersData200ApplicationJSONDataOrdersOrderLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({
    elemType: SendOrdersData200ApplicationJSONDataOrdersPayments,
  })
  @Expose({ name: "payments" })
  @Type(() => SendOrdersData200ApplicationJSONDataOrdersPayments)
  payments?: SendOrdersData200ApplicationJSONDataOrdersPayments[];

  @SpeakeasyMetadata({
    elemType: SendOrdersData200ApplicationJSONDataOrdersServiceCharges,
  })
  @Expose({ name: "serviceCharges" })
  @Type(() => SendOrdersData200ApplicationJSONDataOrdersServiceCharges)
  serviceCharges?: SendOrdersData200ApplicationJSONDataOrdersServiceCharges[];

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalGratuity" })
  totalGratuity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalRefund" })
  totalRefund?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;
}

export class SendOrdersData200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ elemType: SendOrdersData200ApplicationJSONDataOrders })
  @Expose({ name: "orders" })
  @Type(() => SendOrdersData200ApplicationJSONDataOrders)
  orders?: SendOrdersData200ApplicationJSONDataOrders[];
}

export class SendOrdersData200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => SendOrdersData200ApplicationJSONData)
  data?: SendOrdersData200ApplicationJSONData;

  @SpeakeasyMetadata()
  @Expose({ name: "datasetId" })
  datasetId?: string;
}

export class SendOrdersDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  sendOrdersData200ApplicationJSONObject?: SendOrdersData200ApplicationJSON;
}
