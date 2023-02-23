import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showMetricInputs" })
  showMetricInputs?: boolean;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryParams;
}
export enum GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONErrorsTypeEnum {
    DataNotSynced = "DataNotSynced",
    DataNotSupported = "DataNotSupported",
    DataSyncFailed = "DataSyncFailed",
    DataTypeNotEnabled = "DataTypeNotEnabled"
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONErrorsTypeEnum;
}

// GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricErrorsAssessErrorDetails
/** 
 * Dictionary list outlining the missing properties or allowed values.
**/
export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricErrorsAssessErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=propertyDetail1" })
  propertyDetail1?: string[];

  @SpeakeasyMetadata({ data: "json, name=propertyDetail2" })
  propertyDetail2?: string[];

  @SpeakeasyMetadata({ data: "json, name=propertyDetailN" })
  propertyDetailN?: string[];
}
export enum GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricErrorsTypeEnum {
    UncategorizedAccounts = "UncategorizedAccounts",
    MissingInputData = "MissingInputData",
    InputDataError = "InputDataError"
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricErrorsAssessErrorDetails;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricErrorsTypeEnum;
}
export enum GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricKeyEnum {
    Unknown = "Unknown",
    Ebitda = "EBITDA",
    DebtServiceCoverageRatio = "DebtServiceCoverageRatio",
    CurrentRatioQuickRatio = "CurrentRatio QuickRatio",
    GrossProfitMargin = "GrossProfitMargin",
    FixedChargeCoverageRatio = "FixedChargeCoverageRatio",
    WorkingCapital = "WorkingCapital",
    FreeCashFlow = "FreeCashFlow",
    NetProfitMargin = "NetProfitMargin",
    ReturnOnAssetsRatio = "ReturnOnAssetsRatio",
    ReturnOnEquityRatio = "ReturnOnEquityRatio",
    OperatingProfitMargin = "OperatingProfitMargin",
    DeptToEquity = "DeptToEquity",
    DebtToAssets = "DebtToAssets",
    InterestCoverageRatio = "InterestCoverageRatio",
    CashRatio = "CashRatio",
    InventoryTurnoverRatio = "InventoryTurnoverRatio",
    AssetTurnoverRatio = "AssetTurnoverRatio",
    WorkingCapitalTurnoverRatio = "WorkingCapitalTurnoverRatio",
    DaysSalesOutstanding = "DaysSalesOutstanding",
    DaysPayablesOutstanding = "DaysPayablesOutstanding"
}
export enum GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricMetricUnitEnum {
    Ratio = "Ratio",
    Money = "Money"
}

// GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrorsAssessErrorDetails
/** 
 * Dictionary list outlining the missing properties or allowed values.
**/
export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrorsAssessErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=propertyDetail1" })
  propertyDetail1?: string[];

  @SpeakeasyMetadata({ data: "json, name=propertyDetail2" })
  propertyDetail2?: string[];

  @SpeakeasyMetadata({ data: "json, name=propertyDetailN" })
  propertyDetailN?: string[];
}
export enum GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrorsTypeEnum {
    MissingAccountData = "MissingAccountData",
    DatesOutOfRange = "DatesOutOfRange"
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrorsAssessErrorDetails;

  @SpeakeasyMetadata({ data: "json, name=massage" })
  massage?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrorsTypeEnum;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriodsInputs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriods extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrors })
  errors?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrors[];

  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriodsInputs })
  inputs?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriodsInputs[];

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricErrors })
  errors?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricErrors[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=metricUnit" })
  metricUnit?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricMetricUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=periods", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriods })
  periods?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetricPeriods[];
}
export enum GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONPeriodUnitEnum {
    Month = "Month",
    Week = "Week",
    Day = "Day"
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONErrors })
  errors?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONErrors[];

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetric })
  metrics?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONFinancialMetric[];

  @SpeakeasyMetadata({ data: "json, name=periodUnit" })
  periodUnit?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONPeriodUnitEnum;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSONObject?: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics200ApplicationJSON;
}