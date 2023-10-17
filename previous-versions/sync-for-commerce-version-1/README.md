# Sync for Commerce version 1

<!-- Start Codat Library Description -->
﻿Embedded accounting integrations for POS and eCommerce platforms.
<!-- End Codat Library Description -->

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @codat/sync-for-commerce-version-1
```

### Yarn

```bash
yarn add @codat/sync-for-commerce-version-1
```
<!-- End SDK Installation -->

## Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";
import { CreateAccountingAccountResponse } from "@codat/sync-for-commerce-version-1/dist/sdk/models/operations";
import { AccountStatus, AccountType } from "@codat/sync-for-commerce-version-1/dist/sdk/models/shared";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingAccounts.createAccountingAccount({
  accountingAccount: {
    currency: "USD",
    currentBalance: 0,
    description: "Invoices the business has issued but has not yet collected payment on.",
    fullyQualifiedCategory: "Asset.Current",
    fullyQualifiedName: "Fixed Asset",
    id: "1b6266d1-1e44-46c5-8eb5-a8f98e03124e",
    isBankAccount: false,
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    name: "Accounts Receivable",
    nominalCode: "610",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: AccountStatus.Active,
    type: AccountType.Asset,
    validDatatypeLinks: [
      {
        links: [
          "unde",
        ],
        property: "nulla",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 544883,
}).then((res: CreateAccountingAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountingAccounts](docs/sdks/accountingaccounts/README.md)

* [createAccountingAccount](docs/sdks/accountingaccounts/README.md#createaccountingaccount) - Create account
* [getAccountingAccount](docs/sdks/accountingaccounts/README.md#getaccountingaccount) - Get account
* [listAccountingAccounts](docs/sdks/accountingaccounts/README.md#listaccountingaccounts) - List accounts

### [accountingBankAccounts](docs/sdks/accountingbankaccounts/README.md)

* [getAccountingBankAccount](docs/sdks/accountingbankaccounts/README.md#getaccountingbankaccount) - Get bank account
* [listAccountingBankAccounts](docs/sdks/accountingbankaccounts/README.md#listaccountingbankaccounts) - List bank accounts

### [accountingCompanyInfo](docs/sdks/accountingcompanyinfo/README.md)

* [getAccountingCompanyInfo](docs/sdks/accountingcompanyinfo/README.md#getaccountingcompanyinfo) - Get company info
* [refresh](docs/sdks/accountingcompanyinfo/README.md#refresh) - Refresh company info

### [accountingCreditNotes](docs/sdks/accountingcreditnotes/README.md)

* [createAccountingCreditNote](docs/sdks/accountingcreditnotes/README.md#createaccountingcreditnote) - Create credit note

### [accountingCustomers](docs/sdks/accountingcustomers/README.md)

* [createAccountingCustomer](docs/sdks/accountingcustomers/README.md#createaccountingcustomer) - Create customer

### [accountingDirectIncomes](docs/sdks/accountingdirectincomes/README.md)

* [createAccountingDirectIncome](docs/sdks/accountingdirectincomes/README.md#createaccountingdirectincome) - Create direct income

### [accountingInvoices](docs/sdks/accountinginvoices/README.md)

* [createAccountingInvoice](docs/sdks/accountinginvoices/README.md#createaccountinginvoice) - Create invoice

### [accountingJournalEntries](docs/sdks/accountingjournalentries/README.md)

* [createAccountingJournalEntry](docs/sdks/accountingjournalentries/README.md#createaccountingjournalentry) - Create journal entry

### [accountingPayments](docs/sdks/accountingpayments/README.md)

* [createAccountingPayment](docs/sdks/accountingpayments/README.md#createaccountingpayment) - Create payment

### [commerceCompanyInfo](docs/sdks/commercecompanyinfo/README.md)

* [getCommerceCompanyInfo](docs/sdks/commercecompanyinfo/README.md#getcommercecompanyinfo) - Get company info

### [commerceCustomers](docs/sdks/commercecustomers/README.md)

* [getCommerceCustomer](docs/sdks/commercecustomers/README.md#getcommercecustomer) - Get customer
* [listCommerceCustomers](docs/sdks/commercecustomers/README.md#listcommercecustomers) - List customers

### [commerceLocations](docs/sdks/commercelocations/README.md)

* [getCommerceLocation](docs/sdks/commercelocations/README.md#getcommercelocation) - Get location
* [listCommerceLocations](docs/sdks/commercelocations/README.md#listcommercelocations) - List locations

### [commerceOrders](docs/sdks/commerceorders/README.md)

* [getCommerceOrder](docs/sdks/commerceorders/README.md#getcommerceorder) - Get order
* [listCommerceOrders](docs/sdks/commerceorders/README.md#listcommerceorders) - List orders

### [commercePayments](docs/sdks/commercepayments/README.md)

* [getCommercePayment](docs/sdks/commercepayments/README.md#getcommercepayment) - Get payment
* [getMethod](docs/sdks/commercepayments/README.md#getmethod) - Get payment method
* [listCommercePayments](docs/sdks/commercepayments/README.md#listcommercepayments) - List payments
* [listMethods](docs/sdks/commercepayments/README.md#listmethods) - List payment methods

### [commerceProducts](docs/sdks/commerceproducts/README.md)

* [getCommerceProduct](docs/sdks/commerceproducts/README.md#getcommerceproduct) - Get product
* [listCommerceProducts](docs/sdks/commerceproducts/README.md#listcommerceproducts) - List products

### [commerceTransactions](docs/sdks/commercetransactions/README.md)

* [getCommerceTransaction](docs/sdks/commercetransactions/README.md#getcommercetransaction) - Get transaction
* [listCommerceTransactions](docs/sdks/commercetransactions/README.md#listcommercetransactions) - List transactions

### [companies](docs/sdks/companies/README.md)

* [deleteCompany](docs/sdks/companies/README.md#deletecompany) - Delete a company
* [getCompany](docs/sdks/companies/README.md#getcompany) - Get company
* [updateCompany](docs/sdks/companies/README.md#updatecompany) - Update company

### [companyManagement](docs/sdks/companymanagement/README.md)

* [createCompany](docs/sdks/companymanagement/README.md#createcompany) - Create Sync for Commerce company
* [createConnection](docs/sdks/companymanagement/README.md#createconnection) - Create connection
* [listCompanies](docs/sdks/companymanagement/README.md#listcompanies) - List companies
* [listConnections](docs/sdks/companymanagement/README.md#listconnections) - List data connections
* [updateConnection](docs/sdks/companymanagement/README.md#updateconnection) - Update data connection

### [configuration](docs/sdks/configuration/README.md)

* [getConfiguration](docs/sdks/configuration/README.md#getconfiguration) - Retrieve config preferences set for a company.
* [setConfiguration](docs/sdks/configuration/README.md#setconfiguration) - Create or update configuration.

### [connections](docs/sdks/connections/README.md)

* [deleteConnection](docs/sdks/connections/README.md#deleteconnection) - Delete connection
* [getConnection](docs/sdks/connections/README.md#getconnection) - Get connection
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [integrations](docs/sdks/integrations/README.md)

* [getIntegrationBranding](docs/sdks/integrations/README.md#getintegrationbranding) - Get branding for an integration
* [listIntegrations](docs/sdks/integrations/README.md#listintegrations) - List information on Codat's supported integrations

### [pushData](docs/sdks/pushdata/README.md)

* [getOperation](docs/sdks/pushdata/README.md#getoperation) - Get push operation
* [listOperations](docs/sdks/pushdata/README.md#listoperations) - List push operations

### [refreshData](docs/sdks/refreshdata/README.md)

* [all](docs/sdks/refreshdata/README.md#all) - Refresh all data
* [byDataType](docs/sdks/refreshdata/README.md#bydatatype) - Refresh data type
* [getCompanyDataStatus](docs/sdks/refreshdata/README.md#getcompanydatastatus) - Get data status
* [getPullOperation](docs/sdks/refreshdata/README.md#getpulloperation) - Get pull operation
* [listPullOperations](docs/sdks/refreshdata/README.md#listpulloperations) - List pull operations

### [sync](docs/sdks/sync/README.md)

* [getSyncStatus](docs/sdks/sync/README.md#getsyncstatus) - Get status for a company's syncs
* [requestSync](docs/sdks/sync/README.md#requestsync) - Sync new
* [requestSyncForDateRange](docs/sdks/sync/README.md#requestsyncfordaterange) - Sync range

### [syncFlowPreferences](docs/sdks/syncflowpreferences/README.md)

* [getConfigTextSyncFlow](docs/sdks/syncflowpreferences/README.md#getconfigtextsyncflow) - Retrieve preferences for text fields on Sync Flow
* [getSyncFlowUrl](docs/sdks/syncflowpreferences/README.md#getsyncflowurl) - Retrieve sync flow url
* [getVisibleAccounts](docs/sdks/syncflowpreferences/README.md#getvisibleaccounts) - List visible accounts
* [updateConfigTextSyncFlow](docs/sdks/syncflowpreferences/README.md#updateconfigtextsyncflow) - Update preferences for text fields on sync flow
* [updateVisibleAccountsSyncFlow](docs/sdks/syncflowpreferences/README.md#updatevisibleaccountssyncflow) - Update the visible accounts on Sync Flow
<!-- End SDK Available Operations -->