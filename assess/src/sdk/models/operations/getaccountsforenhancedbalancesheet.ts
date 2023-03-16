import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetAccountsForEnhancedBalanceSheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=numberOfPeriods",
  })
  numberOfPeriods: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reportDate",
  })
  reportDate: string;
}

export class GetAccountsForEnhancedBalanceSheetEnhancedReportReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "generatedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  generatedDate?: Date;

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

export class GetAccountsForEnhancedBalanceSheetEnhancedReport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => GetAccountsForEnhancedBalanceSheetEnhancedReportReportInfo)
  reportInfo?: GetAccountsForEnhancedBalanceSheetEnhancedReportReportInfo;

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

  @SpeakeasyMetadata()
  enhancedReport?: GetAccountsForEnhancedBalanceSheetEnhancedReport;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
