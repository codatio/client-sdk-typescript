/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TransactionCategoryStatus } from "./transactioncategorystatus";
import { Expose } from "class-transformer";

/**
 * The Banking Transaction Categories data type provides a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.
 *
 * @remarks
 *
 * Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.
 */
export class BankingTransactionCategory extends SpeakeasyBase {
    /**
     * A Boolean indicating whether there are other bank transaction categories beneath this one in the hierarchy.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hasChildren" })
    hasChildren?: boolean;

    /**
     * The unique identifier of the bank transaction category.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * The name of the bank transaction category.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The unique identifier of the parent bank transaction category.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parentId" })
    parentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * The status of the transaction category.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: TransactionCategoryStatus;
}
