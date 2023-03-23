/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetPaymentMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=paymentMethodId",
  })
  paymentMethodId: string;
}

export class GetPaymentMethodSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

/**
 * Status of the Payment Method.
 */
export enum GetPaymentMethodSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

/**
 * Method of payment.
 */
export enum GetPaymentMethodSourceModifiedDateTypeEnum {
  Unknown = "Unknown",
  Cash = "Cash",
  Check = "Check",
  CreditCard = "CreditCard",
  DebitCard = "DebitCard",
  BankTransfer = "BankTransfer",
  Other = "Other",
}

/**
 * > View the coverage for payment methods in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=paymentMethods" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * A Payment Method represents the payment method(s) used to pay a Bill. Payment Methods are referenced on [Bill Payments](https://docs.codat.io/accounting-api#/schemas/BillPayment) and [Payments](https://docs.codat.io/accounting-api#/schemas/Payment).
 *
 * From the Payment Methods endpoints you can retrieve:
 *
 * - A list of all the Payment Methods used by a company: `GET/companies/{companyId}/data/paymentMethods`.
 * - The details of an individual Payment Method:
 *   `GET /companies/{companyId}/data/paymentMethods/{paymentMethodId}`.
 */
export class GetPaymentMethodSourceModifiedDate extends SpeakeasyBase {
  /**
   * Unique identifier for the payment method.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetPaymentMethodSourceModifiedDateMetadata)
  metadata?: GetPaymentMethodSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Name of the payment method.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Status of the Payment Method.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetPaymentMethodSourceModifiedDateStatusEnum;

  /**
   * Method of payment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetPaymentMethodSourceModifiedDateTypeEnum;
}

export class GetPaymentMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  sourceModifiedDate?: GetPaymentMethodSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
