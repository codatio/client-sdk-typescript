import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCashFlowStatementPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCashFlowStatementQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodsToCompare" })
  periodsToCompare: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startMonth" })
  startMonth?: Date;
}

export class GetCashFlowStatementSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetCashFlowStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCashFlowStatementPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCashFlowStatementQueryParams;

  @SpeakeasyMetadata()
  security: GetCashFlowStatementSecurity;
}
export enum GetCashFlowStatement200ApplicationJSONReportBasisEnum {
    Unknown = "Unknown",
    Accrual = "Accrual",
    Cash = "Cash"
}
export enum GetCashFlowStatement200ApplicationJSONReportInputEnum {
    Unknown = "Unknown",
    Indirect = "Indirect",
    Direct = "Direct"
}

export class GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

export class GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLineReportLine })
  items?: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLineReportLine[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

export class GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLine })
  items?: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLine[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

// GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLine
/** 
 * ReportLines for cash payments to suppliers for the purchase of goods or services.
**/
export class GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLine })
  items?: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLine[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

// GetCashFlowStatement200ApplicationJSONCashFlowStatement
/** 
 * > View the coverage for cash flow statement in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=cashFlowStatement" target="_blank">Data coverage explorer</a>.
 * 
 * > ** Operating activities only**  
 * > 
 * > Currently, the cash flow statement shows cash that flows into and out of the company from operating activities *only*. Operating activities generate cash from the sale of goods or services.
 * 
 * ## Overview
 * 
 * A cash flow statement is a financial report that records all cash that is received or spent by a company during a given period. It gives you a clearer picture of the company’s performance, and their ability to pay creditors and finance growth.
 * 
 * > **Cash flow statement or balance sheet?**
 * > 
 * > Look at the cash flow statement to understand a company's ability to pay its bills. Although the balance sheet may show healthy earnings at a specific point in time, the cash flow statement allows you to see whether the company is meeting its financial commitments, such as paying creditors or its employees.
**/
export class GetCashFlowStatement200ApplicationJSONCashFlowStatement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cashPayments" })
  cashPayments?: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLine;

  @SpeakeasyMetadata({ data: "json, name=cashReceipts" })
  cashReceipts?: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLine;

  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: Date;
}

export class GetCashFlowStatement200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=earliestAvailableMonth" })
  earliestAvailableMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=mostRecentAvailableMonth" })
  mostRecentAvailableMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=reportBasis" })
  reportBasis: GetCashFlowStatement200ApplicationJSONReportBasisEnum;

  @SpeakeasyMetadata({ data: "json, name=reportInput" })
  reportInput: GetCashFlowStatement200ApplicationJSONReportInputEnum;

  @SpeakeasyMetadata({ data: "json, name=reports", elemType: GetCashFlowStatement200ApplicationJSONCashFlowStatement })
  reports: GetCashFlowStatement200ApplicationJSONCashFlowStatement[];
}

export class GetCashFlowStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCashFlowStatement200ApplicationJSONObject?: GetCashFlowStatement200ApplicationJSON;
}