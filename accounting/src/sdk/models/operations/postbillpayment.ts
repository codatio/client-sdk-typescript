import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class PostBillPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostBillPaymentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

// PostBillPaymentSourceModifiedDateAccountRef
/** 
 * Account the payment is linked to in the accounting platform.
**/
export class PostBillPaymentSourceModifiedDateAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
export enum PostBillPaymentSourceModifiedDateLinesLinksTypeEnum {
    Unknown = "Unknown",
    Unlinked = "Unlinked",
    Bill = "Bill",
    Other = "Other",
    CreditNote = "CreditNote",
    BillPayment = "BillPayment",
    PaymentOnAccount = "PaymentOnAccount",
    Refund = "Refund",
    ManualJournal = "ManualJournal",
    Discount = "Discount"
}

export class PostBillPaymentSourceModifiedDateLinesLinks extends SpeakeasyBase {
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
  type: PostBillPaymentSourceModifiedDateLinesLinksTypeEnum;
}

export class PostBillPaymentSourceModifiedDateLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata({ elemType: PostBillPaymentSourceModifiedDateLinesLinks })
  @Expose({ name: "links" })
  @Type(() => PostBillPaymentSourceModifiedDateLinesLinks)
  links?: PostBillPaymentSourceModifiedDateLinesLinks[];
}

export class PostBillPaymentSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// PostBillPaymentSourceModifiedDatePaymentMethodRef
/** 
 * The Payment Method to which the payment is linked in the accounting platform.
**/
export class PostBillPaymentSourceModifiedDatePaymentMethodRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBillPaymentSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// PostBillPaymentSourceModifiedDateSupplierRef
/** 
 * Supplier against which the payment is recorded in the accounting platform.
**/
export class PostBillPaymentSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

// PostBillPaymentSourceModifiedDate
/** 
 * > **Bill payments or payments?**  
 * > 
 * > In Codat, bill payments represent accounts payable only. For accounts receivable, see [payments](https://docs.codat.io/accounting-api#/schemas/Payment), which includes [invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) and [credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote).
 * 
 * > View the coverage for bill payments in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Bill payments include all accounts payable transaction data. This includes [bills](https://docs.codat.io/accounting-api#/schemas/Bill) and [credit notes against bills](https://docs.codat.io/docs/datamodel-accounting-billcreditnotes).
 * 
 * A bill payment in Codat usually represents an allocation of money within any customer accounts payable account. This includes but is not strictly limited to:
 * 
 * - A payment made against a bill—for example, a credit card payment, cheque payment, or cash payment.
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
 * > 🚧 Pushing batch payments to Xero
 * > 
 * > When pushing a single bill payment to Xero to pay multiple bills, only the first format is supported—multiple entries in the payment **lines** array.
 * 
 * ## Payments and refunds on account
 * 
 * A payment on account, that is a payment that doesn’t pay a specific bill, has one entry in its lines array.
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
 * The payment that was refunded can be identified as it has a line where the `amount` on its `line` is positive and the type of the link is `Refund`. This payment may have several entries in its **lines** array if it was partly used to pay an bill. For example, a £1,050 payment paying a £1,000 bill with a refund of £50 has two lines: 
 * 
 * - One for £1,000 linked to the bill that was paid
 * - Another for £50 linked to the payment that refunded the over payment. This link is of type `Refund` but the ID corresponds to a bill payment.
 * 
 * The line linked to the bill payment has the following properties:
 * 
 * - An **amount** indicating the amount that was refunded. This is positive as its money that was added to accounts payable, but is balanced out by the negative amount of the refund.
 * - A **links** array containing one element with the following properties:
 *   - A **type** indicating the type of the link, in this case a `Refund`.
 *   - An **id** containing the ID of the payment that refunded this line.
 * 
 * > 📘 Linked payments
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
export class PostBillPaymentSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostBillPaymentSourceModifiedDateAccountRef)
  accountRef?: PostBillPaymentSourceModifiedDateAccountRef;

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

  @SpeakeasyMetadata({ elemType: PostBillPaymentSourceModifiedDateLines })
  @Expose({ name: "lines" })
  @Type(() => PostBillPaymentSourceModifiedDateLines)
  lines?: PostBillPaymentSourceModifiedDateLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostBillPaymentSourceModifiedDateMetadata)
  metadata?: PostBillPaymentSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "paymentMethodRef" })
  @Type(() => PostBillPaymentSourceModifiedDatePaymentMethodRef)
  paymentMethodRef?: PostBillPaymentSourceModifiedDatePaymentMethodRef;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => PostBillPaymentSourceModifiedDateSupplementalData)
  supplementalData?: PostBillPaymentSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => PostBillPaymentSourceModifiedDateSupplierRef)
  supplierRef?: PostBillPaymentSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

export class PostBillPaymentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class PostBillPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostBillPaymentPathParams;

  @SpeakeasyMetadata()
  queryParams: PostBillPaymentQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostBillPaymentSourceModifiedDate;

  @SpeakeasyMetadata()
  security: PostBillPaymentSecurity;
}

export class PostBillPayment200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum PostBillPayment200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PostBillPayment200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => PostBillPayment200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: PostBillPayment200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PostBillPayment200ApplicationJSONChangesTypeEnum;
}

// PostBillPayment200ApplicationJSONSourceModifiedDateAccountRef
/** 
 * Account the payment is linked to in the accounting platform.
**/
export class PostBillPayment200ApplicationJSONSourceModifiedDateAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
export enum PostBillPayment200ApplicationJSONSourceModifiedDateLinesLinksTypeEnum {
    Unknown = "Unknown",
    Unlinked = "Unlinked",
    Bill = "Bill",
    Other = "Other",
    CreditNote = "CreditNote",
    BillPayment = "BillPayment",
    PaymentOnAccount = "PaymentOnAccount",
    Refund = "Refund",
    ManualJournal = "ManualJournal",
    Discount = "Discount"
}

