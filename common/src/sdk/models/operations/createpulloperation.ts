import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum CreatePullOperationDataTypeEnum {
  AccountTransactions = "accountTransactions",
  BalanceSheet = "balanceSheet",
  BankAccounts = "bankAccounts",
  BankTransactions = "bankTransactions",
  BillCreditNotes = "billCreditNotes",
  BillPayments = "billPayments",
  Bills = "bills",
  CashFlowStatement = "cashFlowStatement",
  ChartOfAccounts = "chartOfAccounts",
  Company = "company",
  CreditNotes = "creditNotes",
  Customers = "customers",
  DirectCosts = "directCosts",
  DirectIncomes = "directIncomes",
  Invoices = "invoices",
  Items = "items",
  JournalEntries = "journalEntries",
  Journals = "journals",
  PaymentMethods = "paymentMethods",
  Payments = "payments",
  ProfitAndLoss = "profitAndLoss",
  PurchaseOrders = "purchaseOrders",
  SalesOrders = "salesOrders",
  Suppliers = "suppliers",
  TaxRates = "taxRates",
  TrackingCategories = "trackingCategories",
  Transfers = "transfers",
  BankingAccountBalances = "banking-accountBalances",
  BankingAccounts = "banking-accounts",
  BankingTransactionCategories = "banking-transactionCategories",
  BankingTransactions = "banking-transactions",
  CommerceCompanyInfo = "commerce-companyInfo",
  CommerceCustomers = "commerce-customers",
  CommerceDisputes = "commerce-disputes",
  CommerceLocations = "commerce-locations",
  CommerceOrders = "commerce-orders",
  CommercePaymentMethods = "commerce-paymentMethods",
  CommercePayments = "commerce-payments",
  CommerceProductCategories = "commerce-productCategories",
  CommerceProducts = "commerce-products",
  CommerceTaxComponents = "commerce-taxComponents",
  CommerceTransactions = "commerce-transactions",
}

export class CreatePullOperationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=connectionId",
  })
  connectionId?: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=dataType",
  })
  dataType: CreatePullOperationDataTypeEnum;
}

export class CreatePullOperation404ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "service" })
  service?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: number;
}

export class CreatePullOperation401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "service" })
  service?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: number;
}
export enum CreatePullOperationPullOperationStatusEnum {
  Initial = "Initial",
  Queued = "Queued",
  Fetching = "Fetching",
  MapQueued = "MapQueued",
  Mapping = "Mapping",
  Complete = "Complete",
  FetchError = "FetchError",
  MapError = "MapError",
  InternalError = "InternalError",
  ProcessingQueued = "ProcessingQueued",
  Processing = "Processing",
  ProcessingError = "ProcessingError",
  ValidationQueued = "ValidationQueued",
  Validating = "Validating",
  ValidationError = "ValidationError",
  AuthError = "AuthError",
  Cancelled = "Cancelled",
  Routing = "Routing",
  RoutingError = "RoutingError",
  NotSupported = "NotSupported",
  RateLimitError = "RateLimitError",
  PermissionsError = "PermissionsError",
  PrerequisiteNotMet = "PrerequisiteNotMet",
}

// CreatePullOperationPullOperation
/**
 * Information about a queued, in progress or completed pull operation.
 * *Formally called `dataset`*
 **/
export class CreatePullOperationPullOperation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "connectionId" })
  connectionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isCompleted" })
  isCompleted: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isErrored" })
  isErrored: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "progress" })
  progress: number;

  @SpeakeasyMetadata()
  @Expose({ name: "requested" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requested: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CreatePullOperationPullOperationStatusEnum;
}

export class CreatePullOperationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pullOperation?: CreatePullOperationPullOperation;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  createPullOperation401ApplicationJSONObject?: CreatePullOperation401ApplicationJSON;

  @SpeakeasyMetadata()
  createPullOperation404ApplicationJSONObject?: CreatePullOperation404ApplicationJSON;
}
