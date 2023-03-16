import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

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

// GetTransferSourceModifiedDateContactRef
/**
 * The customer or supplier for the transfer, if available.
 **/
export class GetTransferSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// GetTransferSourceModifiedDateTransferAccountAccountRef
/**
 * The account that the transfer is moving from or to.
 **/
export class GetTransferSourceModifiedDateTransferAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetTransferSourceModifiedDateTransferAccount
/**
 * The details of the accounts the transfer is moving from.
 **/
export class GetTransferSourceModifiedDateTransferAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => GetTransferSourceModifiedDateTransferAccountAccountRef)
  accountRef?: GetTransferSourceModifiedDateTransferAccountAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;
}

export class GetTransferSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// GetTransferSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class GetTransferSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

export class GetTransferSourceModifiedDateTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// GetTransferSourceModifiedDate
/**
 * > View the coverage for transfers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers" target="_blank">Data coverage explorer</a>.
 *
 * From the **Transfers** endpoints, you can:
 *
 * - [Retrieve a list of all transfers for a specified company](https://api.codat.io/swagger/index.html#/Transfers/get_companies__companyId__connections__connectionId__data_transfers)
 * - [Retrieve a single transfer for a specified company](https://api.codat.io/swagger/index.html#/Transfers/get_companies__companyId__connections__connectionId__data_transfers__transferId_)
 * - [Add a new transfer for a specified company](https://api.codat.io/swagger/index.html#/Transfers/post_companies__companyId__connections__connectionId__push_transfers)
 *
 * **Transfers** is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 **/
export class GetTransferSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contactRef" })
  @Type(() => GetTransferSourceModifiedDateContactRef)
  contactRef?: GetTransferSourceModifiedDateContactRef;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "depositedRecordRefs" })
  depositedRecordRefs?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  @Type(() => GetTransferSourceModifiedDateTransferAccount)
  from?: GetTransferSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetTransferSourceModifiedDateMetadata)
  metadata?: GetTransferSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => GetTransferSourceModifiedDateSupplementalData)
  supplementalData?: GetTransferSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  @Type(() => GetTransferSourceModifiedDateTransferAccount)
  to?: GetTransferSourceModifiedDateTransferAccount;

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

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetTransferSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
