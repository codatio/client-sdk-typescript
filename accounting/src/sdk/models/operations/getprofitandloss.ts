import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetProfitAndLossRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=periodLength",
  })
  periodLength: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=periodsToCompare",
  })
  periodsToCompare: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=startMonth;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  startMonth?: Date;
}
export enum GetProfitAndLoss200ApplicationJSONReportBasisEnum {
  Unknown = "Unknown",
  Accrual = "Accrual",
  Cash = "Cash",
}

export class GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}

export class GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata({
    elemType:
      GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLineReportLine,
  })
  @Expose({ name: "items" })
  @Type(
    () =>
      GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLineReportLine
  )
  items?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLineReportLine[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}

export class GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata({
    elemType:
      GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLine,
  })
  @Expose({ name: "items" })
  @Type(
    () =>
      GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLine
  )
  items?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLine[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}

// GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine
/**
 * ReportLine items for cost of sales in the given date range.
 **/
export class GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata({
    elemType:
      GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLine,
  })
  @Expose({ name: "items" })
  @Type(
    () =>
      GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLine
  )
  items?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLine[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}

// GetProfitAndLoss200ApplicationJSONProfitAndLossReport
/**
 * > **Language tip:** Profit and loss statement is also referred to as **income statement** under US GAAP (Generally Accepted Accounting Principles).
 *
 * > View the coverage for profit and loss in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=profitAndLoss" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * The purpose of a profit and loss report is to present the financial performance of a company over a specified time period.
 *
 * A profit and loss report shows a company's total income and expenses for a specified period of time and whether a profit or loss has been made.
 *
 * > **Profit and loss or balance sheet?**
 * > Profit and loss reports summarise the total revenue, expenses, and profit or loss over a specified time period. A balance sheet report presents all assets, liability, and equity for a given date.
 *
 *
 * **Structure of this report**
 * This report will reflect the structure and line descriptions that the business has set in their own accounting platform.
 *
 * **History**
 * By default, Codat pulls (up to) 24 months of profit and loss history for a company. You can adjust this to fetch more history, where available, by updating the `monthsToSync` value for `profitAndLoss` on the [data type settings endpoint](https://docs.codat.io/codat-api#/operations/post-profile-syncSettings).
 *
 * **Want to pull this in a standardised structure?**
 * Our [Enhanced Financials](https://docs.codat.io/assess/reports/enhanced-financials/financials) endpoints provide the same report under standardized headings, allowing you to pull it in the same format for all of your business customers.
 **/
export class GetProfitAndLoss200ApplicationJSONProfitAndLossReport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "costOfSales" })
  @Type(() => GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine)
  costOfSales?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "expenses" })
  @Type(() => GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine)
  expenses?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  fromDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "grossProfit" })
  grossProfit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "income" })
  @Type(() => GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine)
  income?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "netOperatingProfit" })
  netOperatingProfit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "netOtherIncome" })
  netOtherIncome: number;

  @SpeakeasyMetadata()
  @Expose({ name: "netProfit" })
  netProfit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "otherExpenses" })
  @Type(() => GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine)
  otherExpenses?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "otherIncome" })
  @Type(() => GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine)
  otherIncome?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  toDate?: Date;
}

export class GetProfitAndLoss200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "earliestAvailableMonth" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  earliestAvailableMonth?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "mostRecentAvailableMonth" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  mostRecentAvailableMonth?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "reportBasis" })
  reportBasis: GetProfitAndLoss200ApplicationJSONReportBasisEnum;

  @SpeakeasyMetadata({
    elemType: GetProfitAndLoss200ApplicationJSONProfitAndLossReport,
  })
  @Expose({ name: "reports" })
  @Type(() => GetProfitAndLoss200ApplicationJSONProfitAndLossReport)
  reports: GetProfitAndLoss200ApplicationJSONProfitAndLossReport[];
}

export class GetProfitAndLossResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getProfitAndLoss200ApplicationJSONObject?: GetProfitAndLoss200ApplicationJSON;
}
