# Lending

<!-- Start Codat Library Description -->
Lending helps you make smarter credit decisions on small businesses by enabling you to pull your customers' latest data from the operating systems they are already using. You can use that data for automating decisioning and surfacing new insights on the customer, all via one API.
<!-- End Codat Library Description -->

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

(async () => {
    const sdk = new CodatLending({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.accountingBankData.listTransactions({
        accountId: "string",
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        orderBy: "-modifiedDate",
        page: 1,
        pageSize: 100,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountingBankData](docs/sdks/accountingbankdata/README.md)

* [listTransactions](docs/sdks/accountingbankdata/README.md#listtransactions) - List bank account transactions

### [accountingBankData.accounts](docs/sdks/accountingbankdataaccounts/README.md)

* [get](docs/sdks/accountingbankdataaccounts/README.md#get) - Get bank account
* [list](docs/sdks/accountingbankdataaccounts/README.md#list) - List bank accounts

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

### [liabilities](docs/sdks/liabilities/README.md)

* [generateLoanSummary](docs/sdks/liabilities/README.md#generateloansummary) - Generate loan summaries report
* [generateLoanTransactions](docs/sdks/liabilities/README.md#generateloantransactions) - Generate loan transactions report
* [getLoanSummary](docs/sdks/liabilities/README.md#getloansummary) - Get loan summaries
* [listLoanTransactions](docs/sdks/liabilities/README.md#listloantransactions) - List loan transactions


### [accountsPayable.billCreditNotes](docs/sdks/accountspayablebillcreditnotes/README.md)

* [get](docs/sdks/accountspayablebillcreditnotes/README.md#get) - Get bill credit note
* [list](docs/sdks/accountspayablebillcreditnotes/README.md#list) - List bill credit notes

### [accountsPayable.billPayments](docs/sdks/accountspayablebillpayments/README.md)

* [get](docs/sdks/accountspayablebillpayments/README.md#get) - Get bill payment
* [list](docs/sdks/accountspayablebillpayments/README.md#list) - List bill payments

### [accountsPayable.bills](docs/sdks/accountspayablebills/README.md)

* [downloadAttachment](docs/sdks/accountspayablebills/README.md#downloadattachment) - Download bill attachment
* [get](docs/sdks/accountspayablebills/README.md#get) - Get bill
* [getAttachment](docs/sdks/accountspayablebills/README.md#getattachment) - Get bill attachment
* [list](docs/sdks/accountspayablebills/README.md#list) - List bills
* [listAttachments](docs/sdks/accountspayablebills/README.md#listattachments) - List bill attachments

### [accountsPayable.suppliers](docs/sdks/accountspayablesuppliers/README.md)

* [downloadAttachment](docs/sdks/accountspayablesuppliers/README.md#downloadattachment) - Download supplier attachment
* [get](docs/sdks/accountspayablesuppliers/README.md#get) - Get supplier
* [getAttachment](docs/sdks/accountspayablesuppliers/README.md#getattachment) - Get supplier attachment
* [list](docs/sdks/accountspayablesuppliers/README.md#list) - List suppliers
* [listAttachments](docs/sdks/accountspayablesuppliers/README.md#listattachments) - List supplier attachments


### [accountsReceivable.creditNotes](docs/sdks/accountsreceivablecreditnotes/README.md)

* [get](docs/sdks/accountsreceivablecreditnotes/README.md#get) - Get credit note
* [list](docs/sdks/accountsreceivablecreditnotes/README.md#list) - List credit notes

### [accountsReceivable.customers](docs/sdks/accountsreceivablecustomers/README.md)

* [downloadAttachment](docs/sdks/accountsreceivablecustomers/README.md#downloadattachment) - Download customer attachment
* [get](docs/sdks/accountsreceivablecustomers/README.md#get) - Get customer
* [getAttachment](docs/sdks/accountsreceivablecustomers/README.md#getattachment) - Get customer attachment
* [list](docs/sdks/accountsreceivablecustomers/README.md#list) - List customers
* [listAttachments](docs/sdks/accountsreceivablecustomers/README.md#listattachments) - List customer attachments

### [accountsReceivable.directIncomes](docs/sdks/accountsreceivabledirectincomes/README.md)

* [downloadAttachment](docs/sdks/accountsreceivabledirectincomes/README.md#downloadattachment) - Download direct income attachment
* [get](docs/sdks/accountsreceivabledirectincomes/README.md#get) - Get direct income
* [getAttachment](docs/sdks/accountsreceivabledirectincomes/README.md#getattachment) - Get direct income attachment
* [list](docs/sdks/accountsreceivabledirectincomes/README.md#list) - List direct incomes
* [listAttachments](docs/sdks/accountsreceivabledirectincomes/README.md#listattachments) - List direct income attachments

### [accountsReceivable.invoices](docs/sdks/accountsreceivableinvoices/README.md)

* [downloadAttachment](docs/sdks/accountsreceivableinvoices/README.md#downloadattachment) - Download invoice attachment
* [downloadPdf](docs/sdks/accountsreceivableinvoices/README.md#downloadpdf) - Get invoice as PDF
* [get](docs/sdks/accountsreceivableinvoices/README.md#get) - Get invoice
* [getAttachment](docs/sdks/accountsreceivableinvoices/README.md#getattachment) - Get invoice attachment
* [list](docs/sdks/accountsreceivableinvoices/README.md#list) - List invoices
* [listAttachments](docs/sdks/accountsreceivableinvoices/README.md#listattachments) - List invoice attachments
* [listReconciled](docs/sdks/accountsreceivableinvoices/README.md#listreconciled) - List reconciled invoices

### [accountsReceivable.payments](docs/sdks/accountsreceivablepayments/README.md)

* [get](docs/sdks/accountsreceivablepayments/README.md#get) - Get payment
* [list](docs/sdks/accountsreceivablepayments/README.md#list) - List payments

### [accountsReceivable.reports](docs/sdks/accountsreceivablereports/README.md)

* [getAgedCreditors](docs/sdks/accountsreceivablereports/README.md#getagedcreditors) - Aged creditors report
* [getAgedDebtors](docs/sdks/accountsreceivablereports/README.md#getageddebtors) - Aged debtors report
* [isAgedCreditorsAvailable](docs/sdks/accountsreceivablereports/README.md#isagedcreditorsavailable) - Aged creditors report available
* [isAgedDebtorsAvailable](docs/sdks/accountsreceivablereports/README.md#isageddebtorsavailable) - Aged debtors report available


### [banking.accountBalances](docs/sdks/bankingaccountbalances/README.md)

* [list](docs/sdks/bankingaccountbalances/README.md#list) - List account balances

### [banking.accounts](docs/sdks/bankingaccounts/README.md)

* [get](docs/sdks/bankingaccounts/README.md#get) - Get account
* [list](docs/sdks/bankingaccounts/README.md#list) - List accounts

### [banking.categorizedStatement](docs/sdks/bankingcategorizedstatement/README.md)

* [get](docs/sdks/bankingcategorizedstatement/README.md#get) - Get categorized bank statement

### [banking.transactionCategories](docs/sdks/bankingtransactioncategories/README.md)

* [get](docs/sdks/bankingtransactioncategories/README.md#get) - Get transaction category
* [list](docs/sdks/bankingtransactioncategories/README.md#list) - List transaction categories

### [banking.transactions](docs/sdks/bankingtransactions/README.md)

* [get](docs/sdks/bankingtransactions/README.md#get) - Get bank transaction
* [list](docs/sdks/bankingtransactions/README.md#list) - List transactions


### [financialStatements.accounts](docs/sdks/financialstatementsaccounts/README.md)

* [get](docs/sdks/financialstatementsaccounts/README.md#get) - Get account
* [list](docs/sdks/financialstatementsaccounts/README.md#list) - List accounts

### [financialStatements.balanceSheet](docs/sdks/financialstatementsbalancesheet/README.md)

* [get](docs/sdks/financialstatementsbalancesheet/README.md#get) - Get balance sheet
* [getCategorizedAccounts](docs/sdks/financialstatementsbalancesheet/README.md#getcategorizedaccounts) - Get categorized balance sheet statement

### [financialStatements.cashFlow](docs/sdks/financialstatementscashflow/README.md)

* [get](docs/sdks/financialstatementscashflow/README.md#get) - Get cash flow statement

### [financialStatements.profitAndLoss](docs/sdks/financialstatementsprofitandloss/README.md)

* [get](docs/sdks/financialstatementsprofitandloss/README.md#get) - Get profit and loss
* [getCategorizedAccounts](docs/sdks/financialstatementsprofitandloss/README.md#getcategorizedaccounts) - Get categorized profit and loss statement


### [loanWriteback.accounts](docs/sdks/loanwritebackaccounts/README.md)

* [create](docs/sdks/loanwritebackaccounts/README.md#create) - Create account
* [getCreateModel](docs/sdks/loanwritebackaccounts/README.md#getcreatemodel) - Get create account model

### [loanWriteback.bankAccounts](docs/sdks/loanwritebackbankaccounts/README.md)

* [create](docs/sdks/loanwritebackbankaccounts/README.md#create) - Create bank account
* [getCreateUpdateModel](docs/sdks/loanwritebackbankaccounts/README.md#getcreateupdatemodel) - Get create/update bank account model

### [loanWriteback.bankTransactions](docs/sdks/loanwritebackbanktransactions/README.md)

* [create](docs/sdks/loanwritebackbanktransactions/README.md#create) - Create bank account transactions
* [getCreateModel](docs/sdks/loanwritebackbanktransactions/README.md#getcreatemodel) - Get create bank account transactions model

### [loanWriteback.createOperations](docs/sdks/loanwritebackcreateoperations/README.md)

* [get](docs/sdks/loanwritebackcreateoperations/README.md#get) - Get create operation
* [list](docs/sdks/loanwritebackcreateoperations/README.md#list) - List create operations

### [loanWriteback.directCosts](docs/sdks/loanwritebackdirectcosts/README.md)

* [create](docs/sdks/loanwritebackdirectcosts/README.md#create) - Create direct cost
* [getCreateModel](docs/sdks/loanwritebackdirectcosts/README.md#getcreatemodel) - Get create direct cost model

### [loanWriteback.payments](docs/sdks/loanwritebackpayments/README.md)

* [create](docs/sdks/loanwritebackpayments/README.md#create) - Create payment
* [getCreateModel](docs/sdks/loanwritebackpayments/README.md#getcreatemodel) - Get create payment model

### [loanWriteback.suppliers](docs/sdks/loanwritebacksuppliers/README.md)

* [create](docs/sdks/loanwritebacksuppliers/README.md#create) - Create supplier
* [getCreateUpdateModel](docs/sdks/loanwritebacksuppliers/README.md#getcreateupdatemodel) - Get create/update supplier model

### [loanWriteback.transfers](docs/sdks/loanwritebacktransfers/README.md)

* [create](docs/sdks/loanwritebacktransfers/README.md#create) - Create transfer
* [getCreateModel](docs/sdks/loanwritebacktransfers/README.md#getcreatemodel) - Get create transfer model

### [manageData](docs/sdks/managedata/README.md)

* [getStatus](docs/sdks/managedata/README.md#getstatus) - Get data status

### [manageData.pullOperations](docs/sdks/managedatapulloperations/README.md)

* [get](docs/sdks/managedatapulloperations/README.md#get) - Get pull operation
* [list](docs/sdks/managedatapulloperations/README.md#list) - List pull operations

### [manageData.refresh](docs/sdks/managedatarefresh/README.md)

* [allDataTypes](docs/sdks/managedatarefresh/README.md#alldatatypes) - Refresh all data
* [dataType](docs/sdks/managedatarefresh/README.md#datatype) - Refresh data type


### [sales.customers](docs/sdks/salescustomers/README.md)

* [get](docs/sdks/salescustomers/README.md#get) - Get customer
* [list](docs/sdks/salescustomers/README.md#list) - List customers

### [sales.disputes](docs/sdks/salesdisputes/README.md)

* [get](docs/sdks/salesdisputes/README.md#get) - Get dispute
* [list](docs/sdks/salesdisputes/README.md#list) - List disputes

### [sales.locations](docs/sdks/saleslocations/README.md)

* [get](docs/sdks/saleslocations/README.md#get) - Get location
* [list](docs/sdks/saleslocations/README.md#list) - List locations

### [sales.metrics](docs/sdks/salesmetrics/README.md)

* [getCustomerRetention](docs/sdks/salesmetrics/README.md#getcustomerretention) - Get customer retention metrics
* [getLifetimeValue](docs/sdks/salesmetrics/README.md#getlifetimevalue) - Get lifetime value metrics
* [getRevenue](docs/sdks/salesmetrics/README.md#getrevenue) - Get commerce revenue metrics

### [sales.orders](docs/sdks/salesorders/README.md)

* [get](docs/sdks/salesorders/README.md#get) - Get order
* [list](docs/sdks/salesorders/README.md#list) - List orders

### [sales.paymentMethods](docs/sdks/salespaymentmethods/README.md)

* [get](docs/sdks/salespaymentmethods/README.md#get) - Get payment method
* [list](docs/sdks/salespaymentmethods/README.md#list) - List payment methods

### [sales.payments](docs/sdks/salespayments/README.md)

* [get](docs/sdks/salespayments/README.md#get) - Get payment
* [list](docs/sdks/salespayments/README.md#list) - List payments

### [sales.productCategories](docs/sdks/salesproductcategories/README.md)

* [get](docs/sdks/salesproductcategories/README.md#get) - Get product category
* [list](docs/sdks/salesproductcategories/README.md#list) - List product categories

### [sales.products](docs/sdks/salesproducts/README.md)

* [get](docs/sdks/salesproducts/README.md#get) - Get product
* [list](docs/sdks/salesproducts/README.md#list) - List products

### [sales.reports](docs/sdks/salesreports/README.md)

* [getOrders](docs/sdks/salesreports/README.md#getorders) - Get orders report
* [getRefunds](docs/sdks/salesreports/README.md#getrefunds) - Get refunds report

### [sales.transactions](docs/sdks/salestransactions/README.md)

* [get](docs/sdks/salestransactions/README.md#get) - Get transaction
* [list](docs/sdks/salestransactions/README.md#list) - List transactions


### [transactions.accountTransactions](docs/sdks/transactionsaccounttransactions/README.md)

* [get](docs/sdks/transactionsaccounttransactions/README.md#get) - Get account transaction
* [list](docs/sdks/transactionsaccounttransactions/README.md#list) - List account transactions

### [transactions.directCosts](docs/sdks/transactionsdirectcosts/README.md)

* [downloadAttachment](docs/sdks/transactionsdirectcosts/README.md#downloadattachment) - Download direct cost attachment
* [get](docs/sdks/transactionsdirectcosts/README.md#get) - Get direct cost
* [getAttachment](docs/sdks/transactionsdirectcosts/README.md#getattachment) - Get direct cost attachment
* [list](docs/sdks/transactionsdirectcosts/README.md#list) - List direct costs
* [listAttachments](docs/sdks/transactionsdirectcosts/README.md#listattachments) - List direct cost attachments

### [transactions.journalEntries](docs/sdks/transactionsjournalentries/README.md)

* [get](docs/sdks/transactionsjournalentries/README.md#get) - Get journal entry
* [list](docs/sdks/transactionsjournalentries/README.md#list) - List journal entries

### [transactions.journals](docs/sdks/transactionsjournals/README.md)

* [get](docs/sdks/transactionsjournals/README.md#get) - Get journal
* [list](docs/sdks/transactionsjournals/README.md#list) - List journals

### [transactions.transfers](docs/sdks/transactionstransfers/README.md)

* [get](docs/sdks/transactionstransfers/README.md#get) - Get transfer
* [list](docs/sdks/transactionstransfers/README.md#list) - List transfers
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.


<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.codat.io` | None |

For example:


```typescript
import { CodatLending } from "@codat/lending";

(async () => {
    const sdk = new CodatLending({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
        serverIdx: 0,
    });

    const res = await sdk.accountingBankData.listTransactions({
        accountId: "string",
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        orderBy: "-modifiedDate",
        page: 1,
        pageSize: 100,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:


```typescript
import { CodatLending } from "@codat/lending";

(async () => {
    const sdk = new CodatLending({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
        serverURL: "https://api.codat.io",
    });

    const res = await sdk.accountingBankData.listTransactions({
        accountId: "string",
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        orderBy: "-modifiedDate",
        page: 1,
        pageSize: 100,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @codat/lending import CodatLending;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new CodatLending({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)