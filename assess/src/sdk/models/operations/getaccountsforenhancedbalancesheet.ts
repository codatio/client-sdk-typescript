/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetAccountsForEnhancedBalanceSheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  /**
   * The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=numberOfPeriods",
  })
  numberOfPeriods: number;

  /**
   * The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reportDate",
  })
  reportDate: string;
}

export class GetAccountsForEnhancedBalanceSheetEnhancedReportReportInfo extends SpeakeasyBase {
  /**
   * Company name the report was generated for.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  /**
   * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code. e.g. _GBP_.
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

  /**
   * The date the report was generated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "generatedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  generatedDate?: Date;

  /**
   * The name of the report.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reportName" })
  reportName?: string;
}

export class GetAccountsForEnhancedBalanceSheetEnhancedReportReportItemsAccountCategoryLevels extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "confidence" })
  confidence?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "levelName" })
  levelName?: string;
}

export class GetAccountsForEnhancedBalanceSheetEnhancedReportReportItemsAccountCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetAccountsForEnhancedBalanceSheetEnhancedReportReportItemsAccountCategoryLevels,
  })
  @Expose({ name: "levels" })
  @Type(
    () =>
      GetAccountsForEnhancedBalanceSheetEnhancedReportReportItemsAccountCategoryLevels
  )
  levels?: GetAccountsForEnhancedBalanceSheetEnhancedReportReportItemsAccountCategoryLevels[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}

export class GetAccountsForEnhancedBalanceSheetEnhancedReportReportItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountCategory" })
  @Type(
    () =>
      GetAccountsForEnhancedBalanceSheetEnhancedReportReportItemsAccountCategory
  )
  accountCategory?: GetAccountsForEnhancedBalanceSheetEnhancedReportReportItemsAccountCategory;

  /**
   * The unique account ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;
}

/**
 * OK
 */
export class GetAccountsForEnhancedBalanceSheetEnhancedReport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => GetAccountsForEnhancedBalanceSheetEnhancedReportReportInfo)
  reportInfo?: GetAccountsForEnhancedBalanceSheetEnhancedReportReportInfo;

  /**
   * An array of report items.
   */
  @SpeakeasyMetadata({
    elemType: GetAccountsForEnhancedBalanceSheetEnhancedReportReportItems,
  })
  @Expose({ name: "reportItems" })
  @Type(() => GetAccountsForEnhancedBalanceSheetEnhancedReportReportItems)
  reportItems?: GetAccountsForEnhancedBalanceSheetEnhancedReportReportItems[];
}

export class GetAccountsForEnhancedBalanceSheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  enhancedReport?: GetAccountsForEnhancedBalanceSheetEnhancedReport;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
