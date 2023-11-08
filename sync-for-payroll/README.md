# Sync for Payroll

<!-- Start Codat Library Description -->
Push payroll to accounting platforms.
<!-- End Codat Library Description -->

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @codat/sync-for-payroll
```

### Yarn

```bash
yarn add @codat/sync-for-payroll
```
<!-- End SDK Installation -->

## Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";
import { AccountStatus, AccountType } from "@codat/sync-for-payroll/dist/sdk/models/shared";

(async () => {
    const sdk = new CodatSyncPayroll({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.accounts.create({
        account: {
            currency: "USD",
            currentBalance: 0,
            description: "Invoices the business has issued but has not yet collected payment on.",
            fullyQualifiedCategory: "Asset.Current",
            fullyQualifiedName: "Cash On Hand",
            id: "1b6266d1-1e44-46c5-8eb5-a8f98e03124e",
            metadata: {},
            modifiedDate: "2022-10-23T00:00:00.000Z",
            name: "Accounts Receivable",
            nominalCode: "610",
            sourceModifiedDate: "2022-10-23T00:00:00.000Z",
            status: AccountStatus.Active,
            supplementalData: {
                content: {
                    Money: {
                        blue: "shred",
                    },
                },
            },
            type: AccountType.Asset,
            validDatatypeLinks: [
                {
                    links: ["abnormally"],
                },
            ],
        },
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/sdks/accounts/README.md)

* [create](docs/sdks/accounts/README.md#create) - Create account
* [get](docs/sdks/accounts/README.md#get) - Get account
* [getCreateModel](docs/sdks/accounts/README.md#getcreatemodel) - Get create account model
* [list](docs/sdks/accounts/README.md#list) - List accounts

### [companies](docs/sdks/companies/README.md)

* [create](docs/sdks/companies/README.md#create) - Create company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [get](docs/sdks/companies/README.md#get) - Get company
* [list](docs/sdks/companies/README.md#list) - List companies
* [update](docs/sdks/companies/README.md#update) - Update company

### [companyInfo](docs/sdks/companyinfo/README.md)

* [getAccountingProfile](docs/sdks/companyinfo/README.md#getaccountingprofile) - Get company accounting profile

### [connections](docs/sdks/connections/README.md)

* [create](docs/sdks/connections/README.md#create) - Create connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [list](docs/sdks/connections/README.md#list) - List connections
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

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

### [manageData](docs/sdks/managedata/README.md)

* [getDataStatus](docs/sdks/managedata/README.md#getdatastatus) - Get data status
* [getPullOperation](docs/sdks/managedata/README.md#getpulloperation) - Get pull operation
* [getPushOperation](docs/sdks/managedata/README.md#getpushoperation) - Get push operation
* [list](docs/sdks/managedata/README.md#list) - List push operations
* [listPullOperations](docs/sdks/managedata/README.md#listpulloperations) - List pull operations
* [refreshAllDataTypes](docs/sdks/managedata/README.md#refreshalldatatypes) - Refresh all data
* [refreshDataType](docs/sdks/managedata/README.md#refreshdatatype) - Refresh data type

### [trackingCategories](docs/sdks/trackingcategories/README.md)

* [get](docs/sdks/trackingcategories/README.md#get) - Get tracking categories
* [list](docs/sdks/trackingcategories/README.md#list) - List tracking categories
<!-- End SDK Available Operations -->