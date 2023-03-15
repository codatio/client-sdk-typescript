# @codat/accounting

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
  GetCreateUpdateAccountTransactionsModelRequest,
  GetCreateUpdateAccountTransactionsModelResponse
} from "@codat/accounting/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/accounting";
const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});
    
const req: GetCreateUpdateAccountTransactionsModelRequest = {
  pathParams: {
    accountTransactionId: "unde",
    companyId: "deserunt",
    connectionId: "porro",
  },
};

sdk.accountTransactions.getCreateUpdateAccountTransactionsModel(req).then((res: GetCreateUpdateAccountTransactionsModelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accountTransactions

* `getCreateUpdateAccountTransactionsModel` - Get account transaction
* `listAccountTransactions` - List account transactions

### accounts

* `createAccount` - Create account
* `getAccount` - Get account
* `getAccounts` - List accounts
* `getCreateChartOfAccountsModel` - Get create account model

### bankAccountTransactions

* `getBankAccountPushOptions` - List push options for bank account bank transactions
* `listBankAccountTransactions` - List bank transactions for bank account
* `listBankTransactions` - List all bank transactions
* `postBankTransactions` - Create bank transactions

### bankAccounts

* `createBankAccount` - Create bank account
* `getAllBankAccount` - Get bank account
* `getBankAccount` - Get bank account
* `getCreateUpdateBankAccountsModel` - Get create/update bank account model
* `listBankAccounts` - List bank accounts
* `putBankAccount` - Update bank account

### billCreditNotes

* `createBillCreditNote` - Create bill credit note
* `getBillCreditNote` - Get bill credit note
* `getCreateUpdateBillCreditNotesModel` - Get create/update bill credit note model
* `listBillCreditNotes` - List bill credit notes
* `updateBillCreditNote` - Update bill credit note

### billPayments

* `createBillPayment` - Create bill payments
* `deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId` - Delete bill payment
* `getBillPayments` - Get bill payment
* `getCreateBillPaymentsModel` - Get create bill payment model
* `listBillPayments` - List bill payments

### bills

* `createBill` - Create bill
* `createBillAttachments` - Create bill attachments
* `deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId` - Delete bill
* `downloadBillAttachment` - Download bill attachment
* `getBill` - Get bill
* `getBillAttachment` - Get bill attachment
* `getBillAttachments` - List bill attachments
* `getCreateUpdateBillsModel` - Get create/update bill model
* `listBills` - List bills
* `updateBill` - Update bill

### companyInfo

* `getCompanyInfo` - Get company info
* `postSyncInfo` - Refresh company info

### creditNotes

* `createCreditNote` - Update creditNote
* `getCreateUpdateCreditNotesModel` - Get create/update credit note model
* `getCreditNote` - Get credit note
* `listCreditNotes` - List credit notes
* `pushCreditNote` - Create credit note

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
* `postDirectCostAttachment` - Create direct cost attachment

### directIncomes

* `createDirectIncome` - Create direct income
* `downloadDirectIncomeAttachment` - Download direct income attachment
* `getCreateDirectIncomesModel` - Get create direct income model
* `getDirectIncome` - Get direct income
* `getDirectIncomeAttachment` - Get direct income attachment
* `getDirectIncomes` - Get direct incomes
* `listDirectIncomeAttachments` - List direct income attachments
* `postDirectIncomeAttachment` - Create direct income attachment

### financials

* `getBalanceSheet` - Get balance sheet
* `getCashFlowStatement` - Get cash flow statement
* `getProfitAndLoss` - Get profit and loss

### invoices

* `createInvoice` - Create invoice
* `donwloadInvoiceAttachment` - Download invoice attachment
* `getCreateUpdateInvoicesModel` - Get create/update invoice model
* `getInvoice` - Get invoice
* `getInvoiceAttachment` - Get invoice attachment
* `getInvoiceAttachments` - Get invoice attachments
* `getInvoicePdf` - Get invoice as PDF
* `listInvoices` - List invoices
* `pushInvoiceAttachment` - Push invoice attachment
* `updateInvoice` - Update invoice

### items

* `createItem` - Create item
* `getCreateItemsModel` - Get create item model
* `getItem` - Get item
* `listItems` - List items

### journalEntries

* `createJournalEntry` - Create journal entry
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

* `createSuppliers` - Create suppliers
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
