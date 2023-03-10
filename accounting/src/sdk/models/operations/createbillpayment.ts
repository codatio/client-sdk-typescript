import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class CreateBillPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class CreateBillPaymentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeoutInMinutes",
  })
  timeoutInMinutes?: number;
}

// CreateBillPaymentSourceModifiedDateAccountRef
/**
 * Account the payment is linked to in the accounting platform.
 **/
export class CreateBillPaymentSourceModifiedDateAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
export enum CreateBillPaymentSourceModifiedDateLinesLinksTypeEnum {
  Unknown = "Unknown",
  Unlinked = "Unlinked",
  Bill = "Bill",
  Other = "Other",
  CreditNote = "CreditNote",
  BillPayment = "BillPayment",
  PaymentOnAccount = "PaymentOnAccount",
  Refund = "Refund",
  ManualJournal = "ManualJournal",
  Discount = "Discount",
}

export class CreateBillPaymentSourceModifiedDateLinesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CreateBillPaymentSourceModifiedDateLinesLinksTypeEnum;
}

export class CreateBillPaymentSourceModifiedDateLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata({
    elemType: CreateBillPaymentSourceModifiedDateLinesLinks,
  })
  @Expose({ name: "links" })
  @Type(() => CreateBillPaymentSourceModifiedDateLinesLinks)
  links?: CreateBillPaymentSourceModifiedDateLinesLinks[];
}

export class CreateBillPaymentSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// CreateBillPaymentSourceModifiedDatePaymentMethodRef
/**
 * The Payment Method to which the payment is linked in the accounting platform.
 **/
export class CreateBillPaymentSourceModifiedDatePaymentMethodRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateBillPaymentSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class CreateBillPaymentSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// CreateBillPaymentSourceModifiedDateSupplierRef
/**
 * Supplier against which the payment is recorded in the accounting platform.
 **/
export class CreateBillPaymentSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

