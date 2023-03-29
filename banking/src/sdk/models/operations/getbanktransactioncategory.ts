/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetBankTransactionCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  /**
   * The unique identifier for a banking transaction category
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=transactionCategoryId",
  })
  transactionCategoryId: string;
}

/**
 * Status of the bank transaction category.
 */
export enum GetBankTransactionCategorySourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

/**
 * The Banking Transaction Categories data type provides a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.
 *
 * @remarks
 *
 * Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.
 */
export class GetBankTransactionCategorySourceModifiedDate extends SpeakeasyBase {
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

  /**
   * The date on which this record was last modified in Codat.
   */
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

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Status of the bank transaction category.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetBankTransactionCategorySourceModifiedDateStatusEnum;
}

export class GetBankTransactionCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  sourceModifiedDate?: GetBankTransactionCategorySourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
