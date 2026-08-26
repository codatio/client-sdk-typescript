/* tslint:disable */
/* eslint-disable */

export const AccountAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type AccountAccountType = (typeof AccountAccountType)[keyof typeof AccountAccountType];
export const AccountStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type AccountStatus = "Active" | "Archived" | "Pending" | "Unknown" | "connected" | "connecting" | "disconnected" | "pending" | "unknown";
export const AccountStatus1 = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type AccountStatus1 = "Active" | "Archived" | "Pending" | "Unknown" | "connected" | "connecting" | "disconnected" | "pending" | "unknown";
export const AccountStatus2 = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type AccountStatus2 = "Active" | "Archived" | "Pending" | "Unknown" | "connected" | "connecting" | "disconnected" | "pending" | "unknown";
export const AccountStatusBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type AccountStatusBankAccountStatus = (typeof AccountStatusBankAccountStatus)[keyof typeof AccountStatusBankAccountStatus];
export const AccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type AccountType = (typeof AccountType)[keyof typeof AccountType];
export const AccountType1 = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Checking: "checking",
  Clabe: "clabe",
  CreditCard: "creditCard",
  Iban: "iban",
  Ifsc: "ifsc",
  Loan: "loan",
  Nz2: "nz2",
  PrepaidCard: "prepaidCard",
  Rtn: "rtn",
  Savings: "savings",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type AccountType1 = (typeof AccountType1)[keyof typeof AccountType1];
export const AccountType2 = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Checking: "checking",
  Clabe: "clabe",
  CreditCard: "creditCard",
  Iban: "iban",
  Ifsc: "ifsc",
  Loan: "loan",
  Nz2: "nz2",
  PrepaidCard: "prepaidCard",
  Rtn: "rtn",
  Savings: "savings",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type AccountType2 = (typeof AccountType2)[keyof typeof AccountType2];
