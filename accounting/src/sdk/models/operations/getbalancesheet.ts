import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetBalanceSheetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetBalanceSheetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodsToCompare" })
  periodsToCompare: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startMonth" })
  startMonth?: Date;
}

export class GetBalanceSheetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetBalanceSheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBalanceSheetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetBalanceSheetQueryParams;

  @SpeakeasyMetadata()
  security: GetBalanceSheetSecurity;
}

export class GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

export class GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLineReportLine })
  items?: GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLineReportLine[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

export class GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLine })
  items?: GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLineReportLine[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

// GetBalanceSheet200ApplicationJSONBalanceSheetReportLine
/** 
 * ReportLines for assets. For example, fixed and current assets.
**/
export class GetBalanceSheet200ApplicationJSONBalanceSheetReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLine })
  items?: GetBalanceSheet200ApplicationJSONBalanceSheetReportLineReportLine[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
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
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets?: GetBalanceSheet200ApplicationJSONBalanceSheetReportLine;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=equity" })
  equity?: GetBalanceSheet200ApplicationJSONBalanceSheetReportLine;

  @SpeakeasyMetadata({ data: "json, name=liabilities" })
  liabilities?: GetBalanceSheet200ApplicationJSONBalanceSheetReportLine;

  @SpeakeasyMetadata({ data: "json, name=netAssets" })
  netAssets: number;
}

export class GetBalanceSheet200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=earliestAvailableMonth" })
  earliestAvailableMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=mostRecentAvailableMonth" })
  mostRecentAvailableMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=reports", elemType: GetBalanceSheet200ApplicationJSONBalanceSheet })
  reports: GetBalanceSheet200ApplicationJSONBalanceSheet[];
}

export class GetBalanceSheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBalanceSheet200ApplicationJSONObject?: GetBalanceSheet200ApplicationJSON;
}