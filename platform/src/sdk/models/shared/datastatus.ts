/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  Status,
  Status$inboundSchema,
  Status$outboundSchema,
} from "./status.js";

/**
 * Available data types
 */
export const DataStatusDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
  Company: "company",
  CreditNotes: "creditNotes",
  Customers: "customers",
  DirectCosts: "directCosts",
  DirectIncomes: "directIncomes",
  Invoices: "invoices",
  ItemReceipts: "itemReceipts",
  Items: "items",
  JournalEntries: "journalEntries",
  Journals: "journals",
  PaymentMethods: "paymentMethods",
  Payments: "payments",
  ProfitAndLoss: "profitAndLoss",
  PurchaseOrders: "purchaseOrders",
  SalesOrders: "salesOrders",
  Suppliers: "suppliers",
  TaxRates: "taxRates",
  TrackingCategories: "trackingCategories",
  Transfers: "transfers",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  CommerceCompanyInfo: "commerce-companyInfo",
  CommerceCustomers: "commerce-customers",
  CommerceDisputes: "commerce-disputes",
  CommerceLocations: "commerce-locations",
  CommerceOrders: "commerce-orders",
  CommercePaymentMethods: "commerce-paymentMethods",
  CommercePayments: "commerce-payments",
  CommerceProductCategories: "commerce-productCategories",
  CommerceProducts: "commerce-products",
  CommerceTaxComponents: "commerce-taxComponents",
  CommerceTransactions: "commerce-transactions",
} as const;
/**
 * Available data types
 */
export type DataStatusDataTypes = ClosedEnum<typeof DataStatusDataTypes>;

/**
 * Describes the state of data in the Codat cache for a company and data type
 */
export type DataStatus = {
  /**
   * Available data types
   */
  dataType: DataStatusDataTypes;
  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  lastSuccessfulSync: string;
  /**
   * The current status of the dataset.
   */
  currentStatus: Status;
  /**
   * Unique identifier for most recent sync of data type.
   */
  latestSyncId?: string | undefined;
  /**
   * Unique identifier for the most recent successful sync of data type.
   */
  latestSuccessfulSyncId?: string | undefined;
};

/** @internal */
export const DataStatusDataTypes$inboundSchema: z.ZodNativeEnum<
  typeof DataStatusDataTypes
> = z.nativeEnum(DataStatusDataTypes);

/** @internal */
export const DataStatusDataTypes$outboundSchema: z.ZodNativeEnum<
  typeof DataStatusDataTypes
> = DataStatusDataTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataStatusDataTypes$ {
  /** @deprecated use `DataStatusDataTypes$inboundSchema` instead. */
  export const inboundSchema = DataStatusDataTypes$inboundSchema;
  /** @deprecated use `DataStatusDataTypes$outboundSchema` instead. */
  export const outboundSchema = DataStatusDataTypes$outboundSchema;
}

/** @internal */
export const DataStatus$inboundSchema: z.ZodType<
  DataStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  dataType: DataStatusDataTypes$inboundSchema,
  lastSuccessfulSync: z.string(),
  currentStatus: Status$inboundSchema,
  latestSyncId: z.string().optional(),
  latestSuccessfulSyncId: z.string().optional(),
});

/** @internal */
export type DataStatus$Outbound = {
  dataType: string;
  lastSuccessfulSync: string;
  currentStatus: string;
  latestSyncId?: string | undefined;
  latestSuccessfulSyncId?: string | undefined;
};

/** @internal */
export const DataStatus$outboundSchema: z.ZodType<
  DataStatus$Outbound,
  z.ZodTypeDef,
  DataStatus
> = z.object({
  dataType: DataStatusDataTypes$outboundSchema,
  lastSuccessfulSync: z.string(),
  currentStatus: Status$outboundSchema,
  latestSyncId: z.string().optional(),
  latestSuccessfulSyncId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataStatus$ {
  /** @deprecated use `DataStatus$inboundSchema` instead. */
  export const inboundSchema = DataStatus$inboundSchema;
  /** @deprecated use `DataStatus$outboundSchema` instead. */
  export const outboundSchema = DataStatus$outboundSchema;
  /** @deprecated use `DataStatus$Outbound` instead. */
  export type Outbound = DataStatus$Outbound;
}