export const AccountTypeBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type AccountTypeBankAccountType = (typeof AccountTypeBankAccountType)[keyof typeof AccountTypeBankAccountType];
export const AccountingBankAccountAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type AccountingBankAccountAccountType = (typeof AccountingBankAccountAccountType)[keyof typeof AccountingBankAccountAccountType];
export const AccountingBankAccountBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type AccountingBankAccountBankAccountType = (typeof AccountingBankAccountBankAccountType)[keyof typeof AccountingBankAccountBankAccountType];
export const BankAccountCreateResponseAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountCreateResponseAccountType = (typeof BankAccountCreateResponseAccountType)[keyof typeof BankAccountCreateResponseAccountType];
export const BankAccountCreateResponseBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountCreateResponseBankAccountType = (typeof BankAccountCreateResponseBankAccountType)[keyof typeof BankAccountCreateResponseBankAccountType];
export const BankAccountCreateResponseDataType = {
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
export type BankAccountCreateResponseDataType = (typeof BankAccountCreateResponseDataType)[keyof typeof BankAccountCreateResponseDataType];
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
export const BankAccountCreateResponseRecordRefDataType = {
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
export type BankAccountCreateResponseRecordRefDataType = (typeof BankAccountCreateResponseRecordRefDataType)[keyof typeof BankAccountCreateResponseRecordRefDataType];
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
export const BankAccountPrototypeBankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountPrototypeBankAccountType = (typeof BankAccountPrototypeBankAccountType)[keyof typeof BankAccountPrototypeBankAccountType];
export const BankAccountStatusBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountStatusBankAccountStatus = (typeof BankAccountStatusBankAccountStatus)[keyof typeof BankAccountStatusBankAccountStatus];
export const BankAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
} as const;
export type BankAccountType = (typeof BankAccountType)[keyof typeof BankAccountType];
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
export const BankAccountsDataType = {
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
export type BankAccountsDataType = (typeof BankAccountsDataType)[keyof typeof BankAccountsDataType];
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
export const BankAccountsRecordRefDataType = {
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
export type BankAccountsRecordRefDataType = (typeof BankAccountsRecordRefDataType)[keyof typeof BankAccountsRecordRefDataType];
export const BankAccountsResultsBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type BankAccountsResultsBankAccountStatus = (typeof BankAccountsResultsBankAccountStatus)[keyof typeof BankAccountsResultsBankAccountStatus];
export const BankAccountsResultsDataType = {
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
export type BankAccountsResultsDataType = (typeof BankAccountsResultsDataType)[keyof typeof BankAccountsResultsDataType];
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
export const BankTransactionBankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type BankTransactionBankTransactionType = (typeof BankTransactionBankTransactionType)[keyof typeof BankTransactionBankTransactionType];
export const BankTransactionTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type BankTransactionTransactionType = (typeof BankTransactionTransactionType)[keyof typeof BankTransactionTransactionType];
export const BankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type BankTransactionType = (typeof BankTransactionType)[keyof typeof BankTransactionType];
export const BankTransactionsBankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type BankTransactionsBankTransactionType = (typeof BankTransactionsBankTransactionType)[keyof typeof BankTransactionsBankTransactionType];
export const BankTransactionsTransactionTypeBankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type BankTransactionsTransactionTypeBankTransactionType = (typeof BankTransactionsTransactionTypeBankTransactionType)[keyof typeof BankTransactionsTransactionTypeBankTransactionType];
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
export const CreateBankAccountResponseRecordRefDataType = {
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
export type CreateBankAccountResponseRecordRefDataType = (typeof CreateBankAccountResponseRecordRefDataType)[keyof typeof CreateBankAccountResponseRecordRefDataType];
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
export const CreateBankTransactionsBankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type CreateBankTransactionsBankTransactionType = (typeof CreateBankTransactionsBankTransactionType)[keyof typeof CreateBankTransactionsBankTransactionType];
export const CreateBankTransactionsResponseBankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type CreateBankTransactionsResponseBankTransactionType = (typeof CreateBankTransactionsResponseBankTransactionType)[keyof typeof CreateBankTransactionsResponseBankTransactionType];
export const CreateBankTransactionsResponseDataType = {
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
export type CreateBankTransactionsResponseDataType = (typeof CreateBankTransactionsResponseDataType)[keyof typeof CreateBankTransactionsResponseDataType];
export const CreateBankTransactionsResponsePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type CreateBankTransactionsResponsePushChangeType = (typeof CreateBankTransactionsResponsePushChangeType)[keyof typeof CreateBankTransactionsResponsePushChangeType];
export const CreateBankTransactionsResponsePushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type CreateBankTransactionsResponsePushOperationStatus = (typeof CreateBankTransactionsResponsePushOperationStatus)[keyof typeof CreateBankTransactionsResponsePushOperationStatus];
export const CreateBankTransactionsResponseRecordRefDataType = {
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
export type CreateBankTransactionsResponseRecordRefDataType = (typeof CreateBankTransactionsResponseRecordRefDataType)[keyof typeof CreateBankTransactionsResponseRecordRefDataType];
export const CreateBankTransactionsResponseStatusPushOperationStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Success: "Success",
  TimedOut: "TimedOut",
} as const;
export type CreateBankTransactionsResponseStatusPushOperationStatus = (typeof CreateBankTransactionsResponseStatusPushOperationStatus)[keyof typeof CreateBankTransactionsResponseStatusPushOperationStatus];
export const CreateBankTransactionsResponseTransactionTypeBankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type CreateBankTransactionsResponseTransactionTypeBankTransactionType = (typeof CreateBankTransactionsResponseTransactionTypeBankTransactionType)[keyof typeof CreateBankTransactionsResponseTransactionTypeBankTransactionType];
export const CreateBankTransactionsResponseTypePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type CreateBankTransactionsResponseTypePushChangeType = (typeof CreateBankTransactionsResponseTypePushChangeType)[keyof typeof CreateBankTransactionsResponseTypePushChangeType];
export const CreateBankTransactionsTransactionTypeBankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type CreateBankTransactionsTransactionTypeBankTransactionType = (typeof CreateBankTransactionsTransactionTypeBankTransactionType)[keyof typeof CreateBankTransactionsTransactionTypeBankTransactionType];
export const CreateBatchSourceAccountRequestBodyAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type CreateBatchSourceAccountRequestBodyAccountType = (typeof CreateBatchSourceAccountRequestBodyAccountType)[keyof typeof CreateBatchSourceAccountRequestBodyAccountType];
export const CreateBatchSourceAccountRequestBodyRoutingInfoType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type CreateBatchSourceAccountRequestBodyRoutingInfoType = (typeof CreateBatchSourceAccountRequestBodyRoutingInfoType)[keyof typeof CreateBatchSourceAccountRequestBodyRoutingInfoType];
export const CreateBatchSourceAccountRequestBodyType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type CreateBatchSourceAccountRequestBodyType = (typeof CreateBatchSourceAccountRequestBodyType)[keyof typeof CreateBatchSourceAccountRequestBodyType];
export const CreateSourceAccountRequestBodyAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type CreateSourceAccountRequestBodyAccountType = (typeof CreateSourceAccountRequestBodyAccountType)[keyof typeof CreateSourceAccountRequestBodyAccountType];
export const CreateSourceAccountRequestBodyRoutingInfoType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type CreateSourceAccountRequestBodyRoutingInfoType = (typeof CreateSourceAccountRequestBodyRoutingInfoType)[keyof typeof CreateSourceAccountRequestBodyRoutingInfoType];
export const CreateSourceAccountRequestBodyType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type CreateSourceAccountRequestBodyType = (typeof CreateSourceAccountRequestBodyType)[keyof typeof CreateSourceAccountRequestBodyType];
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
export const ErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type ErrorStatus = (typeof ErrorStatus)[keyof typeof ErrorStatus];
export const ItemsAccountType = {
  Credit: "Credit",
  Debit: "Debit",
  Unknown: "Unknown",
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type ItemsAccountType = (typeof ItemsAccountType)[keyof typeof ItemsAccountType];
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
export const ItemsBankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type ItemsBankTransactionType = (typeof ItemsBankTransactionType)[keyof typeof ItemsBankTransactionType];
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
export type ItemsDataType = (typeof ItemsDataType)[keyof typeof ItemsDataType];
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
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type ItemsStatus = (typeof ItemsStatus)[keyof typeof ItemsStatus];
export const ItemsType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type ItemsType = (typeof ItemsType)[keyof typeof ItemsType];
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
export const OneDataType = {
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
export type OneDataType = (typeof OneDataType)[keyof typeof OneDataType];
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
export const OneStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type OneStatus = (typeof OneStatus)[keyof typeof OneStatus];
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
export const PayloadAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type PayloadAccountType = (typeof PayloadAccountType)[keyof typeof PayloadAccountType];
export const PayloadRoutingInfoType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type PayloadRoutingInfoType = (typeof PayloadRoutingInfoType)[keyof typeof PayloadRoutingInfoType];
export const PayloadSourceAccountAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type PayloadSourceAccountAccountType = (typeof PayloadSourceAccountAccountType)[keyof typeof PayloadSourceAccountAccountType];
export const PayloadSourceAccountStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type PayloadSourceAccountStatus = (typeof PayloadSourceAccountStatus)[keyof typeof PayloadSourceAccountStatus];
export const PayloadSourceAccountType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type PayloadSourceAccountType = (typeof PayloadSourceAccountType)[keyof typeof PayloadSourceAccountType];
export const PayloadStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type PayloadStatus = (typeof PayloadStatus)[keyof typeof PayloadStatus];
export const PayloadType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type PayloadType = (typeof PayloadType)[keyof typeof PayloadType];
export const PropertieAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type PropertieAccountStatus = (typeof PropertieAccountStatus)[keyof typeof PropertieAccountStatus];
export const PropertieAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type PropertieAccountType = (typeof PropertieAccountType)[keyof typeof PropertieAccountType];
export const PropertieBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type PropertieBankAccountStatus = (typeof PropertieBankAccountStatus)[keyof typeof PropertieBankAccountStatus];
export const PropertieBankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type PropertieBankTransactionType = (typeof PropertieBankTransactionType)[keyof typeof PropertieBankTransactionType];
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
export const PropertieErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type PropertieErrorStatus = (typeof PropertieErrorStatus)[keyof typeof PropertieErrorStatus];
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
  Resolved: "Resolved",
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type PropertieStatus = (typeof PropertieStatus)[keyof typeof PropertieStatus];
export const PropertieStatus1 = {
  Active: "Active",
  Resolved: "Resolved",
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type PropertieStatus1 = (typeof PropertieStatus1)[keyof typeof PropertieStatus1];
export const PropertieStatus2 = {
  Active: "Active",
  Resolved: "Resolved",
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type PropertieStatus2 = (typeof PropertieStatus2)[keyof typeof PropertieStatus2];
export const PropertieTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type PropertieTransactionType = (typeof PropertieTransactionType)[keyof typeof PropertieTransactionType];
export const PropertieType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type PropertieType = (typeof PropertieType)[keyof typeof PropertieType];
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
export const PushOperationChangeDataType = {
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
export type PushOperationChangeDataType = (typeof PushOperationChangeDataType)[keyof typeof PushOperationChangeDataType];
export const PushOperationChangePushChangeType = {
  AttachmentUploaded: "AttachmentUploaded",
  Created: "Created",
  Deleted: "Deleted",
  Modified: "Modified",
  Unknown: "Unknown",
} as const;
export type PushOperationChangePushChangeType = (typeof PushOperationChangePushChangeType)[keyof typeof PushOperationChangePushChangeType];
export const PushOperationChangeRecordRefDataType = {
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
export type PushOperationChangeRecordRefDataType = (typeof PushOperationChangeRecordRefDataType)[keyof typeof PushOperationChangeRecordRefDataType];
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
export const PushOperationRecordRefDataType = {
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
export type PushOperationRecordRefDataType = (typeof PushOperationRecordRefDataType)[keyof typeof PushOperationRecordRefDataType];
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
export const PushOperationReferenceDataType = {
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
export type PushOperationReferenceDataType = (typeof PushOperationReferenceDataType)[keyof typeof PushOperationReferenceDataType];
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
export const PushOperationsDataType = {
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
export type PushOperationsDataType = (typeof PushOperationsDataType)[keyof typeof PushOperationsDataType];
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
export const PushOperationsRecordRefDataType = {
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
export type PushOperationsRecordRefDataType = (typeof PushOperationsRecordRefDataType)[keyof typeof PushOperationsRecordRefDataType];
export const PushOperationsResultsDataType = {
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
export type PushOperationsResultsDataType = (typeof PushOperationsResultsDataType)[keyof typeof PushOperationsResultsDataType];
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
export const RecordRefDataType = {
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
export type RecordRefDataType = (typeof RecordRefDataType)[keyof typeof RecordRefDataType];
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
export const ResultsDataType = {
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
export type ResultsDataType = (typeof ResultsDataType)[keyof typeof ResultsDataType];
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
export const RoutingInfoType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type RoutingInfoType = (typeof RoutingInfoType)[keyof typeof RoutingInfoType];
export const SchemaAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type SchemaAccountStatus = (typeof SchemaAccountStatus)[keyof typeof SchemaAccountStatus];
export const SchemaAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type SchemaAccountType = (typeof SchemaAccountType)[keyof typeof SchemaAccountType];
export const SchemaBankAccountStatus = {
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
  Unknown: "Unknown",
} as const;
export type SchemaBankAccountStatus = (typeof SchemaBankAccountStatus)[keyof typeof SchemaBankAccountStatus];
export const SchemaBankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type SchemaBankTransactionType = (typeof SchemaBankTransactionType)[keyof typeof SchemaBankTransactionType];
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
export const SchemaErrorStatus = {
  Active: "Active",
  Resolved: "Resolved",
} as const;
export type SchemaErrorStatus = (typeof SchemaErrorStatus)[keyof typeof SchemaErrorStatus];
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
  Resolved: "Resolved",
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SchemaStatus = (typeof SchemaStatus)[keyof typeof SchemaStatus];
export const SchemaStatus1 = {
  Active: "Active",
  Resolved: "Resolved",
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SchemaStatus1 = (typeof SchemaStatus1)[keyof typeof SchemaStatus1];
export const SchemaStatus2 = {
  Active: "Active",
  Resolved: "Resolved",
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SchemaStatus2 = (typeof SchemaStatus2)[keyof typeof SchemaStatus2];
export const SchemaTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type SchemaTransactionType = (typeof SchemaTransactionType)[keyof typeof SchemaTransactionType];
export const SchemaType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];
export const SourceAccountAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type SourceAccountAccountType = (typeof SourceAccountAccountType)[keyof typeof SourceAccountAccountType];
export const SourceAccountBatchCreateResponseAccountStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountBatchCreateResponseAccountStatus = (typeof SourceAccountBatchCreateResponseAccountStatus)[keyof typeof SourceAccountBatchCreateResponseAccountStatus];
export const SourceAccountBatchCreateResponseStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountBatchCreateResponseStatus = (typeof SourceAccountBatchCreateResponseStatus)[keyof typeof SourceAccountBatchCreateResponseStatus];
export const SourceAccountBatchCreateResultAccountStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountBatchCreateResultAccountStatus = (typeof SourceAccountBatchCreateResultAccountStatus)[keyof typeof SourceAccountBatchCreateResultAccountStatus];
export const SourceAccountBatchCreateResultStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountBatchCreateResultStatus = (typeof SourceAccountBatchCreateResultStatus)[keyof typeof SourceAccountBatchCreateResultStatus];
export const SourceAccountStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountStatus = (typeof SourceAccountStatus)[keyof typeof SourceAccountStatus];
export const SourceAccountType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountType = (typeof SourceAccountType)[keyof typeof SourceAccountType];
export const SourceAccountV2AccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type SourceAccountV2AccountType = (typeof SourceAccountV2AccountType)[keyof typeof SourceAccountV2AccountType];
export const SourceAccountV2BatchCreateResponseAccountAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type SourceAccountV2BatchCreateResponseAccountAccountType = (typeof SourceAccountV2BatchCreateResponseAccountAccountType)[keyof typeof SourceAccountV2BatchCreateResponseAccountAccountType];
export const SourceAccountV2BatchCreateResponseAccountStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountV2BatchCreateResponseAccountStatus = (typeof SourceAccountV2BatchCreateResponseAccountStatus)[keyof typeof SourceAccountV2BatchCreateResponseAccountStatus];
export const SourceAccountV2BatchCreateResponseAccountType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Checking: "checking",
  Clabe: "clabe",
  CreditCard: "creditCard",
  Iban: "iban",
  Ifsc: "ifsc",
  Loan: "loan",
  Nz2: "nz2",
  PrepaidCard: "prepaidCard",
  Rtn: "rtn",
  Savings: "savings",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2BatchCreateResponseAccountType = (typeof SourceAccountV2BatchCreateResponseAccountType)[keyof typeof SourceAccountV2BatchCreateResponseAccountType];
export const SourceAccountV2BatchCreateResponseAccountType1 = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Checking: "checking",
  Clabe: "clabe",
  CreditCard: "creditCard",
  Iban: "iban",
  Ifsc: "ifsc",
  Loan: "loan",
  Nz2: "nz2",
  PrepaidCard: "prepaidCard",
  Rtn: "rtn",
  Savings: "savings",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2BatchCreateResponseAccountType1 = (typeof SourceAccountV2BatchCreateResponseAccountType1)[keyof typeof SourceAccountV2BatchCreateResponseAccountType1];
export const SourceAccountV2BatchCreateResponseAccountType2 = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Checking: "checking",
  Clabe: "clabe",
  CreditCard: "creditCard",
  Iban: "iban",
  Ifsc: "ifsc",
  Loan: "loan",
  Nz2: "nz2",
  PrepaidCard: "prepaidCard",
  Rtn: "rtn",
  Savings: "savings",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2BatchCreateResponseAccountType2 = (typeof SourceAccountV2BatchCreateResponseAccountType2)[keyof typeof SourceAccountV2BatchCreateResponseAccountType2];
export const SourceAccountV2BatchCreateResponseRoutingInfoType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2BatchCreateResponseRoutingInfoType = (typeof SourceAccountV2BatchCreateResponseRoutingInfoType)[keyof typeof SourceAccountV2BatchCreateResponseRoutingInfoType];
export const SourceAccountV2BatchCreateResponseStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountV2BatchCreateResponseStatus = (typeof SourceAccountV2BatchCreateResponseStatus)[keyof typeof SourceAccountV2BatchCreateResponseStatus];
export const SourceAccountV2BatchCreateResponseType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2BatchCreateResponseType = (typeof SourceAccountV2BatchCreateResponseType)[keyof typeof SourceAccountV2BatchCreateResponseType];
export const SourceAccountV2BatchCreateResultAccountAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type SourceAccountV2BatchCreateResultAccountAccountType = (typeof SourceAccountV2BatchCreateResultAccountAccountType)[keyof typeof SourceAccountV2BatchCreateResultAccountAccountType];
export const SourceAccountV2BatchCreateResultAccountStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountV2BatchCreateResultAccountStatus = (typeof SourceAccountV2BatchCreateResultAccountStatus)[keyof typeof SourceAccountV2BatchCreateResultAccountStatus];
export const SourceAccountV2BatchCreateResultAccountType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Checking: "checking",
  Clabe: "clabe",
  CreditCard: "creditCard",
  Iban: "iban",
  Ifsc: "ifsc",
  Loan: "loan",
  Nz2: "nz2",
  PrepaidCard: "prepaidCard",
  Rtn: "rtn",
  Savings: "savings",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2BatchCreateResultAccountType = (typeof SourceAccountV2BatchCreateResultAccountType)[keyof typeof SourceAccountV2BatchCreateResultAccountType];
export const SourceAccountV2BatchCreateResultAccountType1 = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Checking: "checking",
  Clabe: "clabe",
  CreditCard: "creditCard",
  Iban: "iban",
  Ifsc: "ifsc",
  Loan: "loan",
  Nz2: "nz2",
  PrepaidCard: "prepaidCard",
  Rtn: "rtn",
  Savings: "savings",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2BatchCreateResultAccountType1 = (typeof SourceAccountV2BatchCreateResultAccountType1)[keyof typeof SourceAccountV2BatchCreateResultAccountType1];
export const SourceAccountV2BatchCreateResultAccountType2 = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Checking: "checking",
  Clabe: "clabe",
  CreditCard: "creditCard",
  Iban: "iban",
  Ifsc: "ifsc",
  Loan: "loan",
  Nz2: "nz2",
  PrepaidCard: "prepaidCard",
  Rtn: "rtn",
  Savings: "savings",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2BatchCreateResultAccountType2 = (typeof SourceAccountV2BatchCreateResultAccountType2)[keyof typeof SourceAccountV2BatchCreateResultAccountType2];
export const SourceAccountV2BatchCreateResultRoutingInfoType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2BatchCreateResultRoutingInfoType = (typeof SourceAccountV2BatchCreateResultRoutingInfoType)[keyof typeof SourceAccountV2BatchCreateResultRoutingInfoType];
export const SourceAccountV2BatchCreateResultStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountV2BatchCreateResultStatus = (typeof SourceAccountV2BatchCreateResultStatus)[keyof typeof SourceAccountV2BatchCreateResultStatus];
export const SourceAccountV2BatchCreateResultType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2BatchCreateResultType = (typeof SourceAccountV2BatchCreateResultType)[keyof typeof SourceAccountV2BatchCreateResultType];
export const SourceAccountV2PrototypeAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type SourceAccountV2PrototypeAccountType = (typeof SourceAccountV2PrototypeAccountType)[keyof typeof SourceAccountV2PrototypeAccountType];
export const SourceAccountV2PrototypeRoutingInfoType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2PrototypeRoutingInfoType = (typeof SourceAccountV2PrototypeRoutingInfoType)[keyof typeof SourceAccountV2PrototypeRoutingInfoType];
export const SourceAccountV2PrototypeType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2PrototypeType = (typeof SourceAccountV2PrototypeType)[keyof typeof SourceAccountV2PrototypeType];
export const SourceAccountV2RoutingInfoType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2RoutingInfoType = (typeof SourceAccountV2RoutingInfoType)[keyof typeof SourceAccountV2RoutingInfoType];
export const SourceAccountV2Status = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountV2Status = (typeof SourceAccountV2Status)[keyof typeof SourceAccountV2Status];
export const SourceAccountV2Type = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountV2Type = (typeof SourceAccountV2Type)[keyof typeof SourceAccountV2Type];
export const SourceAccountWebhookAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type SourceAccountWebhookAccountType = (typeof SourceAccountWebhookAccountType)[keyof typeof SourceAccountWebhookAccountType];
export const SourceAccountWebhookPayloadAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type SourceAccountWebhookPayloadAccountType = (typeof SourceAccountWebhookPayloadAccountType)[keyof typeof SourceAccountWebhookPayloadAccountType];
export const SourceAccountWebhookPayloadRoutingInfoType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountWebhookPayloadRoutingInfoType = (typeof SourceAccountWebhookPayloadRoutingInfoType)[keyof typeof SourceAccountWebhookPayloadRoutingInfoType];
export const SourceAccountWebhookPayloadSourceAccountAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type SourceAccountWebhookPayloadSourceAccountAccountType = (typeof SourceAccountWebhookPayloadSourceAccountAccountType)[keyof typeof SourceAccountWebhookPayloadSourceAccountAccountType];
export const SourceAccountWebhookPayloadSourceAccountStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountWebhookPayloadSourceAccountStatus = (typeof SourceAccountWebhookPayloadSourceAccountStatus)[keyof typeof SourceAccountWebhookPayloadSourceAccountStatus];
export const SourceAccountWebhookPayloadSourceAccountType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountWebhookPayloadSourceAccountType = (typeof SourceAccountWebhookPayloadSourceAccountType)[keyof typeof SourceAccountWebhookPayloadSourceAccountType];
export const SourceAccountWebhookPayloadStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountWebhookPayloadStatus = (typeof SourceAccountWebhookPayloadStatus)[keyof typeof SourceAccountWebhookPayloadStatus];
export const SourceAccountWebhookPayloadType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountWebhookPayloadType = (typeof SourceAccountWebhookPayloadType)[keyof typeof SourceAccountWebhookPayloadType];
export const SourceAccountWebhookRoutingInfoType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountWebhookRoutingInfoType = (typeof SourceAccountWebhookRoutingInfoType)[keyof typeof SourceAccountWebhookRoutingInfoType];
export const SourceAccountWebhookSourceAccountAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type SourceAccountWebhookSourceAccountAccountType = (typeof SourceAccountWebhookSourceAccountAccountType)[keyof typeof SourceAccountWebhookSourceAccountAccountType];
export const SourceAccountWebhookSourceAccountStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountWebhookSourceAccountStatus = (typeof SourceAccountWebhookSourceAccountStatus)[keyof typeof SourceAccountWebhookSourceAccountStatus];
export const SourceAccountWebhookSourceAccountType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountWebhookSourceAccountType = (typeof SourceAccountWebhookSourceAccountType)[keyof typeof SourceAccountWebhookSourceAccountType];
export const SourceAccountWebhookStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountWebhookStatus = (typeof SourceAccountWebhookStatus)[keyof typeof SourceAccountWebhookStatus];
export const SourceAccountWebhookType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountWebhookType = (typeof SourceAccountWebhookType)[keyof typeof SourceAccountWebhookType];
export const SourceAccountsAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type SourceAccountsAccountType = (typeof SourceAccountsAccountType)[keyof typeof SourceAccountsAccountType];
export const SourceAccountsRoutingInfoType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountsRoutingInfoType = (typeof SourceAccountsRoutingInfoType)[keyof typeof SourceAccountsRoutingInfoType];
export const SourceAccountsStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type SourceAccountsStatus = (typeof SourceAccountsStatus)[keyof typeof SourceAccountsStatus];
export const SourceAccountsType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type SourceAccountsType = (typeof SourceAccountsType)[keyof typeof SourceAccountsType];
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
export const Status = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type Status = (typeof Status)[keyof typeof Status];
export const Status1 = {
  Active: "Active",
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
  Resolved: "Resolved",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1];
export const Status2 = {
  Active: "Active",
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
  Resolved: "Resolved",
  Validating: "Validating",
  ValidationError: "ValidationError",
  ValidationQueued: "ValidationQueued",
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2];
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
export const TransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
export const TransactionTypeBankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type TransactionTypeBankTransactionType = (typeof TransactionTypeBankTransactionType)[keyof typeof TransactionTypeBankTransactionType];
export const Type = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type Type = (typeof Type)[keyof typeof Type];
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
export const ZeroAccountType = {
  Checking: "checking",
  CreditCard: "creditCard",
  Loan: "loan",
  PrepaidCard: "prepaidCard",
  Savings: "savings",
} as const;
export type ZeroAccountType = (typeof ZeroAccountType)[keyof typeof ZeroAccountType];
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
export const ZeroBankTransactionType = {
  Atm: "Atm",
  Cash: "Cash",
  Check: "Check",
  Credit: "Credit",
  Debit: "Debit",
  Dep: "Dep",
  DirectDebit: "DirectDebit",
  DirectDep: "DirectDep",
  Div: "Div",
  Fee: "Fee",
  Int: "Int",
  Other: "Other",
  Payment: "Payment",
  Pos: "Pos",
  RepeatPmt: "RepeatPmt",
  SerChg: "SerChg",
  Unknown: "Unknown",
  Xfer: "Xfer",
} as const;
export type ZeroBankTransactionType = (typeof ZeroBankTransactionType)[keyof typeof ZeroBankTransactionType];
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
export const ZeroDataType = {
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
export type ZeroDataType = (typeof ZeroDataType)[keyof typeof ZeroDataType];
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
export const ZeroStatus = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
  Pending: "pending",
  Unknown: "unknown",
} as const;
export type ZeroStatus = (typeof ZeroStatus)[keyof typeof ZeroStatus];
export const ZeroType = {
  Aba: "aba",
  Apca: "apca",
  Bankcode: "bankcode",
  Blz: "blz",
  Bsb: "bsb",
  Clabe: "clabe",
  Iban: "iban",
  Ifsc: "ifsc",
  Nz2: "nz2",
  Rtn: "rtn",
  Sortcode: "sortcode",
  Swift: "swift",
  Trno: "trno",
} as const;
export type ZeroType = (typeof ZeroType)[keyof typeof ZeroType];
