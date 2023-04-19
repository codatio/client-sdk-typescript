/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExpenseTransaction } from "./expensetransaction";
import { Expose, Type } from "class-transformer";

export class CreateExpenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ExpenseTransaction })
  @Expose({ name: "items" })
  @Type(() => ExpenseTransaction)
  items?: ExpenseTransaction[];
}