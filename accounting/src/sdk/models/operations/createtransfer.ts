import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

// CreateTransferSourceModifiedDateContactRef
/**
 * The customer or supplier for the transfer, if available.
 **/
export class CreateTransferSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// CreateTransferSourceModifiedDateTransferAccountAccountRef
/**
 * The account that the transfer is moving from or to.
 **/
export class CreateTransferSourceModifiedDateTransferAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateTransferSourceModifiedDateTransferAccount
/**
 * The details of the accounts the transfer is moving from.
 **/
export class CreateTransferSourceModifiedDateTransferAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreateTransferSourceModifiedDateTransferAccountAccountRef)
  accountRef?: CreateTransferSourceModifiedDateTransferAccountAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;
}

export class CreateTransferSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// CreateTransferSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class CreateTransferSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

export class CreateTransferSourceModifiedDateTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateTransferSourceModifiedDate
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
export class CreateTransferSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contactRef" })
  @Type(() => CreateTransferSourceModifiedDateContactRef)
  contactRef?: CreateTransferSourceModifiedDateContactRef;

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
  @Type(() => CreateTransferSourceModifiedDateTransferAccount)
  from?: CreateTransferSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateTransferSourceModifiedDateMetadata)
  metadata?: CreateTransferSourceModifiedDateMetadata;

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
  @Type(() => CreateTransferSourceModifiedDateSupplementalData)
  supplementalData?: CreateTransferSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  @Type(() => CreateTransferSourceModifiedDateTransferAccount)
  to?: CreateTransferSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata({
    elemType: CreateTransferSourceModifiedDateTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => CreateTransferSourceModifiedDateTrackingCategoryRefs)
  trackingCategoryRefs?: CreateTransferSourceModifiedDateTrackingCategoryRefs[];
}

export class CreateTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: CreateTransferSourceModifiedDate;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class CreateTransfer200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}
export enum CreateTransfer200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class CreateTransfer200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CreateTransfer200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: CreateTransfer200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreateTransfer200ApplicationJSONChangesTypeEnum;
}

// CreateTransfer200ApplicationJSONSourceModifiedDateContactRef
/**
 * The customer or supplier for the transfer, if available.
 **/
export class CreateTransfer200ApplicationJSONSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

// CreateTransfer200ApplicationJSONSourceModifiedDateTransferAccountAccountRef
/**
 * The account that the transfer is moving from or to.
 **/
export class CreateTransfer200ApplicationJSONSourceModifiedDateTransferAccountAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateTransfer200ApplicationJSONSourceModifiedDateTransferAccount
/**
 * The details of the accounts the transfer is moving from.
 **/
export class CreateTransfer200ApplicationJSONSourceModifiedDateTransferAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () =>
      CreateTransfer200ApplicationJSONSourceModifiedDateTransferAccountAccountRef
  )
  accountRef?: CreateTransfer200ApplicationJSONSourceModifiedDateTransferAccountAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;
}

export class CreateTransfer200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

// CreateTransfer200ApplicationJSONSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class CreateTransfer200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

export class CreateTransfer200ApplicationJSONSourceModifiedDateTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

// CreateTransfer200ApplicationJSONSourceModifiedDate
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
export class CreateTransfer200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contactRef" })
  @Type(() => CreateTransfer200ApplicationJSONSourceModifiedDateContactRef)
  contactRef?: CreateTransfer200ApplicationJSONSourceModifiedDateContactRef;

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
  @Type(() => CreateTransfer200ApplicationJSONSourceModifiedDateTransferAccount)
  from?: CreateTransfer200ApplicationJSONSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateTransfer200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: CreateTransfer200ApplicationJSONSourceModifiedDateMetadata;

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
  @Type(
    () => CreateTransfer200ApplicationJSONSourceModifiedDateSupplementalData
  )
  supplementalData?: CreateTransfer200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  @Type(() => CreateTransfer200ApplicationJSONSourceModifiedDateTransferAccount)
  to?: CreateTransfer200ApplicationJSONSourceModifiedDateTransferAccount;

  @SpeakeasyMetadata({
    elemType:
      CreateTransfer200ApplicationJSONSourceModifiedDateTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () => CreateTransfer200ApplicationJSONSourceModifiedDateTrackingCategoryRefs
  )
  trackingCategoryRefs?: CreateTransfer200ApplicationJSONSourceModifiedDateTrackingCategoryRefs[];
}
export enum CreateTransfer200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class CreateTransfer200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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

// CreateTransfer200ApplicationJSONValidation
/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 **/
export class CreateTransfer200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: CreateTransfer200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => CreateTransfer200ApplicationJSONValidationValidationItem)
  errors?: CreateTransfer200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: CreateTransfer200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => CreateTransfer200ApplicationJSONValidationValidationItem)
  warnings?: CreateTransfer200ApplicationJSONValidationValidationItem[];
}

export class CreateTransfer200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateTransfer200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => CreateTransfer200ApplicationJSONChanges)
  changes?: CreateTransfer200ApplicationJSONChanges[];

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => CreateTransfer200ApplicationJSONSourceModifiedDate)
  data?: CreateTransfer200ApplicationJSONSourceModifiedDate;

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
  status: CreateTransfer200ApplicationJSONStatusEnum;

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
  @Type(() => CreateTransfer200ApplicationJSONValidation)
  validation?: CreateTransfer200ApplicationJSONValidation;
}

export class CreateTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createTransfer200ApplicationJSONObject?: CreateTransfer200ApplicationJSON;
}
