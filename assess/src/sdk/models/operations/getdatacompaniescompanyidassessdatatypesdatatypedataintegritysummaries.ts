import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesDataTypeEnum {
    BankingAccounts = "banking-accounts",
    BankingTransactions = "banking-transactions",
    BankAccounts = "bankAccounts",
    AccountTransactions = "accountTransactions"
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataType" })
  dataType: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesDataTypeEnum;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryParams;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries200ApplicationJSONDataIntegrityTypeByAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=matchPercentage" })
  matchPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=matched" })
  matched?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=unmatched" })
  unmatched?: number;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries200ApplicationJSONDataIntegrityTypeByCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchPercentage" })
  matchPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=matched" })
  matched?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=unmatched" })
  unmatched?: number;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries200ApplicationJSONDataIntegrityType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byAmount" })
  byAmount?: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries200ApplicationJSONDataIntegrityTypeByAmount;

  @SpeakeasyMetadata({ data: "json, name=byCount" })
  byCount?: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries200ApplicationJSONDataIntegrityTypeByCount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=summaries", elemType: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries200ApplicationJSONDataIntegrityType })
  summaries?: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries200ApplicationJSONDataIntegrityType[];
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries200ApplicationJSONObject?: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries200ApplicationJSON;
}