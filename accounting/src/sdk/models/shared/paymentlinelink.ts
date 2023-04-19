/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentLinkTypeEnum } from "./paymentlinktypeenum";
import { Expose } from "class-transformer";

export class PaymentLineLink extends SpeakeasyBase {
  /**
   * Amount by which the balance of the linked entity is altered, in the currency of the linked entity.
   *
   * @remarks
   * A negative link amount _reduces_ the outstanding amount on the accounts receivable account.
   * A positive link amount _increases_ the outstanding amount on the accounts receivable account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

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
   * Unique identifier of the transaction represented by the link.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Types of payment line links, either:
   *
   * @remarks
   * `Unknown`
   * `Unlinked` - Not used
   * `Invoice` - ID refers to the invoice
   * `CreditNote` - ID refers to the credit note
   * `Refund` - ID refers to the sibling payment
   * `Payment` - ID refers to the sibling payment
   * `PaymentOnAccount` - ID refers to the customer
   * `Other` - ID refers to the customer
   * `Manual Journal`
   * `Discount` - ID refers to the payment
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PaymentLinkTypeEnum;
}