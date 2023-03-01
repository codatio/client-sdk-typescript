# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAccountTransactionRequest, GetAccountTransactionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAccountTransactionRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    accountTransactionId: "unde",
    companyId: "deserunt",
    connectionId: "porro",
  },
};

sdk.accountTransactions.getAccountTransaction(req).then((res: GetAccountTransactionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accountTransactions

* `getAccountTransaction` - Get account transaction
* `listAccountTransactions` - List account transactions

### accounts

* `getAccount` - Get account
* `getAccounts` - List accounts
* `postAccount` - Create account

### bankAccountTransactions

* `getBankAccountPushOptions` - List push options for bank account bank transactions
* `listAllBankTransactionscount` - List bank transactions for bank account
* `listBankTransactions` - List all bank transactions
* `postBankTransactions` - Create bank transactions

### bankAccounts

* `getAllBankAccount` - Get bank account
* `getBankAccount` - Get bank account
* `listBankAccounts` - List bank accounts
* `postBankAccount` - Create bank account
* `putBankAccount` - Update bank account

### billCreditNotes

* `getBillCreditNote` - Get bill credit note
* `listBillCreditNotes` - List bill credit notes
* `postBillCreditNote` - Create bill credit note
* `updateBillCreditNote` - Update bill credit note

### billPayments

* `getBillPayments` - Get bill payment
* `listBillPayments` - List bill payments
* `postBillPayment` - Create bill payment

### bills

* `downloadBillAttachment` - Download bill attachment
* `getBill` - Get bill
* `getBillAttachment` - Get bill attachment
* `getBillAttachments` - List bill attachments
* `listBills` - List bills
* `postBill` - Create bill
* `postBillAttachments` - Create bill attachments
* `updateBill` - Update bill

### creditNotes

* `getCreditNote` - Get credit note
* `listCreditNotes` - List credit notes
* `postCreditNote` - Update creditNote
* `pushCreditNote` - Create credit note

### customers

* `downloadCustomerAttachment` - Download customer attachment
* `getCustomer` - Get customer
* `getCustomerAttachment` - Get customer attachment
* `getCustomerAttachments` - List customer attachments
* `getCustomers` - List customers
* `postCustomer` - Create customer
* `updateCustomer` - Update customer

### directCosts

* `downloadDirectCostAttachment` - Download direct cost attachment
* `getDirectCost` - Get directCost
* `getDirectCostAttachment` - Get directCost attachment
* `getDirectCosts` - List directCosts
* `listDirectCostAttachments` - List direct cost attachments
* `postDirectCost` - Create direct cost
* `postDirectCostAttachment` - Create direct cost attachment

### directIncomes

* `downloadDirectIncomeAttachment` - Download directIncome attachment
* `getDirectIncome` - Get direct income
* `getDirectIncomeAttachment` - Get direct income attachment
* `getDirectIncomes` - Get direct incomes
* `listDirectIncomeAttachments` - List direct income attachments
* `postDirectIncome` - Create direct income
* `postDirectIncomeAttachment` - Create direct income attachment

### financials

* `getBalanceSheet` - Get balance sheet
* `getCashFlowStatement` - Get cash flow statement
* `getProfitAndLoss` - Get profit and loss

### info

* `getCompanyInfo` - Get company info
* `postSyncInfo` - Refresh company info

### invoices

* `donwloadInvoiceAttachment` - Download invoice attachment
* `getInvoice` - Get invoice
* `getInvoiceAttachment` - Get invoice attachment
* `getInvoiceAttachments` - Get invoice attachments
* `getInvoicePdf` - Get invoice as PDF
* `listInvoices` - List invoices
* `postInvoice` - Create invoice
* `pushInvoiceAttachment` - Push invoice attachment
* `updateInvoice` - Update invoice

### items

* `getItem` - Get item
* `listItems` - List items
* `postItem` - Create item

### journalEntries

* `getJournalEntry` - Get journal entry
* `listJournalEntries` - List journal entries
* `postJournalEntry` - Create journal entry

### journals

* `getJournal` - Get journal
* `listJournals` - List journals
* `pushJournal` - Create journal

### paymentMethods

* `getPaymentMethod` - Get payment method
* `listPaymentMethods` - List all payment methods

### payments

* `getPayment` - Get payment
* `listPayments` - List payments
* `postPayment` - Create payment

### purchaseOrders

* `getPurchaseOrder` - Get purchase order
* `listPurchaseOrders` - List purchase orders
* `postPurchaseOrder` - Create purchase order
* `updatePurchaseOrder` - Update purchase order

### salesOrders

* `getSalesOrder` - Get sales order
* `listSalesOrders` - List sales orders

### suppliers

* `downloadSupplierAttachment` - Download supplier attachment
* `getSupplier` - Get supplier
* `getSupplierAttachment` - Get supplier attachment
* `listSupplierAttachments` - List supplier attachments
* `listSuppliers` - List suppliers
* `postSuppliers` - Create suppliers
* `putSupplier` - Update supplier

### taxRates

* `getTaxRate` - Get tax rate
* `listTaxRates` - List all tax rates

### trackingCategories

* `getTrackingCategory` - Get tracking categories
* `listTrackingCategories` - List tracking categories

### transfers

* `getTransfer` - Get transfer
* `listTransfers` - List transfers
* `postTransfer` - Create transfer
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
