import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

// PostTransferSourceModifiedDateContactRef
/** 
 * The customer or supplier for the transfer, if available.
**/
export class PostTransferSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

// PostTransferSourceModifiedDateTransferAccountAccountRef
/** 
 * The account that the transfer is moving from or to.
**/
export class PostTransferSourceModifiedDateTransferAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostTransferSourceModifiedDateTransferAccount
/** 
 * The details of the accounts the transfer is moving from.
**/
export class PostTransferSourceModifiedDateTransferAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostTransferSourceModifiedDateTransferAccountAccountRef;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;
}

export class PostTransferSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class PostTransferSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

export class PostTransferSourceModifiedDateTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostTransferSourceModifiedDate
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
export class PostTransferSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactRef" })
  contactRef?: PostTransferSourceModifiedDateContactRef;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=depositedRecordRefs" })
  depositedRecordRefs?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: PostTransferSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostTransferSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: PostTransferSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: PostTransferSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: PostTransferSourceModifiedDateTrackingCategoryRefs })
  trackingCategoryRefs?: PostTransferSourceModifiedDateTrackingCategoryRefs[];
}

export class PostTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class PostTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTransferPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostTransferSourceModifiedDate;

  @SpeakeasyMetadata()
  security: PostTransferSecurity;
}

export class PostTransfer200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
export enum PostTransfer200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PostTransfer200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: PostTransfer200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostTransfer200ApplicationJSONChangesTypeEnum;
}

// PostTransfer200ApplicationJSONSourceModifiedDateContactRef
/** 
 * The customer or supplier for the transfer, if available.
**/
export class PostTransfer200ApplicationJSONSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

// PostTransfer200ApplicationJSONSourceModifiedDateTransferAccountAccountRef
/** 
 * The account that the transfer is moving from or to.
**/
export class PostTransfer200ApplicationJSONSourceModifiedDateTransferAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostTransfer200ApplicationJSONSourceModifiedDateTransferAccount
/** 
 * The details of the accounts the transfer is moving from.
**/
export class PostTransfer200ApplicationJSONSourceModifiedDateTransferAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostTransfer200ApplicationJSONSourceModifiedDateTransferAccountAccountRef;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;
}

export class PostTransfer200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class PostTransfer200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

export class PostTransfer200ApplicationJSONSourceModifiedDateTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostTransfer200ApplicationJSONSourceModifiedDate
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
export class PostTransfer200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactRef" })
  contactRef?: PostTransfer200ApplicationJSONSourceModifiedDateContactRef;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=depositedRecordRefs" })
  depositedRecordRefs?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: PostTransfer200ApplicationJSONSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostTransfer200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: PostTransfer200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: PostTransfer200ApplicationJSONSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: PostTransfer200ApplicationJSONSourceModifiedDateTrackingCategoryRefs })
  trackingCategoryRefs?: PostTransfer200ApplicationJSONSourceModifiedDateTrackingCategoryRefs[];
}
export enum PostTransfer200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostTransfer200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

// PostTransfer200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostTransfer200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: PostTransfer200ApplicationJSONValidationValidationItem })
  errors?: PostTransfer200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: PostTransfer200ApplicationJSONValidationValidationItem })
  warnings?: PostTransfer200ApplicationJSONValidationValidationItem[];
}

export class PostTransfer200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: PostTransfer200ApplicationJSONChanges })
  changes?: PostTransfer200ApplicationJSONChanges[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PostTransfer200ApplicationJSONSourceModifiedDate;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata({ data: "json, name=requestedOnUtc" })
  requestedOnUtc: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostTransfer200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: PostTransfer200ApplicationJSONValidation;
}

export class PostTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTransfer200ApplicationJSONObject?: PostTransfer200ApplicationJSON;
}