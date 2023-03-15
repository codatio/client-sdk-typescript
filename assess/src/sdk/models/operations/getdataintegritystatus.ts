import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum GetDataIntegrityStatusDataTypeEnum {
  BankingAccounts = "banking-accounts",
  BankingTransactions = "banking-transactions",
  BankAccounts = "bankAccounts",
  AccountTransactions = "accountTransactions",
}

export class GetDataIntegrityStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=dataType",
  })
  dataType: GetDataIntegrityStatusDataTypeEnum;
}

export class GetDataIntegrityStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataIntegrityStatusPathParams;
}

// GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeAmounts
/**
 * Only returned for transactions. For accounts, there is nothing returned.
 **/
export class GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeAmounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "max" })
  max?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "min" })
  min?: number;
}

export class GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeConnectionIds extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "target" })
  target?: string[];
}

// GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeDates
/**
 * Only returned for transactions. For accounts, there is nothing returned.
 **/
export class GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeDates extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "maxDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  maxDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "maxOverlappingDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  maxOverlappingDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "minDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  minDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "minOverlappingDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  minOverlappingDate?: Date;
}
export enum GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeStatusInfoCurrentStatusEnum {
  Unknown = "Unknown",
  DoesNotExist = "DoesNotExist",
  Error = "Error",
  Complete = "Complete",
}

export class GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currentStatus" })
  currentStatus?: GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeStatusInfoCurrentStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "lastMatched" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastMatched?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "statusMessage" })
  statusMessage?: string;
}

export class GetDataIntegrityStatus200ApplicationJSONDataIntegrityType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amounts" })
  @Type(() => GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeAmounts)
  amounts?: GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeAmounts;

  @SpeakeasyMetadata()
  @Expose({ name: "connectionIds" })
  @Type(
    () => GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeConnectionIds
  )
  connectionIds?: GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeConnectionIds;

  @SpeakeasyMetadata()
  @Expose({ name: "dates" })
  @Type(() => GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeDates)
  dates?: GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeDates;

  @SpeakeasyMetadata()
  @Expose({ name: "statusInfo" })
  @Type(
    () => GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeStatusInfo
  )
  statusInfo?: GetDataIntegrityStatus200ApplicationJSONDataIntegrityTypeStatusInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetDataIntegrityStatus200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetDataIntegrityStatus200ApplicationJSONDataIntegrityType,
  })
  @Expose({ name: "metadata" })
  @Type(() => GetDataIntegrityStatus200ApplicationJSONDataIntegrityType)
  metadata?: GetDataIntegrityStatus200ApplicationJSONDataIntegrityType[];
}

export class GetDataIntegrityStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getDataIntegrityStatus200ApplicationJSONObject?: GetDataIntegrityStatus200ApplicationJSON;
}
