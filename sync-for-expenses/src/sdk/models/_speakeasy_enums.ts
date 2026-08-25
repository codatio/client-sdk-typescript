/* tslint:disable */
/* eslint-disable */

export const AccountAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type AccountAccountType = (typeof AccountAccountType)[keyof typeof AccountAccountType];
export const AccountBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type AccountBankAccountStatus = (typeof AccountBankAccountStatus)[keyof typeof AccountBankAccountStatus];
export const AccountMappingInfoAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
} as const;
export type AccountMappingInfoAccountType = (typeof AccountMappingInfoAccountType)[keyof typeof AccountMappingInfoAccountType];
export const AccountMappingInfoItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type AccountMappingInfoItems = (typeof AccountMappingInfoItems)[keyof typeof AccountMappingInfoItems];
export const AccountMappingInfoItems1 = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type AccountMappingInfoItems1 = (typeof AccountMappingInfoItems1)[keyof typeof AccountMappingInfoItems1];
export const AccountMappingInfoItems2 = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type AccountMappingInfoItems2 = (typeof AccountMappingInfoItems2)[keyof typeof AccountMappingInfoItems2];
export const AccountMappingInfoValidFor = {
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type AccountMappingInfoValidFor = (typeof AccountMappingInfoValidFor)[keyof typeof AccountMappingInfoValidFor];
export const AccountMappingInfoValidForItems = {
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type AccountMappingInfoValidForItems = (typeof AccountMappingInfoValidForItems)[keyof typeof AccountMappingInfoValidForItems];
export const AccountMappingInfoValidTransactionTypes = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type AccountMappingInfoValidTransactionTypes = (typeof AccountMappingInfoValidTransactionTypes)[keyof typeof AccountMappingInfoValidTransactionTypes];
export const AccountMappingInfoValidTransactionTypesItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type AccountMappingInfoValidTransactionTypesItems = (typeof AccountMappingInfoValidTransactionTypesItems)[keyof typeof AccountMappingInfoValidTransactionTypesItems];
export const AccountPrototypeAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type AccountPrototypeAccountType = (typeof AccountPrototypeAccountType)[keyof typeof AccountPrototypeAccountType];
export const AccountPrototypeBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type AccountPrototypeBankAccountStatus = (typeof AccountPrototypeBankAccountStatus)[keyof typeof AccountPrototypeBankAccountStatus];
export const AccountPrototypeStatusBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type AccountPrototypeStatusBankAccountStatus = (typeof AccountPrototypeStatusBankAccountStatus)[keyof typeof AccountPrototypeStatusBankAccountStatus];
export const AccountPrototypeTypeAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type AccountPrototypeTypeAccountType = (typeof AccountPrototypeTypeAccountType)[keyof typeof AccountPrototypeTypeAccountType];
export const AccountStatusAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type AccountStatusAccountStatus = (typeof AccountStatusAccountStatus)[keyof typeof AccountStatusAccountStatus];
export const AccountStatusBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type AccountStatusBankAccountStatus = (typeof AccountStatusBankAccountStatus)[keyof typeof AccountStatusBankAccountStatus];
export const AccountType1 = {
  Asset: "Asset",
  Credit: "Credit",
  Debit: "Debit",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type AccountType1 = (typeof AccountType1)[keyof typeof AccountType1];
export const AccountType2 = {
  Asset: "Asset",
  Credit: "Credit",
  Debit: "Debit",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type AccountType2 = (typeof AccountType2)[keyof typeof AccountType2];
export const AccountTypeAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type AccountTypeAccountType = (typeof AccountTypeAccountType)[keyof typeof AccountTypeAccountType];
export const AccountTypeBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type AccountTypeBankAccountType = (typeof AccountTypeBankAccountType)[keyof typeof AccountTypeBankAccountType];
export const AccountingAddressTypeAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type AccountingAddressTypeAccountingAddressType = (typeof AccountingAddressTypeAccountingAddressType)[keyof typeof AccountingAddressTypeAccountingAddressType];
export const AccountingBankAccountsAccountTypeBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type AccountingBankAccountsAccountTypeBankAccountType = (typeof AccountingBankAccountsAccountTypeBankAccountType)[keyof typeof AccountingBankAccountsAccountTypeBankAccountType];
export const AccountingBankAccountsBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type AccountingBankAccountsBankAccountStatus = (typeof AccountingBankAccountsBankAccountStatus)[keyof typeof AccountingBankAccountsBankAccountStatus];
export const AccountingBankAccountsBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type AccountingBankAccountsBankAccountType = (typeof AccountingBankAccountsBankAccountType)[keyof typeof AccountingBankAccountsBankAccountType];
export const AccountingBankAccountsDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type AccountingBankAccountsDataTypeDataTypes = (typeof AccountingBankAccountsDataTypeDataTypes)[keyof typeof AccountingBankAccountsDataTypeDataTypes];
export const AccountingBankAccountsDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type AccountingBankAccountsDataTypes = (typeof AccountingBankAccountsDataTypes)[keyof typeof AccountingBankAccountsDataTypes];
export const AccountingBankAccountsPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type AccountingBankAccountsPushChangeType = (typeof AccountingBankAccountsPushChangeType)[keyof typeof AccountingBankAccountsPushChangeType];
export const AccountingBankAccountsPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type AccountingBankAccountsPushOperationStatus = (typeof AccountingBankAccountsPushOperationStatus)[keyof typeof AccountingBankAccountsPushOperationStatus];
export const AccountingBankAccountsResultsBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type AccountingBankAccountsResultsBankAccountStatus = (typeof AccountingBankAccountsResultsBankAccountStatus)[keyof typeof AccountingBankAccountsResultsBankAccountStatus];
export const AccountingBankAccountsResultsPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type AccountingBankAccountsResultsPushChangeType = (typeof AccountingBankAccountsResultsPushChangeType)[keyof typeof AccountingBankAccountsResultsPushChangeType];
export const AccountingBankAccountsResultsPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type AccountingBankAccountsResultsPushOperationStatus = (typeof AccountingBankAccountsResultsPushOperationStatus)[keyof typeof AccountingBankAccountsResultsPushOperationStatus];
export const AccountingBankAccountsStatusBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type AccountingBankAccountsStatusBankAccountStatus = (typeof AccountingBankAccountsStatusBankAccountStatus)[keyof typeof AccountingBankAccountsStatusBankAccountStatus];
export const AccountingBankAccountsStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type AccountingBankAccountsStatusPushOperationStatus = (typeof AccountingBankAccountsStatusPushOperationStatus)[keyof typeof AccountingBankAccountsStatusPushOperationStatus];
export const AccountingBankAccountsTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type AccountingBankAccountsTypePushChangeType = (typeof AccountingBankAccountsTypePushChangeType)[keyof typeof AccountingBankAccountsTypePushChangeType];
export const AccountsAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
} as const;
export type AccountsAccountType = (typeof AccountsAccountType)[keyof typeof AccountsAccountType];
export const AddressAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type AddressAccountingAddressType = (typeof AddressAccountingAddressType)[keyof typeof AddressAccountingAddressType];
export const AddressesAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type AddressesAccountingAddressType = (typeof AddressesAccountingAddressType)[keyof typeof AddressesAccountingAddressType];
export const AdjustmentTransactionLineDataType = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type AdjustmentTransactionLineDataType = (typeof AdjustmentTransactionLineDataType)[keyof typeof AdjustmentTransactionLineDataType];
export const AdjustmentTransactionLineInvoiceToType = {
  Customer: "customer",
} as const;
export type AdjustmentTransactionLineInvoiceToType = (typeof AdjustmentTransactionLineInvoiceToType)[keyof typeof AdjustmentTransactionLineInvoiceToType];
export const AdjustmentTransactionLineTrackingRefsDataType = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type AdjustmentTransactionLineTrackingRefsDataType = (typeof AdjustmentTransactionLineTrackingRefsDataType)[keyof typeof AdjustmentTransactionLineTrackingRefsDataType];
export const AdjustmentTransactionLineType = {
  Customer: "customer",
} as const;
export type AdjustmentTransactionLineType = (typeof AdjustmentTransactionLineType)[keyof typeof AdjustmentTransactionLineType];
export const AdjustmentTransactionRequestDataType = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type AdjustmentTransactionRequestDataType = (typeof AdjustmentTransactionRequestDataType)[keyof typeof AdjustmentTransactionRequestDataType];
export const AdjustmentTransactionRequestInvoiceToType = {
  Customer: "customer",
} as const;
export type AdjustmentTransactionRequestInvoiceToType = (typeof AdjustmentTransactionRequestInvoiceToType)[keyof typeof AdjustmentTransactionRequestInvoiceToType];
export const AdjustmentTransactionRequestTrackingRefsDataType = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type AdjustmentTransactionRequestTrackingRefsDataType = (typeof AdjustmentTransactionRequestTrackingRefsDataType)[keyof typeof AdjustmentTransactionRequestTrackingRefsDataType];
export const AdjustmentTransactionRequestType = {
  Customer: "customer",
} as const;
export type AdjustmentTransactionRequestType = (typeof AdjustmentTransactionRequestType)[keyof typeof AdjustmentTransactionRequestType];
export const BankAccountAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountAccountType = (typeof BankAccountAccountType)[keyof typeof BankAccountAccountType];
export const BankAccountAccountTypeBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountAccountTypeBankAccountType = (typeof BankAccountAccountTypeBankAccountType)[keyof typeof BankAccountAccountTypeBankAccountType];
export const BankAccountBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountBankAccountStatus = (typeof BankAccountBankAccountStatus)[keyof typeof BankAccountBankAccountStatus];
export const BankAccountBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountBankAccountType = (typeof BankAccountBankAccountType)[keyof typeof BankAccountBankAccountType];
export const BankAccountCreateResponseAccountTypeBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountCreateResponseAccountTypeBankAccountType = (typeof BankAccountCreateResponseAccountTypeBankAccountType)[keyof typeof BankAccountCreateResponseAccountTypeBankAccountType];
export const BankAccountCreateResponseBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountCreateResponseBankAccountStatus = (typeof BankAccountCreateResponseBankAccountStatus)[keyof typeof BankAccountCreateResponseBankAccountStatus];
export const BankAccountCreateResponseBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountCreateResponseBankAccountType = (typeof BankAccountCreateResponseBankAccountType)[keyof typeof BankAccountCreateResponseBankAccountType];
export const BankAccountCreateResponseDataBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountCreateResponseDataBankAccountStatus = (typeof BankAccountCreateResponseDataBankAccountStatus)[keyof typeof BankAccountCreateResponseDataBankAccountStatus];
export const BankAccountCreateResponseDataPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type BankAccountCreateResponseDataPushChangeType = (typeof BankAccountCreateResponseDataPushChangeType)[keyof typeof BankAccountCreateResponseDataPushChangeType];
export const BankAccountCreateResponseDataPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type BankAccountCreateResponseDataPushOperationStatus = (typeof BankAccountCreateResponseDataPushOperationStatus)[keyof typeof BankAccountCreateResponseDataPushOperationStatus];
export const BankAccountCreateResponseDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type BankAccountCreateResponseDataTypeDataTypes = (typeof BankAccountCreateResponseDataTypeDataTypes)[keyof typeof BankAccountCreateResponseDataTypeDataTypes];
export const BankAccountCreateResponseDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type BankAccountCreateResponseDataTypes = (typeof BankAccountCreateResponseDataTypes)[keyof typeof BankAccountCreateResponseDataTypes];
export const BankAccountCreateResponsePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type BankAccountCreateResponsePushChangeType = (typeof BankAccountCreateResponsePushChangeType)[keyof typeof BankAccountCreateResponsePushChangeType];
export const BankAccountCreateResponsePushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type BankAccountCreateResponsePushOperationStatus = (typeof BankAccountCreateResponsePushOperationStatus)[keyof typeof BankAccountCreateResponsePushOperationStatus];
export const BankAccountCreateResponseStatusBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountCreateResponseStatusBankAccountStatus = (typeof BankAccountCreateResponseStatusBankAccountStatus)[keyof typeof BankAccountCreateResponseStatusBankAccountStatus];
export const BankAccountCreateResponseStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type BankAccountCreateResponseStatusPushOperationStatus = (typeof BankAccountCreateResponseStatusPushOperationStatus)[keyof typeof BankAccountCreateResponseStatusPushOperationStatus];
export const BankAccountCreateResponseTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type BankAccountCreateResponseTypePushChangeType = (typeof BankAccountCreateResponseTypePushChangeType)[keyof typeof BankAccountCreateResponseTypePushChangeType];
export const BankAccountDataBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountDataBankAccountStatus = (typeof BankAccountDataBankAccountStatus)[keyof typeof BankAccountDataBankAccountStatus];
export const BankAccountDataPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type BankAccountDataPushChangeType = (typeof BankAccountDataPushChangeType)[keyof typeof BankAccountDataPushChangeType];
export const BankAccountDataPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type BankAccountDataPushOperationStatus = (typeof BankAccountDataPushOperationStatus)[keyof typeof BankAccountDataPushOperationStatus];
export const BankAccountDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type BankAccountDataTypeDataTypes = (typeof BankAccountDataTypeDataTypes)[keyof typeof BankAccountDataTypeDataTypes];
export const BankAccountDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type BankAccountDataTypes = (typeof BankAccountDataTypes)[keyof typeof BankAccountDataTypes];
export const BankAccountPrototypeAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountPrototypeAccountType = (typeof BankAccountPrototypeAccountType)[keyof typeof BankAccountPrototypeAccountType];
export const BankAccountPrototypeAccountTypeBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountPrototypeAccountTypeBankAccountType = (typeof BankAccountPrototypeAccountTypeBankAccountType)[keyof typeof BankAccountPrototypeAccountTypeBankAccountType];
export const BankAccountPrototypeBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountPrototypeBankAccountStatus = (typeof BankAccountPrototypeBankAccountStatus)[keyof typeof BankAccountPrototypeBankAccountStatus];
export const BankAccountPrototypeBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountPrototypeBankAccountType = (typeof BankAccountPrototypeBankAccountType)[keyof typeof BankAccountPrototypeBankAccountType];
export const BankAccountPrototypeStatusBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountPrototypeStatusBankAccountStatus = (typeof BankAccountPrototypeStatusBankAccountStatus)[keyof typeof BankAccountPrototypeStatusBankAccountStatus];
export const BankAccountPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type BankAccountPushChangeType = (typeof BankAccountPushChangeType)[keyof typeof BankAccountPushChangeType];
export const BankAccountPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type BankAccountPushOperationStatus = (typeof BankAccountPushOperationStatus)[keyof typeof BankAccountPushOperationStatus];
export const BankAccountResultsBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountResultsBankAccountStatus = (typeof BankAccountResultsBankAccountStatus)[keyof typeof BankAccountResultsBankAccountStatus];
export const BankAccountResultsPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type BankAccountResultsPushChangeType = (typeof BankAccountResultsPushChangeType)[keyof typeof BankAccountResultsPushChangeType];
export const BankAccountResultsPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type BankAccountResultsPushOperationStatus = (typeof BankAccountResultsPushOperationStatus)[keyof typeof BankAccountResultsPushOperationStatus];
export const BankAccountStatusBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountStatusBankAccountStatus = (typeof BankAccountStatusBankAccountStatus)[keyof typeof BankAccountStatusBankAccountStatus];
export const BankAccountStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type BankAccountStatusPushOperationStatus = (typeof BankAccountStatusPushOperationStatus)[keyof typeof BankAccountStatusPushOperationStatus];
export const BankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountType = (typeof BankAccountType)[keyof typeof BankAccountType];
export const BankAccountTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type BankAccountTypePushChangeType = (typeof BankAccountTypePushChangeType)[keyof typeof BankAccountTypePushChangeType];
export const BankAccountsAccountTypeBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountsAccountTypeBankAccountType = (typeof BankAccountsAccountTypeBankAccountType)[keyof typeof BankAccountsAccountTypeBankAccountType];
export const BankAccountsBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountsBankAccountStatus = (typeof BankAccountsBankAccountStatus)[keyof typeof BankAccountsBankAccountStatus];
export const BankAccountsBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountsBankAccountType = (typeof BankAccountsBankAccountType)[keyof typeof BankAccountsBankAccountType];
export const BankAccountsDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type BankAccountsDataTypeDataTypes = (typeof BankAccountsDataTypeDataTypes)[keyof typeof BankAccountsDataTypeDataTypes];
export const BankAccountsDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type BankAccountsDataTypes = (typeof BankAccountsDataTypes)[keyof typeof BankAccountsDataTypes];
export const BankAccountsPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type BankAccountsPushChangeType = (typeof BankAccountsPushChangeType)[keyof typeof BankAccountsPushChangeType];
export const BankAccountsPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type BankAccountsPushOperationStatus = (typeof BankAccountsPushOperationStatus)[keyof typeof BankAccountsPushOperationStatus];
export const BankAccountsResultsBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountsResultsBankAccountStatus = (typeof BankAccountsResultsBankAccountStatus)[keyof typeof BankAccountsResultsBankAccountStatus];
export const BankAccountsResultsPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type BankAccountsResultsPushChangeType = (typeof BankAccountsResultsPushChangeType)[keyof typeof BankAccountsResultsPushChangeType];
export const BankAccountsResultsPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type BankAccountsResultsPushOperationStatus = (typeof BankAccountsResultsPushOperationStatus)[keyof typeof BankAccountsResultsPushOperationStatus];
export const BankAccountsStatusBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountsStatusBankAccountStatus = (typeof BankAccountsStatusBankAccountStatus)[keyof typeof BankAccountsStatusBankAccountStatus];
export const BankAccountsStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type BankAccountsStatusPushOperationStatus = (typeof BankAccountsStatusPushOperationStatus)[keyof typeof BankAccountsStatusPushOperationStatus];
export const BankAccountsTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type BankAccountsTypePushChangeType = (typeof BankAccountsTypePushChangeType)[keyof typeof BankAccountsTypePushChangeType];
export const CompaniesDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type CompaniesDataConnectionSourceType = (typeof CompaniesDataConnectionSourceType)[keyof typeof CompaniesDataConnectionSourceType];
export const CompaniesDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type CompaniesDataConnectionStatus = (typeof CompaniesDataConnectionStatus)[keyof typeof CompaniesDataConnectionStatus];
export const CompaniesDataConnectionsDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type CompaniesDataConnectionsDataConnectionSourceType = (typeof CompaniesDataConnectionsDataConnectionSourceType)[keyof typeof CompaniesDataConnectionsDataConnectionSourceType];
export const CompaniesDataConnectionsDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type CompaniesDataConnectionsDataConnectionStatus = (typeof CompaniesDataConnectionsDataConnectionStatus)[keyof typeof CompaniesDataConnectionsDataConnectionStatus];
export const CompaniesErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type CompaniesErrorStatus = (typeof CompaniesErrorStatus)[keyof typeof CompaniesErrorStatus];
export const CompaniesSourceTypeDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type CompaniesSourceTypeDataConnectionSourceType = (typeof CompaniesSourceTypeDataConnectionSourceType)[keyof typeof CompaniesSourceTypeDataConnectionSourceType];
export const CompaniesStatusDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type CompaniesStatusDataConnectionStatus = (typeof CompaniesStatusDataConnectionStatus)[keyof typeof CompaniesStatusDataConnectionStatus];
export const CompaniesStatusErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type CompaniesStatusErrorStatus = (typeof CompaniesStatusErrorStatus)[keyof typeof CompaniesStatusErrorStatus];
export const CompanyDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type CompanyDataConnectionSourceType = (typeof CompanyDataConnectionSourceType)[keyof typeof CompanyDataConnectionSourceType];
export const CompanyDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type CompanyDataConnectionStatus = (typeof CompanyDataConnectionStatus)[keyof typeof CompanyDataConnectionStatus];
export const CompanyDataConnectionsDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type CompanyDataConnectionsDataConnectionSourceType = (typeof CompanyDataConnectionsDataConnectionSourceType)[keyof typeof CompanyDataConnectionsDataConnectionSourceType];
export const CompanyDataConnectionsDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type CompanyDataConnectionsDataConnectionStatus = (typeof CompanyDataConnectionsDataConnectionStatus)[keyof typeof CompanyDataConnectionsDataConnectionStatus];
export const CompanyErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type CompanyErrorStatus = (typeof CompanyErrorStatus)[keyof typeof CompanyErrorStatus];
export const CompanyInformationAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CompanyInformationAccountingAddressType = (typeof CompanyInformationAccountingAddressType)[keyof typeof CompanyInformationAccountingAddressType];
export const CompanyInformationAddressesAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CompanyInformationAddressesAccountingAddressType = (typeof CompanyInformationAddressesAccountingAddressType)[keyof typeof CompanyInformationAddressesAccountingAddressType];
export const CompanyInformationPhoneNumbersType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type CompanyInformationPhoneNumbersType = (typeof CompanyInformationPhoneNumbersType)[keyof typeof CompanyInformationPhoneNumbersType];
export const CompanyInformationType = {
  Social: "Social",
  Unknown: "Unknown",
  Website: "Website",
} as const;
export type CompanyInformationType = (typeof CompanyInformationType)[keyof typeof CompanyInformationType];
export const CompanyInformationType1 = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Social: "Social",
  Unknown: "Unknown",
  Website: "Website",
} as const;
export type CompanyInformationType1 = (typeof CompanyInformationType1)[keyof typeof CompanyInformationType1];
export const CompanyInformationType2 = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Social: "Social",
  Unknown: "Unknown",
  Website: "Website",
} as const;
export type CompanyInformationType2 = (typeof CompanyInformationType2)[keyof typeof CompanyInformationType2];
export const CompanyInformationTypeAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CompanyInformationTypeAccountingAddressType = (typeof CompanyInformationTypeAccountingAddressType)[keyof typeof CompanyInformationTypeAccountingAddressType];
export const CompanyInformationWebLinksType = {
  Social: "Social",
  Unknown: "Unknown",
  Website: "Website",
} as const;
export type CompanyInformationWebLinksType = (typeof CompanyInformationWebLinksType)[keyof typeof CompanyInformationWebLinksType];
export const CompanySourceTypeDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type CompanySourceTypeDataConnectionSourceType = (typeof CompanySourceTypeDataConnectionSourceType)[keyof typeof CompanySourceTypeDataConnectionSourceType];
export const CompanyStatusDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type CompanyStatusDataConnectionStatus = (typeof CompanyStatusDataConnectionStatus)[keyof typeof CompanyStatusDataConnectionStatus];
export const CompanyStatusErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type CompanyStatusErrorStatus = (typeof CompanyStatusErrorStatus)[keyof typeof CompanyStatusErrorStatus];
export const ConnectionDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type ConnectionDataConnectionSourceType = (typeof ConnectionDataConnectionSourceType)[keyof typeof ConnectionDataConnectionSourceType];
export const ConnectionDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type ConnectionDataConnectionStatus = (typeof ConnectionDataConnectionStatus)[keyof typeof ConnectionDataConnectionStatus];
export const ConnectionErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type ConnectionErrorStatus = (typeof ConnectionErrorStatus)[keyof typeof ConnectionErrorStatus];
export const ConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type ConnectionSourceType = (typeof ConnectionSourceType)[keyof typeof ConnectionSourceType];
export const ConnectionSourceTypeDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type ConnectionSourceTypeDataConnectionSourceType = (typeof ConnectionSourceTypeDataConnectionSourceType)[keyof typeof ConnectionSourceTypeDataConnectionSourceType];
export const ConnectionStatusDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type ConnectionStatusDataConnectionStatus = (typeof ConnectionStatusDataConnectionStatus)[keyof typeof ConnectionStatusDataConnectionStatus];
export const ConnectionStatusErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type ConnectionStatusErrorStatus = (typeof ConnectionStatusErrorStatus)[keyof typeof ConnectionStatusErrorStatus];
export const ConnectionsDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type ConnectionsDataConnectionSourceType = (typeof ConnectionsDataConnectionSourceType)[keyof typeof ConnectionsDataConnectionSourceType];
export const ConnectionsDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type ConnectionsDataConnectionStatus = (typeof ConnectionsDataConnectionStatus)[keyof typeof ConnectionsDataConnectionStatus];
export const ConnectionsErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type ConnectionsErrorStatus = (typeof ConnectionsErrorStatus)[keyof typeof ConnectionsErrorStatus];
export const ConnectionsResultsDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type ConnectionsResultsDataConnectionSourceType = (typeof ConnectionsResultsDataConnectionSourceType)[keyof typeof ConnectionsResultsDataConnectionSourceType];
export const ConnectionsResultsDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type ConnectionsResultsDataConnectionStatus = (typeof ConnectionsResultsDataConnectionStatus)[keyof typeof ConnectionsResultsDataConnectionStatus];
export const ConnectionsSourceTypeDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type ConnectionsSourceTypeDataConnectionSourceType = (typeof ConnectionsSourceTypeDataConnectionSourceType)[keyof typeof ConnectionsSourceTypeDataConnectionSourceType];
export const ConnectionsStatusDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type ConnectionsStatusDataConnectionStatus = (typeof ConnectionsStatusDataConnectionStatus)[keyof typeof ConnectionsStatusDataConnectionStatus];
export const ConnectionsStatusErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type ConnectionsStatusErrorStatus = (typeof ConnectionsStatusErrorStatus)[keyof typeof ConnectionsStatusErrorStatus];
export const ContactAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type ContactAccountingAddressType = (typeof ContactAccountingAddressType)[keyof typeof ContactAccountingAddressType];
export const ContactAddressAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type ContactAddressAccountingAddressType = (typeof ContactAddressAccountingAddressType)[keyof typeof ContactAddressAccountingAddressType];
export const ContactPhoneType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type ContactPhoneType = (typeof ContactPhoneType)[keyof typeof ContactPhoneType];
export const ContactRefType = {
  Supplier: "Supplier",
} as const;
export type ContactRefType = (typeof ContactRefType)[keyof typeof ContactRefType];
export const ContactStatusSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type ContactStatusSupplierStatus = (typeof ContactStatusSupplierStatus)[keyof typeof ContactStatusSupplierStatus];
export const ContactSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type ContactSupplierStatus = (typeof ContactSupplierStatus)[keyof typeof ContactSupplierStatus];
export const ContactType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type ContactType = (typeof ContactType)[keyof typeof ContactType];
export const ContactTypeAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type ContactTypeAccountingAddressType = (typeof ContactTypeAccountingAddressType)[keyof typeof ContactTypeAccountingAddressType];
export const CreateAccountResponseAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type CreateAccountResponseAccountType = (typeof CreateAccountResponseAccountType)[keyof typeof CreateAccountResponseAccountType];
export const CreateAccountResponseBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type CreateAccountResponseBankAccountStatus = (typeof CreateAccountResponseBankAccountStatus)[keyof typeof CreateAccountResponseBankAccountStatus];
export const CreateAccountResponseDataAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type CreateAccountResponseDataAccountType = (typeof CreateAccountResponseDataAccountType)[keyof typeof CreateAccountResponseDataAccountType];
export const CreateAccountResponseDataBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type CreateAccountResponseDataBankAccountStatus = (typeof CreateAccountResponseDataBankAccountStatus)[keyof typeof CreateAccountResponseDataBankAccountStatus];
export const CreateAccountResponseDataType = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type CreateAccountResponseDataType = (typeof CreateAccountResponseDataType)[keyof typeof CreateAccountResponseDataType];
export const CreateAccountResponseDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type CreateAccountResponseDataTypeDataTypes = (typeof CreateAccountResponseDataTypeDataTypes)[keyof typeof CreateAccountResponseDataTypeDataTypes];
export const CreateAccountResponseDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type CreateAccountResponseDataTypes = (typeof CreateAccountResponseDataTypes)[keyof typeof CreateAccountResponseDataTypes];
export const CreateAccountResponsePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type CreateAccountResponsePushChangeType = (typeof CreateAccountResponsePushChangeType)[keyof typeof CreateAccountResponsePushChangeType];
export const CreateAccountResponsePushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type CreateAccountResponsePushOperationStatus = (typeof CreateAccountResponsePushOperationStatus)[keyof typeof CreateAccountResponsePushOperationStatus];
export const CreateAccountResponseStatusBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type CreateAccountResponseStatusBankAccountStatus = (typeof CreateAccountResponseStatusBankAccountStatus)[keyof typeof CreateAccountResponseStatusBankAccountStatus];
export const CreateAccountResponseStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type CreateAccountResponseStatusPushOperationStatus = (typeof CreateAccountResponseStatusPushOperationStatus)[keyof typeof CreateAccountResponseStatusPushOperationStatus];
export const CreateAccountResponseTypeAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type CreateAccountResponseTypeAccountType = (typeof CreateAccountResponseTypeAccountType)[keyof typeof CreateAccountResponseTypeAccountType];
export const CreateAccountResponseTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type CreateAccountResponseTypePushChangeType = (typeof CreateAccountResponseTypePushChangeType)[keyof typeof CreateAccountResponseTypePushChangeType];
export const CreateAdjustmentRequestDataType = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type CreateAdjustmentRequestDataType = (typeof CreateAdjustmentRequestDataType)[keyof typeof CreateAdjustmentRequestDataType];
export const CreateAdjustmentRequestInvoiceToType = {
  Customer: "customer",
} as const;
export type CreateAdjustmentRequestInvoiceToType = (typeof CreateAdjustmentRequestInvoiceToType)[keyof typeof CreateAdjustmentRequestInvoiceToType];
export const CreateAdjustmentRequestTrackingRefsDataType = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type CreateAdjustmentRequestTrackingRefsDataType = (typeof CreateAdjustmentRequestTrackingRefsDataType)[keyof typeof CreateAdjustmentRequestTrackingRefsDataType];
export const CreateAdjustmentRequestType = {
  Customer: "customer",
} as const;
export type CreateAdjustmentRequestType = (typeof CreateAdjustmentRequestType)[keyof typeof CreateAdjustmentRequestType];
export const CreateBankAccountResponseAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type CreateBankAccountResponseAccountType = (typeof CreateBankAccountResponseAccountType)[keyof typeof CreateBankAccountResponseAccountType];
export const CreateBankAccountResponseAccountTypeBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type CreateBankAccountResponseAccountTypeBankAccountType = (typeof CreateBankAccountResponseAccountTypeBankAccountType)[keyof typeof CreateBankAccountResponseAccountTypeBankAccountType];
export const CreateBankAccountResponseBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type CreateBankAccountResponseBankAccountStatus = (typeof CreateBankAccountResponseBankAccountStatus)[keyof typeof CreateBankAccountResponseBankAccountStatus];
export const CreateBankAccountResponseBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type CreateBankAccountResponseBankAccountType = (typeof CreateBankAccountResponseBankAccountType)[keyof typeof CreateBankAccountResponseBankAccountType];
export const CreateBankAccountResponseDataBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type CreateBankAccountResponseDataBankAccountStatus = (typeof CreateBankAccountResponseDataBankAccountStatus)[keyof typeof CreateBankAccountResponseDataBankAccountStatus];
export const CreateBankAccountResponseDataPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type CreateBankAccountResponseDataPushChangeType = (typeof CreateBankAccountResponseDataPushChangeType)[keyof typeof CreateBankAccountResponseDataPushChangeType];
export const CreateBankAccountResponseDataPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type CreateBankAccountResponseDataPushOperationStatus = (typeof CreateBankAccountResponseDataPushOperationStatus)[keyof typeof CreateBankAccountResponseDataPushOperationStatus];
export const CreateBankAccountResponseDataType = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type CreateBankAccountResponseDataType = (typeof CreateBankAccountResponseDataType)[keyof typeof CreateBankAccountResponseDataType];
export const CreateBankAccountResponseDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type CreateBankAccountResponseDataTypeDataTypes = (typeof CreateBankAccountResponseDataTypeDataTypes)[keyof typeof CreateBankAccountResponseDataTypeDataTypes];
export const CreateBankAccountResponseDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type CreateBankAccountResponseDataTypes = (typeof CreateBankAccountResponseDataTypes)[keyof typeof CreateBankAccountResponseDataTypes];
export const CreateBankAccountResponsePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type CreateBankAccountResponsePushChangeType = (typeof CreateBankAccountResponsePushChangeType)[keyof typeof CreateBankAccountResponsePushChangeType];
export const CreateBankAccountResponsePushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type CreateBankAccountResponsePushOperationStatus = (typeof CreateBankAccountResponsePushOperationStatus)[keyof typeof CreateBankAccountResponsePushOperationStatus];
export const CreateBankAccountResponseStatusBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type CreateBankAccountResponseStatusBankAccountStatus = (typeof CreateBankAccountResponseStatusBankAccountStatus)[keyof typeof CreateBankAccountResponseStatusBankAccountStatus];
export const CreateBankAccountResponseStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type CreateBankAccountResponseStatusPushOperationStatus = (typeof CreateBankAccountResponseStatusPushOperationStatus)[keyof typeof CreateBankAccountResponseStatusPushOperationStatus];
export const CreateBankAccountResponseTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type CreateBankAccountResponseTypePushChangeType = (typeof CreateBankAccountResponseTypePushChangeType)[keyof typeof CreateBankAccountResponseTypePushChangeType];
export const CreateCustomerResponseAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CreateCustomerResponseAccountingAddressType = (typeof CreateCustomerResponseAccountingAddressType)[keyof typeof CreateCustomerResponseAccountingAddressType];
export const CreateCustomerResponseAddressAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CreateCustomerResponseAddressAccountingAddressType = (typeof CreateCustomerResponseAddressAccountingAddressType)[keyof typeof CreateCustomerResponseAddressAccountingAddressType];
export const CreateCustomerResponseAddressesAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CreateCustomerResponseAddressesAccountingAddressType = (typeof CreateCustomerResponseAddressesAccountingAddressType)[keyof typeof CreateCustomerResponseAddressesAccountingAddressType];
export const CreateCustomerResponseDataSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type CreateCustomerResponseDataSupplierStatus = (typeof CreateCustomerResponseDataSupplierStatus)[keyof typeof CreateCustomerResponseDataSupplierStatus];
export const CreateCustomerResponseDataType = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type CreateCustomerResponseDataType = (typeof CreateCustomerResponseDataType)[keyof typeof CreateCustomerResponseDataType];
export const CreateCustomerResponseDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type CreateCustomerResponseDataTypeDataTypes = (typeof CreateCustomerResponseDataTypeDataTypes)[keyof typeof CreateCustomerResponseDataTypeDataTypes];
export const CreateCustomerResponseDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type CreateCustomerResponseDataTypes = (typeof CreateCustomerResponseDataTypes)[keyof typeof CreateCustomerResponseDataTypes];
export const CreateCustomerResponsePhoneType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type CreateCustomerResponsePhoneType = (typeof CreateCustomerResponsePhoneType)[keyof typeof CreateCustomerResponsePhoneType];
export const CreateCustomerResponsePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type CreateCustomerResponsePushChangeType = (typeof CreateCustomerResponsePushChangeType)[keyof typeof CreateCustomerResponsePushChangeType];
export const CreateCustomerResponsePushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type CreateCustomerResponsePushOperationStatus = (typeof CreateCustomerResponsePushOperationStatus)[keyof typeof CreateCustomerResponsePushOperationStatus];
export const CreateCustomerResponseStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type CreateCustomerResponseStatusPushOperationStatus = (typeof CreateCustomerResponseStatusPushOperationStatus)[keyof typeof CreateCustomerResponseStatusPushOperationStatus];
export const CreateCustomerResponseStatusSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type CreateCustomerResponseStatusSupplierStatus = (typeof CreateCustomerResponseStatusSupplierStatus)[keyof typeof CreateCustomerResponseStatusSupplierStatus];
export const CreateCustomerResponseSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type CreateCustomerResponseSupplierStatus = (typeof CreateCustomerResponseSupplierStatus)[keyof typeof CreateCustomerResponseSupplierStatus];
export const CreateCustomerResponseType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type CreateCustomerResponseType = (typeof CreateCustomerResponseType)[keyof typeof CreateCustomerResponseType];
export const CreateCustomerResponseTypeAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CreateCustomerResponseTypeAccountingAddressType = (typeof CreateCustomerResponseTypeAccountingAddressType)[keyof typeof CreateCustomerResponseTypeAccountingAddressType];
export const CreateCustomerResponseTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type CreateCustomerResponseTypePushChangeType = (typeof CreateCustomerResponseTypePushChangeType)[keyof typeof CreateCustomerResponseTypePushChangeType];
export const CreateExpenseRequestContactRefType = {
  Supplier: "Supplier",
} as const;
export type CreateExpenseRequestContactRefType = (typeof CreateExpenseRequestContactRefType)[keyof typeof CreateExpenseRequestContactRefType];
export const CreateExpenseRequestDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type CreateExpenseRequestDataType = (typeof CreateExpenseRequestDataType)[keyof typeof CreateExpenseRequestDataType];
export const CreateExpenseRequestInvoiceToType = {
  Customer: "customer",
} as const;
export type CreateExpenseRequestInvoiceToType = (typeof CreateExpenseRequestInvoiceToType)[keyof typeof CreateExpenseRequestInvoiceToType];
export const CreateExpenseRequestItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type CreateExpenseRequestItems = (typeof CreateExpenseRequestItems)[keyof typeof CreateExpenseRequestItems];
export const CreateExpenseRequestTrackingRefsDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type CreateExpenseRequestTrackingRefsDataType = (typeof CreateExpenseRequestTrackingRefsDataType)[keyof typeof CreateExpenseRequestTrackingRefsDataType];
export const CreateExpenseRequestType = {
  Supplier: "Supplier",
  Customer: "customer",
} as const;
export type CreateExpenseRequestType = (typeof CreateExpenseRequestType)[keyof typeof CreateExpenseRequestType];
export const CreateExpenseRequestType1 = {
  Supplier: "Supplier",
  Customer: "customer",
} as const;
export type CreateExpenseRequestType1 = (typeof CreateExpenseRequestType1)[keyof typeof CreateExpenseRequestType1];
export const CreateExpenseRequestType2 = {
  Supplier: "Supplier",
  Customer: "customer",
} as const;
export type CreateExpenseRequestType2 = (typeof CreateExpenseRequestType2)[keyof typeof CreateExpenseRequestType2];
export const CreateExpenseRequestTypeItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type CreateExpenseRequestTypeItems = (typeof CreateExpenseRequestTypeItems)[keyof typeof CreateExpenseRequestTypeItems];
export const CreateSupplierResponseAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CreateSupplierResponseAccountingAddressType = (typeof CreateSupplierResponseAccountingAddressType)[keyof typeof CreateSupplierResponseAccountingAddressType];
export const CreateSupplierResponseAddressesAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CreateSupplierResponseAddressesAccountingAddressType = (typeof CreateSupplierResponseAddressesAccountingAddressType)[keyof typeof CreateSupplierResponseAddressesAccountingAddressType];
export const CreateSupplierResponseDataSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type CreateSupplierResponseDataSupplierStatus = (typeof CreateSupplierResponseDataSupplierStatus)[keyof typeof CreateSupplierResponseDataSupplierStatus];
export const CreateSupplierResponseDataType = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type CreateSupplierResponseDataType = (typeof CreateSupplierResponseDataType)[keyof typeof CreateSupplierResponseDataType];
export const CreateSupplierResponseDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type CreateSupplierResponseDataTypeDataTypes = (typeof CreateSupplierResponseDataTypeDataTypes)[keyof typeof CreateSupplierResponseDataTypeDataTypes];
export const CreateSupplierResponseDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type CreateSupplierResponseDataTypes = (typeof CreateSupplierResponseDataTypes)[keyof typeof CreateSupplierResponseDataTypes];
export const CreateSupplierResponsePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type CreateSupplierResponsePushChangeType = (typeof CreateSupplierResponsePushChangeType)[keyof typeof CreateSupplierResponsePushChangeType];
export const CreateSupplierResponsePushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type CreateSupplierResponsePushOperationStatus = (typeof CreateSupplierResponsePushOperationStatus)[keyof typeof CreateSupplierResponsePushOperationStatus];
export const CreateSupplierResponseStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type CreateSupplierResponseStatusPushOperationStatus = (typeof CreateSupplierResponseStatusPushOperationStatus)[keyof typeof CreateSupplierResponseStatusPushOperationStatus];
export const CreateSupplierResponseStatusSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type CreateSupplierResponseStatusSupplierStatus = (typeof CreateSupplierResponseStatusSupplierStatus)[keyof typeof CreateSupplierResponseStatusSupplierStatus];
export const CreateSupplierResponseSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type CreateSupplierResponseSupplierStatus = (typeof CreateSupplierResponseSupplierStatus)[keyof typeof CreateSupplierResponseSupplierStatus];
export const CreateSupplierResponseTypeAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CreateSupplierResponseTypeAccountingAddressType = (typeof CreateSupplierResponseTypeAccountingAddressType)[keyof typeof CreateSupplierResponseTypeAccountingAddressType];
export const CreateSupplierResponseTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type CreateSupplierResponseTypePushChangeType = (typeof CreateSupplierResponseTypePushChangeType)[keyof typeof CreateSupplierResponseTypePushChangeType];
export const CurrentStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type CurrentStatus = (typeof CurrentStatus)[keyof typeof CurrentStatus];
export const CurrentStatusDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type CurrentStatusDatasetStatus = (typeof CurrentStatusDatasetStatus)[keyof typeof CurrentStatusDatasetStatus];
export const CustomerAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CustomerAccountingAddressType = (typeof CustomerAccountingAddressType)[keyof typeof CustomerAccountingAddressType];
export const CustomerAddressAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CustomerAddressAccountingAddressType = (typeof CustomerAddressAccountingAddressType)[keyof typeof CustomerAddressAccountingAddressType];
export const CustomerAddressesAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CustomerAddressesAccountingAddressType = (typeof CustomerAddressesAccountingAddressType)[keyof typeof CustomerAddressesAccountingAddressType];
export const CustomerPhoneType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type CustomerPhoneType = (typeof CustomerPhoneType)[keyof typeof CustomerPhoneType];
export const CustomerStatusCustomerStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type CustomerStatusCustomerStatus = (typeof CustomerStatusCustomerStatus)[keyof typeof CustomerStatusCustomerStatus];
export const CustomerStatusSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type CustomerStatusSupplierStatus = (typeof CustomerStatusSupplierStatus)[keyof typeof CustomerStatusSupplierStatus];
export const CustomerSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type CustomerSupplierStatus = (typeof CustomerSupplierStatus)[keyof typeof CustomerSupplierStatus];
export const CustomerType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType];
export const CustomerTypeAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CustomerTypeAccountingAddressType = (typeof CustomerTypeAccountingAddressType)[keyof typeof CustomerTypeAccountingAddressType];
export const CustomersAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CustomersAccountingAddressType = (typeof CustomersAccountingAddressType)[keyof typeof CustomersAccountingAddressType];
export const CustomersAddressAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CustomersAddressAccountingAddressType = (typeof CustomersAddressAccountingAddressType)[keyof typeof CustomersAddressAccountingAddressType];
export const CustomersAddressesAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CustomersAddressesAccountingAddressType = (typeof CustomersAddressesAccountingAddressType)[keyof typeof CustomersAddressesAccountingAddressType];
export const CustomersPhoneType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type CustomersPhoneType = (typeof CustomersPhoneType)[keyof typeof CustomersPhoneType];
export const CustomersResultsSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type CustomersResultsSupplierStatus = (typeof CustomersResultsSupplierStatus)[keyof typeof CustomersResultsSupplierStatus];
export const CustomersStatusSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type CustomersStatusSupplierStatus = (typeof CustomersStatusSupplierStatus)[keyof typeof CustomersStatusSupplierStatus];
export const CustomersSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type CustomersSupplierStatus = (typeof CustomersSupplierStatus)[keyof typeof CustomersSupplierStatus];
export const CustomersType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type CustomersType = (typeof CustomersType)[keyof typeof CustomersType];
export const CustomersTypeAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type CustomersTypeAccountingAddressType = (typeof CustomersTypeAccountingAddressType)[keyof typeof CustomersTypeAccountingAddressType];
export const DataAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type DataAccountType = (typeof DataAccountType)[keyof typeof DataAccountType];
export const DataBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type DataBankAccountStatus = (typeof DataBankAccountStatus)[keyof typeof DataBankAccountStatus];
export const DataConnectionErrorErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type DataConnectionErrorErrorStatus = (typeof DataConnectionErrorErrorStatus)[keyof typeof DataConnectionErrorErrorStatus];
export const DataConnectionErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type DataConnectionErrorStatus = (typeof DataConnectionErrorStatus)[keyof typeof DataConnectionErrorStatus];
export const DataConnectionErrorStatusErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type DataConnectionErrorStatusErrorStatus = (typeof DataConnectionErrorStatusErrorStatus)[keyof typeof DataConnectionErrorStatusErrorStatus];
export const DataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type DataConnectionSourceType = (typeof DataConnectionSourceType)[keyof typeof DataConnectionSourceType];
export const DataConnectionStatusDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type DataConnectionStatusDataConnectionStatus = (typeof DataConnectionStatusDataConnectionStatus)[keyof typeof DataConnectionStatusDataConnectionStatus];
export const DataConnectionsDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type DataConnectionsDataConnectionSourceType = (typeof DataConnectionsDataConnectionSourceType)[keyof typeof DataConnectionsDataConnectionSourceType];
export const DataConnectionsDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type DataConnectionsDataConnectionStatus = (typeof DataConnectionsDataConnectionStatus)[keyof typeof DataConnectionsDataConnectionStatus];
export const DataPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type DataPushChangeType = (typeof DataPushChangeType)[keyof typeof DataPushChangeType];
export const DataPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type DataPushOperationStatus = (typeof DataPushOperationStatus)[keyof typeof DataPushOperationStatus];
export const DataStatusCurrentStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type DataStatusCurrentStatus = (typeof DataStatusCurrentStatus)[keyof typeof DataStatusCurrentStatus];
export const DataStatusCurrentStatusDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type DataStatusCurrentStatusDatasetStatus = (typeof DataStatusCurrentStatusDatasetStatus)[keyof typeof DataStatusCurrentStatusDatasetStatus];
export const DataStatusDataType = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type DataStatusDataType = (typeof DataStatusDataType)[keyof typeof DataStatusDataType];
export const DataStatusDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type DataStatusDataTypeDataTypes = (typeof DataStatusDataTypeDataTypes)[keyof typeof DataStatusDataTypeDataTypes];
export const DataStatusDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type DataStatusDataTypes = (typeof DataStatusDataTypes)[keyof typeof DataStatusDataTypes];
export const DataStatusDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type DataStatusDatasetStatus = (typeof DataStatusDatasetStatus)[keyof typeof DataStatusDatasetStatus];
export const DataStatusResponseCurrentStatusDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type DataStatusResponseCurrentStatusDatasetStatus = (typeof DataStatusResponseCurrentStatusDatasetStatus)[keyof typeof DataStatusResponseCurrentStatusDatasetStatus];
export const DataStatusResponseDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type DataStatusResponseDataTypeDataTypes = (typeof DataStatusResponseDataTypeDataTypes)[keyof typeof DataStatusResponseDataTypeDataTypes];
export const DataStatusResponseDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type DataStatusResponseDataTypes = (typeof DataStatusResponseDataTypes)[keyof typeof DataStatusResponseDataTypes];
export const DataStatusResponseDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type DataStatusResponseDatasetStatus = (typeof DataStatusResponseDatasetStatus)[keyof typeof DataStatusResponseDatasetStatus];
export const DataSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type DataSupplierStatus = (typeof DataSupplierStatus)[keyof typeof DataSupplierStatus];
export const DataType1 = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type DataType1 = (typeof DataType1)[keyof typeof DataType1];
export const DataType2 = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type DataType2 = (typeof DataType2)[keyof typeof DataType2];
export const DataTypeDataType = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type DataTypeDataType = (typeof DataTypeDataType)[keyof typeof DataTypeDataType];
export const DataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type DataTypeDataTypes = (typeof DataTypeDataTypes)[keyof typeof DataTypeDataTypes];
export const DataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type DataTypes = (typeof DataTypes)[keyof typeof DataTypes];
export const DatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type DatasetStatus = (typeof DatasetStatus)[keyof typeof DatasetStatus];
export const DefinitionTransactionStatus = {
  Completed: "Completed",
  Failed: "Failed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
} as const;
export type DefinitionTransactionStatus = (typeof DefinitionTransactionStatus)[keyof typeof DefinitionTransactionStatus];
export const ErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type ErrorStatus = (typeof ErrorStatus)[keyof typeof ErrorStatus];
export const ExpenseContactRefType = {
  Supplier: "Supplier",
} as const;
export type ExpenseContactRefType = (typeof ExpenseContactRefType)[keyof typeof ExpenseContactRefType];
export const ExpenseTransactionContactRefType = {
  Supplier: "Supplier",
} as const;
export type ExpenseTransactionContactRefType = (typeof ExpenseTransactionContactRefType)[keyof typeof ExpenseTransactionContactRefType];
export const ExpenseTransactionDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type ExpenseTransactionDataType = (typeof ExpenseTransactionDataType)[keyof typeof ExpenseTransactionDataType];
export const ExpenseTransactionInvoiceToType = {
  Customer: "customer",
} as const;
export type ExpenseTransactionInvoiceToType = (typeof ExpenseTransactionInvoiceToType)[keyof typeof ExpenseTransactionInvoiceToType];
export const ExpenseTransactionItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type ExpenseTransactionItems = (typeof ExpenseTransactionItems)[keyof typeof ExpenseTransactionItems];
export const ExpenseTransactionLineDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type ExpenseTransactionLineDataType = (typeof ExpenseTransactionLineDataType)[keyof typeof ExpenseTransactionLineDataType];
export const ExpenseTransactionLineInvoiceToType = {
  Customer: "customer",
} as const;
export type ExpenseTransactionLineInvoiceToType = (typeof ExpenseTransactionLineInvoiceToType)[keyof typeof ExpenseTransactionLineInvoiceToType];
export const ExpenseTransactionLineTrackingRefsDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type ExpenseTransactionLineTrackingRefsDataType = (typeof ExpenseTransactionLineTrackingRefsDataType)[keyof typeof ExpenseTransactionLineTrackingRefsDataType];
export const ExpenseTransactionLineType = {
  Customer: "customer",
} as const;
export type ExpenseTransactionLineType = (typeof ExpenseTransactionLineType)[keyof typeof ExpenseTransactionLineType];
export const ExpenseTransactionTrackingRefsDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type ExpenseTransactionTrackingRefsDataType = (typeof ExpenseTransactionTrackingRefsDataType)[keyof typeof ExpenseTransactionTrackingRefsDataType];
export const ExpenseTransactionType = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type ExpenseTransactionType = (typeof ExpenseTransactionType)[keyof typeof ExpenseTransactionType];
export const ExpenseTransactionType1 = {
  Supplier: "Supplier",
  Customer: "customer",
} as const;
export type ExpenseTransactionType1 = (typeof ExpenseTransactionType1)[keyof typeof ExpenseTransactionType1];
export const ExpenseTransactionType2 = {
  Supplier: "Supplier",
  Customer: "customer",
} as const;
export type ExpenseTransactionType2 = (typeof ExpenseTransactionType2)[keyof typeof ExpenseTransactionType2];
export const ExpenseTransactionTypeItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type ExpenseTransactionTypeItems = (typeof ExpenseTransactionTypeItems)[keyof typeof ExpenseTransactionTypeItems];
export const ExpensesSyncWebhookPayloadStatus = {
  Completed: "Completed",
  Failed: "Failed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
} as const;
export type ExpensesSyncWebhookPayloadStatus = (typeof ExpensesSyncWebhookPayloadStatus)[keyof typeof ExpensesSyncWebhookPayloadStatus];
export const ExpensesSyncWebhookPayloadTransactionsStatus = {
  Completed: "Completed",
  Failed: "Failed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
} as const;
export type ExpensesSyncWebhookPayloadTransactionsStatus = (typeof ExpensesSyncWebhookPayloadTransactionsStatus)[keyof typeof ExpensesSyncWebhookPayloadTransactionsStatus];
export const ExpensesSyncWebhookStatus = {
  Completed: "Completed",
  Failed: "Failed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
} as const;
export type ExpensesSyncWebhookStatus = (typeof ExpensesSyncWebhookStatus)[keyof typeof ExpensesSyncWebhookStatus];
export const ExpensesSyncWebhookTransactionsStatus = {
  Completed: "Completed",
  Failed: "Failed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
} as const;
export type ExpensesSyncWebhookTransactionsStatus = (typeof ExpensesSyncWebhookTransactionsStatus)[keyof typeof ExpensesSyncWebhookTransactionsStatus];
export const IntegrationTypeIntegrationType = {
  Bankfeeds: "bankfeeds",
  Expenses: "expenses",
} as const;
export type IntegrationTypeIntegrationType = (typeof IntegrationTypeIntegrationType)[keyof typeof IntegrationTypeIntegrationType];
export const InvoiceToType = {
  Customer: "customer",
} as const;
export type InvoiceToType = (typeof InvoiceToType)[keyof typeof InvoiceToType];
export const Items1 = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type Items1 = (typeof Items1)[keyof typeof Items1];
export const Items2 = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type Items2 = (typeof Items2)[keyof typeof Items2];
export const ItemsAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
} as const;
export type ItemsAccountType = (typeof ItemsAccountType)[keyof typeof ItemsAccountType];
export const ItemsAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type ItemsAccountingAddressType = (typeof ItemsAccountingAddressType)[keyof typeof ItemsAccountingAddressType];
export const ItemsBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type ItemsBankAccountStatus = (typeof ItemsBankAccountStatus)[keyof typeof ItemsBankAccountStatus];
export const ItemsBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type ItemsBankAccountType = (typeof ItemsBankAccountType)[keyof typeof ItemsBankAccountType];
export const ItemsDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type ItemsDataConnectionSourceType = (typeof ItemsDataConnectionSourceType)[keyof typeof ItemsDataConnectionSourceType];
export const ItemsDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type ItemsDataConnectionStatus = (typeof ItemsDataConnectionStatus)[keyof typeof ItemsDataConnectionStatus];
export const ItemsDataType = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type ItemsDataType = (typeof ItemsDataType)[keyof typeof ItemsDataType];
export const ItemsDataType1 = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type ItemsDataType1 = (typeof ItemsDataType1)[keyof typeof ItemsDataType1];
export const ItemsDataType2 = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type ItemsDataType2 = (typeof ItemsDataType2)[keyof typeof ItemsDataType2];
export const ItemsDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type ItemsDataTypes = (typeof ItemsDataTypes)[keyof typeof ItemsDataTypes];
export const ItemsDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type ItemsDatasetStatus = (typeof ItemsDatasetStatus)[keyof typeof ItemsDatasetStatus];
export const ItemsErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type ItemsErrorStatus = (typeof ItemsErrorStatus)[keyof typeof ItemsErrorStatus];
export const ItemsIntegrationType = {
  Bankfeeds: "bankfeeds",
  Expenses: "expenses",
} as const;
export type ItemsIntegrationType = (typeof ItemsIntegrationType)[keyof typeof ItemsIntegrationType];
export const ItemsItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type ItemsItems = (typeof ItemsItems)[keyof typeof ItemsItems];
export const ItemsItems1 = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type ItemsItems1 = (typeof ItemsItems1)[keyof typeof ItemsItems1];
export const ItemsItems2 = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type ItemsItems2 = (typeof ItemsItems2)[keyof typeof ItemsItems2];
export const ItemsPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type ItemsPushChangeType = (typeof ItemsPushChangeType)[keyof typeof ItemsPushChangeType];
export const ItemsPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type ItemsPushOperationStatus = (typeof ItemsPushOperationStatus)[keyof typeof ItemsPushOperationStatus];
export const ItemsPushOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type ItemsPushOptionType = (typeof ItemsPushOptionType)[keyof typeof ItemsPushOptionType];
export const ItemsStatus = {
  Completed: "Completed",
  Failed: "Failed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
} as const;
export type ItemsStatus = (typeof ItemsStatus)[keyof typeof ItemsStatus];
export const ItemsSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type ItemsSupplierStatus = (typeof ItemsSupplierStatus)[keyof typeof ItemsSupplierStatus];
export const ItemsTransactionStatus = {
  Completed: "Completed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
  ValidationError: "ValidationError",
} as const;
export type ItemsTransactionStatus = (typeof ItemsTransactionStatus)[keyof typeof ItemsTransactionStatus];
export const ItemsType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type ItemsType = (typeof ItemsType)[keyof typeof ItemsType];
export const ItemsType1 = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Social: "Social",
  Supplier: "Supplier",
  Unknown: "Unknown",
  Website: "Website",
  Customer: "customer",
} as const;
export type ItemsType1 = (typeof ItemsType1)[keyof typeof ItemsType1];
export const ItemsType2 = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Social: "Social",
  Supplier: "Supplier",
  Unknown: "Unknown",
  Website: "Website",
  Customer: "customer",
} as const;
export type ItemsType2 = (typeof ItemsType2)[keyof typeof ItemsType2];
export const MappingOptionsAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
} as const;
export type MappingOptionsAccountType = (typeof MappingOptionsAccountType)[keyof typeof MappingOptionsAccountType];
export const MappingOptionsAccountsAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
} as const;
export type MappingOptionsAccountsAccountType = (typeof MappingOptionsAccountsAccountType)[keyof typeof MappingOptionsAccountsAccountType];
export const MappingOptionsItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type MappingOptionsItems = (typeof MappingOptionsItems)[keyof typeof MappingOptionsItems];
export const MappingOptionsItems1 = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type MappingOptionsItems1 = (typeof MappingOptionsItems1)[keyof typeof MappingOptionsItems1];
export const MappingOptionsItems2 = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type MappingOptionsItems2 = (typeof MappingOptionsItems2)[keyof typeof MappingOptionsItems2];
export const MappingOptionsValidForItems = {
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type MappingOptionsValidForItems = (typeof MappingOptionsValidForItems)[keyof typeof MappingOptionsValidForItems];
export const MappingOptionsValidTransactionTypesItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type MappingOptionsValidTransactionTypesItems = (typeof MappingOptionsValidTransactionTypesItems)[keyof typeof MappingOptionsValidTransactionTypesItems];
export const OneAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type OneAccountType = (typeof OneAccountType)[keyof typeof OneAccountType];
export const OneBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type OneBankAccountStatus = (typeof OneBankAccountStatus)[keyof typeof OneBankAccountStatus];
export const OneBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type OneBankAccountType = (typeof OneBankAccountType)[keyof typeof OneBankAccountType];
export const OneDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type OneDataConnectionSourceType = (typeof OneDataConnectionSourceType)[keyof typeof OneDataConnectionSourceType];
export const OneDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type OneDataConnectionStatus = (typeof OneDataConnectionStatus)[keyof typeof OneDataConnectionStatus];
export const OneDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type OneDataTypes = (typeof OneDataTypes)[keyof typeof OneDataTypes];
export const OneErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type OneErrorStatus = (typeof OneErrorStatus)[keyof typeof OneErrorStatus];
export const OnePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type OnePushChangeType = (typeof OnePushChangeType)[keyof typeof OnePushChangeType];
export const OnePushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type OnePushOperationStatus = (typeof OnePushOperationStatus)[keyof typeof OnePushOperationStatus];
export const OptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type OptionType = (typeof OptionType)[keyof typeof OptionType];
export const OptionTypePushOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type OptionTypePushOptionType = (typeof OptionTypePushOptionType)[keyof typeof OptionTypePushOptionType];
export const PhoneNumberItemsType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type PhoneNumberItemsType = (typeof PhoneNumberItemsType)[keyof typeof PhoneNumberItemsType];
export const PhoneNumbersType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type PhoneNumbersType = (typeof PhoneNumbersType)[keyof typeof PhoneNumbersType];
export const PhoneType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type PhoneType = (typeof PhoneType)[keyof typeof PhoneType];
export const PropertieAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type PropertieAccountStatus = (typeof PropertieAccountStatus)[keyof typeof PropertieAccountStatus];
export const PropertieAccountType = {
  Asset: "Asset",
  Credit: "Credit",
  Debit: "Debit",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type PropertieAccountType = (typeof PropertieAccountType)[keyof typeof PropertieAccountType];
export const PropertieAccountType1 = {
  Asset: "Asset",
  Credit: "Credit",
  Debit: "Debit",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type PropertieAccountType1 = (typeof PropertieAccountType1)[keyof typeof PropertieAccountType1];
export const PropertieAccountType2 = {
  Asset: "Asset",
  Credit: "Credit",
  Debit: "Debit",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type PropertieAccountType2 = (typeof PropertieAccountType2)[keyof typeof PropertieAccountType2];
export const PropertieBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type PropertieBankAccountStatus = (typeof PropertieBankAccountStatus)[keyof typeof PropertieBankAccountStatus];
export const PropertieBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type PropertieBankAccountType = (typeof PropertieBankAccountType)[keyof typeof PropertieBankAccountType];
export const PropertieCurrentStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type PropertieCurrentStatus = (typeof PropertieCurrentStatus)[keyof typeof PropertieCurrentStatus];
export const PropertieDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type PropertieDataConnectionSourceType = (typeof PropertieDataConnectionSourceType)[keyof typeof PropertieDataConnectionSourceType];
export const PropertieDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type PropertieDataConnectionStatus = (typeof PropertieDataConnectionStatus)[keyof typeof PropertieDataConnectionStatus];
export const PropertieDataType = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PropertieDataType = (typeof PropertieDataType)[keyof typeof PropertieDataType];
export const PropertieDataType1 = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PropertieDataType1 = (typeof PropertieDataType1)[keyof typeof PropertieDataType1];
export const PropertieDataType2 = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PropertieDataType2 = (typeof PropertieDataType2)[keyof typeof PropertieDataType2];
export const PropertieDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PropertieDataTypes = (typeof PropertieDataTypes)[keyof typeof PropertieDataTypes];
export const PropertieDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type PropertieDatasetStatus = (typeof PropertieDatasetStatus)[keyof typeof PropertieDatasetStatus];
export const PropertieErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type PropertieErrorStatus = (typeof PropertieErrorStatus)[keyof typeof PropertieErrorStatus];
export const PropertieIntegrationType = {
  Bankfeeds: "bankfeeds",
  Expenses: "expenses",
} as const;
export type PropertieIntegrationType = (typeof PropertieIntegrationType)[keyof typeof PropertieIntegrationType];
export const PropertieItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type PropertieItems = (typeof PropertieItems)[keyof typeof PropertieItems];
export const PropertieItems1 = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type PropertieItems1 = (typeof PropertieItems1)[keyof typeof PropertieItems1];
export const PropertieItems2 = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type PropertieItems2 = (typeof PropertieItems2)[keyof typeof PropertieItems2];
export const PropertieOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type PropertieOptionType = (typeof PropertieOptionType)[keyof typeof PropertieOptionType];
export const PropertiePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type PropertiePushChangeType = (typeof PropertiePushChangeType)[keyof typeof PropertiePushChangeType];
export const PropertiePushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type PropertiePushOperationStatus = (typeof PropertiePushOperationStatus)[keyof typeof PropertiePushOperationStatus];
export const PropertiePushOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type PropertiePushOptionType = (typeof PropertiePushOptionType)[keyof typeof PropertiePushOptionType];
export const PropertieSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type PropertieSourceType = (typeof PropertieSourceType)[keyof typeof PropertieSourceType];
export const PropertieStatus = {
  Active: "Active",
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  Completed: "Completed",
  Failed: "Failed",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  Pending: "Pending",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  PushError: "PushError",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Resolved: "Resolved",
  Unknown: "Unknown",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type PropertieStatus = (typeof PropertieStatus)[keyof typeof PropertieStatus];
export const PropertieStatus1 = {
  Active: "Active",
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  Completed: "Completed",
  Failed: "Failed",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  Pending: "Pending",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  PushError: "PushError",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Resolved: "Resolved",
  Unknown: "Unknown",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type PropertieStatus1 = (typeof PropertieStatus1)[keyof typeof PropertieStatus1];
export const PropertieStatus2 = {
  Active: "Active",
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  Completed: "Completed",
  Failed: "Failed",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  Pending: "Pending",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  PushError: "PushError",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Resolved: "Resolved",
  Unknown: "Unknown",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type PropertieStatus2 = (typeof PropertieStatus2)[keyof typeof PropertieStatus2];
export const PropertieTransactionStatus = {
  Completed: "Completed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
  ValidationError: "ValidationError",
} as const;
export type PropertieTransactionStatus = (typeof PropertieTransactionStatus)[keyof typeof PropertieTransactionStatus];
export const PropertieType = {
  Chargeback: "Chargeback",
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Payment: "Payment",
  Primary: "Primary",
  Refund: "Refund",
  Reward: "Reward",
  Supplier: "Supplier",
  Unknown: "Unknown",
  Customer: "customer",
} as const;
export type PropertieType = (typeof PropertieType)[keyof typeof PropertieType];
export const PropertieType1 = {
  Chargeback: "Chargeback",
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Payment: "Payment",
  Primary: "Primary",
  Refund: "Refund",
  Reward: "Reward",
  Supplier: "Supplier",
  Unknown: "Unknown",
  Customer: "customer",
} as const;
export type PropertieType1 = (typeof PropertieType1)[keyof typeof PropertieType1];
export const PropertieType2 = {
  Chargeback: "Chargeback",
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Payment: "Payment",
  Primary: "Primary",
  Refund: "Refund",
  Reward: "Reward",
  Supplier: "Supplier",
  Unknown: "Unknown",
  Customer: "customer",
} as const;
export type PropertieType2 = (typeof PropertieType2)[keyof typeof PropertieType2];
export const PullOperationDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type PullOperationDatasetStatus = (typeof PullOperationDatasetStatus)[keyof typeof PullOperationDatasetStatus];
export const PullOperationStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type PullOperationStatus = (typeof PullOperationStatus)[keyof typeof PullOperationStatus];
export const PullOperationStatusDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type PullOperationStatusDatasetStatus = (typeof PullOperationStatusDatasetStatus)[keyof typeof PullOperationStatusDatasetStatus];
export const PullOperationsDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type PullOperationsDatasetStatus = (typeof PullOperationsDatasetStatus)[keyof typeof PullOperationsDatasetStatus];
export const PullOperationsStatusDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type PullOperationsStatusDatasetStatus = (typeof PullOperationsStatusDatasetStatus)[keyof typeof PullOperationsStatusDatasetStatus];
export const PushChangeTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type PushChangeTypePushChangeType = (typeof PushChangeTypePushChangeType)[keyof typeof PushChangeTypePushChangeType];
export const PushOperationChangeDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PushOperationChangeDataTypeDataTypes = (typeof PushOperationChangeDataTypeDataTypes)[keyof typeof PushOperationChangeDataTypeDataTypes];
export const PushOperationChangeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PushOperationChangeDataTypes = (typeof PushOperationChangeDataTypes)[keyof typeof PushOperationChangeDataTypes];
export const PushOperationChangePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type PushOperationChangePushChangeType = (typeof PushOperationChangePushChangeType)[keyof typeof PushOperationChangePushChangeType];
export const PushOperationChangeTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type PushOperationChangeTypePushChangeType = (typeof PushOperationChangeTypePushChangeType)[keyof typeof PushOperationChangeTypePushChangeType];
export const PushOperationDataType = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PushOperationDataType = (typeof PushOperationDataType)[keyof typeof PushOperationDataType];
export const PushOperationDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PushOperationDataTypeDataTypes = (typeof PushOperationDataTypeDataTypes)[keyof typeof PushOperationDataTypeDataTypes];
export const PushOperationDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PushOperationDataTypes = (typeof PushOperationDataTypes)[keyof typeof PushOperationDataTypes];
export const PushOperationPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type PushOperationPushChangeType = (typeof PushOperationPushChangeType)[keyof typeof PushOperationPushChangeType];
export const PushOperationPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type PushOperationPushOperationStatus = (typeof PushOperationPushOperationStatus)[keyof typeof PushOperationPushOperationStatus];
export const PushOperationRefDataType = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PushOperationRefDataType = (typeof PushOperationRefDataType)[keyof typeof PushOperationRefDataType];
export const PushOperationRefDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PushOperationRefDataTypeDataTypes = (typeof PushOperationRefDataTypeDataTypes)[keyof typeof PushOperationRefDataTypeDataTypes];
export const PushOperationRefDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PushOperationRefDataTypes = (typeof PushOperationRefDataTypes)[keyof typeof PushOperationRefDataTypes];
export const PushOperationReferenceDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PushOperationReferenceDataTypeDataTypes = (typeof PushOperationReferenceDataTypeDataTypes)[keyof typeof PushOperationReferenceDataTypeDataTypes];
export const PushOperationReferenceDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PushOperationReferenceDataTypes = (typeof PushOperationReferenceDataTypes)[keyof typeof PushOperationReferenceDataTypes];
export const PushOperationStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type PushOperationStatusPushOperationStatus = (typeof PushOperationStatusPushOperationStatus)[keyof typeof PushOperationStatusPushOperationStatus];
export const PushOperationTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type PushOperationTypePushChangeType = (typeof PushOperationTypePushChangeType)[keyof typeof PushOperationTypePushChangeType];
export const PushOperationsDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PushOperationsDataTypeDataTypes = (typeof PushOperationsDataTypeDataTypes)[keyof typeof PushOperationsDataTypeDataTypes];
export const PushOperationsDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type PushOperationsDataTypes = (typeof PushOperationsDataTypes)[keyof typeof PushOperationsDataTypes];
export const PushOperationsPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type PushOperationsPushChangeType = (typeof PushOperationsPushChangeType)[keyof typeof PushOperationsPushChangeType];
export const PushOperationsPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type PushOperationsPushOperationStatus = (typeof PushOperationsPushOperationStatus)[keyof typeof PushOperationsPushOperationStatus];
export const PushOperationsResultsPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type PushOperationsResultsPushChangeType = (typeof PushOperationsResultsPushChangeType)[keyof typeof PushOperationsResultsPushChangeType];
export const PushOperationsResultsPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type PushOperationsResultsPushOperationStatus = (typeof PushOperationsResultsPushOperationStatus)[keyof typeof PushOperationsResultsPushOperationStatus];
export const PushOperationsStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type PushOperationsStatusPushOperationStatus = (typeof PushOperationsStatusPushOperationStatus)[keyof typeof PushOperationsStatusPushOperationStatus];
export const PushOperationsTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type PushOperationsTypePushChangeType = (typeof PushOperationsTypePushChangeType)[keyof typeof PushOperationsTypePushChangeType];
export const PushOptionChoicePushOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type PushOptionChoicePushOptionType = (typeof PushOptionChoicePushOptionType)[keyof typeof PushOptionChoicePushOptionType];
export const PushOptionChoiceTypePushOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type PushOptionChoiceTypePushOptionType = (typeof PushOptionChoiceTypePushOptionType)[keyof typeof PushOptionChoiceTypePushOptionType];
export const PushOptionPropertyPushOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type PushOptionPropertyPushOptionType = (typeof PushOptionPropertyPushOptionType)[keyof typeof PushOptionPropertyPushOptionType];
export const PushOptionPropertyTypePushOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type PushOptionPropertyTypePushOptionType = (typeof PushOptionPropertyTypePushOptionType)[keyof typeof PushOptionPropertyTypePushOptionType];
export const PushOptionPushOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type PushOptionPushOptionType = (typeof PushOptionPushOptionType)[keyof typeof PushOptionPushOptionType];
export const PushOptionTypePushOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type PushOptionTypePushOptionType = (typeof PushOptionTypePushOptionType)[keyof typeof PushOptionTypePushOptionType];
export const ReimbursableExpenseTransactionDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type ReimbursableExpenseTransactionDataType = (typeof ReimbursableExpenseTransactionDataType)[keyof typeof ReimbursableExpenseTransactionDataType];
export const ReimbursableExpenseTransactionInvoiceToType = {
  Customer: "customer",
} as const;
export type ReimbursableExpenseTransactionInvoiceToType = (typeof ReimbursableExpenseTransactionInvoiceToType)[keyof typeof ReimbursableExpenseTransactionInvoiceToType];
export const ReimbursableExpenseTransactionLineDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type ReimbursableExpenseTransactionLineDataType = (typeof ReimbursableExpenseTransactionLineDataType)[keyof typeof ReimbursableExpenseTransactionLineDataType];
export const ReimbursableExpenseTransactionLineInvoiceToType = {
  Customer: "customer",
} as const;
export type ReimbursableExpenseTransactionLineInvoiceToType = (typeof ReimbursableExpenseTransactionLineInvoiceToType)[keyof typeof ReimbursableExpenseTransactionLineInvoiceToType];
export const ReimbursableExpenseTransactionLineTrackingRefsDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type ReimbursableExpenseTransactionLineTrackingRefsDataType = (typeof ReimbursableExpenseTransactionLineTrackingRefsDataType)[keyof typeof ReimbursableExpenseTransactionLineTrackingRefsDataType];
export const ReimbursableExpenseTransactionLineType = {
  Customer: "customer",
} as const;
export type ReimbursableExpenseTransactionLineType = (typeof ReimbursableExpenseTransactionLineType)[keyof typeof ReimbursableExpenseTransactionLineType];
export const ReimbursableExpenseTransactionRequestDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type ReimbursableExpenseTransactionRequestDataType = (typeof ReimbursableExpenseTransactionRequestDataType)[keyof typeof ReimbursableExpenseTransactionRequestDataType];
export const ReimbursableExpenseTransactionRequestInvoiceToType = {
  Customer: "customer",
} as const;
export type ReimbursableExpenseTransactionRequestInvoiceToType = (typeof ReimbursableExpenseTransactionRequestInvoiceToType)[keyof typeof ReimbursableExpenseTransactionRequestInvoiceToType];
export const ReimbursableExpenseTransactionRequestTrackingRefsDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type ReimbursableExpenseTransactionRequestTrackingRefsDataType = (typeof ReimbursableExpenseTransactionRequestTrackingRefsDataType)[keyof typeof ReimbursableExpenseTransactionRequestTrackingRefsDataType];
export const ReimbursableExpenseTransactionRequestType = {
  Customer: "customer",
} as const;
export type ReimbursableExpenseTransactionRequestType = (typeof ReimbursableExpenseTransactionRequestType)[keyof typeof ReimbursableExpenseTransactionRequestType];
export const ReimbursableExpenseTransactionTrackingRefsDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type ReimbursableExpenseTransactionTrackingRefsDataType = (typeof ReimbursableExpenseTransactionTrackingRefsDataType)[keyof typeof ReimbursableExpenseTransactionTrackingRefsDataType];
export const ReimbursableExpenseTransactionType = {
  Customer: "customer",
} as const;
export type ReimbursableExpenseTransactionType = (typeof ReimbursableExpenseTransactionType)[keyof typeof ReimbursableExpenseTransactionType];
export const ResultsBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type ResultsBankAccountStatus = (typeof ResultsBankAccountStatus)[keyof typeof ResultsBankAccountStatus];
export const ResultsDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type ResultsDataConnectionSourceType = (typeof ResultsDataConnectionSourceType)[keyof typeof ResultsDataConnectionSourceType];
export const ResultsDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type ResultsDataConnectionStatus = (typeof ResultsDataConnectionStatus)[keyof typeof ResultsDataConnectionStatus];
export const ResultsIntegrationType = {
  Bankfeeds: "bankfeeds",
  Expenses: "expenses",
} as const;
export type ResultsIntegrationType = (typeof ResultsIntegrationType)[keyof typeof ResultsIntegrationType];
export const ResultsPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type ResultsPushChangeType = (typeof ResultsPushChangeType)[keyof typeof ResultsPushChangeType];
export const ResultsPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type ResultsPushOperationStatus = (typeof ResultsPushOperationStatus)[keyof typeof ResultsPushOperationStatus];
export const ResultsSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type ResultsSupplierStatus = (typeof ResultsSupplierStatus)[keyof typeof ResultsSupplierStatus];
export const SchemaAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type SchemaAccountStatus = (typeof SchemaAccountStatus)[keyof typeof SchemaAccountStatus];
export const SchemaAccountType = {
  Asset: "Asset",
  Credit: "Credit",
  Debit: "Debit",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type SchemaAccountType = (typeof SchemaAccountType)[keyof typeof SchemaAccountType];
export const SchemaAccountType1 = {
  Asset: "Asset",
  Credit: "Credit",
  Debit: "Debit",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type SchemaAccountType1 = (typeof SchemaAccountType1)[keyof typeof SchemaAccountType1];
export const SchemaAccountType2 = {
  Asset: "Asset",
  Credit: "Credit",
  Debit: "Debit",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type SchemaAccountType2 = (typeof SchemaAccountType2)[keyof typeof SchemaAccountType2];
export const SchemaBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type SchemaBankAccountStatus = (typeof SchemaBankAccountStatus)[keyof typeof SchemaBankAccountStatus];
export const SchemaBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type SchemaBankAccountType = (typeof SchemaBankAccountType)[keyof typeof SchemaBankAccountType];
export const SchemaCurrentStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type SchemaCurrentStatus = (typeof SchemaCurrentStatus)[keyof typeof SchemaCurrentStatus];
export const SchemaDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type SchemaDataConnectionSourceType = (typeof SchemaDataConnectionSourceType)[keyof typeof SchemaDataConnectionSourceType];
export const SchemaDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type SchemaDataConnectionStatus = (typeof SchemaDataConnectionStatus)[keyof typeof SchemaDataConnectionStatus];
export const SchemaDataType = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type SchemaDataType = (typeof SchemaDataType)[keyof typeof SchemaDataType];
export const SchemaDataType1 = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type SchemaDataType1 = (typeof SchemaDataType1)[keyof typeof SchemaDataType1];
export const SchemaDataType2 = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type SchemaDataType2 = (typeof SchemaDataType2)[keyof typeof SchemaDataType2];
export const SchemaDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type SchemaDataTypes = (typeof SchemaDataTypes)[keyof typeof SchemaDataTypes];
export const SchemaDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type SchemaDatasetStatus = (typeof SchemaDatasetStatus)[keyof typeof SchemaDatasetStatus];
export const SchemaErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type SchemaErrorStatus = (typeof SchemaErrorStatus)[keyof typeof SchemaErrorStatus];
export const SchemaIntegrationType = {
  Bankfeeds: "bankfeeds",
  Expenses: "expenses",
} as const;
export type SchemaIntegrationType = (typeof SchemaIntegrationType)[keyof typeof SchemaIntegrationType];
export const SchemaItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type SchemaItems = (typeof SchemaItems)[keyof typeof SchemaItems];
export const SchemaItems1 = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type SchemaItems1 = (typeof SchemaItems1)[keyof typeof SchemaItems1];
export const SchemaItems2 = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type SchemaItems2 = (typeof SchemaItems2)[keyof typeof SchemaItems2];
export const SchemaOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type SchemaOptionType = (typeof SchemaOptionType)[keyof typeof SchemaOptionType];
export const SchemaPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type SchemaPushChangeType = (typeof SchemaPushChangeType)[keyof typeof SchemaPushChangeType];
export const SchemaPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type SchemaPushOperationStatus = (typeof SchemaPushOperationStatus)[keyof typeof SchemaPushOperationStatus];
export const SchemaPushOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type SchemaPushOptionType = (typeof SchemaPushOptionType)[keyof typeof SchemaPushOptionType];
export const SchemaSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type SchemaSourceType = (typeof SchemaSourceType)[keyof typeof SchemaSourceType];
export const SchemaStatus = {
  Active: "Active",
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  Completed: "Completed",
  Failed: "Failed",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  Pending: "Pending",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  PushError: "PushError",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Resolved: "Resolved",
  Unknown: "Unknown",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type SchemaStatus = (typeof SchemaStatus)[keyof typeof SchemaStatus];
export const SchemaStatus1 = {
  Active: "Active",
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  Completed: "Completed",
  Failed: "Failed",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  Pending: "Pending",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  PushError: "PushError",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Resolved: "Resolved",
  Unknown: "Unknown",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type SchemaStatus1 = (typeof SchemaStatus1)[keyof typeof SchemaStatus1];
export const SchemaStatus2 = {
  Active: "Active",
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  Completed: "Completed",
  Failed: "Failed",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  Pending: "Pending",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  PushError: "PushError",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Resolved: "Resolved",
  Unknown: "Unknown",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type SchemaStatus2 = (typeof SchemaStatus2)[keyof typeof SchemaStatus2];
export const SchemaTransactionStatus = {
  Completed: "Completed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
  ValidationError: "ValidationError",
} as const;
export type SchemaTransactionStatus = (typeof SchemaTransactionStatus)[keyof typeof SchemaTransactionStatus];
export const SchemaType = {
  Chargeback: "Chargeback",
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Payment: "Payment",
  Primary: "Primary",
  Refund: "Refund",
  Reward: "Reward",
  Supplier: "Supplier",
  Unknown: "Unknown",
  Customer: "customer",
} as const;
export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];
export const SchemaType1 = {
  Chargeback: "Chargeback",
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Payment: "Payment",
  Primary: "Primary",
  Refund: "Refund",
  Reward: "Reward",
  Supplier: "Supplier",
  Unknown: "Unknown",
  Customer: "customer",
} as const;
export type SchemaType1 = (typeof SchemaType1)[keyof typeof SchemaType1];
export const SchemaType2 = {
  Chargeback: "Chargeback",
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Payment: "Payment",
  Primary: "Primary",
  Refund: "Refund",
  Reward: "Reward",
  Supplier: "Supplier",
  Unknown: "Unknown",
  Customer: "customer",
} as const;
export type SchemaType2 = (typeof SchemaType2)[keyof typeof SchemaType2];
export const SourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type SourceType = (typeof SourceType)[keyof typeof SourceType];
export const SourceTypeDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type SourceTypeDataConnectionSourceType = (typeof SourceTypeDataConnectionSourceType)[keyof typeof SourceTypeDataConnectionSourceType];
export const Status1 = {
  Active: "Active",
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  Completed: "Completed",
  Failed: "Failed",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  Pending: "Pending",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  PushError: "PushError",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Resolved: "Resolved",
  Unknown: "Unknown",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1];
export const Status2 = {
  Active: "Active",
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  Completed: "Completed",
  Failed: "Failed",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  Pending: "Pending",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  PushError: "PushError",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Resolved: "Resolved",
  Unknown: "Unknown",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2];
export const StatusBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type StatusBankAccountStatus = (typeof StatusBankAccountStatus)[keyof typeof StatusBankAccountStatus];
export const StatusDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type StatusDataConnectionStatus = (typeof StatusDataConnectionStatus)[keyof typeof StatusDataConnectionStatus];
export const StatusDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type StatusDatasetStatus = (typeof StatusDatasetStatus)[keyof typeof StatusDatasetStatus];
export const StatusErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type StatusErrorStatus = (typeof StatusErrorStatus)[keyof typeof StatusErrorStatus];
export const StatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type StatusPushOperationStatus = (typeof StatusPushOperationStatus)[keyof typeof StatusPushOperationStatus];
export const StatusStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type StatusStatus = (typeof StatusStatus)[keyof typeof StatusStatus];
export const StatusSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type StatusSupplierStatus = (typeof StatusSupplierStatus)[keyof typeof StatusSupplierStatus];
export const StatusTransactionStatus = {
  Completed: "Completed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
  ValidationError: "ValidationError",
} as const;
export type StatusTransactionStatus = (typeof StatusTransactionStatus)[keyof typeof StatusTransactionStatus];
export const SupplierAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type SupplierAccountingAddressType = (typeof SupplierAccountingAddressType)[keyof typeof SupplierAccountingAddressType];
export const SupplierAddressesAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type SupplierAddressesAccountingAddressType = (typeof SupplierAddressesAccountingAddressType)[keyof typeof SupplierAddressesAccountingAddressType];
export const SupplierStatusSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type SupplierStatusSupplierStatus = (typeof SupplierStatusSupplierStatus)[keyof typeof SupplierStatusSupplierStatus];
export const SupplierSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type SupplierSupplierStatus = (typeof SupplierSupplierStatus)[keyof typeof SupplierSupplierStatus];
export const SupplierTypeAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type SupplierTypeAccountingAddressType = (typeof SupplierTypeAccountingAddressType)[keyof typeof SupplierTypeAccountingAddressType];
export const SuppliersAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type SuppliersAccountingAddressType = (typeof SuppliersAccountingAddressType)[keyof typeof SuppliersAccountingAddressType];
export const SuppliersAddressesAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type SuppliersAddressesAccountingAddressType = (typeof SuppliersAddressesAccountingAddressType)[keyof typeof SuppliersAddressesAccountingAddressType];
export const SuppliersResultsSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type SuppliersResultsSupplierStatus = (typeof SuppliersResultsSupplierStatus)[keyof typeof SuppliersResultsSupplierStatus];
export const SuppliersStatusSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type SuppliersStatusSupplierStatus = (typeof SuppliersStatusSupplierStatus)[keyof typeof SuppliersStatusSupplierStatus];
export const SuppliersSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type SuppliersSupplierStatus = (typeof SuppliersSupplierStatus)[keyof typeof SuppliersSupplierStatus];
export const SuppliersTypeAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type SuppliersTypeAccountingAddressType = (typeof SuppliersTypeAccountingAddressType)[keyof typeof SuppliersTypeAccountingAddressType];
export const TaxRateMappingInfoItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type TaxRateMappingInfoItems = (typeof TaxRateMappingInfoItems)[keyof typeof TaxRateMappingInfoItems];
export const TaxRateMappingInfoValidTransactionTypes = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type TaxRateMappingInfoValidTransactionTypes = (typeof TaxRateMappingInfoValidTransactionTypes)[keyof typeof TaxRateMappingInfoValidTransactionTypes];
export const TaxRateMappingInfoValidTransactionTypesItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type TaxRateMappingInfoValidTransactionTypesItems = (typeof TaxRateMappingInfoValidTransactionTypesItems)[keyof typeof TaxRateMappingInfoValidTransactionTypesItems];
export const TrackingRefAdjustmentTransactionDataType = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type TrackingRefAdjustmentTransactionDataType = (typeof TrackingRefAdjustmentTransactionDataType)[keyof typeof TrackingRefAdjustmentTransactionDataType];
export const TrackingRefDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type TrackingRefDataType = (typeof TrackingRefDataType)[keyof typeof TrackingRefDataType];
export const TrackingRefsDataType = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type TrackingRefsDataType = (typeof TrackingRefsDataType)[keyof typeof TrackingRefsDataType];
export const TrackingRefsDataType1 = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type TrackingRefsDataType1 = (typeof TrackingRefsDataType1)[keyof typeof TrackingRefsDataType1];
export const TrackingRefsDataType2 = {
  Customers: "customers",
  Suppliers: "suppliers",
  TrackingCategories: "trackingCategories",
} as const;
export type TrackingRefsDataType2 = (typeof TrackingRefsDataType2)[keyof typeof TrackingRefsDataType2];
export const TransactionIntegrationType = {
  Bankfeeds: "bankfeeds",
  Expenses: "expenses",
} as const;
export type TransactionIntegrationType = (typeof TransactionIntegrationType)[keyof typeof TransactionIntegrationType];
export const TransactionResponseIntegrationType = {
  Bankfeeds: "bankfeeds",
  Expenses: "expenses",
} as const;
export type TransactionResponseIntegrationType = (typeof TransactionResponseIntegrationType)[keyof typeof TransactionResponseIntegrationType];
export const TransactionResponseStatusTransactionStatus = {
  Completed: "Completed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
  ValidationError: "ValidationError",
} as const;
export type TransactionResponseStatusTransactionStatus = (typeof TransactionResponseStatusTransactionStatus)[keyof typeof TransactionResponseStatusTransactionStatus];
export const TransactionResponseTransactionStatus = {
  Completed: "Completed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
  ValidationError: "ValidationError",
} as const;
export type TransactionResponseTransactionStatus = (typeof TransactionResponseTransactionStatus)[keyof typeof TransactionResponseTransactionStatus];
export const TransactionStatus1 = {
  Completed: "Completed",
  Failed: "Failed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
} as const;
export type TransactionStatus1 = (typeof TransactionStatus1)[keyof typeof TransactionStatus1];
export const TransactionStatus2 = {
  Completed: "Completed",
  Failed: "Failed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
  ValidationError: "ValidationError",
} as const;
export type TransactionStatus2 = (typeof TransactionStatus2)[keyof typeof TransactionStatus2];
export const TransactionStatusTransactionStatus = {
  Completed: "Completed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
  ValidationError: "ValidationError",
} as const;
export type TransactionStatusTransactionStatus = (typeof TransactionStatusTransactionStatus)[keyof typeof TransactionStatusTransactionStatus];
export const TransactionTransactionStatus = {
  Completed: "Completed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
  ValidationError: "ValidationError",
} as const;
export type TransactionTransactionStatus = (typeof TransactionTransactionStatus)[keyof typeof TransactionTransactionStatus];
export const TransactionsIntegrationType = {
  Bankfeeds: "bankfeeds",
  Expenses: "expenses",
} as const;
export type TransactionsIntegrationType = (typeof TransactionsIntegrationType)[keyof typeof TransactionsIntegrationType];
export const TransactionsResultsIntegrationType = {
  Bankfeeds: "bankfeeds",
  Expenses: "expenses",
} as const;
export type TransactionsResultsIntegrationType = (typeof TransactionsResultsIntegrationType)[keyof typeof TransactionsResultsIntegrationType];
export const TransactionsStatus = {
  Completed: "Completed",
  Failed: "Failed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
} as const;
export type TransactionsStatus = (typeof TransactionsStatus)[keyof typeof TransactionsStatus];
export const TransactionsStatusTransactionStatus = {
  Completed: "Completed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
  ValidationError: "ValidationError",
} as const;
export type TransactionsStatusTransactionStatus = (typeof TransactionsStatusTransactionStatus)[keyof typeof TransactionsStatusTransactionStatus];
export const TransactionsTransactionStatus = {
  Completed: "Completed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
  ValidationError: "ValidationError",
} as const;
export type TransactionsTransactionStatus = (typeof TransactionsTransactionStatus)[keyof typeof TransactionsTransactionStatus];
export const Type = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type Type = (typeof Type)[keyof typeof Type];
export const Type1 = {
  Chargeback: "Chargeback",
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Payment: "Payment",
  Primary: "Primary",
  Refund: "Refund",
  Reward: "Reward",
  Social: "Social",
  Supplier: "Supplier",
  Unknown: "Unknown",
  Website: "Website",
  Customer: "customer",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1];
export const Type2 = {
  Chargeback: "Chargeback",
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Payment: "Payment",
  Primary: "Primary",
  Refund: "Refund",
  Reward: "Reward",
  Social: "Social",
  Supplier: "Supplier",
  Unknown: "Unknown",
  Website: "Website",
  Customer: "customer",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2];
export const TypeAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type TypeAccountType = (typeof TypeAccountType)[keyof typeof TypeAccountType];
export const TypeAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type TypeAccountingAddressType = (typeof TypeAccountingAddressType)[keyof typeof TypeAccountingAddressType];
export const TypeItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type TypeItems = (typeof TypeItems)[keyof typeof TypeItems];
export const TypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type TypePushChangeType = (typeof TypePushChangeType)[keyof typeof TypePushChangeType];
export const TypePushOptionType = {
  Array: "Array",
  Boolean: "Boolean",
  DateTime: "DateTime",
  File: "File",
  MultiPart: "MultiPart",
  Number: "Number",
  Object: "Object",
  String: "String",
} as const;
export type TypePushOptionType = (typeof TypePushOptionType)[keyof typeof TypePushOptionType];
export const UpdateCustomerResponseAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type UpdateCustomerResponseAccountingAddressType = (typeof UpdateCustomerResponseAccountingAddressType)[keyof typeof UpdateCustomerResponseAccountingAddressType];
export const UpdateCustomerResponseAddressAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type UpdateCustomerResponseAddressAccountingAddressType = (typeof UpdateCustomerResponseAddressAccountingAddressType)[keyof typeof UpdateCustomerResponseAddressAccountingAddressType];
export const UpdateCustomerResponseAddressesAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type UpdateCustomerResponseAddressesAccountingAddressType = (typeof UpdateCustomerResponseAddressesAccountingAddressType)[keyof typeof UpdateCustomerResponseAddressesAccountingAddressType];
export const UpdateCustomerResponseDataSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type UpdateCustomerResponseDataSupplierStatus = (typeof UpdateCustomerResponseDataSupplierStatus)[keyof typeof UpdateCustomerResponseDataSupplierStatus];
export const UpdateCustomerResponseDataType = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type UpdateCustomerResponseDataType = (typeof UpdateCustomerResponseDataType)[keyof typeof UpdateCustomerResponseDataType];
export const UpdateCustomerResponseDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type UpdateCustomerResponseDataTypeDataTypes = (typeof UpdateCustomerResponseDataTypeDataTypes)[keyof typeof UpdateCustomerResponseDataTypeDataTypes];
export const UpdateCustomerResponseDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type UpdateCustomerResponseDataTypes = (typeof UpdateCustomerResponseDataTypes)[keyof typeof UpdateCustomerResponseDataTypes];
export const UpdateCustomerResponsePhoneType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type UpdateCustomerResponsePhoneType = (typeof UpdateCustomerResponsePhoneType)[keyof typeof UpdateCustomerResponsePhoneType];
export const UpdateCustomerResponsePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type UpdateCustomerResponsePushChangeType = (typeof UpdateCustomerResponsePushChangeType)[keyof typeof UpdateCustomerResponsePushChangeType];
export const UpdateCustomerResponsePushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type UpdateCustomerResponsePushOperationStatus = (typeof UpdateCustomerResponsePushOperationStatus)[keyof typeof UpdateCustomerResponsePushOperationStatus];
export const UpdateCustomerResponseStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type UpdateCustomerResponseStatusPushOperationStatus = (typeof UpdateCustomerResponseStatusPushOperationStatus)[keyof typeof UpdateCustomerResponseStatusPushOperationStatus];
export const UpdateCustomerResponseStatusSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type UpdateCustomerResponseStatusSupplierStatus = (typeof UpdateCustomerResponseStatusSupplierStatus)[keyof typeof UpdateCustomerResponseStatusSupplierStatus];
export const UpdateCustomerResponseSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type UpdateCustomerResponseSupplierStatus = (typeof UpdateCustomerResponseSupplierStatus)[keyof typeof UpdateCustomerResponseSupplierStatus];
export const UpdateCustomerResponseType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type UpdateCustomerResponseType = (typeof UpdateCustomerResponseType)[keyof typeof UpdateCustomerResponseType];
export const UpdateCustomerResponseTypeAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type UpdateCustomerResponseTypeAccountingAddressType = (typeof UpdateCustomerResponseTypeAccountingAddressType)[keyof typeof UpdateCustomerResponseTypeAccountingAddressType];
export const UpdateCustomerResponseTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type UpdateCustomerResponseTypePushChangeType = (typeof UpdateCustomerResponseTypePushChangeType)[keyof typeof UpdateCustomerResponseTypePushChangeType];
export const UpdateExpenseRequestContactRefType = {
  Supplier: "Supplier",
} as const;
export type UpdateExpenseRequestContactRefType = (typeof UpdateExpenseRequestContactRefType)[keyof typeof UpdateExpenseRequestContactRefType];
export const UpdateExpenseRequestDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type UpdateExpenseRequestDataType = (typeof UpdateExpenseRequestDataType)[keyof typeof UpdateExpenseRequestDataType];
export const UpdateExpenseRequestInvoiceToType = {
  Customer: "customer",
} as const;
export type UpdateExpenseRequestInvoiceToType = (typeof UpdateExpenseRequestInvoiceToType)[keyof typeof UpdateExpenseRequestInvoiceToType];
export const UpdateExpenseRequestItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type UpdateExpenseRequestItems = (typeof UpdateExpenseRequestItems)[keyof typeof UpdateExpenseRequestItems];
export const UpdateExpenseRequestTrackingRefsDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type UpdateExpenseRequestTrackingRefsDataType = (typeof UpdateExpenseRequestTrackingRefsDataType)[keyof typeof UpdateExpenseRequestTrackingRefsDataType];
export const UpdateExpenseRequestType = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type UpdateExpenseRequestType = (typeof UpdateExpenseRequestType)[keyof typeof UpdateExpenseRequestType];
export const UpdateExpenseRequestType1 = {
  Supplier: "Supplier",
  Customer: "customer",
} as const;
export type UpdateExpenseRequestType1 = (typeof UpdateExpenseRequestType1)[keyof typeof UpdateExpenseRequestType1];
export const UpdateExpenseRequestType2 = {
  Supplier: "Supplier",
  Customer: "customer",
} as const;
export type UpdateExpenseRequestType2 = (typeof UpdateExpenseRequestType2)[keyof typeof UpdateExpenseRequestType2];
export const UpdateExpenseRequestTypeItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type UpdateExpenseRequestTypeItems = (typeof UpdateExpenseRequestTypeItems)[keyof typeof UpdateExpenseRequestTypeItems];
export const UpdateReimbursableExpenseTransactionRequestDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type UpdateReimbursableExpenseTransactionRequestDataType = (typeof UpdateReimbursableExpenseTransactionRequestDataType)[keyof typeof UpdateReimbursableExpenseTransactionRequestDataType];
export const UpdateReimbursableExpenseTransactionRequestInvoiceToType = {
  Customer: "customer",
} as const;
export type UpdateReimbursableExpenseTransactionRequestInvoiceToType = (typeof UpdateReimbursableExpenseTransactionRequestInvoiceToType)[keyof typeof UpdateReimbursableExpenseTransactionRequestInvoiceToType];
export const UpdateReimbursableExpenseTransactionRequestTrackingRefsDataType = {
  Customers: "customers",
  TrackingCategories: "trackingCategories",
} as const;
export type UpdateReimbursableExpenseTransactionRequestTrackingRefsDataType = (typeof UpdateReimbursableExpenseTransactionRequestTrackingRefsDataType)[keyof typeof UpdateReimbursableExpenseTransactionRequestTrackingRefsDataType];
export const UpdateReimbursableExpenseTransactionRequestType = {
  Customer: "customer",
} as const;
export type UpdateReimbursableExpenseTransactionRequestType = (typeof UpdateReimbursableExpenseTransactionRequestType)[keyof typeof UpdateReimbursableExpenseTransactionRequestType];
export const UpdateSupplierResponseAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type UpdateSupplierResponseAccountingAddressType = (typeof UpdateSupplierResponseAccountingAddressType)[keyof typeof UpdateSupplierResponseAccountingAddressType];
export const UpdateSupplierResponseAddressesAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type UpdateSupplierResponseAddressesAccountingAddressType = (typeof UpdateSupplierResponseAddressesAccountingAddressType)[keyof typeof UpdateSupplierResponseAddressesAccountingAddressType];
export const UpdateSupplierResponseDataSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type UpdateSupplierResponseDataSupplierStatus = (typeof UpdateSupplierResponseDataSupplierStatus)[keyof typeof UpdateSupplierResponseDataSupplierStatus];
export const UpdateSupplierResponseDataType = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type UpdateSupplierResponseDataType = (typeof UpdateSupplierResponseDataType)[keyof typeof UpdateSupplierResponseDataType];
export const UpdateSupplierResponseDataTypeDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type UpdateSupplierResponseDataTypeDataTypes = (typeof UpdateSupplierResponseDataTypeDataTypes)[keyof typeof UpdateSupplierResponseDataTypeDataTypes];
export const UpdateSupplierResponseDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type UpdateSupplierResponseDataTypes = (typeof UpdateSupplierResponseDataTypes)[keyof typeof UpdateSupplierResponseDataTypes];
export const UpdateSupplierResponsePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type UpdateSupplierResponsePushChangeType = (typeof UpdateSupplierResponsePushChangeType)[keyof typeof UpdateSupplierResponsePushChangeType];
export const UpdateSupplierResponsePushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type UpdateSupplierResponsePushOperationStatus = (typeof UpdateSupplierResponsePushOperationStatus)[keyof typeof UpdateSupplierResponsePushOperationStatus];
export const UpdateSupplierResponseStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type UpdateSupplierResponseStatusPushOperationStatus = (typeof UpdateSupplierResponseStatusPushOperationStatus)[keyof typeof UpdateSupplierResponseStatusPushOperationStatus];
export const UpdateSupplierResponseStatusSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type UpdateSupplierResponseStatusSupplierStatus = (typeof UpdateSupplierResponseStatusSupplierStatus)[keyof typeof UpdateSupplierResponseStatusSupplierStatus];
export const UpdateSupplierResponseSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type UpdateSupplierResponseSupplierStatus = (typeof UpdateSupplierResponseSupplierStatus)[keyof typeof UpdateSupplierResponseSupplierStatus];
export const UpdateSupplierResponseTypeAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type UpdateSupplierResponseTypeAccountingAddressType = (typeof UpdateSupplierResponseTypeAccountingAddressType)[keyof typeof UpdateSupplierResponseTypeAccountingAddressType];
export const UpdateSupplierResponseTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type UpdateSupplierResponseTypePushChangeType = (typeof UpdateSupplierResponseTypePushChangeType)[keyof typeof UpdateSupplierResponseTypePushChangeType];
export const ValidFor = {
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type ValidFor = (typeof ValidFor)[keyof typeof ValidFor];
export const ValidForItems = {
  AdjustmentTransactions: "adjustment-transactions",
  ExpenseTransactionsChargeback: "expense-transactions.Chargeback",
  ExpenseTransactionsPayment: "expense-transactions.Payment",
  ExpenseTransactionsRefund: "expense-transactions.Refund",
  ExpenseTransactionsReward: "expense-transactions.Reward",
  ReimbursableExpenseTransactions: "reimbursable-expense-transactions",
  TransferTransactions: "transfer-transactions",
} as const;
export type ValidForItems = (typeof ValidForItems)[keyof typeof ValidForItems];
export const ValidTransactionTypes = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type ValidTransactionTypes = (typeof ValidTransactionTypes)[keyof typeof ValidTransactionTypes];
export const ValidTransactionTypesItems = {
  Chargeback: "Chargeback",
  Payment: "Payment",
  Refund: "Refund",
  Reward: "Reward",
} as const;
export type ValidTransactionTypesItems = (typeof ValidTransactionTypesItems)[keyof typeof ValidTransactionTypesItems];
export const WebLinksType = {
  Social: "Social",
  Unknown: "Unknown",
  Website: "Website",
} as const;
export type WebLinksType = (typeof WebLinksType)[keyof typeof WebLinksType];
export const WeblinkType = {
  Social: "Social",
  Unknown: "Unknown",
  Website: "Website",
} as const;
export type WeblinkType = (typeof WeblinkType)[keyof typeof WeblinkType];
export const ZeroAccountType = {
  Asset: "Asset",
  Equity: "Equity",
  Expense: "Expense",
  Income: "Income",
  Liability: "Liability",
  Unknown: "Unknown",
} as const;
export type ZeroAccountType = (typeof ZeroAccountType)[keyof typeof ZeroAccountType];
export const ZeroAccountingAddressType = {
  Billing: "Billing",
  Delivery: "Delivery",
  Unknown: "Unknown",
} as const;
export type ZeroAccountingAddressType = (typeof ZeroAccountingAddressType)[keyof typeof ZeroAccountingAddressType];
export const ZeroBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type ZeroBankAccountStatus = (typeof ZeroBankAccountStatus)[keyof typeof ZeroBankAccountStatus];
export const ZeroBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type ZeroBankAccountType = (typeof ZeroBankAccountType)[keyof typeof ZeroBankAccountType];
export const ZeroDataConnectionSourceType = {
  Accounting: "Accounting",
  BankFeed: "BankFeed",
  Banking: "Banking",
  Commerce: "Commerce",
  Expense: "Expense",
  Other: "Other",
  Unknown: "Unknown",
} as const;
export type ZeroDataConnectionSourceType = (typeof ZeroDataConnectionSourceType)[keyof typeof ZeroDataConnectionSourceType];
export const ZeroDataConnectionStatus = {
  Deauthorized: "Deauthorized",
  Linked: "Linked",
  PendingAuth: "PendingAuth",
  Unlinked: "Unlinked",
} as const;
export type ZeroDataConnectionStatus = (typeof ZeroDataConnectionStatus)[keyof typeof ZeroDataConnectionStatus];
export const ZeroDataTypes = {
  AccountTransactions: "accountTransactions",
  BalanceSheet: "balanceSheet",
  BankAccounts: "bankAccounts",
  BankTransactions: "bankTransactions",
  BankingAccountBalances: "banking-accountBalances",
  BankingAccounts: "banking-accounts",
  BankingTransactionCategories: "banking-transactionCategories",
  BankingTransactions: "banking-transactions",
  BillCreditNotes: "billCreditNotes",
  BillPayments: "billPayments",
  Bills: "bills",
  CashFlowStatement: "cashFlowStatement",
  ChartOfAccounts: "chartOfAccounts",
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
} as const;
export type ZeroDataTypes = (typeof ZeroDataTypes)[keyof typeof ZeroDataTypes];
export const ZeroDatasetStatus = {
  AuthError: "AuthError",
  Cancelled: "Cancelled",
  Complete: "Complete",
  FetchError: "FetchError",
  Fetching: "Fetching",
  Initial: "Initial",
  InternalError: "InternalError",
  MapError: "MapError",
  MapQueued: "MapQueued",
  Mapping: "Mapping",
  NotSupported: "NotSupported",
  PermissionsError: "PermissionsError",
  PrerequisiteNotMet: "PrerequisiteNotMet",
  Processing: "Processing",
  ProcessingError: "ProcessingError",
  ProcessingQueued: "ProcessingQueued",
  Queued: "Queued",
  RateLimitError: "RateLimitError",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
} as const;
export type ZeroDatasetStatus = (typeof ZeroDatasetStatus)[keyof typeof ZeroDatasetStatus];
export const ZeroErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type ZeroErrorStatus = (typeof ZeroErrorStatus)[keyof typeof ZeroErrorStatus];
export const ZeroIntegrationType = {
  Bankfeeds: "bankfeeds",
  Expenses: "expenses",
} as const;
export type ZeroIntegrationType = (typeof ZeroIntegrationType)[keyof typeof ZeroIntegrationType];
export const ZeroPushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type ZeroPushChangeType = (typeof ZeroPushChangeType)[keyof typeof ZeroPushChangeType];
export const ZeroPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type ZeroPushOperationStatus = (typeof ZeroPushOperationStatus)[keyof typeof ZeroPushOperationStatus];
export const ZeroSupplierStatus = {
  Active: "Active",
  Archived: "Archived",
  Unknown: "Unknown",
} as const;
export type ZeroSupplierStatus = (typeof ZeroSupplierStatus)[keyof typeof ZeroSupplierStatus];
export const ZeroTransactionStatus = {
  Completed: "Completed",
  Pending: "Pending",
  PushError: "PushError",
  Unknown: "Unknown",
  ValidationError: "ValidationError",
} as const;
export type ZeroTransactionStatus = (typeof ZeroTransactionStatus)[keyof typeof ZeroTransactionStatus];
export const ZeroType = {
  Fax: "Fax",
  Landline: "Landline",
  Mobile: "Mobile",
  Primary: "Primary",
  Unknown: "Unknown",
} as const;
export type ZeroType = (typeof ZeroType)[keyof typeof ZeroType];
