# Sync for Payables

<!-- Start Codat Library Description -->
Streamline your customers' accounts payable workflow.
<!-- End Codat Library Description -->

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @codat/sync-for-payables
```

### Yarn

```bash
yarn add @codat/sync-for-payables
```
<!-- End SDK Installation -->

## Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { AccountStatus, AccountType } from "@codat/sync-for-payables/dist/sdk/models/shared";

(async () => {
    const sdk = new CodatSyncPayables({
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
                    key: {
                        key: "string",
                    },
                },
            },
            type: AccountType.Asset,
            validDatatypeLinks: [
                {
                    links: ["string"],
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

### [billCreditNotes](docs/sdks/billcreditnotes/README.md)

* [create](docs/sdks/billcreditnotes/README.md#create) - Create bill credit note
* [get](docs/sdks/billcreditnotes/README.md#get) - Get bill credit note
* [getCreateUpdateModel](docs/sdks/billcreditnotes/README.md#getcreateupdatemodel) - Get create/update bill credit note model
* [list](docs/sdks/billcreditnotes/README.md#list) - List bill credit notes
* [update](docs/sdks/billcreditnotes/README.md#update) - Update bill credit note

### [billPayments](docs/sdks/billpayments/README.md)

* [create](docs/sdks/billpayments/README.md#create) - Create bill payments
* [delete](docs/sdks/billpayments/README.md#delete) - Delete bill payment
* [get](docs/sdks/billpayments/README.md#get) - Get bill payment
* [getCreateModel](docs/sdks/billpayments/README.md#getcreatemodel) - Get create bill payment model
* [list](docs/sdks/billpayments/README.md#list) - List bill payments

### [bills](docs/sdks/bills/README.md)

* [create](docs/sdks/bills/README.md#create) - Create bill
* [delete](docs/sdks/bills/README.md#delete) - Delete bill
* [deleteAttachment](docs/sdks/bills/README.md#deleteattachment) - Delete bill attachment
* [downloadAttachment](docs/sdks/bills/README.md#downloadattachment) - Download bill attachment
* [get](docs/sdks/bills/README.md#get) - Get bill
* [getAttachment](docs/sdks/bills/README.md#getattachment) - Get bill attachment
* [getCreateUpdateModel](docs/sdks/bills/README.md#getcreateupdatemodel) - Get create/update bill model
* [list](docs/sdks/bills/README.md#list) - List bills
* [listAttachments](docs/sdks/bills/README.md#listattachments) - List bill attachments
* [update](docs/sdks/bills/README.md#update) - Update bill
* [uploadAttachment](docs/sdks/bills/README.md#uploadattachment) - Upload bill attachment

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
* [getCreateModel](docs/sdks/journalentries/README.md#getcreatemodel) - Get create journal entry model

### [journals](docs/sdks/journals/README.md)

* [create](docs/sdks/journals/README.md#create) - Create journal
* [get](docs/sdks/journals/README.md#get) - Get journal
* [getCreateModel](docs/sdks/journals/README.md#getcreatemodel) - Get create journal model
* [list](docs/sdks/journals/README.md#list) - List journals

### [manageData](docs/sdks/managedata/README.md)

* [get](docs/sdks/managedata/README.md#get) - Get data status
* [getPullOperation](docs/sdks/managedata/README.md#getpulloperation) - Get pull operation
* [listPullOperations](docs/sdks/managedata/README.md#listpulloperations) - List pull operations
* [refreshAllDataTypes](docs/sdks/managedata/README.md#refreshalldatatypes) - Refresh all data
* [refreshDataType](docs/sdks/managedata/README.md#refreshdatatype) - Refresh data type

### [paymentMethods](docs/sdks/paymentmethods/README.md)

* [get](docs/sdks/paymentmethods/README.md#get) - Get payment method
* [list](docs/sdks/paymentmethods/README.md#list) - List payment methods

### [pushOperations](docs/sdks/pushoperations/README.md)

* [get](docs/sdks/pushoperations/README.md#get) - Get push operation
* [list](docs/sdks/pushoperations/README.md#list) - List push operations

### [suppliers](docs/sdks/suppliers/README.md)

* [create](docs/sdks/suppliers/README.md#create) - Create supplier
* [get](docs/sdks/suppliers/README.md#get) - Get supplier
* [getCreateUpdateModel](docs/sdks/suppliers/README.md#getcreateupdatemodel) - Get create/update supplier model
* [list](docs/sdks/suppliers/README.md#list) - List suppliers
* [update](docs/sdks/suppliers/README.md#update) - Update supplier

### [taxRates](docs/sdks/taxrates/README.md)

* [get](docs/sdks/taxrates/README.md#get) - Get tax rate
* [list](docs/sdks/taxrates/README.md#list) - List all tax rates

### [trackingCategories](docs/sdks/trackingcategories/README.md)

* [get](docs/sdks/trackingcategories/README.md#get) - Get tracking categories
* [list](docs/sdks/trackingcategories/README.md#list) - List tracking categories
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:


<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)