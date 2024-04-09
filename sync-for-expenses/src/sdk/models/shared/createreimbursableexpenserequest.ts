/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ReimbursableExpenseTransaction } from "./reimbursableexpensetransaction";
import { Expose, Type } from "class-transformer";

export class CreateReimbursableExpenseRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ReimbursableExpenseTransaction, elemDepth: 2 })
    @Expose({ name: "items" })
    @Type(() => ReimbursableExpenseTransaction)
    items?: ReimbursableExpenseTransaction[][];
}
