import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transferId" })
  transferId: string;
}

export class GetTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransferPathParams;

  @SpeakeasyMetadata()
  security: GetTransferSecurity;
}

// GetTransferSourceModifiedDateContactRef
/** 
 * The customer or supplier for the transfer, if available.
**/
export class GetTransferSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

// GetTransferSourceModifiedDateTransferAccountAccountRef
/** 
 * The account that the transfer is moving from or to.
**/
export class GetTransferSourceModifiedDateTransferAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// GetTransferSourceModifiedDateTransferAccount
/** 
 * The details of the accounts the transfer is moving from.
**/
export class GetTransferSourceModifiedDateTransferAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: GetTransferSourceModifiedDateTransferAccountAccountRef;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;
}

export class GetTransferSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class GetTransferSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

export class GetTransferSourceModifiedDateTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
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
  @SpeakeasyMetadata({ data: "json, name=contactRef" })
  contactRef?: GetTransferSourceModifiedDateContactRef;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=depositedRecordRefs" })
  depositedRecordRefs?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: GetTransferSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GetTransferSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: GetTransferSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: GetTransferSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: GetTransferSourceModifiedDateTrackingCategoryRefs })
  trackingCategoryRefs?: GetTransferSourceModifiedDateTrackingCategoryRefs[];
}

export class GetTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetTransferSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;
}