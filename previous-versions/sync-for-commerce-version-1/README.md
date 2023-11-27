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
### Example

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";

(async () => {
    const sdk = new CodatSyncCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowPreferences.getConfigTextSyncFlow();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [syncFlowPreferences](docs/sdks/syncflowpreferences/README.md)

* [getConfigTextSyncFlow](docs/sdks/syncflowpreferences/README.md#getconfigtextsyncflow) - Retrieve preferences for text fields on sync flow
* [getSyncFlowUrl](docs/sdks/syncflowpreferences/README.md#getsyncflowurl) - Retrieve sync flow url
* [getVisibleAccounts](docs/sdks/syncflowpreferences/README.md#getvisibleaccounts) - List visible accounts
* [updateConfigTextSyncFlow](docs/sdks/syncflowpreferences/README.md#updateconfigtextsyncflow) - Update preferences for text fields on sync flow
* [updateVisibleAccountsSyncFlow](docs/sdks/syncflowpreferences/README.md#updatevisibleaccountssyncflow) - Update the visible accounts on sync flow

### [companies](docs/sdks/companies/README.md)

* [deleteCompany](docs/sdks/companies/README.md#deletecompany) - Delete a company
* [getCompany](docs/sdks/companies/README.md#getcompany) - Get company
* [updateCompany](docs/sdks/companies/README.md#updatecompany) - Update company

### [connections](docs/sdks/connections/README.md)

* [deleteConnection](docs/sdks/connections/README.md#deleteconnection) - Delete connection
* [getConnection](docs/sdks/connections/README.md#getconnection) - Get connection
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [accountingBankAccounts](docs/sdks/accountingbankaccounts/README.md)

* [getAccountingBankAccount](docs/sdks/accountingbankaccounts/README.md#getaccountingbankaccount) - Get bank account
* [listAccountingBankAccounts](docs/sdks/accountingbankaccounts/README.md#listaccountingbankaccounts) - List bank accounts

### [commerceCustomers](docs/sdks/commercecustomers/README.md)

* [getCommerceCustomer](docs/sdks/commercecustomers/README.md#getcommercecustomer) - Get customer
* [listCommerceCustomers](docs/sdks/commercecustomers/README.md#listcommercecustomers) - List customers

### [commerceCompanyInfo](docs/sdks/commercecompanyinfo/README.md)

* [getCommerceCompanyInfo](docs/sdks/commercecompanyinfo/README.md#getcommercecompanyinfo) - Get company info

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

### [accountingAccounts](docs/sdks/accountingaccounts/README.md)

* [createAccountingAccount](docs/sdks/accountingaccounts/README.md#createaccountingaccount) - Create account
* [getAccountingAccount](docs/sdks/accountingaccounts/README.md#getaccountingaccount) - Get account
* [listAccountingAccounts](docs/sdks/accountingaccounts/README.md#listaccountingaccounts) - List accounts

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

### [refreshData](docs/sdks/refreshdata/README.md)

* [all](docs/sdks/refreshdata/README.md#all) - Refresh all data
* [byDataType](docs/sdks/refreshdata/README.md#bydatatype) - Refresh data type
* [getCompanyDataStatus](docs/sdks/refreshdata/README.md#getcompanydatastatus) - Get data status
* [getPullOperation](docs/sdks/refreshdata/README.md#getpulloperation) - Get pull operation
* [listPullOperations](docs/sdks/refreshdata/README.md#listpulloperations) - List pull operations

### [accountingCompanyInfo](docs/sdks/accountingcompanyinfo/README.md)

* [getAccountingCompanyInfo](docs/sdks/accountingcompanyinfo/README.md#getaccountingcompanyinfo) - Get company info
* [refresh](docs/sdks/accountingcompanyinfo/README.md#refresh) - Refresh company info

### [pushData](docs/sdks/pushdata/README.md)

* [getOperation](docs/sdks/pushdata/README.md#getoperation) - Get push operation
* [listOperations](docs/sdks/pushdata/README.md#listoperations) - List push operations

### [sync](docs/sdks/sync/README.md)

* [getSyncStatus](docs/sdks/sync/README.md#getsyncstatus) - Get status for a company's syncs
* [requestSync](docs/sdks/sync/README.md#requestsync) - Sync new
* [requestSyncForDateRange](docs/sdks/sync/README.md#requestsyncfordaterange) - Sync range

### [configuration](docs/sdks/configuration/README.md)

* [getConfiguration](docs/sdks/configuration/README.md#getconfiguration) - Retrieve config preferences set for a company
* [setConfiguration](docs/sdks/configuration/README.md#setconfiguration) - Create or update configuration

### [integrations](docs/sdks/integrations/README.md)

* [getIntegrationBranding](docs/sdks/integrations/README.md#getintegrationbranding) - Get branding for an integration
* [listIntegrations](docs/sdks/integrations/README.md#listintegrations) - List integrations

### [companyManagement](docs/sdks/companymanagement/README.md)

* [createCompany](docs/sdks/companymanagement/README.md#createcompany) - Create sync for commerce company
* [createConnection](docs/sdks/companymanagement/README.md#createconnection) - Create connection
* [listCompanies](docs/sdks/companymanagement/README.md#listcompanies) - List companies
* [listConnections](docs/sdks/companymanagement/README.md#listconnections) - List data connections
* [updateConnection](docs/sdks/companymanagement/README.md#updateconnection) - Update data connection
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->



<!-- End Dev Containers -->



<!-- Start Retries -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";

(async() => {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.syncFlowPreferences.getConfigTextSyncFlow(, {
  strategy: "backoff",
  backoff: {
    initialInterval: 1,
    maxInterval: 50,
    exponent: 1.1,
    maxElapsedTime: 100,
  },
  retryConnectionErrors: false,
});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";

(async () => {
    const sdk = new CodatSyncCommerce({
        retry_config: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowPreferences.getConfigTextSyncFlow();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Retries -->



<!-- Start Error Handling -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";

(async () => {
    const sdk = new CodatSyncCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    let res;
    try {
        res = await sdk.syncFlowPreferences.getConfigTextSyncFlow();
    } catch (e) {}

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Error Handling -->



<!-- Start Server Selection -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.codat.io` | None |

#### Example

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";

(async () => {
    const sdk = new CodatSyncCommerce({
        serverIdx: 0,
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowPreferences.getConfigTextSyncFlow();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";

(async () => {
    const sdk = new CodatSyncCommerce({
        serverURL: "https://api.codat.io",
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowPreferences.getConfigTextSyncFlow();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
## Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @codat/sync-for-commerce-version-1 import CodatSyncCommerce;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new CodatSyncCommerce({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Authentication -->

## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `authHeader` | apiKey       | API key      |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";

(async () => {
    const sdk = new CodatSyncCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowPreferences.getConfigTextSyncFlow();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Authentication -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)