# Bank Feeds

<!-- Start Codat Library Description -->
﻿Bank Feeds API enables your SMB users to set up bank feeds from accounts in your application to supported accounting platforms.
<!-- End Codat Library Description -->

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @codat/bank-feeds
```

### Yarn

```bash
yarn add @codat/bank-feeds
```
<!-- End SDK Installation -->

## Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

(async () => {
    const sdk = new CodatBankFeeds({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.accountMapping.create({
        zero: {
            feedStartDate: "2022-10-23T00:00:00.000Z",
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


### [accountMapping](docs/sdks/accountmapping/README.md)

* [create](docs/sdks/accountmapping/README.md#create) - Create bank feed account mapping
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

* [create](docs/sdks/sourceaccounts/README.md#create) - Create source account
* [delete](docs/sdks/sourceaccounts/README.md#delete) - Delete source account
* [deleteCredentials](docs/sdks/sourceaccounts/README.md#deletecredentials) - Delete all source account credentials
* [generateCredentials](docs/sdks/sourceaccounts/README.md#generatecredentials) - Generate source account credentials
* [list](docs/sdks/sourceaccounts/README.md#list) - List source accounts
* [update](docs/sdks/sourceaccounts/README.md#update) - Update source account

### [transactions](docs/sdks/transactions/README.md)

* [create](docs/sdks/transactions/README.md#create) - Create bank transactions
* [getCreateOperation](docs/sdks/transactions/README.md#getcreateoperation) - Get create operation
* [listCreateOperations](docs/sdks/transactions/README.md#listcreateoperations) - List create operations
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.


<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.codat.io` | None |

For example:


```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

(async () => {
    const sdk = new CodatBankFeeds({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
        serverIdx: 0,
    });

    const res = await sdk.accountMapping.create({
        zero: {
            feedStartDate: "2022-10-23T00:00:00.000Z",
        },
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:


```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

(async () => {
    const sdk = new CodatBankFeeds({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
        serverURL: "https://api.codat.io",
    });

    const res = await sdk.accountMapping.create({
        zero: {
            feedStartDate: "2022-10-23T00:00:00.000Z",
        },
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @codat/bank-feeds import CodatBankFeeds;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new CodatBankFeeds({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)