// CreateBillPaymentSourceModifiedDate
/**
 * > **Bill payments or payments?**
 * >
 * > In Codat, bill payments represent accounts payable only. For accounts receivable, see [payments](https://docs.codat.io/accounting-api#/schemas/Payment), which includes [invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) and [credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote).
 *
 * > View the coverage for bill payments in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Bill payments include all accounts payable transaction data. This includes [bills](https://docs.codat.io/accounting-api#/schemas/Bill) and [credit notes against bills](https://docs.codat.io/accounting-api#/schemas/BillCreditNote).
 *
 * A bill payment in Codat usually represents an allocation of money within any customer accounts payable account. This includes but is not strictly limited to:
 *
 * - A payment made against a bill???for example, a credit card payment, cheque payment, or cash payment.
 * - An allocation of a supplier's credit note, to a bill or perhaps a refund.
 * - A bill payment made directly to an accounts payable account. This could be an overpayment or a prepayment, or a refund of a payment made directly to an accounts payable account.
 *
 * Depending on the bill payments which are allowed by the underlying accounting package, some of these types may be combined. Please see the [Example data](#example-data) section for samples of what these cases look like.
 *
 * In Codat, a bill payment contains details of:
 *
 * - When the bill payment was recorded in the accounting system.
 * - How much it is for and in the currency.
 * - Who the payment has been paid to, the _supplier_.
 * - The types of bill payments, the _line items_.
 *
 * Some accounting platforms give a separate name to purchases where the payment is made immediately, such as something bought with a credit card or online payment. One example of this would be QuickBooks Online's _expenses_. You can find these types of transactions in our [Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) data model.
 *
 * Bill payments is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 *
 * ---
 *
 * ## Bill payment types
 *
 * ## Payment of a bill
 *
 * A payment paying a single bill should have the following properties:
 *
 * - A `totalAmount` indicating the amount of the bill that was paid. This is always positive.
 * - A `lines` array containing one element with the following properties:
 *   - An `amount` equal to the `totalAmount` above.
 *   - A `links` array containing one element with the following properties:
 *     - A `type` indicating the type of link, in this case a `Bill`.
 *     - An `id` containing the ID of the bill that was paid.
 *     - An amount of `-totalAmount` (negative `totalAmount`), indicating that the entirety of the paid amount is allocated to the bill.
 *
 * ## Payment of multiple bills
 *
 * It is possible for one payment to pay multiple bills. This can be represented using two possible formats, depending on how the supplier keeps their books:
 *
 * 1. The payment has multiple entries in its **lines** array, one for each bill that is paid. Each line will follow the above example for paying a bill, and the rules detailed in the data model.
 * 2. The payment has a line with multiple links to each bill. This occurs when the proportion of the original payment allocated to each bill is not available.
 *
 * Each line is the same as those described above, with the **amount** indicating how much of the payment is allocated to the bill. The **amount** on the lines sum to the **totalAmount** on the payment.
 *
 * > ???? Pushing batch payments to Xero
 * >
 * > When pushing a single bill payment to Xero to pay multiple bills, only the first format is supported???multiple entries in the payment **lines** array.
 *
 * ## Payments and refunds on account
 *
 * A payment on account, that is a payment that doesn???t pay a specific bill, has one entry in its lines array.
 *
 * The line has the following properties:
 *
 * - A **totalAmount** indicating the amount paid by a supplier or refunded to them by a company. A payment to the supplier is always negative. A refund is always positive.
 * - A **links** array containing one element with the following properties:
 *   - A **type** indicating the type of link. For a payment this is `PaymentOnAccount`. For a refund this is `Refund`.
 *   - The **id** containing the ID of the supplier.
 *   - An amount for the link is `0` **totalAmount** or the amount of the payment or refund.
 *
 * It is possible to have a payment that is part on account and part allocated to a bill. Each line should follow the examples above.
 *
 * ## Using a credit note to pay a bill
 *
 * The payment of a bill using a credit note has one entry in its `lines` array. This **line** has the following properties:
 *
 * - An **amount** indicating the amount of money moved, which in this case is `0`, as the credit note and bill allocation must balance each other.
 * - A **links** array containing two elements:
 *   - The first link has:
 *     - A **type** indicating the type of link, in this case a `Bill`.
 *     - An **id** containing the ID of the bill that was paid.
 *   - The second link has:
 *     - A **type** indicating the type of link, in this case a `CreditNote`.
 *     - An **id** containing the ID of the credit note used by this payment.
 *
 * The **amount** field on the **line** equals the **totalAmount** on the payment.
 *
 * ## Refunding a credit note
 *
 * A bill payment refunding a credit note has one entry in its **lines** array. This line has the following properties:
 *
 * - An **amount** indicating the amount of the credit note that was refunded. This is always negative, indicating that it is a refund.
 * - A **links** array containing one element with the following properties:
 *   - A **type** indicating the type of `link`, in this case a `CreditNote`.
 *   - An **id** containing the ID of the credit note that was refunded.
 *
 * The **totalAmount** field on the payment equals the line's **amount** field. These are both negative, as this is money leaving accounts payable.
 *
 * ## Refunding a payment
 *
 * If a payment is refunded, for example, when a company overpaid a bill and the overpayment is returned, there are two payment records:
 *
 * - One for the incoming overpayment.
 * - Another for the outgoing refund.
 *
 * The payment issuing the refund is identified by the fact that the **totalAmount** is negative. This payment has one entry in its lines array that have the following properties:
 *
 * - An **amount** indicating the amount that was refunded. This is always negative.
 * - A **links** array containing one element with the following properties:
 *   - A **type** indicating the type of a the link, in this case a `BillPayment`.
 *   - An **id** containing the ID of the payment that was refunded.
 *
 * The **amount** field on the line equals the **totalAmount** on the payment and is negative as this is money leaving accounts payable.
 *
 * The payment that was refunded can be identified as it has a line where the `amount` on its `line` is positive and the type of the link is `Refund`. This payment may have several entries in its **lines** array if it was partly used to pay an bill. For example, a ??1,050 payment paying a ??1,000 bill with a refund of ??50 has two lines:
 *
 * - One for ??1,000 linked to the bill that was paid
 * - Another for ??50 linked to the payment that refunded the over payment. This link is of type `Refund` but the ID corresponds to a bill payment.
 *
 * The line linked to the bill payment has the following properties:
 *
 * - An **amount** indicating the amount that was refunded. This is positive as its money that was added to accounts payable, but is balanced out by the negative amount of the refund.
 * - A **links** array containing one element with the following properties:
 *   - A **type** indicating the type of the link, in this case a `Refund`.
 *   - An **id** containing the ID of the payment that refunded this line.
 *
 * > ???? Linked payments
 * >
 * > Not all accounting packages support linked payments in this way. In these platforms you may see a payment on account and a refund on account.
 *
 * ## Foreign currencies
 *
 * There are two types of currency rate that are detailed in the bill payments data type:
 *
 * Payment currency rate:
 *
 * - Base currency of the accounts payable account.
 * - Foreign currency of the bill payment.
 *
 * Payment line link currency rate:
 *
 * - Base currency of the item that the link represents.
 * - Foreign currency of the payment.
 *
 * These two rates allow the calculation of currency loss or gain for any of the transactions affected by the payment lines. The second rate is used when a bill payment is applied to an item in a currency that does not match either:
 *
 * - The base currency for the accounts payable account.
 * - The currency of the item.
 *
 **/
