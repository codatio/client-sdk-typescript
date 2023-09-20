# Lending
    
Lending helps you make smarter credit decisions on small businesses by enabling you to pull your customers' latest data from the operating systems they are already using. You can use that data for automating decisioning and surfacing new insights on the customer, all via one API.

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @codat/lending
```

### Yarn

```bash
yarn add @codat/lending
```
<!-- End SDK Installation -->

## Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { CodatLending } from "@codat/lending";
import { ListAccountingBankAccountTransactionsResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingBankData.listTransactions({
  accountId: "corrupti",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "provident",
}).then((res: ListAccountingBankAccountTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AccountingBankData](docs/sdks/accountingbankdata/README.md)

* [listTransactions](docs/sdks/accountingbankdata/README.md#listtransactions) - List bank account transactions

### [AccountingBankData.Accounts](docs/sdks/accountingbankdataaccounts/README.md)

* [get](docs/sdks/accountingbankdataaccounts/README.md#get) - Get bank account
* [list](docs/sdks/accountingbankdataaccounts/README.md#list) - List bank accounts

### [Companies](docs/sdks/companies/README.md)

* [create](docs/sdks/companies/README.md#create) - Create company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [get](docs/sdks/companies/README.md#get) - Get company
* [list](docs/sdks/companies/README.md#list) - List companies
* [update](docs/sdks/companies/README.md#update) - Update company

### [CompanyInfo](docs/sdks/companyinfo/README.md)

* [getAccountingProfile](docs/sdks/companyinfo/README.md#getaccountingprofile) - Get company accounting profile
* [getCommerceProfile](docs/sdks/companyinfo/README.md#getcommerceprofile) - Get company commerce profile

### [Connections](docs/sdks/connections/README.md)

* [create](docs/sdks/connections/README.md#create) - Create connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [list](docs/sdks/connections/README.md#list) - List connections
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [DataIntegrity](docs/sdks/dataintegrity/README.md)

* [details](docs/sdks/dataintegrity/README.md#details) - List data integrity details
* [status](docs/sdks/dataintegrity/README.md#status) - Get data integrity status
* [summaries](docs/sdks/dataintegrity/README.md#summaries) - Get data integrity summaries

### [ExcelReports](docs/sdks/excelreports/README.md)

* [download](docs/sdks/excelreports/README.md#download) - Download Excel report
* [generate](docs/sdks/excelreports/README.md#generate) - Generate Excel report
* [getStatus](docs/sdks/excelreports/README.md#getstatus) - Get Excel report status

### [FileUpload](docs/sdks/fileupload/README.md)

* [download](docs/sdks/fileupload/README.md#download) - Download all files for a company
* [listUploaded](docs/sdks/fileupload/README.md#listuploaded) - List all files uploaded by a company
* [upload](docs/sdks/fileupload/README.md#upload) - Upload files for a company

### [Liabilities](docs/sdks/liabilities/README.md)

* [getLoanSummary](docs/sdks/liabilities/README.md#getloansummary) - Get loan summaries
* [listLoanTransactions](docs/sdks/liabilities/README.md#listloantransactions) - List loan transactions


### [AccountsPayable.BillCreditNotes](docs/sdks/accountspayablebillcreditnotes/README.md)

* [get](docs/sdks/accountspayablebillcreditnotes/README.md#get) - Get bill credit note
* [list](docs/sdks/accountspayablebillcreditnotes/README.md#list) - List bill credit notes

### [AccountsPayable.BillPayments](docs/sdks/accountspayablebillpayments/README.md)

* [get](docs/sdks/accountspayablebillpayments/README.md#get) - Get bill payment
* [list](docs/sdks/accountspayablebillpayments/README.md#list) - List bill payments

### [AccountsPayable.Bills](docs/sdks/accountspayablebills/README.md)

* [downloadAttachment](docs/sdks/accountspayablebills/README.md#downloadattachment) - Download bill attachment
* [get](docs/sdks/accountspayablebills/README.md#get) - Get bill
* [getAttachment](docs/sdks/accountspayablebills/README.md#getattachment) - Get bill attachment
* [list](docs/sdks/accountspayablebills/README.md#list) - List bills
* [listAttachments](docs/sdks/accountspayablebills/README.md#listattachments) - List bill attachments

### [AccountsPayable.Suppliers](docs/sdks/accountspayablesuppliers/README.md)

* [downloadAttachment](docs/sdks/accountspayablesuppliers/README.md#downloadattachment) - Download supplier attachment
* [get](docs/sdks/accountspayablesuppliers/README.md#get) - Get supplier
* [getAttachment](docs/sdks/accountspayablesuppliers/README.md#getattachment) - Get supplier attachment
* [list](docs/sdks/accountspayablesuppliers/README.md#list) - List suppliers
* [listAttachments](docs/sdks/accountspayablesuppliers/README.md#listattachments) - List supplier attachments


### [AccountsReceivable.CreditNotes](docs/sdks/accountsreceivablecreditnotes/README.md)

* [get](docs/sdks/accountsreceivablecreditnotes/README.md#get) - Get credit note
* [list](docs/sdks/accountsreceivablecreditnotes/README.md#list) - List credit notes

### [AccountsReceivable.Customers](docs/sdks/accountsreceivablecustomers/README.md)

* [downloadAttachment](docs/sdks/accountsreceivablecustomers/README.md#downloadattachment) - Download customer attachment
* [get](docs/sdks/accountsreceivablecustomers/README.md#get) - Get customer
* [getAttachment](docs/sdks/accountsreceivablecustomers/README.md#getattachment) - Get customer attachment
* [list](docs/sdks/accountsreceivablecustomers/README.md#list) - List customers
* [listAttachments](docs/sdks/accountsreceivablecustomers/README.md#listattachments) - List customer attachments

### [AccountsReceivable.DirectIncomes](docs/sdks/accountsreceivabledirectincomes/README.md)

* [downloadAttachment](docs/sdks/accountsreceivabledirectincomes/README.md#downloadattachment) - Download direct income attachment
* [get](docs/sdks/accountsreceivabledirectincomes/README.md#get) - Get direct income
* [getAttachment](docs/sdks/accountsreceivabledirectincomes/README.md#getattachment) - Get direct income attachment
* [list](docs/sdks/accountsreceivabledirectincomes/README.md#list) - List direct incomes
* [listAttachments](docs/sdks/accountsreceivabledirectincomes/README.md#listattachments) - List direct income attachments

### [AccountsReceivable.Invoices](docs/sdks/accountsreceivableinvoices/README.md)

* [downloadAttachment](docs/sdks/accountsreceivableinvoices/README.md#downloadattachment) - Download invoice attachment
* [downloadPdf](docs/sdks/accountsreceivableinvoices/README.md#downloadpdf) - Get invoice as PDF
* [get](docs/sdks/accountsreceivableinvoices/README.md#get) - Get invoice
* [getAttachment](docs/sdks/accountsreceivableinvoices/README.md#getattachment) - Get invoice attachment
* [list](docs/sdks/accountsreceivableinvoices/README.md#list) - List invoices
* [listAttachments](docs/sdks/accountsreceivableinvoices/README.md#listattachments) - List invoice attachments
* [listReconciled](docs/sdks/accountsreceivableinvoices/README.md#listreconciled) - List reconciled invoices

### [AccountsReceivable.Payments](docs/sdks/accountsreceivablepayments/README.md)

* [get](docs/sdks/accountsreceivablepayments/README.md#get) - Get payment
* [list](docs/sdks/accountsreceivablepayments/README.md#list) - List payments

### [AccountsReceivable.Reports](docs/sdks/accountsreceivablereports/README.md)

* [getAgedCreditors](docs/sdks/accountsreceivablereports/README.md#getagedcreditors) - Aged creditors report
* [getAgedDebtors](docs/sdks/accountsreceivablereports/README.md#getageddebtors) - Aged debtors report
* [isAgedCreditorsAvailable](docs/sdks/accountsreceivablereports/README.md#isagedcreditorsavailable) - Aged creditors report available
* [isAgedDebtorsAvailable](docs/sdks/accountsreceivablereports/README.md#isageddebtorsavailable) - Aged debtors report available


### [Banking.AccountBalances](docs/sdks/bankingaccountbalances/README.md)

* [list](docs/sdks/bankingaccountbalances/README.md#list) - List account balances

### [Banking.Accounts](docs/sdks/bankingaccounts/README.md)

* [get](docs/sdks/bankingaccounts/README.md#get) - Get account
* [list](docs/sdks/bankingaccounts/README.md#list) - List accounts

### [Banking.CategorizedStatement](docs/sdks/bankingcategorizedstatement/README.md)

* [get](docs/sdks/bankingcategorizedstatement/README.md#get) - Get categorized bank statement

### [Banking.TransactionCategories](docs/sdks/bankingtransactioncategories/README.md)

* [get](docs/sdks/bankingtransactioncategories/README.md#get) - Get transaction category
* [list](docs/sdks/bankingtransactioncategories/README.md#list) - List transaction categories

### [Banking.Transactions](docs/sdks/bankingtransactions/README.md)

* [get](docs/sdks/bankingtransactions/README.md#get) - Get bank transaction
* [list](docs/sdks/bankingtransactions/README.md#list) - List transactions


### [FinancialStatements.Accounts](docs/sdks/financialstatementsaccounts/README.md)

* [get](docs/sdks/financialstatementsaccounts/README.md#get) - Get account
* [list](docs/sdks/financialstatementsaccounts/README.md#list) - List accounts

### [FinancialStatements.BalanceSheet](docs/sdks/financialstatementsbalancesheet/README.md)

* [get](docs/sdks/financialstatementsbalancesheet/README.md#get) - Get balance sheet
* [getCategorizedAccounts](docs/sdks/financialstatementsbalancesheet/README.md#getcategorizedaccounts) - Get categorized balance sheet statement

### [FinancialStatements.CashFlow](docs/sdks/financialstatementscashflow/README.md)

* [get](docs/sdks/financialstatementscashflow/README.md#get) - Get cash flow statement

### [FinancialStatements.ProfitAndLoss](docs/sdks/financialstatementsprofitandloss/README.md)

* [get](docs/sdks/financialstatementsprofitandloss/README.md#get) - Get profit and loss
* [getCategorizedAccounts](docs/sdks/financialstatementsprofitandloss/README.md#getcategorizedaccounts) - Get categorized profit and loss statement


### [LoanWriteback.Accounts](docs/sdks/loanwritebackaccounts/README.md)

* [create](docs/sdks/loanwritebackaccounts/README.md#create) - Create account
* [getCreateModel](docs/sdks/loanwritebackaccounts/README.md#getcreatemodel) - Get create account model

### [LoanWriteback.BankAccounts](docs/sdks/loanwritebackbankaccounts/README.md)

* [create](docs/sdks/loanwritebackbankaccounts/README.md#create) - Create bank account
* [getCreateUpdateModel](docs/sdks/loanwritebackbankaccounts/README.md#getcreateupdatemodel) - Get create/update bank account model

### [LoanWriteback.BankTransactions](docs/sdks/loanwritebackbanktransactions/README.md)

* [create](docs/sdks/loanwritebackbanktransactions/README.md#create) - Create bank account transactions
* [getCreateModel](docs/sdks/loanwritebackbanktransactions/README.md#getcreatemodel) - Get create bank account transactions model

### [LoanWriteback.CreateOperations](docs/sdks/loanwritebackcreateoperations/README.md)

* [get](docs/sdks/loanwritebackcreateoperations/README.md#get) - Get create operation
* [list](docs/sdks/loanwritebackcreateoperations/README.md#list) - List create operations

### [LoanWriteback.DirectCosts](docs/sdks/loanwritebackdirectcosts/README.md)

* [create](docs/sdks/loanwritebackdirectcosts/README.md#create) - Create direct cost
* [getCreateModel](docs/sdks/loanwritebackdirectcosts/README.md#getcreatemodel) - Get create direct cost model

### [LoanWriteback.Suppliers](docs/sdks/loanwritebacksuppliers/README.md)

* [create](docs/sdks/loanwritebacksuppliers/README.md#create) - Create supplier
* [getCreateUpdateModel](docs/sdks/loanwritebacksuppliers/README.md#getcreateupdatemodel) - Get create/update supplier model

### [LoanWriteback.Transfers](docs/sdks/loanwritebacktransfers/README.md)

* [create](docs/sdks/loanwritebacktransfers/README.md#create) - Create transfer
* [getCreateModel](docs/sdks/loanwritebacktransfers/README.md#getcreatemodel) - Get create transfer model

### [ManageData](docs/sdks/managedata/README.md)

* [getStatus](docs/sdks/managedata/README.md#getstatus) - Get data status

### [ManageData.PullOperations](docs/sdks/managedatapulloperations/README.md)

* [get](docs/sdks/managedatapulloperations/README.md#get) - Get pull operation
* [list](docs/sdks/managedatapulloperations/README.md#list) - List pull operations

### [ManageData.Refresh](docs/sdks/managedatarefresh/README.md)

* [allDataTypes](docs/sdks/managedatarefresh/README.md#alldatatypes) - Refresh all data
* [dataType](docs/sdks/managedatarefresh/README.md#datatype) - Refresh data type


### [Sales.Customers](docs/sdks/salescustomers/README.md)

* [get](docs/sdks/salescustomers/README.md#get) - Get customer
* [list](docs/sdks/salescustomers/README.md#list) - List customers

### [Sales.Disputes](docs/sdks/salesdisputes/README.md)

* [get](docs/sdks/salesdisputes/README.md#get) - Get dispute
* [list](docs/sdks/salesdisputes/README.md#list) - List disputes

### [Sales.Locations](docs/sdks/saleslocations/README.md)

* [get](docs/sdks/saleslocations/README.md#get) - Get location
* [list](docs/sdks/saleslocations/README.md#list) - List locations

### [Sales.Metrics](docs/sdks/salesmetrics/README.md)

* [getCustomerRetention](docs/sdks/salesmetrics/README.md#getcustomerretention) - Get customer retention metrics
* [getLifetimeValue](docs/sdks/salesmetrics/README.md#getlifetimevalue) - Get lifetime value metrics
* [getRevenue](docs/sdks/salesmetrics/README.md#getrevenue) - Get commerce revenue metrics

### [Sales.Orders](docs/sdks/salesorders/README.md)

* [get](docs/sdks/salesorders/README.md#get) - Get order
* [list](docs/sdks/salesorders/README.md#list) - List orders

### [Sales.PaymentMethods](docs/sdks/salespaymentmethods/README.md)

* [get](docs/sdks/salespaymentmethods/README.md#get) - Get payment method
* [list](docs/sdks/salespaymentmethods/README.md#list) - List payment methods

### [Sales.Payments](docs/sdks/salespayments/README.md)

* [get](docs/sdks/salespayments/README.md#get) - Get payment
* [list](docs/sdks/salespayments/README.md#list) - List payments

### [Sales.ProductCategories](docs/sdks/salesproductcategories/README.md)

* [get](docs/sdks/salesproductcategories/README.md#get) - Get product category
* [list](docs/sdks/salesproductcategories/README.md#list) - List product categories

### [Sales.Products](docs/sdks/salesproducts/README.md)

* [get](docs/sdks/salesproducts/README.md#get) - Get product
* [list](docs/sdks/salesproducts/README.md#list) - List products

### [Sales.Reports](docs/sdks/salesreports/README.md)

* [getOrders](docs/sdks/salesreports/README.md#getorders) - Get orders report
* [getRefunds](docs/sdks/salesreports/README.md#getrefunds) - Get refunds report

### [Sales.Transactions](docs/sdks/salestransactions/README.md)

* [get](docs/sdks/salestransactions/README.md#get) - Get transaction
* [list](docs/sdks/salestransactions/README.md#list) - List transactions


### [Transactions.AccountTransactions](docs/sdks/transactionsaccounttransactions/README.md)

* [get](docs/sdks/transactionsaccounttransactions/README.md#get) - Get account transaction
* [list](docs/sdks/transactionsaccounttransactions/README.md#list) - List account transactions

### [Transactions.DirectCosts](docs/sdks/transactionsdirectcosts/README.md)

* [downloadAttachment](docs/sdks/transactionsdirectcosts/README.md#downloadattachment) - Download direct cost attachment
* [get](docs/sdks/transactionsdirectcosts/README.md#get) - Get direct cost
* [getAttachment](docs/sdks/transactionsdirectcosts/README.md#getattachment) - Get direct cost attachment
* [list](docs/sdks/transactionsdirectcosts/README.md#list) - List direct costs
* [listAttachments](docs/sdks/transactionsdirectcosts/README.md#listattachments) - List direct cost attachments

### [Transactions.JournalEntries](docs/sdks/transactionsjournalentries/README.md)

* [get](docs/sdks/transactionsjournalentries/README.md#get) - Get journal entry
* [list](docs/sdks/transactionsjournalentries/README.md#list) - List journal entries

### [Transactions.Journals](docs/sdks/transactionsjournals/README.md)

* [get](docs/sdks/transactionsjournals/README.md#get) - Get journal
* [list](docs/sdks/transactionsjournals/README.md#list) - List journals

### [Transactions.Transfers](docs/sdks/transactionstransfers/README.md)

* [get](docs/sdks/transactionstransfers/README.md#get) - Get transfer
* [list](docs/sdks/transactionstransfers/README.md#list) - List transfers
<!-- End SDK Available Operations -->
### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
