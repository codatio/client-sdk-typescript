import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate: string;
}

export class GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsQueryParams;
}

export class GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsEnhancedReportReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=generatedDate" })
  generatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reportName" })
  reportName?: string;
}

export class GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsEnhancedReportReportItemsAccountCategoryLevels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=levelName" })
  levelName?: string;
}

export class GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsEnhancedReportReportItemsAccountCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=levels", elemType: GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsEnhancedReportReportItemsAccountCategoryLevels })
  levels?: GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsEnhancedReportReportItemsAccountCategoryLevels[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

export class GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsEnhancedReportReportItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountCategory" })
  accountCategory?: GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsEnhancedReportReportItemsAccountCategory;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;
}

export class GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsEnhancedReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportInfo" })
  reportInfo?: GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsEnhancedReportReportInfo;

  @SpeakeasyMetadata({ data: "json, name=reportItems", elemType: GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsEnhancedReportReportItems })
  reportItems?: GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsEnhancedReportReportItems[];
}

export class GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  enhancedReport?: GetCompaniesCompanyIdReportsEnhancedBalanaceSheetAccountsEnhancedReport;

  @SpeakeasyMetadata()
  statusCode: number;
}