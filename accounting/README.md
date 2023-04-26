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
import { GetAccountTransactionRequest, GetAccountTransactionResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountTransactionStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

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
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountTransactions](docs/accounttransactions/README.md)

* [getAccountTransaction](docs/accounttransactions/README.md#getaccounttransaction) - Get account transaction
* [listAccountTransactions](docs/accounttransactions/README.md#listaccounttransactions) - List account transactions

### [accounts](docs/accounts/README.md)

* [createAccount](docs/accounts/README.md#createaccount) - Create account
* [getAccount](docs/accounts/README.md#getaccount) - Get account
* [getCreateChartOfAccountsModel](docs/accounts/README.md#getcreatechartofaccountsmodel) - Get create account model
* [listAccounts](docs/accounts/README.md#listaccounts) - List accounts

### [bankAccountTransactions](docs/bankaccounttransactions/README.md)

* [createBankTransactions](docs/bankaccounttransactions/README.md#createbanktransactions) - Create bank transactions
* [getCreateBankAccountModel](docs/bankaccounttransactions/README.md#getcreatebankaccountmodel) - List push options for bank account bank transactions
* [listBankAccountTransactions](docs/bankaccounttransactions/README.md#listbankaccounttransactions) - List bank transactions for bank account
* [listBankTransactions](docs/bankaccounttransactions/README.md#listbanktransactions) - List all bank transactions

### [bankAccounts](docs/bankaccounts/README.md)

* [createBankAccount](docs/bankaccounts/README.md#createbankaccount) - Create bank account
* [getAllBankAccount](docs/bankaccounts/README.md#getallbankaccount) - Get bank account
* [getBankAccount](docs/bankaccounts/README.md#getbankaccount) - Get bank account
* [getCreateUpdateBankAccountsModel](docs/bankaccounts/README.md#getcreateupdatebankaccountsmodel) - Get create/update bank account model
* [listBankAccounts](docs/bankaccounts/README.md#listbankaccounts) - List bank accounts
* [updateBankAccount](docs/bankaccounts/README.md#updatebankaccount) - Update bank account

### [billCreditNotes](docs/billcreditnotes/README.md)

* [createBillCreditNote](docs/billcreditnotes/README.md#createbillcreditnote) - Create bill credit note
* [getBillCreditNote](docs/billcreditnotes/README.md#getbillcreditnote) - Get bill credit note
* [getCreateUpdateBillCreditNotesModel](docs/billcreditnotes/README.md#getcreateupdatebillcreditnotesmodel) - Get create/update bill credit note model
* [listBillCreditNotes](docs/billcreditnotes/README.md#listbillcreditnotes) - List bill credit notes
* [updateBillCreditNote](docs/billcreditnotes/README.md#updatebillcreditnote) - Update bill credit note

### [billPayments](docs/billpayments/README.md)

* [createBillPayment](docs/billpayments/README.md#createbillpayment) - Create bill payments
* [deleteBillPayment](docs/billpayments/README.md#deletebillpayment) - Delete bill payment
* [getBillPayments](docs/billpayments/README.md#getbillpayments) - Get bill payment
* [getCreateBillPaymentsModel](docs/billpayments/README.md#getcreatebillpaymentsmodel) - Get create bill payment model
* [listBillPayments](docs/billpayments/README.md#listbillpayments) - List bill payments

### [bills](docs/bills/README.md)

* [createBill](docs/bills/README.md#createbill) - Create bill
* [deleteBill](docs/bills/README.md#deletebill) - Delete bill
* [downloadBillAttachment](docs/bills/README.md#downloadbillattachment) - Download bill attachment
* [getBill](docs/bills/README.md#getbill) - Get bill
* [getBillAttachment](docs/bills/README.md#getbillattachment) - Get bill attachment
* [getBillAttachments](docs/bills/README.md#getbillattachments) - List bill attachments
* [getCreateUpdateBillsModel](docs/bills/README.md#getcreateupdatebillsmodel) - Get create/update bill model
* [listBills](docs/bills/README.md#listbills) - List bills
* [updateBill](docs/bills/README.md#updatebill) - Update bill
* [uploadBillAttachments](docs/bills/README.md#uploadbillattachments) - Upload bill attachments

### [companyInfo](docs/companyinfo/README.md)

* [getCompanyInfo](docs/companyinfo/README.md#getcompanyinfo) - Get company info
* [postSyncInfo](docs/companyinfo/README.md#postsyncinfo) - Refresh company info

### [creditNotes](docs/creditnotes/README.md)

* [createCreditNote](docs/creditnotes/README.md#createcreditnote) - Create credit note
* [getCreateUpdateCreditNotesModel](docs/creditnotes/README.md#getcreateupdatecreditnotesmodel) - Get create/update credit note model
* [getCreditNote](docs/creditnotes/README.md#getcreditnote) - Get credit note
* [listCreditNotes](docs/creditnotes/README.md#listcreditnotes) - List credit notes
* [updateCreditNote](docs/creditnotes/README.md#updatecreditnote) - Update creditNote

### [customers](docs/customers/README.md)

* [createCustomer](docs/customers/README.md#createcustomer) - Create customer
* [downloadCustomerAttachment](docs/customers/README.md#downloadcustomerattachment) - Download customer attachment
* [getCreateUpdateCustomersModel](docs/customers/README.md#getcreateupdatecustomersmodel) - Get create/update customer model
* [getCustomer](docs/customers/README.md#getcustomer) - Get customer
* [getCustomerAttachment](docs/customers/README.md#getcustomerattachment) - Get customer attachment
* [getCustomerAttachments](docs/customers/README.md#getcustomerattachments) - List customer attachments
* [getCustomers](docs/customers/README.md#getcustomers) - List customers
* [updateCustomer](docs/customers/README.md#updatecustomer) - Update customer

### [directCosts](docs/directcosts/README.md)

* [createDirectCost](docs/directcosts/README.md#createdirectcost) - Create direct cost
* [downloadDirectCostAttachment](docs/directcosts/README.md#downloaddirectcostattachment) - Download direct cost attachment
* [getCreateDirectCostsModel](docs/directcosts/README.md#getcreatedirectcostsmodel) - Get create direct cost model
* [getDirectCost](docs/directcosts/README.md#getdirectcost) - Get direct cost
* [getDirectCostAttachment](docs/directcosts/README.md#getdirectcostattachment) - Get direct cost attachment
* [getDirectCosts](docs/directcosts/README.md#getdirectcosts) - List direct costs
* [listDirectCostAttachments](docs/directcosts/README.md#listdirectcostattachments) - List direct cost attachments
* [uploadDirectCostAttachment](docs/directcosts/README.md#uploaddirectcostattachment) - Upload direct cost attachment

### [directIncomes](docs/directincomes/README.md)

* [createDirectIncome](docs/directincomes/README.md#createdirectincome) - Create direct income
* [downloadDirectIncomeAttachment](docs/directincomes/README.md#downloaddirectincomeattachment) - Download direct income attachment
* [getCreateDirectIncomesModel](docs/directincomes/README.md#getcreatedirectincomesmodel) - Get create direct income model
* [getDirectIncome](docs/directincomes/README.md#getdirectincome) - Get direct income
* [getDirectIncomeAttachment](docs/directincomes/README.md#getdirectincomeattachment) - Get direct income attachment
* [getDirectIncomes](docs/directincomes/README.md#getdirectincomes) - Get direct incomes
* [listDirectIncomeAttachments](docs/directincomes/README.md#listdirectincomeattachments) - List direct income attachments
* [uploadDirectIncomeAttachment](docs/directincomes/README.md#uploaddirectincomeattachment) - Create direct income attachment

### [financials](docs/financials/README.md)

* [getBalanceSheet](docs/financials/README.md#getbalancesheet) - Get balance sheet
* [getCashFlowStatement](docs/financials/README.md#getcashflowstatement) - Get cash flow statement
* [getProfitAndLoss](docs/financials/README.md#getprofitandloss) - Get profit and loss

### [invoices](docs/invoices/README.md)

* [downloadInvoicePdf](docs/invoices/README.md#downloadinvoicepdf) - Get invoice as PDF
* [createInvoice](docs/invoices/README.md#createinvoice) - Create invoice
* [deleteInvoice](docs/invoices/README.md#deleteinvoice) - Delete invoice
* [downloadInvoiceAttachment](docs/invoices/README.md#downloadinvoiceattachment) - Download invoice attachment
* [getCreateUpdateInvoicesModel](docs/invoices/README.md#getcreateupdateinvoicesmodel) - Get create/update invoice model
* [getInvoice](docs/invoices/README.md#getinvoice) - Get invoice
* [getInvoiceAttachment](docs/invoices/README.md#getinvoiceattachment) - Get invoice attachment
* [getInvoiceAttachments](docs/invoices/README.md#getinvoiceattachments) - Get invoice attachments
* [listInvoices](docs/invoices/README.md#listinvoices) - List invoices
* [updateInvoice](docs/invoices/README.md#updateinvoice) - Update invoice
* [uploadInvoiceAttachment](docs/invoices/README.md#uploadinvoiceattachment) - Push invoice attachment

### [items](docs/items/README.md)

* [createItem](docs/items/README.md#createitem) - Create item
* [getCreateItemsModel](docs/items/README.md#getcreateitemsmodel) - Get create item model
* [getItem](docs/items/README.md#getitem) - Get item
* [listItems](docs/items/README.md#listitems) - List items

### [journalEntries](docs/journalentries/README.md)

* [createJournalEntry](docs/journalentries/README.md#createjournalentry) - Create journal entry
* [deleteJournalEntry](docs/journalentries/README.md#deletejournalentry) - Delete journal entry
* [getCreateJournalEntriesModel](docs/journalentries/README.md#getcreatejournalentriesmodel) - Get create journal entry model
* [getJournalEntry](docs/journalentries/README.md#getjournalentry) - Get journal entry
* [listJournalEntries](docs/journalentries/README.md#listjournalentries) - List journal entries

### [journals](docs/journals/README.md)

* [getCreateJournalsModel](docs/journals/README.md#getcreatejournalsmodel) - Get create journal model
* [getJournal](docs/journals/README.md#getjournal) - Get journal
* [listJournals](docs/journals/README.md#listjournals) - List journals
* [pushJournal](docs/journals/README.md#pushjournal) - Create journal

### [paymentMethods](docs/paymentmethods/README.md)

* [getPaymentMethod](docs/paymentmethods/README.md#getpaymentmethod) - Get payment method
* [listPaymentMethods](docs/paymentmethods/README.md#listpaymentmethods) - List all payment methods

### [payments](docs/payments/README.md)

* [createPayment](docs/payments/README.md#createpayment) - Create payment
* [getCreatePaymentsModel](docs/payments/README.md#getcreatepaymentsmodel) - Get create payment model
* [getPayment](docs/payments/README.md#getpayment) - Get payment
* [listPayments](docs/payments/README.md#listpayments) - List payments

### [purchaseOrders](docs/purchaseorders/README.md)

* [createPurchaseOrder](docs/purchaseorders/README.md#createpurchaseorder) - Create purchase order
* [getCreateUpdatePurchaseOrdersModel](docs/purchaseorders/README.md#getcreateupdatepurchaseordersmodel) - Get create/update purchase order model
* [getPurchaseOrder](docs/purchaseorders/README.md#getpurchaseorder) - Get purchase order
* [listPurchaseOrders](docs/purchaseorders/README.md#listpurchaseorders) - List purchase orders
* [updatePurchaseOrder](docs/purchaseorders/README.md#updatepurchaseorder) - Update purchase order

### [reports](docs/reports/README.md)

* [getAgedCreditorsReport](docs/reports/README.md#getagedcreditorsreport) - Aged creditors report
* [getAgedDebtorsReport](docs/reports/README.md#getageddebtorsreport) - Aged debtors report
* [isAgedCreditorsReportAvailable](docs/reports/README.md#isagedcreditorsreportavailable) - Aged creditors report available
* [isAgedDebtorReportAvailable](docs/reports/README.md#isageddebtorreportavailable) - Aged debtors report available

### [salesOrders](docs/salesorders/README.md)

* [getSalesOrder](docs/salesorders/README.md#getsalesorder) - Get sales order
* [listSalesOrders](docs/salesorders/README.md#listsalesorders) - List sales orders

### [suppliers](docs/suppliers/README.md)

* [createSupplier](docs/suppliers/README.md#createsupplier) - Create suppliers
* [downloadSupplierAttachment](docs/suppliers/README.md#downloadsupplierattachment) - Download supplier attachment
* [getCreateUpdateSuppliersModel](docs/suppliers/README.md#getcreateupdatesuppliersmodel) - Get create/update supplier model
* [getSupplier](docs/suppliers/README.md#getsupplier) - Get supplier
* [getSupplierAttachment](docs/suppliers/README.md#getsupplierattachment) - Get supplier attachment
* [listSupplierAttachments](docs/suppliers/README.md#listsupplierattachments) - List supplier attachments
* [listSuppliers](docs/suppliers/README.md#listsuppliers) - List suppliers
* [putSupplier](docs/suppliers/README.md#putsupplier) - Update supplier

### [taxRates](docs/taxrates/README.md)

* [getTaxRate](docs/taxrates/README.md#gettaxrate) - Get tax rate
* [listTaxRates](docs/taxrates/README.md#listtaxrates) - List all tax rates

### [trackingCategories](docs/trackingcategories/README.md)

* [getTrackingCategory](docs/trackingcategories/README.md#gettrackingcategory) - Get tracking categories
* [listTrackingCategories](docs/trackingcategories/README.md#listtrackingcategories) - List tracking categories

### [transfers](docs/transfers/README.md)

* [createTransfer](docs/transfers/README.md#createtransfer) - Create transfer
* [getCreateTransfersModel](docs/transfers/README.md#getcreatetransfersmodel) - Get create transfer model
* [getTransfer](docs/transfers/README.md#gettransfer) - Get transfer
* [listTransfers](docs/transfers/README.md#listtransfers) - List transfers
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
