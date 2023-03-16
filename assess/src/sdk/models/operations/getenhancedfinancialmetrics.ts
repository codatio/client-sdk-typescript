import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetEnhancedFinancialMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=numberOfPeriods",
  })
  numberOfPeriods: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=periodLength",
  })
  periodLength: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reportDate",
  })
  reportDate: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=showMetricInputs",
  })
  showMetricInputs?: boolean;
}
export enum GetEnhancedFinancialMetrics200ApplicationJSONErrorsTypeEnum {
  DataNotSynced = "DataNotSynced",
  DataNotSupported = "DataNotSupported",
  DataSyncFailed = "DataSyncFailed",
  DataTypeNotEnabled = "DataTypeNotEnabled",
}

export class GetEnhancedFinancialMetrics200ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetEnhancedFinancialMetrics200ApplicationJSONErrorsTypeEnum;
}

// GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricErrorsAssessErrorDetails
/**
 * Dictionary list outlining the missing properties or allowed values.
 **/
export class GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricErrorsAssessErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "propertyDetail1" })
  propertyDetail1?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "propertyDetail2" })
  propertyDetail2?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "propertyDetailN" })
  propertyDetailN?: string[];
}
export enum GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricErrorsTypeEnum {
  UncategorizedAccounts = "UncategorizedAccounts",
  MissingInputData = "MissingInputData",
  InputDataError = "InputDataError",
}

export class GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  @Type(
    () =>
      GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricErrorsAssessErrorDetails
  )
  details?: GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricErrorsAssessErrorDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricErrorsTypeEnum;
}
export enum GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricKeyEnum {
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
  DaysPayablesOutstanding = "DaysPayablesOutstanding",
}
export enum GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricMetricUnitEnum {
  Ratio = "Ratio",
  Money = "Money",
}

// GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrorsAssessErrorDetails
/**
 * Dictionary list outlining the missing properties or allowed values.
 **/
export class GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrorsAssessErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "propertyDetail1" })
  propertyDetail1?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "propertyDetail2" })
  propertyDetail2?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "propertyDetailN" })
  propertyDetailN?: string[];
}
export enum GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrorsTypeEnum {
  MissingAccountData = "MissingAccountData",
  DatesOutOfRange = "DatesOutOfRange",
}

export class GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  @Type(
    () =>
      GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrorsAssessErrorDetails
  )
  details?: GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrorsAssessErrorDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "massage" })
  massage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrorsTypeEnum;
}

export class GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsInputs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: number;
}

export class GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriods extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrors,
  })
  @Expose({ name: "errors" })
  @Type(
    () =>
      GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrors
  )
  errors?: GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  fromDate?: Date;

  @SpeakeasyMetadata({
    elemType:
      GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsInputs,
  })
  @Expose({ name: "inputs" })
  @Type(
    () =>
      GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsInputs
  )
  inputs?: GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriodsInputs[];

  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  toDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: number;
}

export class GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricErrors,
  })
  @Expose({ name: "errors" })
  @Type(
    () => GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricErrors
  )
  errors?: GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricKeyEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "metricUnit" })
  metricUnit?: GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricMetricUnitEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({
    elemType:
      GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriods,
  })
  @Expose({ name: "periods" })
  @Type(
    () => GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriods
  )
  periods?: GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetricPeriods[];
}
export enum GetEnhancedFinancialMetrics200ApplicationJSONPeriodUnitEnum {
  Month = "Month",
  Week = "Week",
  Day = "Day",
}

export class GetEnhancedFinancialMetrics200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata({
    elemType: GetEnhancedFinancialMetrics200ApplicationJSONErrors,
  })
  @Expose({ name: "errors" })
  @Type(() => GetEnhancedFinancialMetrics200ApplicationJSONErrors)
  errors?: GetEnhancedFinancialMetrics200ApplicationJSONErrors[];

  @SpeakeasyMetadata({
    elemType: GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetric,
  })
  @Expose({ name: "metrics" })
  @Type(() => GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetric)
  metrics?: GetEnhancedFinancialMetrics200ApplicationJSONFinancialMetric[];

  @SpeakeasyMetadata()
  @Expose({ name: "periodUnit" })
  periodUnit?: GetEnhancedFinancialMetrics200ApplicationJSONPeriodUnitEnum;
}

export class GetEnhancedFinancialMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getEnhancedFinancialMetrics200ApplicationJSONObject?: GetEnhancedFinancialMetrics200ApplicationJSON;
}
