# Accounting

<!-- Start Codat Library Description -->
﻿Codat's Accounting API is a flexible API for pulling and pushing up-to-date accounting data to your customer's accounting software.
It gives you a simple way to view, create, update adn delete data without having to worry about each platform's specific complexities.

It gives you a simple way to view, create, update adn delete data without having to worry about each platform's specific complexities.
<!-- End Codat Library Description  -->


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

## Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAccountTransactionResponse } from "@codat/accounting/dist/sdk/models/operations";

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


### [accountTransactions](docs/sdks/accounttransactions/README.md)

* [get](docs/sdks/accounttransactions/README.md#get) - Get account transaction
* [list](docs/sdks/accounttransactions/README.md#list) - List account transactions

### [accounts](docs/sdks/accounts/README.md)

* [create](docs/sdks/accounts/README.md#create) - Create account
* [get](docs/sdks/accounts/README.md#get) - Get account
* [getCreateModel](docs/sdks/accounts/README.md#getcreatemodel) - Get create account model
* [list](docs/sdks/accounts/README.md#list) - List accounts

### [bankAccountTransactions](docs/sdks/bankaccounttransactions/README.md)

* [create](docs/sdks/bankaccounttransactions/README.md#create) - Create bank account transactions
* [getCreateModel](docs/sdks/bankaccounttransactions/README.md#getcreatemodel) - Get create bank account transactions model
* [list](docs/sdks/bankaccounttransactions/README.md#list) - List bank account transactions

### [bankAccounts](docs/sdks/bankaccounts/README.md)

* [create](docs/sdks/bankaccounts/README.md#create) - Create bank account
* [get](docs/sdks/bankaccounts/README.md#get) - Get bank account
* [getCreateUpdateModel](docs/sdks/bankaccounts/README.md#getcreateupdatemodel) - Get create/update bank account model
* [list](docs/sdks/bankaccounts/README.md#list) - List bank accounts
* [update](docs/sdks/bankaccounts/README.md#update) - Update bank account

### [billCreditNotes](docs/sdks/billcreditnotes/README.md)

* [create](docs/sdks/billcreditnotes/README.md#create) - Create bill credit note
* [get](docs/sdks/billcreditnotes/README.md#get) - Get bill credit note
* [getCreateUpdateModel](docs/sdks/billcreditnotes/README.md#getcreateupdatemodel) - Get create/update bill credit note model
* [list](docs/sdks/billcreditnotes/README.md#list) - List bill credit notes
* [update](docs/sdks/billcreditnotes/README.md#update) - Update bill credit note
* [uploadAttachment](docs/sdks/billcreditnotes/README.md#uploadattachment) - Upload bill credit note attachment

### [billPayments](docs/sdks/billpayments/README.md)

* [create](docs/sdks/billpayments/README.md#create) - Create bill payments
* [delete](docs/sdks/billpayments/README.md#delete) - Delete bill payment
* [get](docs/sdks/billpayments/README.md#get) - Get bill payment
* [getCreateModel](docs/sdks/billpayments/README.md#getcreatemodel) - Get create bill payment model
* [list](docs/sdks/billpayments/README.md#list) - List bill payments

### [bills](docs/sdks/bills/README.md)

* [create](docs/sdks/bills/README.md#create) - Create bill
* [delete](docs/sdks/bills/README.md#delete) - Delete bill
* [downloadAttachment](docs/sdks/bills/README.md#downloadattachment) - Download bill attachment
* [get](docs/sdks/bills/README.md#get) - Get bill
* [getAttachment](docs/sdks/bills/README.md#getattachment) - Get bill attachment
* [getCreateUpdateModel](docs/sdks/bills/README.md#getcreateupdatemodel) - Get create/update bill model
* [list](docs/sdks/bills/README.md#list) - List bills
* [listAttachments](docs/sdks/bills/README.md#listattachments) - List bill attachments
* [update](docs/sdks/bills/README.md#update) - Update bill
* [uploadAttachment](docs/sdks/bills/README.md#uploadattachment) - Upload bill attachment

### [companyInfo](docs/sdks/companyinfo/README.md)

* [get](docs/sdks/companyinfo/README.md#get) - Get company info
* [refresh](docs/sdks/companyinfo/README.md#refresh) - Refresh company info

### [creditNotes](docs/sdks/creditnotes/README.md)

* [create](docs/sdks/creditnotes/README.md#create) - Create credit note
* [get](docs/sdks/creditnotes/README.md#get) - Get credit note
* [getCreateUpdateModel](docs/sdks/creditnotes/README.md#getcreateupdatemodel) - Get create/update credit note model
* [list](docs/sdks/creditnotes/README.md#list) - List credit notes
* [update](docs/sdks/creditnotes/README.md#update) - Update creditNote

### [customers](docs/sdks/customers/README.md)

* [create](docs/sdks/customers/README.md#create) - Create customer
* [downloadAttachment](docs/sdks/customers/README.md#downloadattachment) - Download customer attachment
* [get](docs/sdks/customers/README.md#get) - Get customer
* [getAttachment](docs/sdks/customers/README.md#getattachment) - Get customer attachment
* [getCreateUpdateModel](docs/sdks/customers/README.md#getcreateupdatemodel) - Get create/update customer model
* [list](docs/sdks/customers/README.md#list) - List customers
* [listAttachments](docs/sdks/customers/README.md#listattachments) - List customer attachments
* [update](docs/sdks/customers/README.md#update) - Update customer

### [directCosts](docs/sdks/directcosts/README.md)

* [create](docs/sdks/directcosts/README.md#create) - Create direct cost
* [downloadAttachment](docs/sdks/directcosts/README.md#downloadattachment) - Download direct cost attachment
* [get](docs/sdks/directcosts/README.md#get) - Get direct cost
* [getAttachment](docs/sdks/directcosts/README.md#getattachment) - Get direct cost attachment
* [getCreateModel](docs/sdks/directcosts/README.md#getcreatemodel) - Get create direct cost model
* [list](docs/sdks/directcosts/README.md#list) - List direct costs
* [listAttachments](docs/sdks/directcosts/README.md#listattachments) - List direct cost attachments
* [uploadAttachment](docs/sdks/directcosts/README.md#uploadattachment) - Upload direct cost attachment

### [directIncomes](docs/sdks/directincomes/README.md)

* [create](docs/sdks/directincomes/README.md#create) - Create direct income
* [downloadAttachment](docs/sdks/directincomes/README.md#downloadattachment) - Download direct income attachment
* [get](docs/sdks/directincomes/README.md#get) - Get direct income
* [getAttachment](docs/sdks/directincomes/README.md#getattachment) - Get direct income attachment
* [getCreateModel](docs/sdks/directincomes/README.md#getcreatemodel) - Get create direct income model
* [list](docs/sdks/directincomes/README.md#list) - List direct incomes
* [listAttachments](docs/sdks/directincomes/README.md#listattachments) - List direct income attachments
* [uploadAttachment](docs/sdks/directincomes/README.md#uploadattachment) - Create direct income attachment

### [invoices](docs/sdks/invoices/README.md)

* [create](docs/sdks/invoices/README.md#create) - Create invoice
* [delete](docs/sdks/invoices/README.md#delete) - Delete invoice
* [downloadAttachment](docs/sdks/invoices/README.md#downloadattachment) - Download invoice attachment
* [downloadPdf](docs/sdks/invoices/README.md#downloadpdf) - Get invoice as PDF
* [get](docs/sdks/invoices/README.md#get) - Get invoice
* [getAttachment](docs/sdks/invoices/README.md#getattachment) - Get invoice attachment
* [getCreateUpdateModel](docs/sdks/invoices/README.md#getcreateupdatemodel) - Get create/update invoice model
* [list](docs/sdks/invoices/README.md#list) - List invoices
* [listAttachments](docs/sdks/invoices/README.md#listattachments) - List invoice attachments
* [update](docs/sdks/invoices/README.md#update) - Update invoice
* [uploadAttachment](docs/sdks/invoices/README.md#uploadattachment) - Push invoice attachment

### [items](docs/sdks/items/README.md)

* [create](docs/sdks/items/README.md#create) - Create item
* [get](docs/sdks/items/README.md#get) - Get item
* [getCreateModel](docs/sdks/items/README.md#getcreatemodel) - Get create item model
* [list](docs/sdks/items/README.md#list) - List items

### [journalEntries](docs/sdks/journalentries/README.md)

* [create](docs/sdks/journalentries/README.md#create) - Create journal entry
* [delete](docs/sdks/journalentries/README.md#delete) - Delete journal entry
* [get](docs/sdks/journalentries/README.md#get) - Get journal entry
* [getCreateModel](docs/sdks/journalentries/README.md#getcreatemodel) - Get create journal entry model
* [list](docs/sdks/journalentries/README.md#list) - List journal entries

### [journals](docs/sdks/journals/README.md)

* [create](docs/sdks/journals/README.md#create) - Create journal
* [get](docs/sdks/journals/README.md#get) - Get journal
* [getCreateModel](docs/sdks/journals/README.md#getcreatemodel) - Get create journal model
* [list](docs/sdks/journals/README.md#list) - List journals

### [paymentMethods](docs/sdks/paymentmethods/README.md)

* [get](docs/sdks/paymentmethods/README.md#get) - Get payment method
* [list](docs/sdks/paymentmethods/README.md#list) - List payment methods

### [payments](docs/sdks/payments/README.md)

* [create](docs/sdks/payments/README.md#create) - Create payment
* [get](docs/sdks/payments/README.md#get) - Get payment
* [getCreateModel](docs/sdks/payments/README.md#getcreatemodel) - Get create payment model
* [list](docs/sdks/payments/README.md#list) - List payments

### [purchaseOrders](docs/sdks/purchaseorders/README.md)

* [create](docs/sdks/purchaseorders/README.md#create) - Create purchase order
* [get](docs/sdks/purchaseorders/README.md#get) - Get purchase order
* [getCreateUpdateModel](docs/sdks/purchaseorders/README.md#getcreateupdatemodel) - Get create/update purchase order model
* [list](docs/sdks/purchaseorders/README.md#list) - List purchase orders
* [update](docs/sdks/purchaseorders/README.md#update) - Update purchase order

### [reports](docs/sdks/reports/README.md)

* [getAgedCreditorsReport](docs/sdks/reports/README.md#getagedcreditorsreport) - Aged creditors report
* [getAgedDebtorsReport](docs/sdks/reports/README.md#getageddebtorsreport) - Aged debtors report
* [getBalanceSheet](docs/sdks/reports/README.md#getbalancesheet) - Get balance sheet
* [getCashFlowStatement](docs/sdks/reports/README.md#getcashflowstatement) - Get cash flow statement
* [getProfitAndLoss](docs/sdks/reports/README.md#getprofitandloss) - Get profit and loss
* [isAgedCreditorsReportAvailable](docs/sdks/reports/README.md#isagedcreditorsreportavailable) - Aged creditors report available
* [isAgedDebtorReportAvailable](docs/sdks/reports/README.md#isageddebtorreportavailable) - Aged debtors report available

### [salesOrders](docs/sdks/salesorders/README.md)

* [get](docs/sdks/salesorders/README.md#get) - Get sales order
* [list](docs/sdks/salesorders/README.md#list) - List sales orders

### [suppliers](docs/sdks/suppliers/README.md)

* [create](docs/sdks/suppliers/README.md#create) - Create supplier
* [downloadAttachment](docs/sdks/suppliers/README.md#downloadattachment) - Download supplier attachment
* [get](docs/sdks/suppliers/README.md#get) - Get supplier
* [getAttachment](docs/sdks/suppliers/README.md#getattachment) - Get supplier attachment
* [getCreateUpdateModel](docs/sdks/suppliers/README.md#getcreateupdatemodel) - Get create/update supplier model
* [list](docs/sdks/suppliers/README.md#list) - List suppliers
* [listAttachments](docs/sdks/suppliers/README.md#listattachments) - List supplier attachments
* [update](docs/sdks/suppliers/README.md#update) - Update supplier

### [taxRates](docs/sdks/taxrates/README.md)

* [get](docs/sdks/taxrates/README.md#get) - Get tax rate
* [list](docs/sdks/taxrates/README.md#list) - List all tax rates

### [trackingCategories](docs/sdks/trackingcategories/README.md)

* [get](docs/sdks/trackingcategories/README.md#get) - Get tracking categories
* [list](docs/sdks/trackingcategories/README.md#list) - List tracking categories

### [transfers](docs/sdks/transfers/README.md)

* [create](docs/sdks/transfers/README.md#create) - Create transfer
* [get](docs/sdks/transfers/README.md#get) - Get transfer
* [getCreateModel](docs/sdks/transfers/README.md#getcreatemodel) - Get create transfer model
* [list](docs/sdks/transfers/README.md#list) - List transfers
* [uploadAttachment](docs/sdks/transfers/README.md#uploadattachment) - Push invoice attachment
<!-- End SDK Available Operations -->
### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
