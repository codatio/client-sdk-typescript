/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=transferId",
  })
  transferId: string;
}

/**
 * The customer or supplier for the transfer, if available.
 */
export class GetTransferSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

/**
 * The account that the transfer is moving from or to.
 */
export class GetTransferSourceModifiedDateTransferAccountAccountRef extends SpeakeasyBase {
  /**
   * 'id' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * 'name' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * The details of the accounts the transfer is moving from.
 */
export class GetTransferSourceModifiedDateTransferAccount extends SpeakeasyBase {
  /**
   * The account that the transfer is moving from or to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => GetTransferSourceModifiedDateTransferAccountAccountRef)
  accountRef?: GetTransferSourceModifiedDateTransferAccountAccountRef;

  /**
   * The amount transferred between accounts.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  /**
   * ISO currency code recorded for the transfer in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;
}

export class GetTransferSourceModifiedDateMetadata extends SpeakeasyBase {
  /**
   * Indicates whether the record has been deleted in the third-party system this record originated from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 */
export class GetTransferSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

/**
 * References a category against which the item is tracked.
 */
export class GetTransferSourceModifiedDateTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * > View the coverage for transfers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * A transfer records the movement of money between two bank accounts, or between a bank account and a nominal account. It is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 */
export class GetTransferSourceModifiedDate extends SpeakeasyBase {
  /**
   * The customer or supplier for the transfer, if available.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contactRef" })
  @Type(() => GetTransferSourceModifiedDateContactRef)
  contactRef?: GetTransferSourceModifiedDateContactRef;

  /**
   * The day on which the transfer was made.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  date?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "depositedRecordRefs" })
  depositedRecordRefs?: string[];

  /**
   * Description of the transfer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The details of the accounts the transfer is moving from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  @Type(() => GetTransferSourceModifiedDateTransferAccount)
  from?: GetTransferSourceModifiedDateTransferAccount;

  /**
   * Unique identifier for the transfer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetTransferSourceModifiedDateMetadata)
  metadata?: GetTransferSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => GetTransferSourceModifiedDateSupplementalData)
  supplementalData?: GetTransferSourceModifiedDateSupplementalData;

  /**
   * The details of the accounts the transfer is moving to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  @Type(() => GetTransferSourceModifiedDateTransferAccount)
  to?: GetTransferSourceModifiedDateTransferAccount;

  /**
   * Reference to the tracking categories this transfer is being tracked against.
   */
  @SpeakeasyMetadata({
    elemType: GetTransferSourceModifiedDateTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => GetTransferSourceModifiedDateTrackingCategoryRefs)
  trackingCategoryRefs?: GetTransferSourceModifiedDateTrackingCategoryRefs[];
}

export class GetTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  sourceModifiedDate?: GetTransferSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
