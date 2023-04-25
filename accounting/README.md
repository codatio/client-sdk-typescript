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

* [getAccountTransaction](docs/accounttransactions/getaccounttransaction.md) - Get account transaction
* [listAccountTransactions](docs/accounttransactions/listaccounttransactions.md) - List account transactions

### [accounts](docs/accounts/README.md)

* [createAccount](docs/accounts/createaccount.md) - Create account
* [getAccount](docs/accounts/getaccount.md) - Get account
* [getCreateChartOfAccountsModel](docs/accounts/getcreatechartofaccountsmodel.md) - Get create account model
* [listAccounts](docs/accounts/listaccounts.md) - List accounts

### [bankAccountTransactions](docs/bankaccounttransactions/README.md)

* [createBankTransactions](docs/bankaccounttransactions/createbanktransactions.md) - Create bank transactions
* [getCreateBankAccountModel](docs/bankaccounttransactions/getcreatebankaccountmodel.md) - List push options for bank account bank transactions
* [listBankAccountTransactions](docs/bankaccounttransactions/listbankaccounttransactions.md) - List bank transactions for bank account
* [listBankTransactions](docs/bankaccounttransactions/listbanktransactions.md) - List all bank transactions

### [bankAccounts](docs/bankaccounts/README.md)

* [createBankAccount](docs/bankaccounts/createbankaccount.md) - Create bank account
* [getAllBankAccount](docs/bankaccounts/getallbankaccount.md) - Get bank account
* [getBankAccount](docs/bankaccounts/getbankaccount.md) - Get bank account
* [getCreateUpdateBankAccountsModel](docs/bankaccounts/getcreateupdatebankaccountsmodel.md) - Get create/update bank account model
* [listBankAccounts](docs/bankaccounts/listbankaccounts.md) - List bank accounts
* [updateBankAccount](docs/bankaccounts/updatebankaccount.md) - Update bank account

### [billCreditNotes](docs/billcreditnotes/README.md)

* [createBillCreditNote](docs/billcreditnotes/createbillcreditnote.md) - Create bill credit note
* [getBillCreditNote](docs/billcreditnotes/getbillcreditnote.md) - Get bill credit note
* [getCreateUpdateBillCreditNotesModel](docs/billcreditnotes/getcreateupdatebillcreditnotesmodel.md) - Get create/update bill credit note model
* [listBillCreditNotes](docs/billcreditnotes/listbillcreditnotes.md) - List bill credit notes
* [updateBillCreditNote](docs/billcreditnotes/updatebillcreditnote.md) - Update bill credit note

### [billPayments](docs/billpayments/README.md)

* [createBillPayment](docs/billpayments/createbillpayment.md) - Create bill payments
* [deleteBillPayment](docs/billpayments/deletebillpayment.md) - Delete bill payment
* [getBillPayments](docs/billpayments/getbillpayments.md) - Get bill payment
* [getCreateBillPaymentsModel](docs/billpayments/getcreatebillpaymentsmodel.md) - Get create bill payment model
* [listBillPayments](docs/billpayments/listbillpayments.md) - List bill payments

### [bills](docs/bills/README.md)

* [createBill](docs/bills/createbill.md) - Create bill
* [deleteBill](docs/bills/deletebill.md) - Delete bill
* [downloadBillAttachment](docs/bills/downloadbillattachment.md) - Download bill attachment
* [getBill](docs/bills/getbill.md) - Get bill
* [getBillAttachment](docs/bills/getbillattachment.md) - Get bill attachment
* [getBillAttachments](docs/bills/getbillattachments.md) - List bill attachments
* [getCreateUpdateBillsModel](docs/bills/getcreateupdatebillsmodel.md) - Get create/update bill model
* [listBills](docs/bills/listbills.md) - List bills
* [updateBill](docs/bills/updatebill.md) - Update bill
* [uploadBillAttachments](docs/bills/uploadbillattachments.md) - Upload bill attachments

### [companyInfo](docs/companyinfo/README.md)

* [getCompanyInfo](docs/companyinfo/getcompanyinfo.md) - Get company info
* [postSyncInfo](docs/companyinfo/postsyncinfo.md) - Refresh company info

### [creditNotes](docs/creditnotes/README.md)

* [createCreditNote](docs/creditnotes/createcreditnote.md) - Create credit note
* [getCreateUpdateCreditNotesModel](docs/creditnotes/getcreateupdatecreditnotesmodel.md) - Get create/update credit note model
* [getCreditNote](docs/creditnotes/getcreditnote.md) - Get credit note
* [listCreditNotes](docs/creditnotes/listcreditnotes.md) - List credit notes
* [updateCreditNote](docs/creditnotes/updatecreditnote.md) - Update creditNote

