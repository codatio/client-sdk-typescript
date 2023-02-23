import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryParams;
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccountsReportSourceRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: string;
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountProvider" })
  accountProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currentBalance" })
  currentBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=platformName" })
  platformName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceRef" })
  sourceRef?: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccountsReportSourceRef;
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccounts })
  accounts?: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccounts[];
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=generatedDate" })
  generatedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=reportName" })
  reportName?: string;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsReportSourceRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: string;
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsTransactionCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=levels" })
  levels?: string[];
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceRef" })
  sourceRef?: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsReportSourceRef;

  @SpeakeasyMetadata({ data: "json, name=transactionCategory" })
  transactionCategory?: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsTransactionCategory;
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactions })
  transactions?: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactions[];
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSources", elemType: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSources })
  dataSources?: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSources[];

  @SpeakeasyMetadata({ data: "json, name=reportInfo" })
  reportInfo?: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportInfo;

  @SpeakeasyMetadata({ data: "json, name=reportItems", elemType: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItems })
  reportItems?: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItems[];
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  enhancedCashFlowTransactions?: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsEnhancedCashFlowTransactions;

  @SpeakeasyMetadata()
  statusCode: number;
}