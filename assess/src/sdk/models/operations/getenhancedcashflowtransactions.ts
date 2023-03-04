import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetEnhancedCashFlowTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetEnhancedCashFlowTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetEnhancedCashFlowTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEnhancedCashFlowTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEnhancedCashFlowTransactionsQueryParams;
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccountsReportSourceRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType?: string;
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountProvider" })
  accountProvider?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currentBalance" })
  currentBalance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "platformName" })
  platformName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceRef" })
  @Type(() => GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccountsReportSourceRef)
  sourceRef?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccountsReportSourceRef;
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSources extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccounts })
  @Expose({ name: "accounts" })
  @Type(() => GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccounts)
  accounts?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccounts[];
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "generatedDate" })
  generatedDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "reportName" })
  reportName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsReportSourceRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType?: string;
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsTransactionCategory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "confidence" })
  confidence?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "levels" })
  levels?: string[];
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceRef" })
  @Type(() => GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsReportSourceRef)
  sourceRef?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsReportSourceRef;

  @SpeakeasyMetadata()
  @Expose({ name: "transactionCategory" })
  @Type(() => GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsTransactionCategory)
  transactionCategory?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsTransactionCategory;
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactions })
  @Expose({ name: "transactions" })
  @Type(() => GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactions)
  transactions?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactions[];
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSources })
  @Expose({ name: "dataSources" })
  @Type(() => GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSources)
  dataSources?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSources[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportInfo)
  reportInfo?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportInfo;

  @SpeakeasyMetadata({ elemType: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItems })
  @Expose({ name: "reportItems" })
  @Type(() => GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItems)
  reportItems?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItems[];
}

export class GetEnhancedCashFlowTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  enhancedCashFlowTransactions?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactions;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}