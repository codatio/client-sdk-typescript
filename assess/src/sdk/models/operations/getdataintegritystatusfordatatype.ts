import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum GetDataIntegrityStatusForDataTypeDataTypeEnum {
    BankingAccounts = "banking-accounts",
    BankingTransactions = "banking-transactions",
    BankAccounts = "bankAccounts",
    AccountTransactions = "accountTransactions"
}

export class GetDataIntegrityStatusForDataTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataType" })
  dataType: GetDataIntegrityStatusForDataTypeDataTypeEnum;
}

export class GetDataIntegrityStatusForDataTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataIntegrityStatusForDataTypePathParams;
}

// GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityTypeAmounts
/** 
 * Only returned for transactions. For accounts, there is nothing returned.
**/
export class GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityTypeAmounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;
}

export class GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityTypeConnectionIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string[];

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string[];
}

// GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityTypeDates
/** 
 * Only returned for transactions. For accounts, there is nothing returned.
**/
export class GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityTypeDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxDate" })
  maxDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=maxOverlappingDate" })
  maxOverlappingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=minDate" })
  minDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=minOverlappingDate" })
  minOverlappingDate?: Date;
}
export enum GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityTypeStatusInfoCurrentStatusEnum {
    Unknown = "Unknown",
    DoesNotExist = "DoesNotExist",
    Error = "Error",
    Complete = "Complete"
}

export class GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityTypeStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentStatus" })
  currentStatus?: GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityTypeStatusInfoCurrentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=lastMatched" })
  lastMatched?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;
}

export class GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amounts" })
  amounts?: GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityTypeAmounts;

  @SpeakeasyMetadata({ data: "json, name=connectionIds" })
  connectionIds?: GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityTypeConnectionIds;

  @SpeakeasyMetadata({ data: "json, name=dates" })
  dates?: GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityTypeDates;

  @SpeakeasyMetadata({ data: "json, name=statusInfo" })
  statusInfo?: GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityTypeStatusInfo;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataIntegrityStatusForDataType200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityType })
  metadata?: GetDataIntegrityStatusForDataType200ApplicationJSONDataIntegrityType[];
}

export class GetDataIntegrityStatusForDataTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataIntegrityStatusForDataType200ApplicationJSONObject?: GetDataIntegrityStatusForDataType200ApplicationJSON;
}