import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


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
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// PostTransferSourceModifiedDateTransferAccountAccountRef
/** 
 * The account that the transfer is moving from or to.
**/
export class PostTransferSourceModifiedDateTransferAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostTransferSourceModifiedDateTransferAccount
/** 
 * The details of the accounts the transfer is moving from.
**/
export class PostTransferSourceModifiedDateTransferAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostTransferSourceModifiedDateTransferAccountAccountRef)
  accountRef?: PostTransferSourceModifiedDateTransferAccountAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;
}

export class PostTransferSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class PostTransferSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

export class PostTransferSourceModifiedDateTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "contactRef" })
  @Type(() => PostTransferSourceModifiedDateContactRef)
  contactRef?: PostTransferSourceModifiedDateContactRef;

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
  @Type(() => PostTransferSourceModifiedDateTransferAccount)
  from?: PostTransferSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostTransferSourceModifiedDateMetadata)
  metadata?: PostTransferSourceModifiedDateMetadata;

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
  @Type(() => PostTransferSourceModifiedDateSupplementalData)
  supplementalData?: PostTransferSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  @Type(() => PostTransferSourceModifiedDateTransferAccount)
  to?: PostTransferSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata({ elemType: PostTransferSourceModifiedDateTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => PostTransferSourceModifiedDateTrackingCategoryRefs)
  trackingCategoryRefs?: PostTransferSourceModifiedDateTrackingCategoryRefs[];
}

export class PostTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
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
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => PostTransfer200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: PostTransfer200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PostTransfer200ApplicationJSONChangesTypeEnum;
}

// PostTransfer200ApplicationJSONSourceModifiedDateContactRef
/** 
 * The customer or supplier for the transfer, if available.
**/
export class PostTransfer200ApplicationJSONSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// PostTransfer200ApplicationJSONSourceModifiedDateTransferAccountAccountRef
/** 
 * The account that the transfer is moving from or to.
**/
export class PostTransfer200ApplicationJSONSourceModifiedDateTransferAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// PostTransfer200ApplicationJSONSourceModifiedDateTransferAccount
/** 
 * The details of the accounts the transfer is moving from.
**/
export class PostTransfer200ApplicationJSONSourceModifiedDateTransferAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => PostTransfer200ApplicationJSONSourceModifiedDateTransferAccountAccountRef)
  accountRef?: PostTransfer200ApplicationJSONSourceModifiedDateTransferAccountAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;
}

export class PostTransfer200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class PostTransfer200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

export class PostTransfer200ApplicationJSONSourceModifiedDateTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "contactRef" })
  @Type(() => PostTransfer200ApplicationJSONSourceModifiedDateContactRef)
  contactRef?: PostTransfer200ApplicationJSONSourceModifiedDateContactRef;

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
  @Type(() => PostTransfer200ApplicationJSONSourceModifiedDateTransferAccount)
  from?: PostTransfer200ApplicationJSONSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PostTransfer200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: PostTransfer200ApplicationJSONSourceModifiedDateMetadata;

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
  @Type(() => PostTransfer200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: PostTransfer200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  @Type(() => PostTransfer200ApplicationJSONSourceModifiedDateTransferAccount)
  to?: PostTransfer200ApplicationJSONSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata({ elemType: PostTransfer200ApplicationJSONSourceModifiedDateTrackingCategoryRefs })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => PostTransfer200ApplicationJSONSourceModifiedDateTrackingCategoryRefs)
  trackingCategoryRefs?: PostTransfer200ApplicationJSONSourceModifiedDateTrackingCategoryRefs[];
}
export enum PostTransfer200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostTransfer200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

// PostTransfer200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostTransfer200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostTransfer200ApplicationJSONValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => PostTransfer200ApplicationJSONValidationValidationItem)
  errors?: PostTransfer200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: PostTransfer200ApplicationJSONValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => PostTransfer200ApplicationJSONValidationValidationItem)
  warnings?: PostTransfer200ApplicationJSONValidationValidationItem[];
}

export class PostTransfer200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostTransfer200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => PostTransfer200ApplicationJSONChanges)
  changes?: PostTransfer200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => PostTransfer200ApplicationJSONSourceModifiedDate)
  data?: PostTransfer200ApplicationJSONSourceModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "requestedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestedOnUtc: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PostTransfer200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => PostTransfer200ApplicationJSONValidation)
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