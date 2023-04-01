/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SupportedFeature } from "./supportedfeature";
import { Expose, Type } from "class-transformer";

/**
 * Available Data types
 */
export enum DataTypeFeatureDataTypeEnum {
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

/**
 * Describes support for a given datatype and associated operations
 */
export class DataTypeFeature extends SpeakeasyBase {
  /**
   * Available Data types
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: DataTypeFeatureDataTypeEnum;

  @SpeakeasyMetadata({ elemType: SupportedFeature })
  @Expose({ name: "supportedFeatures" })
  @Type(() => SupportedFeature)
  supportedFeatures: SupportedFeature[];
}
