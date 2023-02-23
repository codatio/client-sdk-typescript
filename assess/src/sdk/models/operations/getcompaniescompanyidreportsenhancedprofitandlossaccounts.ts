import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate: string;
}

export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryParams;
}

export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsEnhancedReportReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=generatedDate" })
  generatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reportName" })
  reportName?: string;
}

export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsEnhancedReportReportItemsAccountCategoryLevels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=levelName" })
  levelName?: string;
}

export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsEnhancedReportReportItemsAccountCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=levels", elemType: GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsEnhancedReportReportItemsAccountCategoryLevels })
  levels?: GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsEnhancedReportReportItemsAccountCategoryLevels[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsEnhancedReportReportItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountCategory" })
  accountCategory?: GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsEnhancedReportReportItemsAccountCategory;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;
}

export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsEnhancedReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportInfo" })
  reportInfo?: GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsEnhancedReportReportInfo;

  @SpeakeasyMetadata({ data: "json, name=reportItems", elemType: GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsEnhancedReportReportItems })
  reportItems?: GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsEnhancedReportReportItems[];
}

export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  enhancedReport?: GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsEnhancedReport;

  @SpeakeasyMetadata()
  statusCode: number;
}