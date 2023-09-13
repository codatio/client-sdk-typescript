# Sync for Expenses version 1
    


## SDK Installation

### NPM

```bash
npm add @codat/sync-for-expenses-version-1
```

### Yarn

```bash
yarn add @codat/sync-for-expenses-version-1
```## SDK Installation

### NPM

```bash
npm add @codat/sync-for-expenses-version-1
```

### Yarn

```bash
yarn add @codat/sync-for-expenses-version-1
```## SDK Installation

### NPM

```bash
npm add @codat/sync-for-expenses-version-1
```

### Yarn

```bash
yarn add @codat/sync-for-expenses-version-1
```<!-- Start SDK Installation -->

<!-- End SDK Installation -->

## Example Usage


```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";
import { CreateCompanyResponse } from "@codat/sync-for-expenses-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companies.createCompany({
  description: "Requested early access to the new financing scheme.",
  name: "Bank of Dave",
}).then((res: CreateCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";
import { CreateCompanyResponse } from "@codat/sync-for-expenses-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companies.createCompany({
  description: "Requested early access to the new financing scheme.",
  name: "Bank of Dave",
}).then((res: CreateCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";
import { CreateCompanyResponse } from "@codat/sync-for-expenses-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companies.createCompany({
  description: "Requested early access to the new financing scheme.",
  name: "Bank of Dave",
}).then((res: CreateCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

## Available Resources and Operations


### [companies](docs/sdks/companies/README.md)

* [createCompany](docs/sdks/companies/README.md#createcompany) - Create company
* [deleteCompany](docs/sdks/companies/README.md#deletecompany) - Delete a company
* [getCompany](docs/sdks/companies/README.md#getcompany) - Get company
* [listCompanies](docs/sdks/companies/README.md#listcompanies) - List companies
* [updateCompany](docs/sdks/companies/README.md#updatecompany) - Update company

### [configuration](docs/sdks/configuration/README.md)

* [getCompanyConfiguration](docs/sdks/configuration/README.md#getcompanyconfiguration) - Get company configuration
* [saveCompanyConfiguration](docs/sdks/configuration/README.md#savecompanyconfiguration) - Set company configuration

### [connections](docs/sdks/connections/README.md)

* [createConnection](docs/sdks/connections/README.md#createconnection) - Create connection
* [createPartnerExpenseConnection](docs/sdks/connections/README.md#createpartnerexpenseconnection) - Create Partner Expense connection
* [deleteConnection](docs/sdks/connections/README.md#deleteconnection) - Delete connection
* [getConnection](docs/sdks/connections/README.md#getconnection) - Get connection
* [listConnections](docs/sdks/connections/README.md#listconnections) - List connections
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [expenses](docs/sdks/expenses/README.md)

* [createExpenseDataset](docs/sdks/expenses/README.md#createexpensedataset) - Create expense-transactions
* [updateExpenseDataset](docs/sdks/expenses/README.md#updateexpensedataset) - Update expense-transactions
* [uploadAttachment](docs/sdks/expenses/README.md#uploadattachment) - Upload attachment

### [mappingOptions](docs/sdks/mappingoptions/README.md)

* [getMappingOptions](docs/sdks/mappingoptions/README.md#getmappingoptions) - Mapping options

### [sync](docs/sdks/sync/README.md)

* [intiateSync](docs/sdks/sync/README.md#intiatesync) - Initiate sync

### [syncStatus](docs/sdks/syncstatus/README.md)

* [getLastSuccessfulSync](docs/sdks/syncstatus/README.md#getlastsuccessfulsync) - Last successful sync
* [getLatestSync](docs/sdks/syncstatus/README.md#getlatestsync) - Latest sync status
* [getSyncById](docs/sdks/syncstatus/README.md#getsyncbyid) - Get Sync status
* [listSyncs](docs/sdks/syncstatus/README.md#listsyncs) - List sync statuses

### [transactionStatus](docs/sdks/transactionstatus/README.md)

* [getSyncTransaction](docs/sdks/transactionstatus/README.md#getsynctransaction) - Get Sync Transaction
* [listSyncTransactions](docs/sdks/transactionstatus/README.md#listsynctransactions) - Get Sync transactions## Available Resources and Operations


### [companies](docs/sdks/companies/README.md)

* [createCompany](docs/sdks/companies/README.md#createcompany) - Create company
* [deleteCompany](docs/sdks/companies/README.md#deletecompany) - Delete a company
* [getCompany](docs/sdks/companies/README.md#getcompany) - Get company
* [listCompanies](docs/sdks/companies/README.md#listcompanies) - List companies
* [updateCompany](docs/sdks/companies/README.md#updatecompany) - Update company

### [configuration](docs/sdks/configuration/README.md)

* [getCompanyConfiguration](docs/sdks/configuration/README.md#getcompanyconfiguration) - Get company configuration
* [saveCompanyConfiguration](docs/sdks/configuration/README.md#savecompanyconfiguration) - Set company configuration

### [connections](docs/sdks/connections/README.md)

* [createConnection](docs/sdks/connections/README.md#createconnection) - Create connection
* [createPartnerExpenseConnection](docs/sdks/connections/README.md#createpartnerexpenseconnection) - Create Partner Expense connection
* [deleteConnection](docs/sdks/connections/README.md#deleteconnection) - Delete connection
* [getConnection](docs/sdks/connections/README.md#getconnection) - Get connection
* [listConnections](docs/sdks/connections/README.md#listconnections) - List connections
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [expenses](docs/sdks/expenses/README.md)

* [createExpenseDataset](docs/sdks/expenses/README.md#createexpensedataset) - Create expense-transactions
* [updateExpenseDataset](docs/sdks/expenses/README.md#updateexpensedataset) - Update expense-transactions
* [uploadAttachment](docs/sdks/expenses/README.md#uploadattachment) - Upload attachment

### [mappingOptions](docs/sdks/mappingoptions/README.md)

* [getMappingOptions](docs/sdks/mappingoptions/README.md#getmappingoptions) - Mapping options

### [sync](docs/sdks/sync/README.md)

* [initiateSync](docs/sdks/sync/README.md#initiatesync) - Initiate sync

### [syncStatus](docs/sdks/syncstatus/README.md)

* [getLastSuccessfulSync](docs/sdks/syncstatus/README.md#getlastsuccessfulsync) - Last successful sync
* [getLatestSync](docs/sdks/syncstatus/README.md#getlatestsync) - Latest sync status
* [getSyncById](docs/sdks/syncstatus/README.md#getsyncbyid) - Get Sync status
* [listSyncs](docs/sdks/syncstatus/README.md#listsyncs) - List sync statuses

### [transactionStatus](docs/sdks/transactionstatus/README.md)

* [getSyncTransaction](docs/sdks/transactionstatus/README.md#getsynctransaction) - Get Sync Transaction
* [listSyncTransactions](docs/sdks/transactionstatus/README.md#listsynctransactions) - Get Sync transactions## Available Resources and Operations


### [companies](docs/sdks/companies/README.md)

* [createCompany](docs/sdks/companies/README.md#createcompany) - Create company
* [deleteCompany](docs/sdks/companies/README.md#deletecompany) - Delete a company
* [getCompany](docs/sdks/companies/README.md#getcompany) - Get company
* [listCompanies](docs/sdks/companies/README.md#listcompanies) - List companies
* [updateCompany](docs/sdks/companies/README.md#updatecompany) - Update company

### [configuration](docs/sdks/configuration/README.md)

* [getCompanyConfiguration](docs/sdks/configuration/README.md#getcompanyconfiguration) - Get company configuration
* [saveCompanyConfiguration](docs/sdks/configuration/README.md#savecompanyconfiguration) - Set company configuration

### [connections](docs/sdks/connections/README.md)

* [createConnection](docs/sdks/connections/README.md#createconnection) - Create connection
* [createPartnerExpenseConnection](docs/sdks/connections/README.md#createpartnerexpenseconnection) - Create Partner Expense connection
* [deleteConnection](docs/sdks/connections/README.md#deleteconnection) - Delete connection
* [getConnection](docs/sdks/connections/README.md#getconnection) - Get connection
* [listConnections](docs/sdks/connections/README.md#listconnections) - List connections
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [expenses](docs/sdks/expenses/README.md)

* [createExpenseDataset](docs/sdks/expenses/README.md#createexpensedataset) - Create expense-transactions
* [updateExpenseDataset](docs/sdks/expenses/README.md#updateexpensedataset) - Update expense-transactions
* [uploadAttachment](docs/sdks/expenses/README.md#uploadattachment) - Upload attachment

### [mappingOptions](docs/sdks/mappingoptions/README.md)

* [getMappingOptions](docs/sdks/mappingoptions/README.md#getmappingoptions) - Mapping options

### [sync](docs/sdks/sync/README.md)

* [initiateSync](docs/sdks/sync/README.md#initiatesync) - Initiate sync

### [syncStatus](docs/sdks/syncstatus/README.md)

* [getLastSuccessfulSync](docs/sdks/syncstatus/README.md#getlastsuccessfulsync) - Last successful sync
* [getLatestSync](docs/sdks/syncstatus/README.md#getlatestsync) - Latest sync status
* [getSyncById](docs/sdks/syncstatus/README.md#getsyncbyid) - Get Sync status
* [listSyncs](docs/sdks/syncstatus/README.md#listsyncs) - List sync statuses

### [transactionStatus](docs/sdks/transactionstatus/README.md)

* [getSyncTransaction](docs/sdks/transactionstatus/README.md#getsynctransaction) - Get Sync Transaction
* [listSyncTransactions](docs/sdks/transactionstatus/README.md#listsynctransactions) - Get Sync transactions<!-- Start SDK Available Operations -->

<!-- End SDK Available Operations -->
### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
