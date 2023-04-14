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
import {
  GetAccountTransactionRequest,
  GetAccountTransactionResponse
} from "@codat/accounting/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { CodatAccounting } from "@codat/accounting";
const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountTransactionRequest = {
  accountTransactionId: "corrupti",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.accountTransactions.getAccountTransaction(req).then((res: GetAccountTransactionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accountTransactions

* `getAccountTransaction` - Get account transaction
* `listAccountTransactions` - List account transactions

### accounts

* `createAccount` - Create account
* `getAccount` - Get account
* `getCreateChartOfAccountsModel` - Get create account model
* `listAccounts` - List accounts

### bankAccountTransactions

* `createBankTransactions` - Create bank transactions
* `getCreateBankAccountModel` - List push options for bank account bank transactions
* `listBankAccountTransactions` - List bank transactions for bank account
* `listBankTransactions` - List all bank transactions

### bankAccounts

* `createBankAccount` - Create bank account
* `getAllBankAccount` - Get bank account
* `getBankAccount` - Get bank account
* `getCreateUpdateBankAccountsModel` - Get create/update bank account model
* `listBankAccounts` - List bank accounts
* `updateBankAccount` - Update bank account

### billCreditNotes

* `createBillCreditNote` - Create bill credit note
* `getBillCreditNote` - Get bill credit note
* `getCreateUpdateBillCreditNotesModel` - Get create/update bill credit note model
* `listBillCreditNotes` - List bill credit notes
* `updateBillCreditNote` - Update bill credit note

### billPayments

* `createBillPayment` - Create bill payments
* `deleteBillPayment` - Delete bill payment
* `getBillPayments` - Get bill payment
* `getCreateBillPaymentsModel` - Get create bill payment model
* `listBillPayments` - List bill payments

### bills

* `createBill` - Create bill
* `deleteBill` - Delete bill
* `downloadBillAttachment` - Download bill attachment
* `getBill` - Get bill
* `getBillAttachment` - Get bill attachment
* `getBillAttachments` - List bill attachments
* `getCreateUpdateBillsModel` - Get create/update bill model
* `listBills` - List bills
* `updateBill` - Update bill
* `uploadBillAttachments` - Upload bill attachments

### companyInfo

* `getCompanyInfo` - Get company info
* `postSyncInfo` - Refresh company info

### creditNotes

* `createCreditNote` - Create credit note
* `getCreateUpdateCreditNotesModel` - Get create/update credit note model
* `getCreditNote` - Get credit note
* `listCreditNotes` - List credit notes
* `updateCreditNote` - Update creditNote

### customers

* `createCustomer` - Create customer
* `downloadCustomerAttachment` - Download customer attachment
* `getCreateUpdateCustomersModel` - Get create/update customer model
* `getCustomer` - Get customer
* `getCustomerAttachment` - Get customer attachment
* `getCustomerAttachments` - List customer attachments
* `getCustomers` - List customers
* `updateCustomer` - Update customer

### directCosts

* `createDirectCost` - Create direct cost
* `downloadDirectCostAttachment` - Download direct cost attachment
* `getCreateDirectCostsModel` - Get create direct cost model
* `getDirectCost` - Get direct cost
* `getDirectCostAttachment` - Get direct cost attachment
* `getDirectCosts` - List direct costs
* `listDirectCostAttachments` - List direct cost attachments
* `uploadDirectCostAttachment` - Upload direct cost attachment

### directIncomes

* `createDirectIncome` - Create direct income
* `downloadDirectIncomeAttachment` - Download direct income attachment
* `getCreateDirectIncomesModel` - Get create direct income model
* `getDirectIncome` - Get direct income
* `getDirectIncomeAttachment` - Get direct income attachment
* `getDirectIncomes` - Get direct incomes
* `listDirectIncomeAttachments` - List direct income attachments
* `uploadDirectIncomeAttachment` - Create direct income attachment

### financials

* `getBalanceSheet` - Get balance sheet
* `getCashFlowStatement` - Get cash flow statement
* `getProfitAndLoss` - Get profit and loss

### invoices

* `downloadInvoicePdf` - Get invoice as PDF
* `createInvoice` - Create invoice
* `deleteInvoice` - Delete invoice
* `downloadInvoiceAttachment` - Download invoice attachment
* `getCreateUpdateInvoicesModel` - Get create/update invoice model
* `getInvoice` - Get invoice
* `getInvoiceAttachment` - Get invoice attachment
* `getInvoiceAttachments` - Get invoice attachments
* `listInvoices` - List invoices
* `updateInvoice` - Update invoice
* `uploadInvoiceAttachment` - Push invoice attachment

### items

* `createItem` - Create item
* `getCreateItemsModel` - Get create item model
* `getItem` - Get item
* `listItems` - List items

### journalEntries

* `createJournalEntry` - Create journal entry
* `deleteJournalEntry` - Delete journal entry
* `getCreateJournalEntriesModel` - Get create journal entry model
* `getJournalEntry` - Get journal entry
* `listJournalEntries` - List journal entries

### journals

* `getCreateJournalsModel` - Get create journal model
* `getJournal` - Get journal
* `listJournals` - List journals
* `pushJournal` - Create journal

### paymentMethods

* `getPaymentMethod` - Get payment method
* `listPaymentMethods` - List all payment methods

### payments

* `createPayment` - Create payment
* `getCreatePaymentsModel` - Get create payment model
* `getPayment` - Get payment
* `listPayments` - List payments

### purchaseOrders

* `createPurchaseOrder` - Create purchase order
* `getCreateUpdatePurchaseOrdersModel` - Get create/update purchase order model
* `getPurchaseOrder` - Get purchase order
* `listPurchaseOrders` - List purchase orders
* `updatePurchaseOrder` - Update purchase order

### reports

* `getAgedCreditorsReport` - Aged creditors report
* `getAgedDebtorsReport` - Aged debtors report
* `isAgedCreditorsReportAvailable` - Aged creditors report available
* `isAgedDebtorReportAvailable` - Aged debtors report available

### salesOrders

* `getSalesOrder` - Get sales order
* `listSalesOrders` - List sales orders

### suppliers

* `createSupplier` - Create suppliers
* `downloadSupplierAttachment` - Download supplier attachment
* `getCreateUpdateSuppliersModel` - Get create/update supplier model
* `getSupplier` - Get supplier
* `getSupplierAttachment` - Get supplier attachment
* `listSupplierAttachments` - List supplier attachments
* `listSuppliers` - List suppliers
* `putSupplier` - Update supplier

### taxRates

* `getTaxRate` - Get tax rate
* `listTaxRates` - List all tax rates

### trackingCategories

* `getTrackingCategory` - Get tracking categories
* `listTrackingCategories` - List tracking categories

### transfers

* `createTransfer` - Create transfer
* `getCreateTransfersModel` - Get create transfer model
* `getTransfer` - Get transfer
* `listTransfers` - List transfers
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
