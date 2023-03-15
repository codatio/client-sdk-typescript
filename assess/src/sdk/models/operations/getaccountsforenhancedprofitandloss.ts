import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetAccountsForEnhancedProfitAndLossPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}

export class GetAccountsForEnhancedProfitAndLossQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=numberOfPeriods",
  })
  numberOfPeriods: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reportDate",
  })
  reportDate: string;
}

export class GetAccountsForEnhancedProfitAndLossRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountsForEnhancedProfitAndLossPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccountsForEnhancedProfitAndLossQueryParams;
}

export class GetAccountsForEnhancedProfitAndLossEnhancedReportReportInfo extends SpeakeasyBase {
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

export class GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategoryLevels extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "confidence" })
  confidence?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "levelName" })
  levelName?: string;
}

export class GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategoryLevels,
  })
  @Expose({ name: "levels" })
  @Type(
    () =>
      GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategoryLevels
  )
  levels?: GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategoryLevels[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}

export class GetAccountsForEnhancedProfitAndLossEnhancedReportReportItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountCategory" })
  @Type(
    () =>
      GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategory
  )
  accountCategory?: GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategory;

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

export class GetAccountsForEnhancedProfitAndLossEnhancedReport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => GetAccountsForEnhancedProfitAndLossEnhancedReportReportInfo)
  reportInfo?: GetAccountsForEnhancedProfitAndLossEnhancedReportReportInfo;

  @SpeakeasyMetadata({
    elemType: GetAccountsForEnhancedProfitAndLossEnhancedReportReportItems,
  })
  @Expose({ name: "reportItems" })
  @Type(() => GetAccountsForEnhancedProfitAndLossEnhancedReportReportItems)
  reportItems?: GetAccountsForEnhancedProfitAndLossEnhancedReportReportItems[];
}

export class GetAccountsForEnhancedProfitAndLossResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  enhancedReport?: GetAccountsForEnhancedProfitAndLossEnhancedReport;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
