/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BankAccount } from "./bankaccount";
import { Customer } from "./customer";
import { Supplier } from "./supplier";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class CompanyConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bankAccount" })
  @Type(() => BankAccount)
  bankAccount: BankAccount;

  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => Customer)
  customer: Customer;

  @SpeakeasyMetadata()
  @Expose({ name: "supplier" })
  @Type(() => Supplier)
  supplier: Supplier;
}
