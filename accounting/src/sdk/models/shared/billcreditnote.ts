/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BillCreditNoteLineItem } from "./billcreditnotelineitem";
import { BillCreditNoteStatusEnum } from "./billcreditnotestatusenum";
import { Items } from "./items";
import { Metadata } from "./metadata";
import { SupplementalData } from "./supplementaldata";
import { SupplierRef } from "./supplierref";
import { WithholdingTaxitems } from "./withholdingtaxitems";
import { Expose, Type } from "class-transformer";

/**
 * > **Bill credit notes or credit notes?**
 *
 * @remarks
 * >
 * > In Codat, bill credit notes represent accounts payable only. For accounts receivable, see [Credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote).
 *
 * View the coverage for bill credit notes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * A bill credit note is issued by a supplier for the purpose of recording credit. For example, if a supplier was unable to fulfil an order that was placed by a business, or delivered damaged goods, they would issue a bill credit note. A bill credit note reduces the amount a business owes to the supplier. It can be refunded to the business or used to pay off future bills.
 *
 * In the Codat API, a bill credit note is an accounts payable record issued by a [supplier](https://docs.codat.io/accounting-api#/schemas/Supplier).
 *
 * A bill credit note includes details of:
 * * The original and remaining credit.
 * * Any allocations of the credit against other records, such as [bills](https://docs.codat.io/accounting-api#/schemas/Bill).
 * * The supplier that issued the bill credit note.
 */
export class BillCreditNote extends SpeakeasyBase {
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   *
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  allocatedOnDate?: string;

  /**
   * Friendly reference for the bill credit note.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "billCreditNoteNumber" })
  billCreditNoteNumber?: string;

  /**
   * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
   *
   * @remarks
   *
   * ## Unknown currencies
   *
   * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
   *
   * There are only a very small number of edge cases where this currency code is returned by the Codat system.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  /**
   * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
   *
   * @remarks
   *
   * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
   *
   * Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
   *
   * For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
   *
   * ## Examples with base currency of GBP
   *
   * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
   * | :--------------- | :------------- | :------------ | :------------------------- |
   * | **USD**          | $20            | 0.781         | £15.62                     |
   * | **EUR**          | €20            | 0.885         | £17.70                     |
   * | **RUB**          | ₽20            | 0.011         | £0.22                      |
   *
   * ## Examples with base currency of USD
   *
   * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
   * | :--------------- | :------------- | :------------ | :------------------------- |
   * | **GBP**          | £20            | 1.277         | $25.54                     |
   * | **EUR**          | €20            | 1.134         | $22.68                     |
   * | **RUB**          | ₽20            | 0.015         | $0.30                      |
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  /**
   * Percentage rate of any discount applied to the bill credit note.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage: number;

  /**
   * Identifier for the bill credit note that is unique to a company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   *
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  issueDate?: string;

  /**
   * An array of line
   */
  @SpeakeasyMetadata({ elemType: BillCreditNoteLineItem })
  @Expose({ name: "lineItems" })
  @Type(() => BillCreditNoteLineItem)
  lineItems?: BillCreditNoteLineItem[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => Metadata)
  metadata?: Metadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Any additional information about the bill credit note.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  /**
   * An array of payment allocations.
   */
  @SpeakeasyMetadata({ elemType: Items })
  @Expose({ name: "paymentAllocations" })
  @Type(() => Items)
  paymentAllocations?: Items[];

  /**
   * Amount of the bill credit note that is still outstanding.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "remainingCredit" })
  remainingCredit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Current state of the bill credit note
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: BillCreditNoteStatusEnum;

  /**
   * Total amount of the bill credit note, including discounts but excluding tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => SupplementalData)
  supplementalData?: SupplementalData;

  /**
   * Reference to the supplier the record relates to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => SupplierRef)
  supplierRef?: SupplierRef;

  /**
   * Total amount of credit that has been applied to the business' account with the supplier, including discounts and tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  /**
   * Total value of any discounts applied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount: number;

  /**
   * Amount of tax included in the bill credit note.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ elemType: WithholdingTaxitems })
  @Expose({ name: "withholdingTax" })
  @Type(() => WithholdingTaxitems)
  withholdingTax?: WithholdingTaxitems[];
}