### [customers](docs/customers/README.md)

* [createCustomer](docs/customers/createcustomer.md) - Create customer
* [downloadCustomerAttachment](docs/customers/downloadcustomerattachment.md) - Download customer attachment
* [getCreateUpdateCustomersModel](docs/customers/getcreateupdatecustomersmodel.md) - Get create/update customer model
* [getCustomer](docs/customers/getcustomer.md) - Get customer
* [getCustomerAttachment](docs/customers/getcustomerattachment.md) - Get customer attachment
* [getCustomerAttachments](docs/customers/getcustomerattachments.md) - List customer attachments
* [getCustomers](docs/customers/getcustomers.md) - List customers
* [updateCustomer](docs/customers/updatecustomer.md) - Update customer

### [directCosts](docs/directcosts/README.md)

* [createDirectCost](docs/directcosts/createdirectcost.md) - Create direct cost
* [downloadDirectCostAttachment](docs/directcosts/downloaddirectcostattachment.md) - Download direct cost attachment
* [getCreateDirectCostsModel](docs/directcosts/getcreatedirectcostsmodel.md) - Get create direct cost model
* [getDirectCost](docs/directcosts/getdirectcost.md) - Get direct cost
* [getDirectCostAttachment](docs/directcosts/getdirectcostattachment.md) - Get direct cost attachment
* [getDirectCosts](docs/directcosts/getdirectcosts.md) - List direct costs
* [listDirectCostAttachments](docs/directcosts/listdirectcostattachments.md) - List direct cost attachments
* [uploadDirectCostAttachment](docs/directcosts/uploaddirectcostattachment.md) - Upload direct cost attachment

### [directIncomes](docs/directincomes/README.md)

* [createDirectIncome](docs/directincomes/createdirectincome.md) - Create direct income
* [downloadDirectIncomeAttachment](docs/directincomes/downloaddirectincomeattachment.md) - Download direct income attachment
* [getCreateDirectIncomesModel](docs/directincomes/getcreatedirectincomesmodel.md) - Get create direct income model
* [getDirectIncome](docs/directincomes/getdirectincome.md) - Get direct income
* [getDirectIncomeAttachment](docs/directincomes/getdirectincomeattachment.md) - Get direct income attachment
* [getDirectIncomes](docs/directincomes/getdirectincomes.md) - Get direct incomes
* [listDirectIncomeAttachments](docs/directincomes/listdirectincomeattachments.md) - List direct income attachments
* [uploadDirectIncomeAttachment](docs/directincomes/uploaddirectincomeattachment.md) - Create direct income attachment

### [financials](docs/financials/README.md)

* [getBalanceSheet](docs/financials/getbalancesheet.md) - Get balance sheet
* [getCashFlowStatement](docs/financials/getcashflowstatement.md) - Get cash flow statement
* [getProfitAndLoss](docs/financials/getprofitandloss.md) - Get profit and loss

### [invoices](docs/invoices/README.md)

* [downloadInvoicePdf](docs/invoices/downloadinvoicepdf.md) - Get invoice as PDF
* [createInvoice](docs/invoices/createinvoice.md) - Create invoice
* [deleteInvoice](docs/invoices/deleteinvoice.md) - Delete invoice
* [downloadInvoiceAttachment](docs/invoices/downloadinvoiceattachment.md) - Download invoice attachment
* [getCreateUpdateInvoicesModel](docs/invoices/getcreateupdateinvoicesmodel.md) - Get create/update invoice model
* [getInvoice](docs/invoices/getinvoice.md) - Get invoice
* [getInvoiceAttachment](docs/invoices/getinvoiceattachment.md) - Get invoice attachment
* [getInvoiceAttachments](docs/invoices/getinvoiceattachments.md) - Get invoice attachments
* [listInvoices](docs/invoices/listinvoices.md) - List invoices
* [updateInvoice](docs/invoices/updateinvoice.md) - Update invoice
* [uploadInvoiceAttachment](docs/invoices/uploadinvoiceattachment.md) - Push invoice attachment

### [items](docs/items/README.md)

* [createItem](docs/items/createitem.md) - Create item
* [getCreateItemsModel](docs/items/getcreateitemsmodel.md) - Get create item model
* [getItem](docs/items/getitem.md) - Get item
* [listItems](docs/items/listitems.md) - List items

