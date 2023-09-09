# Lending
    
Lending helps you make smarter credit decisions on small businesses by enabling you to pull your customers' latest data from the operating systems they are already using. You can use that data for automating decisioning and surfacing new insights on the customer, all via one API.

## SDK Installation

### NPM

```bash
npm add @codat/lending
```

### Yarn

```bash
yarn add @codat/lending
```<!-- Start SDK Installation -->

<!-- End SDK Installation -->

## Example Usage


```typescript
import { CodatLending } from "@codat/lending";
import { GetAccountingBankAccountResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingBankData.getAccount({
  accountId: "corrupti",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetAccountingBankAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

## Available Resources and Operations


### [accountingBankData](docs/sdks/accountingbankdata/README.md)

* [getAccount](docs/sdks/accountingbankdata/README.md#getaccount) - Get bank account
* [listAccounts](docs/sdks/accountingbankdata/README.md#listaccounts) - List bank accounts
* [listTransactions](docs/sdks/accountingbankdata/README.md#listtransactions) - List bank account transactions

### [accountsPayable](docs/sdks/accountspayable/README.md)

* [downloadBillAttachment](docs/sdks/accountspayable/README.md#downloadbillattachment) - Download bill attachment
* [downloadSupplierAttachment](docs/sdks/accountspayable/README.md#downloadsupplierattachment) - Download supplier attachment
* [getAgedCreditorsReport](docs/sdks/accountspayable/README.md#getagedcreditorsreport) - Aged creditors report
* [getBill](docs/sdks/accountspayable/README.md#getbill) - Get bill
* [getBillAttachment](docs/sdks/accountspayable/README.md#getbillattachment) - Get bill attachment
* [getBillCreditNote](docs/sdks/accountspayable/README.md#getbillcreditnote) - Get bill credit note
* [getBillPayment](docs/sdks/accountspayable/README.md#getbillpayment) - Get bill payment
* [getSupplier](docs/sdks/accountspayable/README.md#getsupplier) - Get supplier
* [getSupplierAttachment](docs/sdks/accountspayable/README.md#getsupplierattachment) - Get supplier attachment
* [isAgedCreditorsReportAvailable](docs/sdks/accountspayable/README.md#isagedcreditorsreportavailable) - Aged creditors report available
* [listBillAttachments](docs/sdks/accountspayable/README.md#listbillattachments) - List bill attachments
* [listBillCreditNotes](docs/sdks/accountspayable/README.md#listbillcreditnotes) - List bill credit notes
* [listBillPayments](docs/sdks/accountspayable/README.md#listbillpayments) - List bill payments
* [listBills](docs/sdks/accountspayable/README.md#listbills) - List bills
* [listSupplierAttachments](docs/sdks/accountspayable/README.md#listsupplierattachments) - List supplier attachments
* [listSuppliers](docs/sdks/accountspayable/README.md#listsuppliers) - List suppliers

### [accountsReceivable](docs/sdks/accountsreceivable/README.md)

* [downloadCustomerAttachment](docs/sdks/accountsreceivable/README.md#downloadcustomerattachment) - Download customer attachment
* [downloadDirectIncomeAttachment](docs/sdks/accountsreceivable/README.md#downloaddirectincomeattachment) - Download direct income attachment
* [downloadInvoiceAttachment](docs/sdks/accountsreceivable/README.md#downloadinvoiceattachment) - Download invoice attachment
* [downloadInvoicePdf](docs/sdks/accountsreceivable/README.md#downloadinvoicepdf) - Get invoice as PDF
* [getAgedDebtorsReport](docs/sdks/accountsreceivable/README.md#getageddebtorsreport) - Aged debtors report
* [getCreditNote](docs/sdks/accountsreceivable/README.md#getcreditnote) - Get credit note
* [getCustomer](docs/sdks/accountsreceivable/README.md#getcustomer) - Get customer
* [getCustomerAttachment](docs/sdks/accountsreceivable/README.md#getcustomerattachment) - Get customer attachment
* [getDirectIncome](docs/sdks/accountsreceivable/README.md#getdirectincome) - Get direct income
* [getDirectIncomeAttachment](docs/sdks/accountsreceivable/README.md#getdirectincomeattachment) - Get direct income attachment
* [getInvoice](docs/sdks/accountsreceivable/README.md#getinvoice) - Get invoice
* [getInvoiceAttachment](docs/sdks/accountsreceivable/README.md#getinvoiceattachment) - Get invoice attachment
* [getPayment](docs/sdks/accountsreceivable/README.md#getpayment) - Get payment
* [getReconciledInvoices](docs/sdks/accountsreceivable/README.md#getreconciledinvoices) - Get reconciled invoices
* [isAgedDebtorReportAvailable](docs/sdks/accountsreceivable/README.md#isageddebtorreportavailable) - Aged debtors report available
* [listCreditNotes](docs/sdks/accountsreceivable/README.md#listcreditnotes) - List credit notes
* [listCustomerAttachments](docs/sdks/accountsreceivable/README.md#listcustomerattachments) - List customer attachments
* [listCustomers](docs/sdks/accountsreceivable/README.md#listcustomers) - List customers
* [listDirectIncomeAttachments](docs/sdks/accountsreceivable/README.md#listdirectincomeattachments) - List direct income attachments
* [listDirectIncomes](docs/sdks/accountsreceivable/README.md#listdirectincomes) - List direct incomes
* [listInvoiceAttachments](docs/sdks/accountsreceivable/README.md#listinvoiceattachments) - List invoice attachments
* [listInvoices](docs/sdks/accountsreceivable/README.md#listinvoices) - List invoices
* [listPayments](docs/sdks/accountsreceivable/README.md#listpayments) - List payments

### [banking](docs/sdks/banking/README.md)

* [getBankAccount](docs/sdks/banking/README.md#getbankaccount) - Get account
* [getBankTransaction](docs/sdks/banking/README.md#getbanktransaction) - Get bank transaction
* [getBankTransactionCategory](docs/sdks/banking/README.md#getbanktransactioncategory) - Get transaction category
* [getCategorizedBankStatement](docs/sdks/banking/README.md#getcategorizedbankstatement) - Get categorized bank statement
* [listBankAccountBalances](docs/sdks/banking/README.md#listbankaccountbalances) - List account balances
* [listBankAccounts](docs/sdks/banking/README.md#listbankaccounts) - List accounts
* [listBankTransactionCategories](docs/sdks/banking/README.md#listbanktransactioncategories) - List transaction categories
* [listBankTransactions](docs/sdks/banking/README.md#listbanktransactions) - List transactions

### [companies](docs/sdks/companies/README.md)

* [create](docs/sdks/companies/README.md#create) - Create company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [get](docs/sdks/companies/README.md#get) - Get company
* [list](docs/sdks/companies/README.md#list) - List companies
* [update](docs/sdks/companies/README.md#update) - Update company

### [companyInfo](docs/sdks/companyinfo/README.md)

* [getAccountingProfile](docs/sdks/companyinfo/README.md#getaccountingprofile) - Get company accounting profile
* [getCommerceProfile](docs/sdks/companyinfo/README.md#getcommerceprofile) - Get company commerce profile

### [connections](docs/sdks/connections/README.md)

* [create](docs/sdks/connections/README.md#create) - Create connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [list](docs/sdks/connections/README.md#list) - List connections
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [dataIntegrity](docs/sdks/dataintegrity/README.md)

* [details](docs/sdks/dataintegrity/README.md#details) - List data integrity details
* [status](docs/sdks/dataintegrity/README.md#status) - Get data integrity status
* [summaries](docs/sdks/dataintegrity/README.md#summaries) - Get data integrity summaries

### [excelReports](docs/sdks/excelreports/README.md)

* [download](docs/sdks/excelreports/README.md#download) - Download Excel report
* [generate](docs/sdks/excelreports/README.md#generate) - Generate Excel report
* [getStatus](docs/sdks/excelreports/README.md#getstatus) - Get Excel report status

### [fileUpload](docs/sdks/fileupload/README.md)

* [download](docs/sdks/fileupload/README.md#download) - Download all files for a company
* [listUploaded](docs/sdks/fileupload/README.md#listuploaded) - List all files uploaded by a company
* [upload](docs/sdks/fileupload/README.md#upload) - Upload files for a company

### [financialStatements](docs/sdks/financialstatements/README.md)

* [getAccount](docs/sdks/financialstatements/README.md#getaccount) - Get account
* [getBalanceSheet](docs/sdks/financialstatements/README.md#getbalancesheet) - Get balance sheet
* [getCashFlowStatement](docs/sdks/financialstatements/README.md#getcashflowstatement) - Get cash flow statement
* [getCategorizedBalanceSheet](docs/sdks/financialstatements/README.md#getcategorizedbalancesheet) - Get categorized balance sheet statement
* [getCategorizedProfitAndLoss](docs/sdks/financialstatements/README.md#getcategorizedprofitandloss) - Get categorized profit and loss statement
* [getProfitAndLoss](docs/sdks/financialstatements/README.md#getprofitandloss) - Get profit and loss
* [listAccounts](docs/sdks/financialstatements/README.md#listaccounts) - List accounts

### [liabilities](docs/sdks/liabilities/README.md)

* [getLoanSummary](docs/sdks/liabilities/README.md#getloansummary) - Get loan summaries
* [listLoanTransactions](docs/sdks/liabilities/README.md#listloantransactions) - List loan transactions

### [manageData](docs/sdks/managedata/README.md)

* [get](docs/sdks/managedata/README.md#get) - Get data status
* [getPullOperation](docs/sdks/managedata/README.md#getpulloperation) - Get pull operation
* [listPullOperations](docs/sdks/managedata/README.md#listpulloperations) - List pull operations
* [refreshAllDataTypes](docs/sdks/managedata/README.md#refreshalldatatypes) - Refresh all data
* [refreshDataType](docs/sdks/managedata/README.md#refreshdatatype) - Refresh data type

### [sales](docs/sdks/sales/README.md)

* [getCustomer](docs/sdks/sales/README.md#getcustomer) - Get customer
* [getCustomerRetentionMetrics](docs/sdks/sales/README.md#getcustomerretentionmetrics) - Get customer retention metrics
* [getDispute](docs/sdks/sales/README.md#getdispute) - Get dispute
* [getLifetimeValueMetrics](docs/sdks/sales/README.md#getlifetimevaluemetrics) - Get lifetime value metrics
* [getLocation](docs/sdks/sales/README.md#getlocation) - Get location
* [getOrder](docs/sdks/sales/README.md#getorder) - Get order
* [getOrdersReport](docs/sdks/sales/README.md#getordersreport) - Get orders report
* [getPayment](docs/sdks/sales/README.md#getpayment) - Get payment
* [getPaymentMethod](docs/sdks/sales/README.md#getpaymentmethod) - Get payment method
* [getProduct](docs/sdks/sales/README.md#getproduct) - Get product
* [getProductCategory](docs/sdks/sales/README.md#getproductcategory) - Get product category
* [getRefundsReport](docs/sdks/sales/README.md#getrefundsreport) - Get refunds report
* [getRevenueMetrics](docs/sdks/sales/README.md#getrevenuemetrics) - Get commerce revenue metrics
* [getTransaction](docs/sdks/sales/README.md#gettransaction) - Get transaction
* [listCustomers](docs/sdks/sales/README.md#listcustomers) - List customers
* [listDisputes](docs/sdks/sales/README.md#listdisputes) - List disputes
* [listLocations](docs/sdks/sales/README.md#listlocations) - List locations
* [listOrders](docs/sdks/sales/README.md#listorders) - List orders
* [listPaymentMethods](docs/sdks/sales/README.md#listpaymentmethods) - List payment methods
* [listPayments](docs/sdks/sales/README.md#listpayments) - List payments
* [listProductCategories](docs/sdks/sales/README.md#listproductcategories) - List product categories
* [listProducts](docs/sdks/sales/README.md#listproducts) - List products
* [listTransactions](docs/sdks/sales/README.md#listtransactions) - List transactions

### [transactions](docs/sdks/transactions/README.md)

* [downloadDirectCostAttachment](docs/sdks/transactions/README.md#downloaddirectcostattachment) - Download direct cost attachment
* [getAccountTransaction](docs/sdks/transactions/README.md#getaccounttransaction) - Get account transaction
* [getDirectCost](docs/sdks/transactions/README.md#getdirectcost) - Get direct cost
* [getDirectCostAttachment](docs/sdks/transactions/README.md#getdirectcostattachment) - Get direct cost attachment
* [getJournal](docs/sdks/transactions/README.md#getjournal) - Get journal
* [getJournalEntry](docs/sdks/transactions/README.md#getjournalentry) - Get journal entry
* [getTransfer](docs/sdks/transactions/README.md#gettransfer) - Get transfer
* [listAccountTransactions](docs/sdks/transactions/README.md#listaccounttransactions) - List account transactions
* [listDirectCostAttachments](docs/sdks/transactions/README.md#listdirectcostattachments) - List direct cost attachments
* [listDirectCosts](docs/sdks/transactions/README.md#listdirectcosts) - List direct costs
* [listJournalEntries](docs/sdks/transactions/README.md#listjournalentries) - List journal entries
* [listJournals](docs/sdks/transactions/README.md#listjournals) - List journals
* [listTransfers](docs/sdks/transactions/README.md#listtransfers) - List transfers<!-- Start SDK Available Operations -->

<!-- End SDK Available Operations -->
### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
