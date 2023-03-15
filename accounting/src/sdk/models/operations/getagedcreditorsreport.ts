import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetAgedCreditorsReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}

export class GetAgedCreditorsReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=numberOfPeriods",
  })
  numberOfPeriods?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=periodLengthDays",
  })
  periodLengthDays?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reportDate;dateTimeFormat=YYYY-MM-DD",
  })
  reportDate?: Date;
}

export class GetAgedCreditorsReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAgedCreditorsReportPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAgedCreditorsReportQueryParams;
}

export class GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstandingAgedOutstandingAmount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata({
    elemType:
      GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType,
  })
  @Expose({ name: "details" })
  @Type(
    () =>
      GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType
  )
  details?: GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType[];

  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  fromDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  toDate?: Date;
}

export class GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstanding extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstandingAgedOutstandingAmount,
  })
  @Expose({ name: "agedOutstandingAmounts" })
  @Type(
    () =>
      GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstandingAgedOutstandingAmount
  )
  agedOutstandingAmounts?: GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstandingAgedOutstandingAmount[];

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;
}

export class GetAgedCreditorsReportAgedCreditorsReportAgedCreditor extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstanding,
  })
  @Expose({ name: "agedCurrencyOutstanding" })
  @Type(
    () =>
      GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstanding
  )
  agedCurrencyOutstanding?: GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstanding[];

  @SpeakeasyMetadata()
  @Expose({ name: "supplierId" })
  supplierId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

export class GetAgedCreditorsReportAgedCreditorsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetAgedCreditorsReportAgedCreditorsReportAgedCreditor,
  })
  @Expose({ name: "data" })
  @Type(() => GetAgedCreditorsReportAgedCreditorsReportAgedCreditor)
  data?: GetAgedCreditorsReportAgedCreditorsReportAgedCreditor[];

  @SpeakeasyMetadata()
  @Expose({ name: "generated" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  generated?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "reportDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  reportDate?: Date;
}

export class GetAgedCreditorsReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agedCreditorsReport?: GetAgedCreditorsReportAgedCreditorsReport;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
