import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetBalanceSheetRequest extends SpeakeasyBase {
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

export class GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLineReportLine extends SpeakeasyBase {
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

export class GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata({
    elemType:
      GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLineReportLine,
  })
  @Expose({ name: "items" })
  @Type(
    () =>
      GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLineReportLine
  )
  items?: GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLineReportLine[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}

export class GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata({
    elemType:
      GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLine,
  })
  @Expose({ name: "items" })
  @Type(
    () =>
      GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLine
  )
  items?: GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLine[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}

// GetBalanceSheet200ApplicationJSONBalanceSheetReportLine
/**
 * ReportLines for assets. For example, fixed and current assets.
 **/
export class GetBalanceSheet200ApplicationJSONBalanceSheetReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata({
    elemType: GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLine,
  })
  @Expose({ name: "items" })
  @Type(() => GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLine)
  items?: GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLine[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}

// GetBalanceSheet200ApplicationJSONBalanceSheet
/**
 * > View the coverage for balance sheet in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=balanceSheet" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * The balance sheet gives interested parties an idea of the company's financial position, in addition to displaying what the company owns and owes.
 *
 * > **Balance sheet or profit and loss report?**
 * >
 * > A profit and loss report summarises the total revenue, expenses, and profit or loss during a specified time period. A balance sheet report shows the financial position of a company at a specific moment in time.
 *
 * **Structure of this report**
 * This report will reflect the structure and line descriptions that the business has set in their own accounting platform.
 *
 * **History**
 * By default, Codat pulls (up to) 24 months of balance sheets for a company. You can adjust this to fetch more history, where available, by updating the `monthsToSync` value for `balanceSheet` on the [data type settings endpoint](https://docs.codat.io/codat-api#/operations/post-profile-syncSettings).
 *
 * **Want to pull this in a standardised structure?**
 * Our [Enhanced Financials](https://docs.codat.io/assess/reports/enhanced-financials/financials) endpoints provide the same report under standardized headings, allowing you to pull it in the same format for all of your business customers.
 **/
export class GetBalanceSheet200ApplicationJSONBalanceSheet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "assets" })
  @Type(() => GetBalanceSheet200ApplicationJSONBalanceSheetReportLine)
  assets?: GetBalanceSheet200ApplicationJSONBalanceSheetReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "equity" })
  @Type(() => GetBalanceSheet200ApplicationJSONBalanceSheetReportLine)
  equity?: GetBalanceSheet200ApplicationJSONBalanceSheetReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "liabilities" })
  @Type(() => GetBalanceSheet200ApplicationJSONBalanceSheetReportLine)
  liabilities?: GetBalanceSheet200ApplicationJSONBalanceSheetReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "netAssets" })
  netAssets: number;
}

export class GetBalanceSheet200ApplicationJSON extends SpeakeasyBase {
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

  @SpeakeasyMetadata({
    elemType: GetBalanceSheet200ApplicationJSONBalanceSheet,
  })
  @Expose({ name: "reports" })
  @Type(() => GetBalanceSheet200ApplicationJSONBalanceSheet)
  reports: GetBalanceSheet200ApplicationJSONBalanceSheet[];
}

export class GetBalanceSheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getBalanceSheet200ApplicationJSONObject?: GetBalanceSheet200ApplicationJSON;
}
