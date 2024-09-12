# Lending

<!-- Start Codat Library Description -->
Lending helps you make smarter credit decisions on small businesses by enabling you to pull your customers' latest data from the operating systems they are already using. You can use that data for automating decisioning and surfacing new insights on the customer, all via one API.
<!-- End Codat Library Description -->

<!-- Start Summary [summary] -->
## Summary

Lending API: Our Lending API helps you make smarter credit decisions on small businesses by enabling you to pull your customers' latest data from accounting, banking, and commerce software they are already using. It also includes features to help providers verify the accuracy of data and process it more efficiently.

The Lending API is built on top of the latest accounting, commerce, and banking data, providing you with the most important data points you need to get a full picture of SMB creditworthiness and make a comprehensive assessment of your customers.

[Explore product](https://docs.codat.io/lending/overview) | [See OpenAPI spec](https://github.com/codatio/oas)

<!-- Start Codat Tags Table -->
## Endpoints

| Endpoints | Description |
| :- |:- |
| Companies | Create and manage your SMB users' companies. |
| Connections | Create new and manage existing data connections for a company. |
| Bank statements | Retrieve banking data from linked bank accounts. |
| Sales | Retrieve standardized sales data from a linked commerce software. |
| Financial statements | Financial data and reports from a linked accounting software. |
| Liabilities | Debt and other liabilities. |
| Accounts payable | Data from a linked accounting software representing money the business owes money to its suppliers. |
| Accounts receivable | Data from a linked accounting software representing money owed to the business for sold goods or services. |
| Transactions | Data from a linked accounting software representing transactions. |
| Company info | View company information fetched from the source platform. |
| Data integrity | Match mutable accounting data with immutable banking data to increase confidence in financial data. |
| Excel reports | Download reports in Excel format. |
| Manage data | Control how data is retrieved from an integration. |
| File upload | Endpoints to manage uploaded files. |
| Loan writeback | Implement the [loan writeback](https://docs.codat.io/lending/guides/loan-writeback/introduction) procedure in your lending process to maintain an accurate position of a loan during the entire lending cycle. |
<!-- End Codat Tags Table -->
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [File uploads](#file-uploads)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @codat/lending
```

### PNPM

```bash
pnpm add @codat/lending
```

### Bun

```bash
bun add @codat/lending
```

### Yarn

```bash
yarn add @codat/lending zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

## Example Usage
<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List companies
* [create](docs/sdks/companies/README.md#create) - Create company
* [update](docs/sdks/companies/README.md#update) - Update company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [get](docs/sdks/companies/README.md#get) - Get company

### [connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - List connections
* [create](docs/sdks/connections/README.md#create) - Create connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [manageData](docs/sdks/managedata/README.md)

* [getStatus](docs/sdks/managedata/README.md#getstatus) - Get data status

### [manageData.refresh](docs/sdks/refresh/README.md)

* [allDataTypes](docs/sdks/refresh/README.md#alldatatypes) - Refresh all data
* [dataType](docs/sdks/refresh/README.md#datatype) - Refresh data type

### [manageData.pullOperations](docs/sdks/pulloperations/README.md)

* [list](docs/sdks/pulloperations/README.md#list) - List pull operations
* [get](docs/sdks/pulloperations/README.md#get) - Get pull operation

### [dataIntegrity](docs/sdks/dataintegrity/README.md)

* [status](docs/sdks/dataintegrity/README.md#status) - Get data integrity status
* [summaries](docs/sdks/dataintegrity/README.md#summaries) - Get data integrity summaries
* [details](docs/sdks/dataintegrity/README.md#details) - List data integrity details


### [financialStatements.profitAndLoss](docs/sdks/profitandloss/README.md)

* [getCategorizedAccounts](docs/sdks/profitandloss/README.md#getcategorizedaccounts) - Get categorized profit and loss statement
* [get](docs/sdks/profitandloss/README.md#get) - Get profit and loss

### [financialStatements.balanceSheet](docs/sdks/balancesheet/README.md)

* [getCategorizedAccounts](docs/sdks/balancesheet/README.md#getcategorizedaccounts) - Get categorized balance sheet statement
* [get](docs/sdks/balancesheet/README.md#get) - Get balance sheet

### [financialStatements.accounts](docs/sdks/accounts/README.md)

* [list](docs/sdks/accounts/README.md#list) - List accounts
* [get](docs/sdks/accounts/README.md#get) - Get account

### [financialStatements.cashFlow](docs/sdks/cashflow/README.md)

* [get](docs/sdks/cashflow/README.md#get) - Get cash flow statement


### [banking.categorizedStatement](docs/sdks/categorizedstatement/README.md)

* [get](docs/sdks/categorizedstatement/README.md#get) - Get categorized bank statement

### [banking.accountBalances](docs/sdks/accountbalances/README.md)

* [list](docs/sdks/accountbalances/README.md#list) - List account balances

### [banking.accounts](docs/sdks/codatlendingbankingaccounts/README.md)

* [list](docs/sdks/codatlendingbankingaccounts/README.md#list) - List accounts
* [get](docs/sdks/codatlendingbankingaccounts/README.md#get) - Get account

### [banking.transactions](docs/sdks/codatlendingtransactions/README.md)

* [list](docs/sdks/codatlendingtransactions/README.md#list) - List transactions
* [get](docs/sdks/codatlendingtransactions/README.md#get) - Get bank transaction

### [banking.transactionCategories](docs/sdks/transactioncategories/README.md)

* [list](docs/sdks/transactioncategories/README.md#list) - List transaction categories
* [get](docs/sdks/transactioncategories/README.md#get) - Get transaction category


### [accountsReceivable.invoices](docs/sdks/invoices/README.md)

* [listReconciled](docs/sdks/invoices/README.md#listreconciled) - List reconciled invoices
* [list](docs/sdks/invoices/README.md#list) - List invoices
* [get](docs/sdks/invoices/README.md#get) - Get invoice
* [downloadPdf](docs/sdks/invoices/README.md#downloadpdf) - Get invoice as PDF
* [listAttachments](docs/sdks/invoices/README.md#listattachments) - List invoice attachments
* [getAttachment](docs/sdks/invoices/README.md#getattachment) - Get invoice attachment
* [downloadAttachment](docs/sdks/invoices/README.md#downloadattachment) - Download invoice attachment

### [accountsReceivable.creditNotes](docs/sdks/creditnotes/README.md)

* [list](docs/sdks/creditnotes/README.md#list) - List credit notes
* [get](docs/sdks/creditnotes/README.md#get) - Get credit note

### [accountsReceivable.customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - List customers
* [get](docs/sdks/customers/README.md#get) - Get customer
* [listAttachments](docs/sdks/customers/README.md#listattachments) - List customer attachments
* [getAttachment](docs/sdks/customers/README.md#getattachment) - Get customer attachment
* [downloadAttachment](docs/sdks/customers/README.md#downloadattachment) - Download customer attachment

### [accountsReceivable.directIncomes](docs/sdks/directincomes/README.md)

* [list](docs/sdks/directincomes/README.md#list) - List direct incomes
* [get](docs/sdks/directincomes/README.md#get) - Get direct income
* [getAttachment](docs/sdks/directincomes/README.md#getattachment) - Get direct income attachment
* [downloadAttachment](docs/sdks/directincomes/README.md#downloadattachment) - Download direct income attachment
* [listAttachments](docs/sdks/directincomes/README.md#listattachments) - List direct income attachments

### [accountsReceivable.payments](docs/sdks/payments/README.md)

* [list](docs/sdks/payments/README.md#list) - List payments
* [get](docs/sdks/payments/README.md#get) - Get payment

### [accountsReceivable.reports](docs/sdks/codatlendingreports/README.md)

* [isAgedDebtorsAvailable](docs/sdks/codatlendingreports/README.md#isageddebtorsavailable) - Aged debtors report available
* [getAgedDebtors](docs/sdks/codatlendingreports/README.md#getageddebtors) - Aged debtors report
* [isAgedCreditorsAvailable](docs/sdks/codatlendingreports/README.md#isagedcreditorsavailable) - Aged creditors report available
* [getAgedCreditors](docs/sdks/codatlendingreports/README.md#getagedcreditors) - Aged creditors report

### [liabilities](docs/sdks/liabilities/README.md)

* [generateLoanTransactions](docs/sdks/liabilities/README.md#generateloantransactions) - Generate loan transactions report
* [listLoanTransactions](docs/sdks/liabilities/README.md#listloantransactions) - List loan transactions
* [generateLoanSummary](docs/sdks/liabilities/README.md#generateloansummary) - Generate loan summaries report
* [getLoanSummary](docs/sdks/liabilities/README.md#getloansummary) - Get loan summaries


### [sales.metrics](docs/sdks/metrics/README.md)

* [getRevenue](docs/sdks/metrics/README.md#getrevenue) - Get commerce revenue metrics
* [getCustomerRetention](docs/sdks/metrics/README.md#getcustomerretention) - Get customer retention metrics
* [getLifetimeValue](docs/sdks/metrics/README.md#getlifetimevalue) - Get lifetime value metrics

### [sales.reports](docs/sdks/reports/README.md)

* [getOrders](docs/sdks/reports/README.md#getorders) - Get orders report
* [getRefunds](docs/sdks/reports/README.md#getrefunds) - Get refunds report

### [sales.customers](docs/sdks/codatlendingcustomers/README.md)

* [list](docs/sdks/codatlendingcustomers/README.md#list) - List customers
* [get](docs/sdks/codatlendingcustomers/README.md#get) - Get customer

### [sales.disputes](docs/sdks/disputes/README.md)

* [list](docs/sdks/disputes/README.md#list) - List disputes
* [get](docs/sdks/disputes/README.md#get) - Get dispute

### [sales.locations](docs/sdks/locations/README.md)

* [list](docs/sdks/locations/README.md#list) - List locations
* [get](docs/sdks/locations/README.md#get) - Get location

### [sales.orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - List orders
* [get](docs/sdks/orders/README.md#get) - Get order

### [sales.paymentMethods](docs/sdks/paymentmethods/README.md)

* [list](docs/sdks/paymentmethods/README.md#list) - List payment methods
* [get](docs/sdks/paymentmethods/README.md#get) - Get payment method

### [sales.payments](docs/sdks/codatlendingpayments/README.md)

* [list](docs/sdks/codatlendingpayments/README.md#list) - List payments
* [get](docs/sdks/codatlendingpayments/README.md#get) - Get payment

### [sales.productCategories](docs/sdks/productcategories/README.md)

* [list](docs/sdks/productcategories/README.md#list) - List product categories
* [get](docs/sdks/productcategories/README.md#get) - Get product category

### [sales.products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - List products
* [get](docs/sdks/products/README.md#get) - Get product

### [sales.transactions](docs/sdks/codatlendingsalestransactions/README.md)

* [list](docs/sdks/codatlendingsalestransactions/README.md#list) - List transactions
* [get](docs/sdks/codatlendingsalestransactions/README.md#get) - Get transaction

### [excelReports](docs/sdks/excelreports/README.md)

* [generate](docs/sdks/excelreports/README.md#generate) - Generate Excel report
* [getStatus](docs/sdks/excelreports/README.md#getstatus) - Get Excel report status
* [download](docs/sdks/excelreports/README.md#download) - Download Excel report


### [transactions.accountTransactions](docs/sdks/accounttransactions/README.md)

* [list](docs/sdks/accounttransactions/README.md#list) - List account transactions
* [get](docs/sdks/accounttransactions/README.md#get) - Get account transaction

### [transactions.directCosts](docs/sdks/directcosts/README.md)

* [list](docs/sdks/directcosts/README.md#list) - List direct costs
* [get](docs/sdks/directcosts/README.md#get) - Get direct cost
* [getAttachment](docs/sdks/directcosts/README.md#getattachment) - Get direct cost attachment
* [downloadAttachment](docs/sdks/directcosts/README.md#downloadattachment) - Download direct cost attachment
* [listAttachments](docs/sdks/directcosts/README.md#listattachments) - List direct cost attachments

### [transactions.journalEntries](docs/sdks/journalentries/README.md)

* [list](docs/sdks/journalentries/README.md#list) - List journal entries
* [get](docs/sdks/journalentries/README.md#get) - Get journal entry

### [transactions.journals](docs/sdks/journals/README.md)

* [list](docs/sdks/journals/README.md#list) - List journals
* [get](docs/sdks/journals/README.md#get) - Get journal

### [transactions.transfers](docs/sdks/transfers/README.md)

* [list](docs/sdks/transfers/README.md#list) - List transfers
* [get](docs/sdks/transfers/README.md#get) - Get transfer


### [accountsPayable.billCreditNotes](docs/sdks/billcreditnotes/README.md)

* [list](docs/sdks/billcreditnotes/README.md#list) - List bill credit notes
* [get](docs/sdks/billcreditnotes/README.md#get) - Get bill credit note

### [accountsPayable.billPayments](docs/sdks/billpayments/README.md)

* [list](docs/sdks/billpayments/README.md#list) - List bill payments
* [get](docs/sdks/billpayments/README.md#get) - Get bill payment

### [accountsPayable.bills](docs/sdks/bills/README.md)

* [list](docs/sdks/bills/README.md#list) - List bills
* [get](docs/sdks/bills/README.md#get) - Get bill
* [listAttachments](docs/sdks/bills/README.md#listattachments) - List bill attachments
* [getAttachment](docs/sdks/bills/README.md#getattachment) - Get bill attachment
* [downloadAttachment](docs/sdks/bills/README.md#downloadattachment) - Download bill attachment

### [accountsPayable.suppliers](docs/sdks/suppliers/README.md)

* [list](docs/sdks/suppliers/README.md#list) - List suppliers
* [get](docs/sdks/suppliers/README.md#get) - Get supplier
* [listAttachments](docs/sdks/suppliers/README.md#listattachments) - List supplier attachments
* [getAttachment](docs/sdks/suppliers/README.md#getattachment) - Get supplier attachment
* [downloadAttachment](docs/sdks/suppliers/README.md#downloadattachment) - Download supplier attachment

### [companyInfo](docs/sdks/companyinfo/README.md)

* [getAccountingProfile](docs/sdks/companyinfo/README.md#getaccountingprofile) - Get company accounting profile
* [getCommerceProfile](docs/sdks/companyinfo/README.md#getcommerceprofile) - Get company commerce profile

### [accountingBankData](docs/sdks/accountingbankdata/README.md)

* [listTransactions](docs/sdks/accountingbankdata/README.md#listtransactions) - List bank account transactions

### [accountingBankData.accounts](docs/sdks/codatlendingaccounts/README.md)

* [list](docs/sdks/codatlendingaccounts/README.md#list) - List bank accounts
* [get](docs/sdks/codatlendingaccounts/README.md#get) - Get bank account

### [fileUpload](docs/sdks/fileupload/README.md)

* [listUploaded](docs/sdks/fileupload/README.md#listuploaded) - List all files uploaded by a company
* [download](docs/sdks/fileupload/README.md#download) - Download all files for a company
* [upload](docs/sdks/fileupload/README.md#upload) - Upload files for a company


### [loanWriteback.bankAccounts](docs/sdks/bankaccounts/README.md)

* [getCreateUpdateModel](docs/sdks/bankaccounts/README.md#getcreateupdatemodel) - Get create/update bank account model
* [create](docs/sdks/bankaccounts/README.md#create) - Create bank account

### [loanWriteback.accounts](docs/sdks/codatlendingloanwritebackaccounts/README.md)

* [getCreateModel](docs/sdks/codatlendingloanwritebackaccounts/README.md#getcreatemodel) - Get create account model
* [create](docs/sdks/codatlendingloanwritebackaccounts/README.md#create) - Create account

### [loanWriteback.suppliers](docs/sdks/codatlendingsuppliers/README.md)

* [getCreateUpdateModel](docs/sdks/codatlendingsuppliers/README.md#getcreateupdatemodel) - Get create/update supplier model
* [create](docs/sdks/codatlendingsuppliers/README.md#create) - Create supplier

### [loanWriteback.transfers](docs/sdks/codatlendingtransfers/README.md)

* [getCreateModel](docs/sdks/codatlendingtransfers/README.md#getcreatemodel) - Get create transfer model
* [create](docs/sdks/codatlendingtransfers/README.md#create) - Create transfer

### [loanWriteback.bankTransactions](docs/sdks/banktransactions/README.md)

* [getCreateModel](docs/sdks/banktransactions/README.md#getcreatemodel) - Get create bank account transactions model
* [create](docs/sdks/banktransactions/README.md#create) - Create bank account transactions

### [loanWriteback.directCosts](docs/sdks/codatlendingdirectcosts/README.md)

* [getCreateModel](docs/sdks/codatlendingdirectcosts/README.md#getcreatemodel) - Get create direct cost model
* [create](docs/sdks/codatlendingdirectcosts/README.md#create) - Create direct cost

### [loanWriteback.payments](docs/sdks/codatlendingloanwritebackpayments/README.md)

* [getCreateModel](docs/sdks/codatlendingloanwritebackpayments/README.md#getcreatemodel) - Get create payment model
* [create](docs/sdks/codatlendingloanwritebackpayments/README.md#create) - Create payment

### [loanWriteback.createOperations](docs/sdks/createoperations/README.md)

* [get](docs/sdks/createoperations/README.md#get) - Get create operation
* [list](docs/sdks/createoperations/README.md#list) - List create operations

### [bankStatements](docs/sdks/bankstatements/README.md)

* [getUploadConfiguration](docs/sdks/bankstatements/README.md#getuploadconfiguration) - Get upload configuration
* [setUploadConfiguration](docs/sdks/bankstatements/README.md#setuploadconfiguration) - Set upload configuration
* [startUploadSession](docs/sdks/bankstatements/README.md#startuploadsession) - Start upload session
* [uploadBankStatementData](docs/sdks/bankstatements/README.md#uploadbankstatementdata) - Upload data
* [endUploadSession](docs/sdks/bankstatements/README.md#enduploadsession) - End upload session
<!-- End Available Resources and Operations [operations] -->



<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [accountingBankDataAccountsGet](docs/sdks/codatlendingaccounts/README.md#get)
- [accountingBankDataAccountsList](docs/sdks/codatlendingaccounts/README.md#list)
- [accountingBankDataListTransactions](docs/sdks/accountingbankdata/README.md#listtransactions)
- [accountsPayableBillCreditNotesGet](docs/sdks/billcreditnotes/README.md#get)
- [accountsPayableBillCreditNotesList](docs/sdks/billcreditnotes/README.md#list)
- [accountsPayableBillPaymentsGet](docs/sdks/billpayments/README.md#get)
- [accountsPayableBillPaymentsList](docs/sdks/billpayments/README.md#list)
- [accountsPayableBillsDownloadAttachment](docs/sdks/bills/README.md#downloadattachment)
- [accountsPayableBillsGetAttachment](docs/sdks/bills/README.md#getattachment)
- [accountsPayableBillsGet](docs/sdks/bills/README.md#get)
- [accountsPayableBillsListAttachments](docs/sdks/bills/README.md#listattachments)
- [accountsPayableBillsList](docs/sdks/bills/README.md#list)
- [accountsPayableSuppliersDownloadAttachment](docs/sdks/suppliers/README.md#downloadattachment)
- [accountsPayableSuppliersGetAttachment](docs/sdks/suppliers/README.md#getattachment)
- [accountsPayableSuppliersGet](docs/sdks/suppliers/README.md#get)
- [accountsPayableSuppliersListAttachments](docs/sdks/suppliers/README.md#listattachments)
- [accountsPayableSuppliersList](docs/sdks/suppliers/README.md#list)
- [accountsReceivableCreditNotesGet](docs/sdks/creditnotes/README.md#get)
- [accountsReceivableCreditNotesList](docs/sdks/creditnotes/README.md#list)
- [accountsReceivableCustomersDownloadAttachment](docs/sdks/customers/README.md#downloadattachment)
- [accountsReceivableCustomersGetAttachment](docs/sdks/customers/README.md#getattachment)
- [accountsReceivableCustomersGet](docs/sdks/customers/README.md#get)
- [accountsReceivableCustomersListAttachments](docs/sdks/customers/README.md#listattachments)
- [accountsReceivableCustomersList](docs/sdks/customers/README.md#list)
- [accountsReceivableDirectIncomesDownloadAttachment](docs/sdks/directincomes/README.md#downloadattachment)
- [accountsReceivableDirectIncomesGetAttachment](docs/sdks/directincomes/README.md#getattachment)
- [accountsReceivableDirectIncomesGet](docs/sdks/directincomes/README.md#get)
- [accountsReceivableDirectIncomesListAttachments](docs/sdks/directincomes/README.md#listattachments)
- [accountsReceivableDirectIncomesList](docs/sdks/directincomes/README.md#list)
- [accountsReceivableInvoicesDownloadAttachment](docs/sdks/invoices/README.md#downloadattachment)
- [accountsReceivableInvoicesDownloadPdf](docs/sdks/invoices/README.md#downloadpdf)
- [accountsReceivableInvoicesGetAttachment](docs/sdks/invoices/README.md#getattachment)
- [accountsReceivableInvoicesGet](docs/sdks/invoices/README.md#get)
- [accountsReceivableInvoicesListAttachments](docs/sdks/invoices/README.md#listattachments)
- [accountsReceivableInvoicesListReconciled](docs/sdks/invoices/README.md#listreconciled)
- [accountsReceivableInvoicesList](docs/sdks/invoices/README.md#list)
- [accountsReceivablePaymentsGet](docs/sdks/payments/README.md#get)
- [accountsReceivablePaymentsList](docs/sdks/payments/README.md#list)
- [accountsReceivableReportsGetAgedCreditors](docs/sdks/codatlendingreports/README.md#getagedcreditors)
- [accountsReceivableReportsGetAgedDebtors](docs/sdks/codatlendingreports/README.md#getageddebtors)
- [accountsReceivableReportsIsAgedCreditorsAvailable](docs/sdks/codatlendingreports/README.md#isagedcreditorsavailable)
- [accountsReceivableReportsIsAgedDebtorsAvailable](docs/sdks/codatlendingreports/README.md#isageddebtorsavailable)
- [bankStatementsEndUploadSession](docs/sdks/bankstatements/README.md#enduploadsession)
- [bankStatementsGetUploadConfiguration](docs/sdks/bankstatements/README.md#getuploadconfiguration)
- [bankStatementsSetUploadConfiguration](docs/sdks/bankstatements/README.md#setuploadconfiguration)
- [bankStatementsStartUploadSession](docs/sdks/bankstatements/README.md#startuploadsession)
- [bankStatementsUploadBankStatementData](docs/sdks/bankstatements/README.md#uploadbankstatementdata)
- [bankingAccountBalancesList](docs/sdks/accountbalances/README.md#list)
- [bankingAccountsGet](docs/sdks/codatlendingbankingaccounts/README.md#get)
- [bankingAccountsList](docs/sdks/codatlendingbankingaccounts/README.md#list)
- [bankingCategorizedStatementGet](docs/sdks/categorizedstatement/README.md#get)
- [bankingTransactionCategoriesGet](docs/sdks/transactioncategories/README.md#get)
- [bankingTransactionCategoriesList](docs/sdks/transactioncategories/README.md#list)
- [bankingTransactionsGet](docs/sdks/codatlendingtransactions/README.md#get)
- [bankingTransactionsList](docs/sdks/codatlendingtransactions/README.md#list)
- [companiesCreate](docs/sdks/companies/README.md#create)
- [companiesDelete](docs/sdks/companies/README.md#delete)
- [companiesGet](docs/sdks/companies/README.md#get)
- [companiesList](docs/sdks/companies/README.md#list)
- [companiesUpdate](docs/sdks/companies/README.md#update)
- [companyInfoGetAccountingProfile](docs/sdks/companyinfo/README.md#getaccountingprofile)
- [companyInfoGetCommerceProfile](docs/sdks/companyinfo/README.md#getcommerceprofile)
- [connectionsCreate](docs/sdks/connections/README.md#create)
- [connectionsDelete](docs/sdks/connections/README.md#delete)
- [connectionsGet](docs/sdks/connections/README.md#get)
- [connectionsList](docs/sdks/connections/README.md#list)
- [connectionsUnlink](docs/sdks/connections/README.md#unlink)
- [dataIntegrityDetails](docs/sdks/dataintegrity/README.md#details)
- [dataIntegrityStatus](docs/sdks/dataintegrity/README.md#status)
- [dataIntegritySummaries](docs/sdks/dataintegrity/README.md#summaries)
- [excelReportsDownload](docs/sdks/excelreports/README.md#download)
- [excelReportsGenerate](docs/sdks/excelreports/README.md#generate)
- [excelReportsGetStatus](docs/sdks/excelreports/README.md#getstatus)
- [fileUploadDownload](docs/sdks/fileupload/README.md#download)
- [fileUploadListUploaded](docs/sdks/fileupload/README.md#listuploaded)
- [fileUploadUpload](docs/sdks/fileupload/README.md#upload)
- [financialStatementsAccountsGet](docs/sdks/accounts/README.md#get)
- [financialStatementsAccountsList](docs/sdks/accounts/README.md#list)
- [financialStatementsBalanceSheetGetCategorizedAccounts](docs/sdks/balancesheet/README.md#getcategorizedaccounts)
- [financialStatementsBalanceSheetGet](docs/sdks/balancesheet/README.md#get)
- [financialStatementsCashFlowGet](docs/sdks/cashflow/README.md#get)
- [financialStatementsProfitAndLossGetCategorizedAccounts](docs/sdks/profitandloss/README.md#getcategorizedaccounts)
- [financialStatementsProfitAndLossGet](docs/sdks/profitandloss/README.md#get)
- [liabilitiesGenerateLoanSummary](docs/sdks/liabilities/README.md#generateloansummary)
- [liabilitiesGenerateLoanTransactions](docs/sdks/liabilities/README.md#generateloantransactions)
- [liabilitiesGetLoanSummary](docs/sdks/liabilities/README.md#getloansummary)
- [liabilitiesListLoanTransactions](docs/sdks/liabilities/README.md#listloantransactions)
- [loanWritebackAccountsCreate](docs/sdks/codatlendingloanwritebackaccounts/README.md#create)
- [loanWritebackAccountsGetCreateModel](docs/sdks/codatlendingloanwritebackaccounts/README.md#getcreatemodel)
- [loanWritebackBankAccountsCreate](docs/sdks/bankaccounts/README.md#create)
- [loanWritebackBankAccountsGetCreateUpdateModel](docs/sdks/bankaccounts/README.md#getcreateupdatemodel)
- [loanWritebackBankTransactionsCreate](docs/sdks/banktransactions/README.md#create)
- [loanWritebackBankTransactionsGetCreateModel](docs/sdks/banktransactions/README.md#getcreatemodel)
- [loanWritebackCreateOperationsGet](docs/sdks/createoperations/README.md#get)
- [loanWritebackCreateOperationsList](docs/sdks/createoperations/README.md#list)
- [loanWritebackDirectCostsCreate](docs/sdks/codatlendingdirectcosts/README.md#create)
- [loanWritebackDirectCostsGetCreateModel](docs/sdks/codatlendingdirectcosts/README.md#getcreatemodel)
- [loanWritebackPaymentsCreate](docs/sdks/codatlendingloanwritebackpayments/README.md#create)
- [loanWritebackPaymentsGetCreateModel](docs/sdks/codatlendingloanwritebackpayments/README.md#getcreatemodel)
- [loanWritebackSuppliersCreate](docs/sdks/codatlendingsuppliers/README.md#create)
- [loanWritebackSuppliersGetCreateUpdateModel](docs/sdks/codatlendingsuppliers/README.md#getcreateupdatemodel)
- [loanWritebackTransfersCreate](docs/sdks/codatlendingtransfers/README.md#create)
- [loanWritebackTransfersGetCreateModel](docs/sdks/codatlendingtransfers/README.md#getcreatemodel)
- [manageDataGetStatus](docs/sdks/managedata/README.md#getstatus)
- [manageDataPullOperationsGet](docs/sdks/pulloperations/README.md#get)
- [manageDataPullOperationsList](docs/sdks/pulloperations/README.md#list)
- [manageDataRefreshAllDataTypes](docs/sdks/refresh/README.md#alldatatypes)
- [manageDataRefreshDataType](docs/sdks/refresh/README.md#datatype)
- [salesCustomersGet](docs/sdks/codatlendingcustomers/README.md#get)
- [salesCustomersList](docs/sdks/codatlendingcustomers/README.md#list)
- [salesDisputesGet](docs/sdks/disputes/README.md#get)
- [salesDisputesList](docs/sdks/disputes/README.md#list)
- [salesLocationsGet](docs/sdks/locations/README.md#get)
- [salesLocationsList](docs/sdks/locations/README.md#list)
- [salesMetricsGetCustomerRetention](docs/sdks/metrics/README.md#getcustomerretention)
- [salesMetricsGetLifetimeValue](docs/sdks/metrics/README.md#getlifetimevalue)
- [salesMetricsGetRevenue](docs/sdks/metrics/README.md#getrevenue)
- [salesOrdersGet](docs/sdks/orders/README.md#get)
- [salesOrdersList](docs/sdks/orders/README.md#list)
- [salesPaymentMethodsGet](docs/sdks/paymentmethods/README.md#get)
- [salesPaymentMethodsList](docs/sdks/paymentmethods/README.md#list)
- [salesPaymentsGet](docs/sdks/codatlendingpayments/README.md#get)
- [salesPaymentsList](docs/sdks/codatlendingpayments/README.md#list)
- [salesProductCategoriesGet](docs/sdks/productcategories/README.md#get)
- [salesProductCategoriesList](docs/sdks/productcategories/README.md#list)
- [salesProductsGet](docs/sdks/products/README.md#get)
- [salesProductsList](docs/sdks/products/README.md#list)
- [salesReportsGetOrders](docs/sdks/reports/README.md#getorders)
- [salesReportsGetRefunds](docs/sdks/reports/README.md#getrefunds)
- [salesTransactionsGet](docs/sdks/codatlendingsalestransactions/README.md#get)
- [salesTransactionsList](docs/sdks/codatlendingsalestransactions/README.md#list)
- [transactionsAccountTransactionsGet](docs/sdks/accounttransactions/README.md#get)
- [transactionsAccountTransactionsList](docs/sdks/accounttransactions/README.md#list)
- [transactionsDirectCostsDownloadAttachment](docs/sdks/directcosts/README.md#downloadattachment)
- [transactionsDirectCostsGetAttachment](docs/sdks/directcosts/README.md#getattachment)
- [transactionsDirectCostsGet](docs/sdks/directcosts/README.md#get)
- [transactionsDirectCostsListAttachments](docs/sdks/directcosts/README.md#listattachments)
- [transactionsDirectCostsList](docs/sdks/directcosts/README.md#list)
- [transactionsJournalEntriesGet](docs/sdks/journalentries/README.md#get)
- [transactionsJournalEntriesList](docs/sdks/journalentries/README.md#list)
- [transactionsJournalsGet](docs/sdks/journals/README.md#get)
- [transactionsJournalsList](docs/sdks/journals/README.md#list)
- [transactionsTransfersGet](docs/sdks/transfers/README.md#get)
- [transactionsTransfersList](docs/sdks/transfers/README.md#list)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  await codatLending.fileUpload.upload({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { CodatLending } from "@codat/lending";
import {
  ErrorMessage,
  SDKValidationError,
} from "@codat/lending/sdk/models/errors";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  let result;
  try {
    result = await codatLending.companies.list({
      page: 1,
      pageSize: 100,
      query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
      orderBy: "-modifiedDate",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorMessage): {
        // Handle err.data$: ErrorMessageData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.codat.io` | None |

```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  serverIdx: 0,
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  serverURL: "https://api.codat.io",
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { CodatLending } from "@codat/lending";
import { HTTPClient } from "@codat/lending/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new CodatLending({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `authHeader` | apiKey       | API key      |

To authenticate with the API the `authHeader` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CodatLending } from "@codat/lending";

const sdk = new CodatLending({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

<!-- Start Codat Support Notes -->
## Support

If you encounter any challenges while utilizing our SDKs, please don't hesitate to reach out for assistance. 
You can raise any issues by contacting your dedicated Codat representative or reaching out to our [support team](mailto:support@codat.io).
We're here to help ensure a smooth experience for you.
<!-- End Codat Support Notes -->

<!-- Start Codat Generated By -->
### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
<!-- End Codat Generated By -->