export class CreateBillPaymentSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateBillPaymentSourceModifiedDateAccountRef)
  accountRef?: CreateBillPaymentSourceModifiedDateAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: CreateBillPaymentSourceModifiedDateLines })
  @Expose({ name: "lines" })
  @Type(() => CreateBillPaymentSourceModifiedDateLines)
  lines?: CreateBillPaymentSourceModifiedDateLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateBillPaymentSourceModifiedDateMetadata)
  metadata?: CreateBillPaymentSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "paymentMethodRef" })
  @Type(() => CreateBillPaymentSourceModifiedDatePaymentMethodRef)
  paymentMethodRef?: CreateBillPaymentSourceModifiedDatePaymentMethodRef;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CreateBillPaymentSourceModifiedDateSupplementalData)
  supplementalData?: CreateBillPaymentSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => CreateBillPaymentSourceModifiedDateSupplierRef)
  supplierRef?: CreateBillPaymentSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

export class CreateBillPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBillPaymentPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateBillPaymentQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateBillPaymentSourceModifiedDate;
}

export class CreateBillPayment200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum CreateBillPayment200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class CreateBillPayment200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CreateBillPayment200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: CreateBillPayment200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreateBillPayment200ApplicationJSONChangesTypeEnum;
}

// CreateBillPayment200ApplicationJSONSourceModifiedDateAccountRef
/**
 * Account the payment is linked to in the accounting platform.
 **/
export class CreateBillPayment200ApplicationJSONSourceModifiedDateAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
export enum CreateBillPayment200ApplicationJSONSourceModifiedDateLinesLinksTypeEnum {
  Unknown = "Unknown",
  Unlinked = "Unlinked",
  Bill = "Bill",
  Other = "Other",
  CreditNote = "CreditNote",
  BillPayment = "BillPayment",
  PaymentOnAccount = "PaymentOnAccount",
  Refund = "Refund",
  ManualJournal = "ManualJournal",
  Discount = "Discount",
}

export class CreateBillPayment200ApplicationJSONSourceModifiedDateLinesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CreateBillPayment200ApplicationJSONSourceModifiedDateLinesLinksTypeEnum;
}

export class CreateBillPayment200ApplicationJSONSourceModifiedDateLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata({
    elemType: CreateBillPayment200ApplicationJSONSourceModifiedDateLinesLinks,
  })
  @Expose({ name: "links" })
  @Type(() => CreateBillPayment200ApplicationJSONSourceModifiedDateLinesLinks)
  links?: CreateBillPayment200ApplicationJSONSourceModifiedDateLinesLinks[];
}

export class CreateBillPayment200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// CreateBillPayment200ApplicationJSONSourceModifiedDatePaymentMethodRef
/**
 * The Payment Method to which the payment is linked in the accounting platform.
 **/
export class CreateBillPayment200ApplicationJSONSourceModifiedDatePaymentMethodRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateBillPayment200ApplicationJSONSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class CreateBillPayment200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// CreateBillPayment200ApplicationJSONSourceModifiedDateSupplierRef
/**
 * Supplier against which the payment is recorded in the accounting platform.
 **/
export class CreateBillPayment200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