export class PostBillPayment200ApplicationJSONSourceModifiedDateLinesLinks extends SpeakeasyBase {
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
  type: PostBillPayment200ApplicationJSONSourceModifiedDateLinesLinksTypeEnum;
}

export class PostBillPayment200ApplicationJSONSourceModifiedDateLines extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata({ elemType: PostBillPayment200ApplicationJSONSourceModifiedDateLinesLinks })
  @Expose({ name: "links" })
  @Type(() => PostBillPayment200ApplicationJSONSourceModifiedDateLinesLinks)
  links?: PostBillPayment200ApplicationJSONSourceModifiedDateLinesLinks[];
}

export class PostBillPayment200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// PostBillPayment200ApplicationJSONSourceModifiedDatePaymentMethodRef
/** 
 * The Payment Method to which the payment is linked in the accounting platform.
**/
export class PostBillPayment200ApplicationJSONSourceModifiedDatePaymentMethodRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class PostBillPayment200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

// PostBillPayment200ApplicationJSONSourceModifiedDateSupplierRef
/** 
 * Supplier against which the payment is recorded in the accounting platform.
**/
export class PostBillPayment200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

// PostBillPayment200ApplicationJSONSourceModifiedDate
/** 
 * > **Bill payments or payments?**  
 * > 
 * > In Codat, bill payments represent accounts payable only. For accounts receivable, see [payments](https://docs.codat.io/accounting-api#/schemas/Payment), which includes [invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) and [credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote).
 * 
 * > View the coverage for bill payments in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Bill payments include all accounts payable transaction data. This includes [bills](https://docs.codat.io/accounting-api#/schemas/Bill) and [credit notes against bills](https://docs.codat.io/docs/datamodel-accounting-billcreditnotes).
 * 
 * A bill payment in Codat usually represents an allocation of money within any customer accounts payable account. This includes but is not strictly limited to:
 * 
 * - A payment made against a bill—for example, a credit card payment, cheque payment, or cash payment.
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
 * > 🚧 Pushing batch payments to Xero
 * > 
 * > When pushing a single bill payment to Xero to pay multiple bills, only the first format is supported—multiple entries in the payment **lines** array.
 * 
 * ## Payments and refunds on account
 * 
 * A payment on account, that is a payment that doesn’t pay a specific bill, has one entry in its lines array.
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
 * The payment that was refunded can be identified as it has a line where the `amount` on its `line` is positive and the type of the link is `Refund`. This payment may have several entries in its **lines** array if it was partly used to pay an bill. For example, a £1,050 payment paying a £1,000 bill with a refund of £50 has two lines: 
 * 
 * - One for £1,000 linked to the bill that was paid
 * - Another for £50 linked to the payment that refunded the over payment. This link is of type `Refund` but the ID corresponds to a bill payment.
 * 
 * The line linked to the bill payment has the following properties:
 * 
 * - An **amount** indicating the amount that was refunded. This is positive as its money that was added to accounts payable, but is balanced out by the negative amount of the refund.
 * - A **links** array containing one element with the following properties:
 *   - A **type** indicating the type of the link, in this case a `Refund`.
 *   - An **id** containing the ID of the payment that refunded this line.
 * 
 * > 📘 Linked payments
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
export class PostBillPayment200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostBillPayment200ApplicationJSONSourceModifiedDateAccountRef)
  accountRef?: PostBillPayment200ApplicationJSONSourceModifiedDateAccountRef;

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

  @SpeakeasyMetadata({ elemType: PostBillPayment200ApplicationJSONSourceModifiedDateLines })
  @Expose({ name: "lines" })
  @Type(() => PostBillPayment200ApplicationJSONSourceModifiedDateLines)
  lines?: PostBillPayment200ApplicationJSONSourceModifiedDateLines[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostBillPayment200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: PostBillPayment200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "paymentMethodRef" })
  @Type(() => PostBillPayment200ApplicationJSONSourceModifiedDatePaymentMethodRef)
  paymentMethodRef?: PostBillPayment200ApplicationJSONSourceModifiedDatePaymentMethodRef;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => PostBillPayment200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: PostBillPayment200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => PostBillPayment200ApplicationJSONSourceModifiedDateSupplierRef)
  supplierRef?: PostBillPayment200ApplicationJSONSourceModifiedDateSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}
export enum PostBillPayment200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostBillPayment200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// PostBillPayment200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostBillPayment200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostBillPayment200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => PostBillPayment200ApplicationJSONValidationValidationItem)
  errors?: PostBillPayment200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: PostBillPayment200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => PostBillPayment200ApplicationJSONValidationValidationItem)
  warnings?: PostBillPayment200ApplicationJSONValidationValidationItem[];
}

export class PostBillPayment200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostBillPayment200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => PostBillPayment200ApplicationJSONChanges)
  changes?: PostBillPayment200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => PostBillPayment200ApplicationJSONSourceModifiedDate)
  data?: PostBillPayment200ApplicationJSONSourceModifiedDate;

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
  status: PostBillPayment200ApplicationJSONStatusEnum;

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
  @Type(() => PostBillPayment200ApplicationJSONValidation)
  validation?: PostBillPayment200ApplicationJSONValidation;
}

export class PostBillPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postBillPayment200ApplicationJSONObject?: PostBillPayment200ApplicationJSON;
}