import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetCashFlowStatementPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCashFlowStatementQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodsToCompare" })
  periodsToCompare: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startMonth;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  startMonth?: Date;
}

export class GetCashFlowStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCashFlowStatementPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCashFlowStatementQueryParams;
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

export class GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ elemType: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLineReportLine })
  @Expose({ name: "items" })
  @Type(() => GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLineReportLine)
  items?: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLineReportLine[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}

export class GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ elemType: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLine })
  @Expose({ name: "items" })
  @Type(() => GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLine)
  items?: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLineReportLine[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}

// GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLine
/** 
 * ReportLines for cash payments to suppliers for the purchase of goods or services.
**/
export class GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ elemType: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLine })
  @Expose({ name: "items" })
  @Type(() => GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLine)
  items?: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLineReportLine[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "cashPayments" })
  @Type(() => GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLine)
  cashPayments?: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "cashReceipts" })
  @Type(() => GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLine)
  cashReceipts?: GetCashFlowStatement200ApplicationJSONCashFlowStatementReportLine;

  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  fromDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  toDate?: Date;
}

export class GetCashFlowStatement200ApplicationJSON extends SpeakeasyBase {
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
  reportBasis: GetCashFlowStatement200ApplicationJSONReportBasisEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "reportInput" })
  reportInput: GetCashFlowStatement200ApplicationJSONReportInputEnum;

  @SpeakeasyMetadata({ elemType: GetCashFlowStatement200ApplicationJSONCashFlowStatement })
  @Expose({ name: "reports" })
  @Type(() => GetCashFlowStatement200ApplicationJSONCashFlowStatement)
  reports: GetCashFlowStatement200ApplicationJSONCashFlowStatement[];
}

export class GetCashFlowStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getCashFlowStatement200ApplicationJSONObject?: GetCashFlowStatement200ApplicationJSON;
}