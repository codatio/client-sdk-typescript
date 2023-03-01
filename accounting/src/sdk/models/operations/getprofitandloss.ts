import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetProfitAndLossPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetProfitAndLossQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodsToCompare" })
  periodsToCompare: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startMonth" })
  startMonth?: Date;
}

export class GetProfitAndLossSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetProfitAndLossRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProfitAndLossPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProfitAndLossQueryParams;

  @SpeakeasyMetadata()
  security: GetProfitAndLossSecurity;
}
export enum GetProfitAndLoss200ApplicationJSONReportBasisEnum {
    Unknown = "Unknown",
    Accrual = "Accrual",
    Cash = "Cash"
}

export class GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

export class GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLineReportLine })
  items?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLineReportLine[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

export class GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLine })
  items?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLineReportLine[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

// GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine
/** 
 * ReportLine items for cost of sales in the given date range.
**/
export class GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLine })
  items?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLineReportLine[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
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
  @SpeakeasyMetadata({ data: "json, name=costOfSales" })
  costOfSales?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine;

  @SpeakeasyMetadata({ data: "json, name=expenses" })
  expenses?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine;

  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=grossProfit" })
  grossProfit: number;

  @SpeakeasyMetadata({ data: "json, name=income" })
  income?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine;

  @SpeakeasyMetadata({ data: "json, name=netOperatingProfit" })
  netOperatingProfit: number;

  @SpeakeasyMetadata({ data: "json, name=netOtherIncome" })
  netOtherIncome: number;

  @SpeakeasyMetadata({ data: "json, name=netProfit" })
  netProfit: number;

  @SpeakeasyMetadata({ data: "json, name=otherExpenses" })
  otherExpenses?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine;

  @SpeakeasyMetadata({ data: "json, name=otherIncome" })
  otherIncome?: GetProfitAndLoss200ApplicationJSONProfitAndLossReportReportLine;

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: Date;
}

export class GetProfitAndLoss200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=earliestAvailableMonth" })
  earliestAvailableMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=mostRecentAvailableMonth" })
  mostRecentAvailableMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=reportBasis" })
  reportBasis: GetProfitAndLoss200ApplicationJSONReportBasisEnum;

  @SpeakeasyMetadata({ data: "json, name=reports", elemType: GetProfitAndLoss200ApplicationJSONProfitAndLossReport })
  reports: GetProfitAndLoss200ApplicationJSONProfitAndLossReport[];
}

export class GetProfitAndLossResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProfitAndLoss200ApplicationJSONObject?: GetProfitAndLoss200ApplicationJSON;
}