// CreateBillPayment200ApplicationJSONSourceModifiedDate
/**
 * > **Bill payments or payments?**
 * >
 * > In Codat, bill payments represent accounts payable only. For accounts receivable, see [payments](https://docs.codat.io/accounting-api#/schemas/Payment), which includes [invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) and [credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote).
 *
 * > View the coverage for bill payments in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Bill payments include all accounts payable transaction data. This includes [bills](https://docs.codat.io/accounting-api#/schemas/Bill) and [credit notes against bills](https://docs.codat.io/accounting-api#/schemas/BillCreditNote).
 *
 * A bill payment in Codat usually represents an allocation of money within any customer accounts payable account. This includes but is not strictly limited to:
 *
 * - A payment made against a bill???for example, a credit card payment, cheque payment, or cash payment.
 * - An allocation of a supplier's credit note, to a bill or perhaps a refund.
 * - A bill payment made directly to an accounts payable account. This could be an overpayment or a prepayment, or a refund of a payment made directly to an accounts payable account.
 *
 * Depending on the bill payments which are allowed by the underlying accounting package, some of these types may be combined. Please see the [Example data](#example-data) section for samples of what these cases look like.
 *
 * In Codat, a bill payment contains details of:
 *
 * - When the bill payment was recorded in the accounting system.
 * - How much it is for and in the currency.
 * - Who the payment has been paid to, the _supplier_.
 * - The types of bill payments, the _line items_.
 *
 * Some accounting platforms give a separate name to purchases where the payment is made immediately, such as something bought with a credit card or online payment. One example of this would be QuickBooks Online's _expenses_. You can find these types of transactions in our [Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) data model.
 *
 * Bill payments is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 *
 * ---
 *
 * ## Bill payment types
 *
 * ## Payment of a bill
 *
 * A payment paying a single bill should have the following properties:
 *
 * - A `totalAmount` indicating the amount of the bill that was paid. This is always positive.
 * - A `lines` array containing one element with the following properties:
 *   - An `amount` equal to the `totalAmount` above.
 *   - A `links` array containing one element with the following properties:
 *     - A `type` indicating the type of link, in this case a `Bill`.
 *     - An `id` containing the ID of the bill that was paid.
 *     - An amount of `-totalAmount` (negative `totalAmount`), indicating that the entirety of the paid amount is allocated to the bill.
 *
 * ## Payment of multiple bills
 *
 * It is possible for one payment to pay multiple bills. This can be represented using two possible formats, depending on how the supplier keeps their books:
 *
 * 1. The payment has multiple entries in its **lines** array, one for each bill that is paid. Each line will follow the above example for paying a bill, and the rules detailed in the data model.
 * 2. The payment has a line with multiple links to each bill. This occurs when the proportion of the original payment allocated to each bill is not available.
 *
 * Each line is the same as those described above, with the **amount** indicating how much of the payment is allocated to the bill. The **amount** on the lines sum to the **totalAmount** on the payment.
 *
 * > ???? Pushing batch payments to Xero
 * >
 * > When pushing a single bill payment to Xero to pay multiple bills, only the first format is supported???multiple entries in the payment **lines** array.
 *
 * ## Payments and refunds on account
 *
 * A payment on account, that is a payment that doesn???t pay a specific bill, has one entry in its lines array.
 *
 * The line has the following properties:
 *
 * - A **totalAmount** indicating the amount paid by a supplier or refunded to them by a company. A payment to the supplier is always negative. A refund is always positive.
 * - A **links** array containing one element with the following properties:
 *   - A **type** indicating the type of link. For a payment this is `PaymentOnAccount`. For a refund this is `Refund`.
 *   - The **id** containing the ID of the supplier.
 *   - An amount for the link is `0` **totalAmount** or the amount of the payment or refund.
 *
 * It is possible to have a payment that is part on account and part allocated to a bill. Each line should follow the examples above.
 *
 * ## Using a credit note to pay a bill
 *
 * The payment of a bill using a credit note has one entry in its `lines` array. This **line** has the following properties:
 *
 * - An **amount** indicating the amount of money moved, which in this case is `0`, as the credit note and bill allocation must balance each other.
 * - A **links** array containing two elements:
 *   - The first link has:
 *     - A **type** indicating the type of link, in this case a `Bill`.
 *     - An **id** containing the ID of the bill that was paid.
 *   - The second link has:
 *     - A **type** indicating the type of link, in this case a `CreditNote`.
 *     - An **id** containing the ID of the credit note used by this payment.
 *
 * The **amount** field on the **line** equals the **totalAmount** on the payment.
 *
 * ## Refunding a credit note
 *
 * A bill payment refunding a credit note has one entry in its **lines** array. This line has the following properties:
 *
 * - An **amount** indicating the amount of the credit note that was refunded. This is always negative, indicating that it is a refund.
 * - A **links** array containing one element with the following properties:
 *   - A **type** indicating the type of `link`, in this case a `CreditNote`.
 *   - An **id** containing the ID of the credit note that was refunded.
 *
 * The **totalAmount** field on the payment equals the line's **amount** field. These are both negative, as this is money leaving accounts payable.
 *
 * ## Refunding a payment
 *
 * If a payment is refunded, for example, when a company overpaid a bill and the overpayment is returned, there are two payment records:
 *
 * - One for the incoming overpayment.
 * - Another for the outgoing refund.
 *
 * The payment issuing the refund is identified by the fact that the **totalAmount** is negative. This payment has one entry in its lines array that have the following properties:
 *
 * - An **amount** indicating the amount that was refunded. This is always negative.
 * - A **links** array containing one element with the following properties:
 *   - A **type** indicating the type of a the link, in this case a `BillPayment`.
 *   - An **id** containing the ID of the payment that was refunded.
 *
 * The **amount** field on the line equals the **totalAmount** on the payment and is negative as this is money leaving accounts payable.
 *
 * The payment that was refunded can be identified as it has a line where the `amount` on its `line` is positive and the type of the link is `Refund`. This payment may have several entries in its **lines** array if it was partly used to pay an bill. For example, a ??1,050 payment paying a ??1,000 bill with a refund of ??50 has two lines:
 *
 * - One for ??1,000 linked to the bill that was paid
 * - Another for ??50 linked to the payment that refunded the over payment. This link is of type `Refund` but the ID corresponds to a bill payment.
 *
 * The line linked to the bill payment has the following properties:
 *
 * - An **amount** indicating the amount that was refunded. This is positive as its money that was added to accounts payable, but is balanced out by the negative amount of the refund.
 * - A **links** array containing one element with the following properties:
 *   - A **type** indicating the type of the link, in this case a `Refund`.
 *   - An **id** containing the ID of the payment that refunded this line.
 *
 * > ???? Linked payments
 * >
 * > Not all accounting packages support linked payments in this way. In these platforms you may see a payment on account and a refund on account.
 *
 * ## Foreign currencies
 *
 * There are two types of currency rate that are detailed in the bill payments data type:
 *
 * Payment currency rate:
 *
 * - Base currency of the accounts payable account.
 * - Foreign currency of the bill payment.
 *
 * Payment line link currency rate:
 *
 * - Base currency of the item that the link represents.
 * - Foreign currency of the payment.
 *
 * These two rates allow the calculation of currency loss or gain for any of the transactions affected by the payment lines. The second rate is used when a bill payment is applied to an item in a currency that does not match either:
 *
 * - The base currency for the accounts payable account.
 * - The currency of the item.
 *
 **/
