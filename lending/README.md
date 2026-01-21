# Lending

<!-- Start Codat Library Description -->
Lending helps you make smarter credit decisions on small businesses by enabling you to pull your customers' latest data from the operating systems they are already using. You can use that data for automating decisioning and surfacing new insights on the customer, all via one API.
<!-- End Codat Library Description -->

<!-- Start Summary [summary] -->
## Summary

Lending: Our Lending solution helps you make smarter credit decisions on small businesses by enabling you to pull your customers' latest data from accounting, banking, and commerce software they are already using. It also includes features to help providers verify the accuracy of data and process it more efficiently.

The Lending solution is built on top of the latest accounting, commerce, and banking data, providing you with the most important data points you need to get a full picture of SMB creditworthiness and make a comprehensive assessment of your customers.

[Explore solution](https://docs.codat.io/lending/overview) | [See OpenAPI spec](https://github.com/codatio/oas)

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
<!-- $toc-max-depth=2 -->
* [Lending](#lending)
  * [Endpoints](#endpoints)
  * [SDK Installation](#sdk-installation)
  * [Example Usage](#example-usage)
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
  * [Support](#support)

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
yarn add @codat/lending
```



### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "CodatLending": {
      "command": "npx",
      "args": [
        "-y", "--package", "@codat/lending",
        "--",
        "mcp", "start",
        "--auth-header", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "CodatLending": {
      "command": "npx",
      "args": [
        "-y", "--package", "@codat/lending",
        "--",
        "mcp", "start",
        "--auth-header", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @codat/lending -- mcp start --help
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
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [AccountingBankData](docs/sdks/accountingbankdata/README.md)

* [listTransactions](docs/sdks/accountingbankdata/README.md#listtransactions) - List bank account transactions

#### [AccountingBankData.Accounts](docs/sdks/codatlendingaccounts/README.md)

* [list](docs/sdks/codatlendingaccounts/README.md#list) - List bank accounts
* [get](docs/sdks/codatlendingaccounts/README.md#get) - Get bank account

### [AccountsPayable.BillCreditNotes](docs/sdks/billcreditnotes/README.md)

* [list](docs/sdks/billcreditnotes/README.md#list) - List bill credit notes
* [get](docs/sdks/billcreditnotes/README.md#get) - Get bill credit note

### [AccountsPayable.BillPayments](docs/sdks/billpayments/README.md)

* [list](docs/sdks/billpayments/README.md#list) - List bill payments
* [get](docs/sdks/billpayments/README.md#get) - Get bill payment

### [AccountsPayable.Bills](docs/sdks/bills/README.md)

* [list](docs/sdks/bills/README.md#list) - List bills
* [get](docs/sdks/bills/README.md#get) - Get bill
* [listAttachments](docs/sdks/bills/README.md#listattachments) - List bill attachments
* [getAttachment](docs/sdks/bills/README.md#getattachment) - Get bill attachment
* [downloadAttachment](docs/sdks/bills/README.md#downloadattachment) - Download bill attachment

### [AccountsPayable.Suppliers](docs/sdks/suppliers/README.md)

* [list](docs/sdks/suppliers/README.md#list) - List suppliers
* [get](docs/sdks/suppliers/README.md#get) - Get supplier
* [listAttachments](docs/sdks/suppliers/README.md#listattachments) - List supplier attachments
* [getAttachment](docs/sdks/suppliers/README.md#getattachment) - Get supplier attachment
* [downloadAttachment](docs/sdks/suppliers/README.md#downloadattachment) - Download supplier attachment

### [AccountsReceivable.CreditNotes](docs/sdks/creditnotes/README.md)

* [list](docs/sdks/creditnotes/README.md#list) - List credit notes
* [get](docs/sdks/creditnotes/README.md#get) - Get credit note

### [AccountsReceivable.Customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - List customers
* [get](docs/sdks/customers/README.md#get) - Get customer
* [listAttachments](docs/sdks/customers/README.md#listattachments) - List customer attachments
* [getAttachment](docs/sdks/customers/README.md#getattachment) - Get customer attachment
* [downloadAttachment](docs/sdks/customers/README.md#downloadattachment) - Download customer attachment

### [AccountsReceivable.DirectIncomes](docs/sdks/directincomes/README.md)

* [list](docs/sdks/directincomes/README.md#list) - List direct incomes
* [get](docs/sdks/directincomes/README.md#get) - Get direct income
* [getAttachment](docs/sdks/directincomes/README.md#getattachment) - Get direct income attachment
* [downloadAttachment](docs/sdks/directincomes/README.md#downloadattachment) - Download direct income attachment
* [listAttachments](docs/sdks/directincomes/README.md#listattachments) - List direct income attachments

### [AccountsReceivable.Invoices](docs/sdks/invoices/README.md)

* [listReconciled](docs/sdks/invoices/README.md#listreconciled) - List reconciled invoices
* [list](docs/sdks/invoices/README.md#list) - List invoices
* [get](docs/sdks/invoices/README.md#get) - Get invoice
* [downloadPdf](docs/sdks/invoices/README.md#downloadpdf) - Get invoice as PDF
* [listAttachments](docs/sdks/invoices/README.md#listattachments) - List invoice attachments
* [getAttachment](docs/sdks/invoices/README.md#getattachment) - Get invoice attachment
* [downloadAttachment](docs/sdks/invoices/README.md#downloadattachment) - Download invoice attachment

### [AccountsReceivable.Payments](docs/sdks/payments/README.md)

* [list](docs/sdks/payments/README.md#list) - List payments
* [get](docs/sdks/payments/README.md#get) - Get payment

### [AccountsReceivable.Reports](docs/sdks/codatlendingreports/README.md)

* [isAgedDebtorsAvailable](docs/sdks/codatlendingreports/README.md#isageddebtorsavailable) - Aged debtors report available
* [getAgedDebtors](docs/sdks/codatlendingreports/README.md#getageddebtors) - Aged debtors report
* [isAgedCreditorsAvailable](docs/sdks/codatlendingreports/README.md#isagedcreditorsavailable) - Aged creditors report available
* [getAgedCreditors](docs/sdks/codatlendingreports/README.md#getagedcreditors) - Aged creditors report

### [BankStatements](docs/sdks/bankstatements/README.md)

* [getUploadConfiguration](docs/sdks/bankstatements/README.md#getuploadconfiguration) - Get upload configuration
* [setUploadConfiguration](docs/sdks/bankstatements/README.md#setuploadconfiguration) - Set upload configuration
* [startUploadSession](docs/sdks/bankstatements/README.md#startuploadsession) - Start upload session
* [uploadBankStatementData](docs/sdks/bankstatements/README.md#uploadbankstatementdata) - Upload data
* [endUploadSession](docs/sdks/bankstatements/README.md#enduploadsession) - End upload session

### [Banking.AccountBalances](docs/sdks/accountbalances/README.md)

* [list](docs/sdks/accountbalances/README.md#list) - List account balances

### [Banking.Accounts](docs/sdks/codatlendingbankingaccounts/README.md)

* [list](docs/sdks/codatlendingbankingaccounts/README.md#list) - List accounts
* [get](docs/sdks/codatlendingbankingaccounts/README.md#get) - Get account

### [Banking.CategorizedStatement](docs/sdks/categorizedstatement/README.md)

* [get](docs/sdks/categorizedstatement/README.md#get) - Get categorized bank statement

### [Banking.TransactionCategories](docs/sdks/transactioncategories/README.md)

* [list](docs/sdks/transactioncategories/README.md#list) - List transaction categories
* [get](docs/sdks/transactioncategories/README.md#get) - Get transaction category

### [Banking.Transactions](docs/sdks/codatlendingtransactions/README.md)

* [list](docs/sdks/codatlendingtransactions/README.md#list) - List transactions
* [get](docs/sdks/codatlendingtransactions/README.md#get) - Get bank transaction

### [Companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List companies
* [create](docs/sdks/companies/README.md#create) - Create company
* [replace](docs/sdks/companies/README.md#replace) - Replace company
* [update](docs/sdks/companies/README.md#update) - Update company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [get](docs/sdks/companies/README.md#get) - Get company

### [CompanyInfo](docs/sdks/companyinfo/README.md)

* [getAccountingProfile](docs/sdks/companyinfo/README.md#getaccountingprofile) - Get company accounting profile
* [getCommerceProfile](docs/sdks/companyinfo/README.md#getcommerceprofile) - Get company commerce profile

### [Connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - List connections
* [create](docs/sdks/connections/README.md#create) - Create connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [DataIntegrity](docs/sdks/dataintegrity/README.md)

* [status](docs/sdks/dataintegrity/README.md#status) - Get data integrity status
* [summaries](docs/sdks/dataintegrity/README.md#summaries) - Get data integrity summaries
* [details](docs/sdks/dataintegrity/README.md#details) - List data integrity details

### [ExcelReports](docs/sdks/excelreports/README.md)

* [generate](docs/sdks/excelreports/README.md#generate) - Generate Excel report
* [getStatus](docs/sdks/excelreports/README.md#getstatus) - Get Excel report status
* [download](docs/sdks/excelreports/README.md#download) - Download Excel report

### [FileUpload](docs/sdks/fileupload/README.md)

* [listUploaded](docs/sdks/fileupload/README.md#listuploaded) - List all files uploaded by a company
* [download](docs/sdks/fileupload/README.md#download) - Download all files for a company
* [upload](docs/sdks/fileupload/README.md#upload) - Upload files for a company

### [FinancialStatements.Accounts](docs/sdks/accounts/README.md)

* [list](docs/sdks/accounts/README.md#list) - List accounts
* [get](docs/sdks/accounts/README.md#get) - Get account

### [FinancialStatements.BalanceSheet](docs/sdks/balancesheet/README.md)

* [getCategorizedAccounts](docs/sdks/balancesheet/README.md#getcategorizedaccounts) - Get categorized balance sheet statement
* [get](docs/sdks/balancesheet/README.md#get) - Get balance sheet

### [FinancialStatements.CashFlow](docs/sdks/cashflow/README.md)

* [get](docs/sdks/cashflow/README.md#get) - Get cash flow statement

### [FinancialStatements.ProfitAndLoss](docs/sdks/profitandloss/README.md)

* [getCategorizedAccounts](docs/sdks/profitandloss/README.md#getcategorizedaccounts) - Get categorized profit and loss statement
* [get](docs/sdks/profitandloss/README.md#get) - Get profit and loss

### [Liabilities](docs/sdks/liabilities/README.md)

* [generateLoanTransactions](docs/sdks/liabilities/README.md#generateloantransactions) - Generate loan transactions report
* [listLoanTransactions](docs/sdks/liabilities/README.md#listloantransactions) - List loan transactions
* [generateLoanSummary](docs/sdks/liabilities/README.md#generateloansummary) - Generate loan summaries report
* [getLoanSummary](docs/sdks/liabilities/README.md#getloansummary) - Get loan summaries

### [LoanWriteback.Accounts](docs/sdks/codatlendingloanwritebackaccounts/README.md)

* [getCreateModel](docs/sdks/codatlendingloanwritebackaccounts/README.md#getcreatemodel) - Get create account model
* [create](docs/sdks/codatlendingloanwritebackaccounts/README.md#create) - Create account

### [LoanWriteback.BankAccounts](docs/sdks/bankaccounts/README.md)

* [getCreateUpdateModel](docs/sdks/bankaccounts/README.md#getcreateupdatemodel) - Get create/update bank account model
* [create](docs/sdks/bankaccounts/README.md#create) - Create bank account

### [LoanWriteback.BankTransactions](docs/sdks/banktransactions/README.md)

* [getCreateModel](docs/sdks/banktransactions/README.md#getcreatemodel) - Get create bank account transactions model
* [create](docs/sdks/banktransactions/README.md#create) - Create bank account transactions

### [LoanWriteback.CreateOperations](docs/sdks/createoperations/README.md)

* [get](docs/sdks/createoperations/README.md#get) - Get create operation
* [list](docs/sdks/createoperations/README.md#list) - List create operations

### [LoanWriteback.DirectCosts](docs/sdks/codatlendingdirectcosts/README.md)

* [getCreateModel](docs/sdks/codatlendingdirectcosts/README.md#getcreatemodel) - Get create direct cost model
* [create](docs/sdks/codatlendingdirectcosts/README.md#create) - Create direct cost

### [LoanWriteback.Payments](docs/sdks/codatlendingloanwritebackpayments/README.md)

* [getCreateModel](docs/sdks/codatlendingloanwritebackpayments/README.md#getcreatemodel) - Get create payment model
* [create](docs/sdks/codatlendingloanwritebackpayments/README.md#create) - Create payment

### [LoanWriteback.SourceAccounts](docs/sdks/sourceaccounts/README.md)

* [create](docs/sdks/sourceaccounts/README.md#create) - Create source account
* [listMappings](docs/sdks/sourceaccounts/README.md#listmappings) - List bank feed account mappings
* [createMapping](docs/sdks/sourceaccounts/README.md#createmapping) - Create bank feed account mapping

### [LoanWriteback.Suppliers](docs/sdks/codatlendingsuppliers/README.md)

* [getCreateUpdateModel](docs/sdks/codatlendingsuppliers/README.md#getcreateupdatemodel) - Get create/update supplier model
* [create](docs/sdks/codatlendingsuppliers/README.md#create) - Create supplier

### [LoanWriteback.Transfers](docs/sdks/codatlendingtransfers/README.md)

* [getCreateModel](docs/sdks/codatlendingtransfers/README.md#getcreatemodel) - Get create transfer model
* [create](docs/sdks/codatlendingtransfers/README.md#create) - Create transfer

### [ManageReports](docs/sdks/managereports/README.md)

* [generateReport](docs/sdks/managereports/README.md#generatereport) - Generate report
* [listReports](docs/sdks/managereports/README.md#listreports) - List reports

### [ManageData](docs/sdks/managedata/README.md)

* [getStatus](docs/sdks/managedata/README.md#getstatus) - Get data status

#### [ManageData.PullOperations](docs/sdks/pulloperations/README.md)

* [list](docs/sdks/pulloperations/README.md#list) - List pull operations
* [get](docs/sdks/pulloperations/README.md#get) - Get pull operation

#### [ManageData.Refresh](docs/sdks/refresh/README.md)

* [allDataTypes](docs/sdks/refresh/README.md#alldatatypes) - Refresh all data
* [dataType](docs/sdks/refresh/README.md#datatype) - Refresh data type

### [Sales.Customers](docs/sdks/codatlendingcustomers/README.md)

* [list](docs/sdks/codatlendingcustomers/README.md#list) - List customers
* [get](docs/sdks/codatlendingcustomers/README.md#get) - Get customer

### [Sales.Disputes](docs/sdks/disputes/README.md)

* [list](docs/sdks/disputes/README.md#list) - List disputes
* [get](docs/sdks/disputes/README.md#get) - Get dispute

### [Sales.Locations](docs/sdks/locations/README.md)

* [list](docs/sdks/locations/README.md#list) - List locations
* [get](docs/sdks/locations/README.md#get) - Get location

### [Sales.Metrics](docs/sdks/metrics/README.md)

* [getRevenue](docs/sdks/metrics/README.md#getrevenue) - Get commerce revenue metrics
* [getCustomerRetention](docs/sdks/metrics/README.md#getcustomerretention) - Get customer retention metrics
* [getLifetimeValue](docs/sdks/metrics/README.md#getlifetimevalue) - Get lifetime value metrics

### [Sales.Orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - List orders
* [get](docs/sdks/orders/README.md#get) - Get order

### [Sales.PaymentMethods](docs/sdks/paymentmethods/README.md)

* [list](docs/sdks/paymentmethods/README.md#list) - List payment methods
* [get](docs/sdks/paymentmethods/README.md#get) - Get payment method

### [Sales.Payments](docs/sdks/codatlendingpayments/README.md)

* [list](docs/sdks/codatlendingpayments/README.md#list) - List payments
* [get](docs/sdks/codatlendingpayments/README.md#get) - Get payment

### [Sales.ProductCategories](docs/sdks/productcategories/README.md)

* [list](docs/sdks/productcategories/README.md#list) - List product categories
* [get](docs/sdks/productcategories/README.md#get) - Get product category

### [Sales.Products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - List products
* [get](docs/sdks/products/README.md#get) - Get product

### [Sales.Reports](docs/sdks/reports/README.md)

* [getOrders](docs/sdks/reports/README.md#getorders) - Get orders report
* [getRefunds](docs/sdks/reports/README.md#getrefunds) - Get refunds report

### [Sales.Transactions](docs/sdks/codatlendingsalestransactions/README.md)

* [list](docs/sdks/codatlendingsalestransactions/README.md#list) - List transactions
* [get](docs/sdks/codatlendingsalestransactions/README.md#get) - Get transaction

### [Transactions.AccountTransactions](docs/sdks/accounttransactions/README.md)

* [list](docs/sdks/accounttransactions/README.md#list) - List account transactions
* [get](docs/sdks/accounttransactions/README.md#get) - Get account transaction

### [Transactions.DirectCosts](docs/sdks/directcosts/README.md)

* [list](docs/sdks/directcosts/README.md#list) - List direct costs
* [get](docs/sdks/directcosts/README.md#get) - Get direct cost
* [getAttachment](docs/sdks/directcosts/README.md#getattachment) - Get direct cost attachment
* [downloadAttachment](docs/sdks/directcosts/README.md#downloadattachment) - Download direct cost attachment
* [listAttachments](docs/sdks/directcosts/README.md#listattachments) - List direct cost attachments

### [Transactions.JournalEntries](docs/sdks/journalentries/README.md)

* [list](docs/sdks/journalentries/README.md#list) - List journal entries
* [get](docs/sdks/journalentries/README.md#get) - Get journal entry

### [Transactions.Journals](docs/sdks/journals/README.md)

* [list](docs/sdks/journals/README.md#list) - List journals
* [get](docs/sdks/journals/README.md#get) - Get journal

### [Transactions.Transfers](docs/sdks/transfers/README.md)

* [list](docs/sdks/transfers/README.md#list) - List transfers
* [get](docs/sdks/transfers/README.md#get) - Get transfer

</details>
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

- [`accountingBankDataAccountsGet`](docs/sdks/codatlendingaccounts/README.md#get) - Get bank account
- [`accountingBankDataAccountsList`](docs/sdks/codatlendingaccounts/README.md#list) - List bank accounts
- [`accountingBankDataListTransactions`](docs/sdks/accountingbankdata/README.md#listtransactions) - List bank account transactions
- [`accountsPayableBillCreditNotesGet`](docs/sdks/billcreditnotes/README.md#get) - Get bill credit note
- [`accountsPayableBillCreditNotesList`](docs/sdks/billcreditnotes/README.md#list) - List bill credit notes
- [`accountsPayableBillPaymentsGet`](docs/sdks/billpayments/README.md#get) - Get bill payment
- [`accountsPayableBillPaymentsList`](docs/sdks/billpayments/README.md#list) - List bill payments
- [`accountsPayableBillsDownloadAttachment`](docs/sdks/bills/README.md#downloadattachment) - Download bill attachment
- [`accountsPayableBillsGet`](docs/sdks/bills/README.md#get) - Get bill
- [`accountsPayableBillsGetAttachment`](docs/sdks/bills/README.md#getattachment) - Get bill attachment
- [`accountsPayableBillsList`](docs/sdks/bills/README.md#list) - List bills
- [`accountsPayableBillsListAttachments`](docs/sdks/bills/README.md#listattachments) - List bill attachments
- [`accountsPayableSuppliersDownloadAttachment`](docs/sdks/suppliers/README.md#downloadattachment) - Download supplier attachment
- [`accountsPayableSuppliersGet`](docs/sdks/suppliers/README.md#get) - Get supplier
- [`accountsPayableSuppliersGetAttachment`](docs/sdks/suppliers/README.md#getattachment) - Get supplier attachment
- [`accountsPayableSuppliersList`](docs/sdks/suppliers/README.md#list) - List suppliers
- [`accountsPayableSuppliersListAttachments`](docs/sdks/suppliers/README.md#listattachments) - List supplier attachments
- [`accountsReceivableCreditNotesGet`](docs/sdks/creditnotes/README.md#get) - Get credit note
- [`accountsReceivableCreditNotesList`](docs/sdks/creditnotes/README.md#list) - List credit notes
- [`accountsReceivableCustomersDownloadAttachment`](docs/sdks/customers/README.md#downloadattachment) - Download customer attachment
- [`accountsReceivableCustomersGet`](docs/sdks/customers/README.md#get) - Get customer
- [`accountsReceivableCustomersGetAttachment`](docs/sdks/customers/README.md#getattachment) - Get customer attachment
- [`accountsReceivableCustomersList`](docs/sdks/customers/README.md#list) - List customers
- [`accountsReceivableCustomersListAttachments`](docs/sdks/customers/README.md#listattachments) - List customer attachments
- [`accountsReceivableDirectIncomesDownloadAttachment`](docs/sdks/directincomes/README.md#downloadattachment) - Download direct income attachment
- [`accountsReceivableDirectIncomesGet`](docs/sdks/directincomes/README.md#get) - Get direct income
- [`accountsReceivableDirectIncomesGetAttachment`](docs/sdks/directincomes/README.md#getattachment) - Get direct income attachment
- [`accountsReceivableDirectIncomesList`](docs/sdks/directincomes/README.md#list) - List direct incomes
- [`accountsReceivableDirectIncomesListAttachments`](docs/sdks/directincomes/README.md#listattachments) - List direct income attachments
- [`accountsReceivableInvoicesDownloadAttachment`](docs/sdks/invoices/README.md#downloadattachment) - Download invoice attachment
- [`accountsReceivableInvoicesDownloadPdf`](docs/sdks/invoices/README.md#downloadpdf) - Get invoice as PDF
- [`accountsReceivableInvoicesGet`](docs/sdks/invoices/README.md#get) - Get invoice
- [`accountsReceivableInvoicesGetAttachment`](docs/sdks/invoices/README.md#getattachment) - Get invoice attachment
- [`accountsReceivableInvoicesList`](docs/sdks/invoices/README.md#list) - List invoices
- [`accountsReceivableInvoicesListAttachments`](docs/sdks/invoices/README.md#listattachments) - List invoice attachments
- [`accountsReceivableInvoicesListReconciled`](docs/sdks/invoices/README.md#listreconciled) - List reconciled invoices
- [`accountsReceivablePaymentsGet`](docs/sdks/payments/README.md#get) - Get payment
- [`accountsReceivablePaymentsList`](docs/sdks/payments/README.md#list) - List payments
- [`accountsReceivableReportsGetAgedCreditors`](docs/sdks/codatlendingreports/README.md#getagedcreditors) - Aged creditors report
- [`accountsReceivableReportsGetAgedDebtors`](docs/sdks/codatlendingreports/README.md#getageddebtors) - Aged debtors report
- [`accountsReceivableReportsIsAgedCreditorsAvailable`](docs/sdks/codatlendingreports/README.md#isagedcreditorsavailable) - Aged creditors report available
- [`accountsReceivableReportsIsAgedDebtorsAvailable`](docs/sdks/codatlendingreports/README.md#isageddebtorsavailable) - Aged debtors report available
- [`bankingAccountBalancesList`](docs/sdks/accountbalances/README.md#list) - List account balances
- [`bankingAccountsGet`](docs/sdks/codatlendingbankingaccounts/README.md#get) - Get account
- [`bankingAccountsList`](docs/sdks/codatlendingbankingaccounts/README.md#list) - List accounts
- [`bankingCategorizedStatementGet`](docs/sdks/categorizedstatement/README.md#get) - Get categorized bank statement
- [`bankingTransactionCategoriesGet`](docs/sdks/transactioncategories/README.md#get) - Get transaction category
- [`bankingTransactionCategoriesList`](docs/sdks/transactioncategories/README.md#list) - List transaction categories
- [`bankingTransactionsGet`](docs/sdks/codatlendingtransactions/README.md#get) - Get bank transaction
- [`bankingTransactionsList`](docs/sdks/codatlendingtransactions/README.md#list) - List transactions
- [`bankStatementsEndUploadSession`](docs/sdks/bankstatements/README.md#enduploadsession) - End upload session
- [`bankStatementsGetUploadConfiguration`](docs/sdks/bankstatements/README.md#getuploadconfiguration) - Get upload configuration
- [`bankStatementsSetUploadConfiguration`](docs/sdks/bankstatements/README.md#setuploadconfiguration) - Set upload configuration
- [`bankStatementsStartUploadSession`](docs/sdks/bankstatements/README.md#startuploadsession) - Start upload session
- [`bankStatementsUploadBankStatementData`](docs/sdks/bankstatements/README.md#uploadbankstatementdata) - Upload data
- [`companiesCreate`](docs/sdks/companies/README.md#create) - Create company
- [`companiesDelete`](docs/sdks/companies/README.md#delete) - Delete a company
- [`companiesGet`](docs/sdks/companies/README.md#get) - Get company
- [`companiesList`](docs/sdks/companies/README.md#list) - List companies
- [`companiesReplace`](docs/sdks/companies/README.md#replace) - Replace company
- [`companiesUpdate`](docs/sdks/companies/README.md#update) - Update company
- [`companyInfoGetAccountingProfile`](docs/sdks/companyinfo/README.md#getaccountingprofile) - Get company accounting profile
- [`companyInfoGetCommerceProfile`](docs/sdks/companyinfo/README.md#getcommerceprofile) - Get company commerce profile
- [`connectionsCreate`](docs/sdks/connections/README.md#create) - Create connection
- [`connectionsDelete`](docs/sdks/connections/README.md#delete) - Delete connection
- [`connectionsGet`](docs/sdks/connections/README.md#get) - Get connection
- [`connectionsList`](docs/sdks/connections/README.md#list) - List connections
- [`connectionsUnlink`](docs/sdks/connections/README.md#unlink) - Unlink connection
- [`dataIntegrityDetails`](docs/sdks/dataintegrity/README.md#details) - List data integrity details
- [`dataIntegrityStatus`](docs/sdks/dataintegrity/README.md#status) - Get data integrity status
- [`dataIntegritySummaries`](docs/sdks/dataintegrity/README.md#summaries) - Get data integrity summaries
- [`excelReportsDownload`](docs/sdks/excelreports/README.md#download) - Download Excel report
- [`excelReportsGenerate`](docs/sdks/excelreports/README.md#generate) - Generate Excel report
- [`excelReportsGetStatus`](docs/sdks/excelreports/README.md#getstatus) - Get Excel report status
- [`fileUploadDownload`](docs/sdks/fileupload/README.md#download) - Download all files for a company
- [`fileUploadListUploaded`](docs/sdks/fileupload/README.md#listuploaded) - List all files uploaded by a company
- [`fileUploadUpload`](docs/sdks/fileupload/README.md#upload) - Upload files for a company
- [`financialStatementsAccountsGet`](docs/sdks/accounts/README.md#get) - Get account
- [`financialStatementsAccountsList`](docs/sdks/accounts/README.md#list) - List accounts
- [`financialStatementsBalanceSheetGet`](docs/sdks/balancesheet/README.md#get) - Get balance sheet
- [`financialStatementsBalanceSheetGetCategorizedAccounts`](docs/sdks/balancesheet/README.md#getcategorizedaccounts) - Get categorized balance sheet statement
- [`financialStatementsCashFlowGet`](docs/sdks/cashflow/README.md#get) - Get cash flow statement
- [`financialStatementsProfitAndLossGet`](docs/sdks/profitandloss/README.md#get) - Get profit and loss
- [`financialStatementsProfitAndLossGetCategorizedAccounts`](docs/sdks/profitandloss/README.md#getcategorizedaccounts) - Get categorized profit and loss statement
- [`liabilitiesGenerateLoanSummary`](docs/sdks/liabilities/README.md#generateloansummary) - Generate loan summaries report
- [`liabilitiesGenerateLoanTransactions`](docs/sdks/liabilities/README.md#generateloantransactions) - Generate loan transactions report
- [`liabilitiesGetLoanSummary`](docs/sdks/liabilities/README.md#getloansummary) - Get loan summaries
- [`liabilitiesListLoanTransactions`](docs/sdks/liabilities/README.md#listloantransactions) - List loan transactions
- [`loanWritebackAccountsCreate`](docs/sdks/codatlendingloanwritebackaccounts/README.md#create) - Create account
- [`loanWritebackAccountsGetCreateModel`](docs/sdks/codatlendingloanwritebackaccounts/README.md#getcreatemodel) - Get create account model
- [`loanWritebackBankAccountsCreate`](docs/sdks/bankaccounts/README.md#create) - Create bank account
- [`loanWritebackBankAccountsGetCreateUpdateModel`](docs/sdks/bankaccounts/README.md#getcreateupdatemodel) - Get create/update bank account model
- [`loanWritebackBankTransactionsCreate`](docs/sdks/banktransactions/README.md#create) - Create bank account transactions
- [`loanWritebackBankTransactionsGetCreateModel`](docs/sdks/banktransactions/README.md#getcreatemodel) - Get create bank account transactions model
- [`loanWritebackCreateOperationsGet`](docs/sdks/createoperations/README.md#get) - Get create operation
- [`loanWritebackCreateOperationsList`](docs/sdks/createoperations/README.md#list) - List create operations
- [`loanWritebackDirectCostsCreate`](docs/sdks/codatlendingdirectcosts/README.md#create) - Create direct cost
- [`loanWritebackDirectCostsGetCreateModel`](docs/sdks/codatlendingdirectcosts/README.md#getcreatemodel) - Get create direct cost model
- [`loanWritebackPaymentsCreate`](docs/sdks/codatlendingloanwritebackpayments/README.md#create) - Create payment
- [`loanWritebackPaymentsGetCreateModel`](docs/sdks/codatlendingloanwritebackpayments/README.md#getcreatemodel) - Get create payment model
- [`loanWritebackSourceAccountsCreate`](docs/sdks/sourceaccounts/README.md#create) - Create source account
- [`loanWritebackSourceAccountsCreateMapping`](docs/sdks/sourceaccounts/README.md#createmapping) - Create bank feed account mapping
- [`loanWritebackSourceAccountsListMappings`](docs/sdks/sourceaccounts/README.md#listmappings) - List bank feed account mappings
- [`loanWritebackSuppliersCreate`](docs/sdks/codatlendingsuppliers/README.md#create) - Create supplier
- [`loanWritebackSuppliersGetCreateUpdateModel`](docs/sdks/codatlendingsuppliers/README.md#getcreateupdatemodel) - Get create/update supplier model
- [`loanWritebackTransfersCreate`](docs/sdks/codatlendingtransfers/README.md#create) - Create transfer
- [`loanWritebackTransfersGetCreateModel`](docs/sdks/codatlendingtransfers/README.md#getcreatemodel) - Get create transfer model
- [`manageDataGetStatus`](docs/sdks/managedata/README.md#getstatus) - Get data status
- [`manageDataPullOperationsGet`](docs/sdks/pulloperations/README.md#get) - Get pull operation
- [`manageDataPullOperationsList`](docs/sdks/pulloperations/README.md#list) - List pull operations
- [`manageDataRefreshAllDataTypes`](docs/sdks/refresh/README.md#alldatatypes) - Refresh all data
- [`manageDataRefreshDataType`](docs/sdks/refresh/README.md#datatype) - Refresh data type
- [`manageReportsGenerateReport`](docs/sdks/managereports/README.md#generatereport) - Generate report
- [`manageReportsListReports`](docs/sdks/managereports/README.md#listreports) - List reports
- [`salesCustomersGet`](docs/sdks/codatlendingcustomers/README.md#get) - Get customer
- [`salesCustomersList`](docs/sdks/codatlendingcustomers/README.md#list) - List customers
- [`salesDisputesGet`](docs/sdks/disputes/README.md#get) - Get dispute
- [`salesDisputesList`](docs/sdks/disputes/README.md#list) - List disputes
- [`salesLocationsGet`](docs/sdks/locations/README.md#get) - Get location
- [`salesLocationsList`](docs/sdks/locations/README.md#list) - List locations
- [`salesMetricsGetCustomerRetention`](docs/sdks/metrics/README.md#getcustomerretention) - Get customer retention metrics
- [`salesMetricsGetLifetimeValue`](docs/sdks/metrics/README.md#getlifetimevalue) - Get lifetime value metrics
- [`salesMetricsGetRevenue`](docs/sdks/metrics/README.md#getrevenue) - Get commerce revenue metrics
- [`salesOrdersGet`](docs/sdks/orders/README.md#get) - Get order
- [`salesOrdersList`](docs/sdks/orders/README.md#list) - List orders
- [`salesPaymentMethodsGet`](docs/sdks/paymentmethods/README.md#get) - Get payment method
- [`salesPaymentMethodsList`](docs/sdks/paymentmethods/README.md#list) - List payment methods
- [`salesPaymentsGet`](docs/sdks/codatlendingpayments/README.md#get) - Get payment
- [`salesPaymentsList`](docs/sdks/codatlendingpayments/README.md#list) - List payments
- [`salesProductCategoriesGet`](docs/sdks/productcategories/README.md#get) - Get product category
- [`salesProductCategoriesList`](docs/sdks/productcategories/README.md#list) - List product categories
- [`salesProductsGet`](docs/sdks/products/README.md#get) - Get product
- [`salesProductsList`](docs/sdks/products/README.md#list) - List products
- [`salesReportsGetOrders`](docs/sdks/reports/README.md#getorders) - Get orders report
- [`salesReportsGetRefunds`](docs/sdks/reports/README.md#getrefunds) - Get refunds report
- [`salesTransactionsGet`](docs/sdks/codatlendingsalestransactions/README.md#get) - Get transaction
- [`salesTransactionsList`](docs/sdks/codatlendingsalestransactions/README.md#list) - List transactions
- [`transactionsAccountTransactionsGet`](docs/sdks/accounttransactions/README.md#get) - Get account transaction
- [`transactionsAccountTransactionsList`](docs/sdks/accounttransactions/README.md#list) - List account transactions
- [`transactionsDirectCostsDownloadAttachment`](docs/sdks/directcosts/README.md#downloadattachment) - Download direct cost attachment
- [`transactionsDirectCostsGet`](docs/sdks/directcosts/README.md#get) - Get direct cost
- [`transactionsDirectCostsGetAttachment`](docs/sdks/directcosts/README.md#getattachment) - Get direct cost attachment
- [`transactionsDirectCostsList`](docs/sdks/directcosts/README.md#list) - List direct costs
- [`transactionsDirectCostsListAttachments`](docs/sdks/directcosts/README.md#listattachments) - List direct cost attachments
- [`transactionsJournalEntriesGet`](docs/sdks/journalentries/README.md#get) - Get journal entry
- [`transactionsJournalEntriesList`](docs/sdks/journalentries/README.md#list) - List journal entries
- [`transactionsJournalsGet`](docs/sdks/journals/README.md#get) - Get journal
- [`transactionsJournalsList`](docs/sdks/journals/README.md#list) - List journals
- [`transactionsTransfersGet`](docs/sdks/transfers/README.md#get) - Get transfer
- [`transactionsTransfersList`](docs/sdks/transfers/README.md#list) - List transfers

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
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
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
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`CodatLendingError`](./src/sdk/models/errors/codatlendingerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { CodatLending } from "@codat/lending";
import * as errors from "@codat/lending/sdk/models/errors";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  try {
    const result = await codatLending.companies.list({
      query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
      orderBy: "-modifiedDate",
      tags: "region=uk && team=invoice-finance",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.CodatLendingError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorMessage) {
        console.log(error.data$.statusCode); // number
        console.log(error.data$.service); // string
        console.log(error.data$.error); // string
        console.log(error.data$.correlationId); // string
        console.log(error.data$.validation); // shared.ErrorValidation
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`CodatLendingError`](./src/sdk/models/errors/codatlendingerror.ts): The base class for HTTP error responses.
  * [`ErrorMessage`](./src/sdk/models/errors/errormessage.ts): Your `query` parameter was not correctly formed.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/sdk/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/sdk/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`CodatLendingError`](./src/sdk/models/errors/codatlendingerror.ts)**:
* [`ResponseValidationError`](./src/sdk/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  serverURL: "https://api.codat.io",
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.companies.list({
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
  });

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

const sdk = new CodatLending({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type   | Scheme  |
| ------------ | ------ | ------- |
| `authHeader` | apiKey | API key |

To authenticate with the API the `authHeader` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.companies.list({
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
  });

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
