# openapi

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    
    <a href="https://https://github.com/codatio/client-sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/bolt-php/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

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
import { SDK } from "openapi";
import { CreateBankAccountMappingResponse } from "openapi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountMapping.create({
  bankFeedAccountMapping: {
    feedStartDate: "2022-10-23T00:00:00.000Z",
    sourceAccountId: "provident",
    targetAccountId: "distinctio",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: CreateBankAccountMappingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountMapping](docs/sdks/accountmapping/README.md)

* [create](docs/sdks/accountmapping/README.md#create) - Create bank feed bank account mapping
* [get](docs/sdks/accountmapping/README.md#get) - List bank feed account mappings

### [companies](docs/sdks/companies/README.md)

* [create](docs/sdks/companies/README.md#create) - Create company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [get](docs/sdks/companies/README.md#get) - Get company
* [list](docs/sdks/companies/README.md#list) - List companies
* [update](docs/sdks/companies/README.md#update) - Update company

### [connections](docs/sdks/connections/README.md)

* [create](docs/sdks/connections/README.md#create) - Create connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [list](docs/sdks/connections/README.md#list) - List connections
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [sourceAccounts](docs/sdks/sourceaccounts/README.md)

* [create](docs/sdks/sourceaccounts/README.md#create) - Create a bank feed bank account
* [delete](docs/sdks/sourceaccounts/README.md#delete) - Delete bank feed bank account
* [deleteCredentials](docs/sdks/sourceaccounts/README.md#deletecredentials) - Delete all source account credentials
* [generateCredentials](docs/sdks/sourceaccounts/README.md#generatecredentials) - Generate source account credentials
* [list](docs/sdks/sourceaccounts/README.md#list) - List bank feed bank accounts
* [update](docs/sdks/sourceaccounts/README.md#update) - Update bank feed bank account

### [transactions](docs/sdks/transactions/README.md)

* [create](docs/sdks/transactions/README.md#create) - Create bank account transactions
* [getCreateOperation](docs/sdks/transactions/README.md#getcreateoperation) - Get create operation
* [listCreateOperations](docs/sdks/transactions/README.md#listcreateoperations) - List create operations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
