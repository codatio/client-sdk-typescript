# Sync for Expenses version 1

<!-- Start Codat Library Description -->
Push expenses to accounting platforms.
<!-- End Codat Library Description -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @codat/sync-for-expenses-version-1
```

### Yarn

```bash
yarn add @codat/sync-for-expenses-version-1
```
<!-- End SDK Installation [installation] -->

## Example Usage
<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";

async function run() {
    const sdk = new CodatSyncExpenses({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.companies.createCompany({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [companies](docs/sdks/companies/README.md)

* [createCompany](docs/sdks/companies/README.md#createcompany) - Create company
* [deleteCompany](docs/sdks/companies/README.md#deletecompany) - Delete a company
* [getCompany](docs/sdks/companies/README.md#getcompany) - Get company
* [listCompanies](docs/sdks/companies/README.md#listcompanies) - List companies
* [updateCompany](docs/sdks/companies/README.md#updatecompany) - Update company

### [connections](docs/sdks/connections/README.md)

* [createConnection](docs/sdks/connections/README.md#createconnection) - Create connection
* [createPartnerExpenseConnection](docs/sdks/connections/README.md#createpartnerexpenseconnection) - Create partner expense connection
* [deleteConnection](docs/sdks/connections/README.md#deleteconnection) - Delete connection
* [getConnection](docs/sdks/connections/README.md#getconnection) - Get connection
* [listConnections](docs/sdks/connections/README.md#listconnections) - List connections
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [configuration](docs/sdks/configuration/README.md)

* [getCompanyConfiguration](docs/sdks/configuration/README.md#getcompanyconfiguration) - Get company configuration
* [saveCompanyConfiguration](docs/sdks/configuration/README.md#savecompanyconfiguration) - Set company configuration

### [expenses](docs/sdks/expenses/README.md)

* [createExpenseDataset](docs/sdks/expenses/README.md#createexpensedataset) - Create expense-transactions
* [updateExpenseDataset](docs/sdks/expenses/README.md#updateexpensedataset) - Update expense transactions
* [uploadAttachment](docs/sdks/expenses/README.md#uploadattachment) - Upload attachment

### [mappingOptions](docs/sdks/mappingoptions/README.md)

* [getMappingOptions](docs/sdks/mappingoptions/README.md#getmappingoptions) - Mapping options

### [sync](docs/sdks/sync/README.md)

* [initiateSync](docs/sdks/sync/README.md#initiatesync) - Initiate sync

### [syncStatus](docs/sdks/syncstatus/README.md)

* [getLastSuccessfulSync](docs/sdks/syncstatus/README.md#getlastsuccessfulsync) - Last successful sync
* [getLatestSync](docs/sdks/syncstatus/README.md#getlatestsync) - Latest sync status
* [getSyncById](docs/sdks/syncstatus/README.md#getsyncbyid) - Get sync status
* [listSyncs](docs/sdks/syncstatus/README.md#listsyncs) - List sync statuses

### [transactionStatus](docs/sdks/transactionstatus/README.md)

* [getSyncTransaction](docs/sdks/transactionstatus/README.md#getsynctransaction) - Get sync transaction
* [listSyncTransactions](docs/sdks/transactionstatus/README.md#listsynctransactions) - Get sync transactions
<!-- End Available Resources and Operations [operations] -->



<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";

async function run() {
    const sdk = new CodatSyncExpenses({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.companies.createCompany(
        {
            description: "Requested early access to the new financing scheme.",
            name: "Bank of Dave",
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
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";

async function run() {
    const sdk = new CodatSyncExpenses({
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

    const res = await sdk.companies.createCompany({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";

async function run() {
    const sdk = new CodatSyncExpenses({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    let res;
    try {
        res = await sdk.companies.createCompany({
            description: "Requested early access to the new financing scheme.",
            name: "Bank of Dave",
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.codat.io` | None |

#### Example

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";

async function run() {
    const sdk = new CodatSyncExpenses({
        serverIdx: 0,
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.companies.createCompany({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";

async function run() {
    const sdk = new CodatSyncExpenses({
        serverURL: "https://api.codat.io",
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.companies.createCompany({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { @codat/sync-for-expenses-version-1 } from "CodatSyncExpenses";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new CodatSyncExpenses({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `authHeader` | apiKey       | API key      |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";

async function run() {
    const sdk = new CodatSyncExpenses({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.companies.createCompany({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

<!-- Start Codat Support Notes -->
<!-- End Codat Support Notes -->

<!-- Start Codat Generated By -->
### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)