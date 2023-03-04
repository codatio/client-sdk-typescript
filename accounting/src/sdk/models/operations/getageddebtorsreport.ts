import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetAgedDebtorsReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetAgedDebtorsReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLengthDays" })
  periodLengthDays?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate;dateTimeFormat=YYYY-MM-DD" })
  reportDate?: Date;
}

export class GetAgedDebtorsReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAgedDebtorsReportPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAgedDebtorsReportQueryParams;
}

export class GetAgedDebtorsReportAgedDebtorsReportAgedDebtorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetAgedDebtorsReportAgedDebtorsReportAgedDebtorAgedCurrencyOutstandingAgedOutstandingAmount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata({ elemType: GetAgedDebtorsReportAgedDebtorsReportAgedDebtorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType })
  @Expose({ name: "details" })
  @Type(() => GetAgedDebtorsReportAgedDebtorsReportAgedDebtorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType)
  details?: GetAgedDebtorsReportAgedDebtorsReportAgedDebtorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType[];

  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  fromDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  toDate?: Date;
}

export class GetAgedDebtorsReportAgedDebtorsReportAgedDebtorAgedCurrencyOutstanding extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetAgedDebtorsReportAgedDebtorsReportAgedDebtorAgedCurrencyOutstandingAgedOutstandingAmount })
  @Expose({ name: "agedOutstandingAmounts" })
  @Type(() => GetAgedDebtorsReportAgedDebtorsReportAgedDebtorAgedCurrencyOutstandingAgedOutstandingAmount)
  agedOutstandingAmounts?: GetAgedDebtorsReportAgedDebtorsReportAgedDebtorAgedCurrencyOutstandingAgedOutstandingAmount[];

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;
}

export class GetAgedDebtorsReportAgedDebtorsReportAgedDebtor extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetAgedDebtorsReportAgedDebtorsReportAgedDebtorAgedCurrencyOutstanding })
  @Expose({ name: "agedCurrencyOutstanding" })
  @Type(() => GetAgedDebtorsReportAgedDebtorsReportAgedDebtorAgedCurrencyOutstanding)
  agedCurrencyOutstanding?: GetAgedDebtorsReportAgedDebtorsReportAgedDebtorAgedCurrencyOutstanding[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerId" })
  customerId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customerName" })
  customerName?: string;
}

export class GetAgedDebtorsReportAgedDebtorsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetAgedDebtorsReportAgedDebtorsReportAgedDebtor })
  @Expose({ name: "data" })
  @Type(() => GetAgedDebtorsReportAgedDebtorsReportAgedDebtor)
  data?: GetAgedDebtorsReportAgedDebtorsReportAgedDebtor[];

  @SpeakeasyMetadata()
  @Expose({ name: "generated" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  generated?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "reportDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  reportDate?: Date;
}

export class GetAgedDebtorsReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agedDebtorsReport?: GetAgedDebtorsReportAgedDebtorsReport;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}