### [journalEntries](docs/journalentries/README.md)

* [createJournalEntry](docs/journalentries/createjournalentry.md) - Create journal entry
* [deleteJournalEntry](docs/journalentries/deletejournalentry.md) - Delete journal entry
* [getCreateJournalEntriesModel](docs/journalentries/getcreatejournalentriesmodel.md) - Get create journal entry model
* [getJournalEntry](docs/journalentries/getjournalentry.md) - Get journal entry
* [listJournalEntries](docs/journalentries/listjournalentries.md) - List journal entries

### [journals](docs/journals/README.md)

* [getCreateJournalsModel](docs/journals/getcreatejournalsmodel.md) - Get create journal model
* [getJournal](docs/journals/getjournal.md) - Get journal
* [listJournals](docs/journals/listjournals.md) - List journals
* [pushJournal](docs/journals/pushjournal.md) - Create journal

### [paymentMethods](docs/paymentmethods/README.md)

* [getPaymentMethod](docs/paymentmethods/getpaymentmethod.md) - Get payment method
* [listPaymentMethods](docs/paymentmethods/listpaymentmethods.md) - List all payment methods

### [payments](docs/payments/README.md)

* [createPayment](docs/payments/createpayment.md) - Create payment
* [getCreatePaymentsModel](docs/payments/getcreatepaymentsmodel.md) - Get create payment model
* [getPayment](docs/payments/getpayment.md) - Get payment
* [listPayments](docs/payments/listpayments.md) - List payments

### [purchaseOrders](docs/purchaseorders/README.md)

* [createPurchaseOrder](docs/purchaseorders/createpurchaseorder.md) - Create purchase order
* [getCreateUpdatePurchaseOrdersModel](docs/purchaseorders/getcreateupdatepurchaseordersmodel.md) - Get create/update purchase order model
* [getPurchaseOrder](docs/purchaseorders/getpurchaseorder.md) - Get purchase order
* [listPurchaseOrders](docs/purchaseorders/listpurchaseorders.md) - List purchase orders
* [updatePurchaseOrder](docs/purchaseorders/updatepurchaseorder.md) - Update purchase order

### [reports](docs/reports/README.md)

* [getAgedCreditorsReport](docs/reports/getagedcreditorsreport.md) - Aged creditors report
* [getAgedDebtorsReport](docs/reports/getageddebtorsreport.md) - Aged debtors report
* [isAgedCreditorsReportAvailable](docs/reports/isagedcreditorsreportavailable.md) - Aged creditors report available
* [isAgedDebtorReportAvailable](docs/reports/isageddebtorreportavailable.md) - Aged debtors report available

### [salesOrders](docs/salesorders/README.md)

* [getSalesOrder](docs/salesorders/getsalesorder.md) - Get sales order
* [listSalesOrders](docs/salesorders/listsalesorders.md) - List sales orders

### [suppliers](docs/suppliers/README.md)

* [createSupplier](docs/suppliers/createsupplier.md) - Create suppliers
* [downloadSupplierAttachment](docs/suppliers/downloadsupplierattachment.md) - Download supplier attachment
* [getCreateUpdateSuppliersModel](docs/suppliers/getcreateupdatesuppliersmodel.md) - Get create/update supplier model
* [getSupplier](docs/suppliers/getsupplier.md) - Get supplier
* [getSupplierAttachment](docs/suppliers/getsupplierattachment.md) - Get supplier attachment
* [listSupplierAttachments](docs/suppliers/listsupplierattachments.md) - List supplier attachments
* [listSuppliers](docs/suppliers/listsuppliers.md) - List suppliers
* [putSupplier](docs/suppliers/putsupplier.md) - Update supplier

### [taxRates](docs/taxrates/README.md)

* [getTaxRate](docs/taxrates/gettaxrate.md) - Get tax rate
* [listTaxRates](docs/taxrates/listtaxrates.md) - List all tax rates

### [trackingCategories](docs/trackingcategories/README.md)

* [getTrackingCategory](docs/trackingcategories/gettrackingcategory.md) - Get tracking categories
* [listTrackingCategories](docs/trackingcategories/listtrackingcategories.md) - List tracking categories

### [transfers](docs/transfers/README.md)

* [createTransfer](docs/transfers/createtransfer.md) - Create transfer
* [getCreateTransfersModel](docs/transfers/getcreatetransfersmodel.md) - Get create transfer model
* [getTransfer](docs/transfers/gettransfer.md) - Get transfer
* [listTransfers](docs/transfers/listtransfers.md) - List transfers
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
