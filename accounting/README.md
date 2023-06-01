# Accounting API

Codat's Accounting API is a flexible API for pulling and pushing up-to-date accounting data to your customer's accounting software.
It gives you a simple way to view, create, update adn delete data without having to worry about each platform's specific complexities.

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @codat/accounting
```

### Yarn

```bash
yarn add @codat/accounting
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAccountTransactionResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountTransactionStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountTransactions.get({
  accountTransactionId: "corrupti",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetAccountTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountTransactions](docs/accounttransactions/README.md)

* [get](docs/accounttransactions/README.md#get) - Get account transaction
* [list](docs/accounttransactions/README.md#list) - List account transactions

### [accounts](docs/accounts/README.md)

* [create](docs/accounts/README.md#create) - Create account
* [get](docs/accounts/README.md#get) - Get account
* [getCreateModel](docs/accounts/README.md#getcreatemodel) - Get create account model
* [list](docs/accounts/README.md#list) - List accounts

### [bankAccountTransactions](docs/bankaccounttransactions/README.md)

* [create](docs/bankaccounttransactions/README.md#create) - Create bank transactions
* [getCreateModel](docs/bankaccounttransactions/README.md#getcreatemodel) - List push options for bank account bank transactions
* [list](docs/bankaccounttransactions/README.md#list) - List bank transactions for bank account

### [bankAccounts](docs/bankaccounts/README.md)

* [create](docs/bankaccounts/README.md#create) - Create bank account
* [~~get~~](docs/bankaccounts/README.md#get) - Get bank account :warning: **Deprecated**
* [getCreateUpdateModel](docs/bankaccounts/README.md#getcreateupdatemodel) - Get create/update bank account model
* [list](docs/bankaccounts/README.md#list) - List bank accounts
* [update](docs/bankaccounts/README.md#update) - Update bank account

### [billCreditNotes](docs/billcreditnotes/README.md)

* [create](docs/billcreditnotes/README.md#create) - Create bill credit note
* [get](docs/billcreditnotes/README.md#get) - Get bill credit note
* [getCreateUpdateModel](docs/billcreditnotes/README.md#getcreateupdatemodel) - Get create/update bill credit note model
* [list](docs/billcreditnotes/README.md#list) - List bill credit notes
* [update](docs/billcreditnotes/README.md#update) - Update bill credit note

### [billPayments](docs/billpayments/README.md)

* [create](docs/billpayments/README.md#create) - Create bill payments
* [delete](docs/billpayments/README.md#delete) - Delete bill payment
* [get](docs/billpayments/README.md#get) - Get bill payment
* [getCreateModel](docs/billpayments/README.md#getcreatemodel) - Get create bill payment model
* [list](docs/billpayments/README.md#list) - List bill payments

### [bills](docs/bills/README.md)

* [create](docs/bills/README.md#create) - Create bill
* [delete](docs/bills/README.md#delete) - Delete bill
* [downloadAttachment](docs/bills/README.md#downloadattachment) - Download bill attachment
* [get](docs/bills/README.md#get) - Get bill
* [getAttachment](docs/bills/README.md#getattachment) - Get bill attachment
* [getCreateUpdateModel](docs/bills/README.md#getcreateupdatemodel) - Get create/update bill model
* [list](docs/bills/README.md#list) - List bills
* [listAttachments](docs/bills/README.md#listattachments) - List bill attachments
* [update](docs/bills/README.md#update) - Update bill
* [uploadAttachment](docs/bills/README.md#uploadattachment) - Upload bill attachment

### [companyInfo](docs/companyinfo/README.md)

* [get](docs/companyinfo/README.md#get) - Get company info
* [refresh](docs/companyinfo/README.md#refresh) - Refresh company info

### [creditNotes](docs/creditnotes/README.md)

* [create](docs/creditnotes/README.md#create) - Create credit note
* [get](docs/creditnotes/README.md#get) - Get credit note
* [getCreateUpdateModel](docs/creditnotes/README.md#getcreateupdatemodel) - Get create/update credit note model
* [list](docs/creditnotes/README.md#list) - List credit notes
* [update](docs/creditnotes/README.md#update) - Update creditNote

### [customers](docs/customers/README.md)

* [create](docs/customers/README.md#create) - Create customer
* [downloadAttachment](docs/customers/README.md#downloadattachment) - Download customer attachment
* [get](docs/customers/README.md#get) - Get customer
* [getAttachment](docs/customers/README.md#getattachment) - Get customer attachment
* [getCreateUpdateModel](docs/customers/README.md#getcreateupdatemodel) - Get create/update customer model
* [list](docs/customers/README.md#list) - List customers
* [listAttachments](docs/customers/README.md#listattachments) - List customer attachments
* [update](docs/customers/README.md#update) - Update customer

### [directCosts](docs/directcosts/README.md)

* [create](docs/directcosts/README.md#create) - Create direct cost
* [downloadAttachment](docs/directcosts/README.md#downloadattachment) - Download direct cost attachment
* [get](docs/directcosts/README.md#get) - Get direct cost
* [getAttachment](docs/directcosts/README.md#getattachment) - Get direct cost attachment
* [getCreateModel](docs/directcosts/README.md#getcreatemodel) - Get create direct cost model
* [list](docs/directcosts/README.md#list) - List direct costs
* [listAttachments](docs/directcosts/README.md#listattachments) - List direct cost attachments
* [uploadAttachment](docs/directcosts/README.md#uploadattachment) - Upload direct cost attachment

### [directIncomes](docs/directincomes/README.md)

* [create](docs/directincomes/README.md#create) - Create direct income
* [downloadAttachment](docs/directincomes/README.md#downloadattachment) - Download direct income attachment
* [get](docs/directincomes/README.md#get) - Get direct income
* [getAttachment](docs/directincomes/README.md#getattachment) - Get direct income attachment
* [getCreateModel](docs/directincomes/README.md#getcreatemodel) - Get create direct income model
* [list](docs/directincomes/README.md#list) - List direct incomes
* [listAttachments](docs/directincomes/README.md#listattachments) - List direct income attachments
* [uploadAttachment](docs/directincomes/README.md#uploadattachment) - Create direct income attachment

### [invoices](docs/invoices/README.md)

* [create](docs/invoices/README.md#create) - Create invoice
* [delete](docs/invoices/README.md#delete) - Delete invoice
* [downloadAttachment](docs/invoices/README.md#downloadattachment) - Download invoice attachment
* [downloadPdf](docs/invoices/README.md#downloadpdf) - Get invoice as PDF
* [get](docs/invoices/README.md#get) - Get invoice
* [getAttachment](docs/invoices/README.md#getattachment) - Get invoice attachment
* [getCreateUpdateModel](docs/invoices/README.md#getcreateupdatemodel) - Get create/update invoice model
* [list](docs/invoices/README.md#list) - List invoices
* [listAttachments](docs/invoices/README.md#listattachments) - List invoice attachments
* [update](docs/invoices/README.md#update) - Update invoice
* [uploadAttachment](docs/invoices/README.md#uploadattachment) - Push invoice attachment

### [items](docs/items/README.md)

* [create](docs/items/README.md#create) - Create item
* [get](docs/items/README.md#get) - Get item
* [getCreateModel](docs/items/README.md#getcreatemodel) - Get create item model
* [list](docs/items/README.md#list) - List items

### [journalEntries](docs/journalentries/README.md)

* [create](docs/journalentries/README.md#create) - Create journal entry
* [delete](docs/journalentries/README.md#delete) - Delete journal entry
* [get](docs/journalentries/README.md#get) - Get journal entry
* [getCreateModel](docs/journalentries/README.md#getcreatemodel) - Get create journal entry model
* [list](docs/journalentries/README.md#list) - List journal entries

### [journals](docs/journals/README.md)

* [create](docs/journals/README.md#create) - Create journal
* [get](docs/journals/README.md#get) - Get journal
* [getCreateModel](docs/journals/README.md#getcreatemodel) - Get create journal model
* [list](docs/journals/README.md#list) - List journals

### [paymentMethods](docs/paymentmethods/README.md)

* [get](docs/paymentmethods/README.md#get) - Get payment method
* [list](docs/paymentmethods/README.md#list) - List all payment methods

### [payments](docs/payments/README.md)

* [create](docs/payments/README.md#create) - Create payment
* [get](docs/payments/README.md#get) - Get payment
* [getCreateModel](docs/payments/README.md#getcreatemodel) - Get create payment model
* [list](docs/payments/README.md#list) - List payments

### [purchaseOrders](docs/purchaseorders/README.md)

* [create](docs/purchaseorders/README.md#create) - Create purchase order
* [get](docs/purchaseorders/README.md#get) - Get purchase order
* [getCreateUpdateModel](docs/purchaseorders/README.md#getcreateupdatemodel) - Get create/update purchase order model
* [list](docs/purchaseorders/README.md#list) - List purchase orders
* [update](docs/purchaseorders/README.md#update) - Update purchase order

### [reports](docs/reports/README.md)

* [getAgedCreditorsReport](docs/reports/README.md#getagedcreditorsreport) - Aged creditors report
* [getAgedDebtorsReport](docs/reports/README.md#getageddebtorsreport) - Aged debtors report
* [getBalanceSheet](docs/reports/README.md#getbalancesheet) - Get balance sheet
* [getCashFlowStatement](docs/reports/README.md#getcashflowstatement) - Get cash flow statement
* [getProfitAndLoss](docs/reports/README.md#getprofitandloss) - Get profit and loss
* [isAgedCreditorsReportAvailable](docs/reports/README.md#isagedcreditorsreportavailable) - Aged creditors report available
* [isAgedDebtorReportAvailable](docs/reports/README.md#isageddebtorreportavailable) - Aged debtors report available

### [salesOrders](docs/salesorders/README.md)

* [get](docs/salesorders/README.md#get) - Get sales order
* [list](docs/salesorders/README.md#list) - List sales orders

### [suppliers](docs/suppliers/README.md)

* [create](docs/suppliers/README.md#create) - Create supplier
* [downloadAttachment](docs/suppliers/README.md#downloadattachment) - Download supplier attachment
* [get](docs/suppliers/README.md#get) - Get supplier
* [getAttachment](docs/suppliers/README.md#getattachment) - Get supplier attachment
* [getCreateUpdateModel](docs/suppliers/README.md#getcreateupdatemodel) - Get create/update supplier model
* [list](docs/suppliers/README.md#list) - List suppliers
* [listAttachments](docs/suppliers/README.md#listattachments) - List supplier attachments
* [update](docs/suppliers/README.md#update) - Update supplier

### [taxRates](docs/taxrates/README.md)

* [get](docs/taxrates/README.md#get) - Get tax rate
* [list](docs/taxrates/README.md#list) - List all tax rates

### [trackingCategories](docs/trackingcategories/README.md)

* [get](docs/trackingcategories/README.md#get) - Get tracking categories
* [list](docs/trackingcategories/README.md#list) - List tracking categories

### [transfers](docs/transfers/README.md)

* [create](docs/transfers/README.md#create) - Create transfer
* [get](docs/transfers/README.md#get) - Get transfer
* [getCreateModel](docs/transfers/README.md#getcreatemodel) - Get create transfer model
* [list](docs/transfers/README.md#list) - List transfers
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