export class CreateBillPayment200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateBillPayment200ApplicationJSONSourceModifiedDateAccountRef)
  accountRef?: CreateBillPayment200ApplicationJSONSourceModifiedDateAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({
    elemType: CreateBillPayment200ApplicationJSONSourceModifiedDateLines,
  })
  @Expose({ name: "lines" })
  @Type(() => CreateBillPayment200ApplicationJSONSourceModifiedDateLines)
  lines?: CreateBillPayment200ApplicationJSONSourceModifiedDateLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateBillPayment200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: CreateBillPayment200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "paymentMethodRef" })
  @Type(
    () => CreateBillPayment200ApplicationJSONSourceModifiedDatePaymentMethodRef
  )
  paymentMethodRef?: CreateBillPayment200ApplicationJSONSourceModifiedDatePaymentMethodRef;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(
    () => CreateBillPayment200ApplicationJSONSourceModifiedDateSupplementalData
  )
  supplementalData?: CreateBillPayment200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => CreateBillPayment200ApplicationJSONSourceModifiedDateSupplierRef)
  supplierRef?: CreateBillPayment200ApplicationJSONSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}
export enum CreateBillPayment200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class CreateBillPayment200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

// CreateBillPayment200ApplicationJSONValidation
/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 **/
export class CreateBillPayment200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: CreateBillPayment200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => CreateBillPayment200ApplicationJSONValidationValidationItem)
  errors?: CreateBillPayment200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: CreateBillPayment200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => CreateBillPayment200ApplicationJSONValidationValidationItem)
  warnings?: CreateBillPayment200ApplicationJSONValidationValidationItem[];
}

export class CreateBillPayment200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateBillPayment200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => CreateBillPayment200ApplicationJSONChanges)
  changes?: CreateBillPayment200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => CreateBillPayment200ApplicationJSONSourceModifiedDate)
  data?: CreateBillPayment200ApplicationJSONSourceModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "requestedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestedOnUtc: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CreateBillPayment200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => CreateBillPayment200ApplicationJSONValidation)
  validation?: CreateBillPayment200ApplicationJSONValidation;
}

export class CreateBillPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createBillPayment200ApplicationJSONObject?: CreateBillPayment200ApplicationJSON;
}
