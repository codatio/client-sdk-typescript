/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountIdentifierTypeEnum } from "./accountidentifiertypeenum";
import { Expose } from "class-transformer";

/**
 * An object containing bank account identification information.
 */
export class AccountIdentifiers extends SpeakeasyBase {
  /**
   * The local (usually national) routing number for the account.
   *
   * @remarks
   *
   * This is known by different names in different countries:
   * * BSB code (Australia)
   * * routing number (Canada, USA)
   * * sort code (UK)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "bankCode" })
  bankCode?: string;

  /**
   * The ISO 9362 code (commonly called SWIFT code, SWIFT-BIC or BIC) for the account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "bic" })
  bic?: string;

  /**
   * The international bank account number (IBAN) for the account, if known.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "iban" })
  iban?: string;

  /**
   * A portion of the actual account `number` to help account identification where number is tokenised (Plaid only)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maskedAccountNumber" })
  maskedAccountNumber?: string;

  /**
   * The account number for the account. When combined with the`bankCode`, this is usually enough to uniquely identify an account within a jurisdiction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  /**
   * Detailed account category
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subtype" })
  subtype?: string;

  /**
   * Type of account
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: AccountIdentifierTypeEnum;
}