# Banking

<!-- Start Codat Library Description -->
﻿Use Codat's API to connect to your SMB customer's banks and pull up-to-date standardized account and transaction data from their bank accounts via our partner providers.
<!-- End Codat Library Description -->

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @codat/banking
```

### Yarn

```bash
yarn add @codat/banking
```
<!-- End SDK Installation -->

## Example Usage
<!-- Start SDK Example Usage -->
### Example

```typescript
import { CodatBanking } from "@codat/banking";

(async () => {
    const sdk = new CodatBanking({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.accountBalances.list({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        orderBy: "-modifiedDate",
        page: 1,
        pageSize: 100,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountBalances](docs/sdks/accountbalances/README.md)

* [list](docs/sdks/accountbalances/README.md#list) - List account balances

### [accounts](docs/sdks/accounts/README.md)

* [get](docs/sdks/accounts/README.md#get) - Get account
* [list](docs/sdks/accounts/README.md#list) - List accounts

### [transactionCategories](docs/sdks/transactioncategories/README.md)

* [get](docs/sdks/transactioncategories/README.md#get) - Get transaction category
* [list](docs/sdks/transactioncategories/README.md#list) - List transaction categories

### [transactions](docs/sdks/transactions/README.md)

* [get](docs/sdks/transactions/README.md#get) - Get bank transaction
* [list](docs/sdks/transactions/README.md#list) - List transactions
* [~~listBankTransactions~~](docs/sdks/transactions/README.md#listbanktransactions) - List banking transactions :warning: **Deprecated** Use `list` instead.
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { CodatBanking } from "@codat/banking";

(async () => {
    const sdk = new CodatBanking({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    let res;
    try {
        res = await sdk.accountBalances.list({
            companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
            connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
            orderBy: "-modifiedDate",
            page: 1,
            pageSize: 100,
        });
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
import { CodatBanking } from "@codat/banking";

(async () => {
    const sdk = new CodatBanking({
        serverIdx: 0,
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.accountBalances.list({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        orderBy: "-modifiedDate",
        page: 1,
        pageSize: 100,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatBanking } from "@codat/banking";

(async () => {
    const sdk = new CodatBanking({
        serverURL: "https://api.codat.io",
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.accountBalances.list({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        orderBy: "-modifiedDate",
        page: 1,
        pageSize: 100,
    });

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
from @codat/banking import CodatBanking;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new CodatBanking({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Retries -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatBanking } from "@codat/banking";

(async () => {
    const sdk = new CodatBanking({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.accountBalances.list(
        {
            companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
            connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
            orderBy: "-modifiedDate",
            page: 1,
            pageSize: 100,
        },
        {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        }
    );

    if (res.statusCode == 200) {
        // handle response
    }
})();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CodatBanking } from "@codat/banking";

(async () => {
    const sdk = new CodatBanking({
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

    const res = await sdk.accountBalances.list({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        orderBy: "-modifiedDate",
        page: 1,
        pageSize: 100,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Retries -->



<!-- Start Authentication -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `authHeader` | apiKey       | API key      |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatBanking } from "@codat/banking";

(async () => {
    const sdk = new CodatBanking({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.accountBalances.list({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        orderBy: "-modifiedDate",
        page: 1,
        pageSize: 100,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Authentication -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)