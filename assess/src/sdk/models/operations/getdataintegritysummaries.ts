import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum GetDataIntegritySummariesDataTypeEnum {
    BankingAccounts = "banking-accounts",
    BankingTransactions = "banking-transactions",
    BankAccounts = "bankAccounts",
    AccountTransactions = "accountTransactions"
}

export class GetDataIntegritySummariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataType" })
  dataType: GetDataIntegritySummariesDataTypeEnum;
}

export class GetDataIntegritySummariesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetDataIntegritySummariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataIntegritySummariesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataIntegritySummariesQueryParams;
}

export class GetDataIntegritySummaries200ApplicationJSONDataIntegrityTypeByAmount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "matchPercentage" })
  matchPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "matched" })
  matched?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unmatched" })
  unmatched?: number;
}

export class GetDataIntegritySummaries200ApplicationJSONDataIntegrityTypeByCount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "matchPercentage" })
  matchPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "matched" })
  matched?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unmatched" })
  unmatched?: number;
}

export class GetDataIntegritySummaries200ApplicationJSONDataIntegrityType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "byAmount" })
  @Type(() => GetDataIntegritySummaries200ApplicationJSONDataIntegrityTypeByAmount)
  byAmount?: GetDataIntegritySummaries200ApplicationJSONDataIntegrityTypeByAmount;

  @SpeakeasyMetadata()
  @Expose({ name: "byCount" })
  @Type(() => GetDataIntegritySummaries200ApplicationJSONDataIntegrityTypeByCount)
  byCount?: GetDataIntegritySummaries200ApplicationJSONDataIntegrityTypeByCount;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class GetDataIntegritySummaries200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetDataIntegritySummaries200ApplicationJSONDataIntegrityType })
  @Expose({ name: "summaries" })
  @Type(() => GetDataIntegritySummaries200ApplicationJSONDataIntegrityType)
  summaries?: GetDataIntegritySummaries200ApplicationJSONDataIntegrityType[];
}

export class GetDataIntegritySummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataIntegritySummaries200ApplicationJSONObject?: GetDataIntegritySummaries200ApplicationJSON;
}