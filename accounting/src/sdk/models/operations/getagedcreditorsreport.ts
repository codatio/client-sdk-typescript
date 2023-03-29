/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetAgedCreditorsReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  /**
   * Number of periods to include in the report.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=numberOfPeriods",
  })
  numberOfPeriods?: number;

  /**
   * The length of period in days.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=periodLengthDays",
  })
  periodLengthDays?: number;

  /**
   * Date the report is generated up to.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reportDate;dateTimeFormat=YYYY-MM-DD",
  })
  reportDate?: Date;
}

export class GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstandingAgedOutstandingAmountAmountsOutstandingByDataType extends SpeakeasyBase {
  /**
   * The amount outstanding.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  /**
   * Name of data type with outstanding amount for given period.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstandingAgedOutstandingAmount extends SpeakeasyBase {
  /**
   * The amount outstanding.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  /**
   * Array of details.
   */
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

  /**
   * Start date of period.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  fromDate?: string;

  /**
   * End date of period.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  toDate?: string;
}

export class GetAgedCreditorsReportAgedCreditorsReportAgedCreditorAgedCurrencyOutstanding extends SpeakeasyBase {
  /**
   * Array of outstanding amounts by period.
   */
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

  /**
   * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
   *
   * @remarks
   *
   * ## Unknown currencies
   *
   * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
   *
   * There are only a very small number of edge cases where this currency code is returned by the Codat system.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;
}

export class GetAgedCreditorsReportAgedCreditorsReportAgedCreditor extends SpeakeasyBase {
  /**
   * Array of aged creditors by currency.
   */
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

  /**
   * Supplier ID of the aged creditor.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplierId" })
  supplierId?: string;

  /**
   * Supplier name of the aged creditor.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

/**
 * The Aged Creditors report shows the total balance owed by a business to its suppliers over time.
 *
 * @remarks
 *
 * You can generate it for a company based on recently synced data from your customers' accounting platforms. The report is available in the **Reports** tab in the Codat portal.
 *
 * Total assets or liabilities are grouped into 30-day periods for each supplier, up to the current date. You can adjust the report date, period length, and number of periods to show on each report. The data can be grouped by customer or currency.
 *
 * > It is not guaranteed that write-offs are included in the Aged Creditors report.
 *
 * ## Underlying data
 *
 * The Aged Creditors report is generated from a set of required data types: [Suppliers](https://docs.codat.io/accounting-api#/schemas/Supplier), [Bills](https://docs.codat.io/accounting-api#/schemas/Bill), [Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote), and [Bill payments](https://docs.codat.io/accounting-api#/schemas/BillPayment).
 *
 * To generate the report, the underlying data types must have been synced within 24 hours of each other. Otherwise an error is displayed when you try to run the report. Sync the required data types by clicking the link in the error, and then run the report again.
 *
 * > The Aged Creditor report runs based on the **issue dates** of the underlying data types rather than the due date.
 *
 * ## Accessing the Aged Creditors report in Portal
 *
 * Apart from returning the report via the API as JSON and query, you can also return the Aged Creditors report in the Codat portal.
 *
 * 1. In the navigation bar, click **Companies**.
 * 2. Click the name of the company you want to generate the report for. The company's data page is displayed.
 * 3. Click the **Accounting** tab then click **Reports**.
 * 4. Select **Aged Creditors**.
 * 5. _(Optional)_ Edit the default reporting parameters.
 *    a. You can change the report date in the **Date** box. By default, the report includes transactions that occurred up to, but not including, today's date. To include transactions for today, enter tomorrow's date.
 *    b. In the **Period Length Days** box, select the default period length for each column (the default is 30 days).
 *    b. In the **Number of Periods** box, enter the number of periods to show as columns in the report (the default is 4 periods).
 * 6. To run the report, click **Load aged creditors**.
 * 7. The report is generated and displayed at the bottom of the page.
 *
 * The report will be grouped per supplier and depending on the periods requested. The details indicates whether the amounts owed come from outstanding bills or bill credit notes.
 */
export class GetAgedCreditorsReportAgedCreditorsReport extends SpeakeasyBase {
  /**
   * Array of aged debtors.
   */
  @SpeakeasyMetadata({
    elemType: GetAgedCreditorsReportAgedCreditorsReportAgedCreditor,
  })
  @Expose({ name: "data" })
  @Type(() => GetAgedCreditorsReportAgedCreditorsReportAgedCreditor)
  data?: GetAgedCreditorsReportAgedCreditorsReportAgedCreditor[];

  /**
   * Date and time the report was generated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "generated" })
  generated?: string;

  /**
   * Date the report is generated up to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reportDate" })
  reportDate?: string;
}

export class GetAgedCreditorsReportResponse extends SpeakeasyBase {
  /**
   * OK
   */
  @SpeakeasyMetadata()
  agedCreditorsReport?: GetAgedCreditorsReportAgedCreditorsReport;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
