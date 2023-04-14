/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Metric level error.
 */
export enum FinancialMetricErrorsTypeEnum {
  UncategorizedAccounts = "UncategorizedAccounts",
  MissingInputData = "MissingInputData",
  InputDataError = "InputDataError",
}

export class FinancialMetricErrors extends SpeakeasyBase {
  /**
   * Dictionary list outlining the missing properties or allowed values.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details?: Record<string, string[]>;

  /**
   * Description of the error.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  /**
   * Metric level error.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: FinancialMetricErrorsTypeEnum;
}

export enum FinancialMetricKeyEnum {
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

export enum FinancialMetricMetricUnitEnum {
  Ratio = "Ratio",
  Money = "Money",
}

/**
 * Period error type.
 */
export enum FinancialMetricPeriodsErrorsTypeEnum {
  MissingAccountData = "MissingAccountData",
  DatesOutOfRange = "DatesOutOfRange",
}

export class FinancialMetricPeriodsErrors extends SpeakeasyBase {
  /**
   * Dictionary list outlining the missing properties or allowed values.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details?: Record<string, string[]>;

  /**
   * Description of the error.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "massage" })
  massage?: string;

  /**
   * Period error type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: FinancialMetricPeriodsErrorsTypeEnum;
}

export class FinancialMetricPeriodsInputs extends SpeakeasyBase {
  /**
   * The name of the metric input e.g. “Current Assets”, “Capital Expenditure”.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The positive or negative number of the input value.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: number;
}

export class FinancialMetricPeriods extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FinancialMetricPeriodsErrors })
  @Expose({ name: "errors" })
  @Type(() => FinancialMetricPeriodsErrors)
  errors?: FinancialMetricPeriodsErrors[];

  /**
   * The date from which the report starts.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
  fromDate?: RFCDate;

  @SpeakeasyMetadata({ elemType: FinancialMetricPeriodsInputs })
  @Expose({ name: "inputs" })
  @Type(() => FinancialMetricPeriodsInputs)
  inputs?: FinancialMetricPeriodsInputs[];

  /**
   * The date on which the report ends (inclusive of day).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
  toDate?: RFCDate;

  /**
   * The top level metric value that is calculated for the specified period.
   *
   * @remarks
   *
   * If the system cannot calculate for that period, the value will be null. The system will still show the metric inputs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: number;
}

export class FinancialMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FinancialMetricErrors })
  @Expose({ name: "errors" })
  @Type(() => FinancialMetricErrors)
  errors?: FinancialMetricErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: FinancialMetricKeyEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "metricUnit" })
  metricUnit?: FinancialMetricMetricUnitEnum;

  /**
   * Metric name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ elemType: FinancialMetricPeriods })
  @Expose({ name: "periods" })
  @Type(() => FinancialMetricPeriods)
  periods?: FinancialMetricPeriods[];
}
