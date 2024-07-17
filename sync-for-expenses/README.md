# Sync for Expenses

<!-- Start Codat Library Description -->
﻿Embedded accounting integrations for corporate card providers.
<!-- End Codat Library Description -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @codat/sync-for-expenses
```

### PNPM

```bash
pnpm add @codat/sync-for-expenses
```

### Bun

```bash
bun add @codat/sync-for-expenses
```

### Yarn

```bash
yarn add @codat/sync-for-expenses zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

## Example Usage
<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatSyncExpenses.companies.list({
        page: 1,
        pageSize: 100,
        query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
        orderBy: "-modifiedDate",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List companies
* [create](docs/sdks/companies/README.md#create) - Create company
* [update](docs/sdks/companies/README.md#update) - Update company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [get](docs/sdks/companies/README.md#get) - Get company

### [connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - List connections
* [create](docs/sdks/connections/README.md#create) - Create connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection
* [createPartnerExpenseConnection](docs/sdks/connections/README.md#createpartnerexpenseconnection) - Create partner expense connection

### [configuration](docs/sdks/configuration/README.md)

* [get](docs/sdks/configuration/README.md#get) - Get company configuration
* [set](docs/sdks/configuration/README.md#set) - Set company configuration

### [mappingOptions](docs/sdks/mappingoptions/README.md)

* [getMappingOptions](docs/sdks/mappingoptions/README.md#getmappingoptions) - Mapping options

### [sync](docs/sdks/sync/README.md)

* [getLastSuccessfulSync](docs/sdks/sync/README.md#getlastsuccessfulsync) - Last successful sync
* [getLatestSync](docs/sdks/sync/README.md#getlatestsync) - Latest sync status
* [list](docs/sdks/sync/README.md#list) - List sync statuses
* [get](docs/sdks/sync/README.md#get) - Get sync status

### [transactionStatus](docs/sdks/transactionstatus/README.md)

* [list](docs/sdks/transactionstatus/README.md#list) - List sync transactions
* [get](docs/sdks/transactionstatus/README.md#get) - Get sync transaction

### [expenses](docs/sdks/expenses/README.md)

* [create](docs/sdks/expenses/README.md#create) - Create expense transaction
* [update](docs/sdks/expenses/README.md#update) - Update expense transactions

### [transfers](docs/sdks/transfers/README.md)

* [create](docs/sdks/transfers/README.md#create) - Create transfer transaction

### [adjustments](docs/sdks/adjustments/README.md)

* [create](docs/sdks/adjustments/README.md#create) - Create adjustment transaction

### [reimbursements](docs/sdks/reimbursements/README.md)

* [create](docs/sdks/reimbursements/README.md#create) - Create reimbursable expense transaction
* [update](docs/sdks/reimbursements/README.md#update) - Update reimbursable expense transaction

### [attachments](docs/sdks/attachments/README.md)

* [upload](docs/sdks/attachments/README.md#upload) - Upload attachment

### [manageData](docs/sdks/managedata/README.md)

* [refreshAllDataTypes](docs/sdks/managedata/README.md#refreshalldatatypes) - Refresh all data
* [get](docs/sdks/managedata/README.md#get) - Get data status
* [refreshDataType](docs/sdks/managedata/README.md#refreshdatatype) - Refresh data type
* [listPullOperations](docs/sdks/managedata/README.md#listpulloperations) - List pull operations
* [getPullOperation](docs/sdks/managedata/README.md#getpulloperation) - Get pull operation

### [pushOperations](docs/sdks/pushoperations/README.md)

* [list](docs/sdks/pushoperations/README.md#list) - List push operations
* [get](docs/sdks/pushoperations/README.md#get) - Get push operation

### [accounts](docs/sdks/accounts/README.md)

* [create](docs/sdks/accounts/README.md#create) - Create account
* [getCreateModel](docs/sdks/accounts/README.md#getcreatemodel) - Get create account model

### [customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - List customers
* [get](docs/sdks/customers/README.md#get) - Get customer
* [create](docs/sdks/customers/README.md#create) - Create customer
* [update](docs/sdks/customers/README.md#update) - Update customer

### [suppliers](docs/sdks/suppliers/README.md)

* [list](docs/sdks/suppliers/README.md#list) - List suppliers
* [get](docs/sdks/suppliers/README.md#get) - Get supplier
* [create](docs/sdks/suppliers/README.md#create) - Create supplier
* [update](docs/sdks/suppliers/README.md#update) - Update supplier
<!-- End Available Resources and Operations [operations] -->





<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatSyncExpenses.companies.list(
        {
            page: 1,
            pageSize: 100,
            query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
            orderBy: "-modifiedDate",
        },
        {
            retries: {
                strategy: "backoff",
                backoff: {
                    initialInterval: 1,
                    maxInterval: 50,
                    exponent: 1.1,
                    maxElapsedTime: 100,
                },
                retryConnectionErrors: false,
            },
        }
    );

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatSyncExpenses.companies.list({
        page: 1,
        pageSize: 100,
        query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
        orderBy: "-modifiedDate",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { SDKValidationError } from "@codat/sync-for-expenses/sdk/models/errors";

const codatSyncExpenses = new CodatSyncExpenses({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    let result;
    try {
        result = await codatSyncExpenses.companies.list({
            page: 1,
            pageSize: 100,
            query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
            orderBy: "-modifiedDate",
        });
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.ErrorMessage: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.codat.io` | None |

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
    serverIdx: 0,
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatSyncExpenses.companies.list({
        page: 1,
        pageSize: 100,
        query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
        orderBy: "-modifiedDate",
    });

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
    serverURL: "https://api.codat.io",
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatSyncExpenses.companies.list({
        page: 1,
        pageSize: 100,
        query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
        orderBy: "-modifiedDate",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { HTTPClient } from "@codat/sync-for-expenses/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new CodatSyncExpenses({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `authHeader` | apiKey       | API key      |

To authenticate with the API the `authHeader` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatSyncExpenses.companies.list({
        page: 1,
        pageSize: 100,
        query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
        orderBy: "-modifiedDate",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatSyncExpenses.attachments.upload({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
        transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

<!-- Start Codat Support Notes -->
## Support

If you encounter any challenges while utilizing our SDKs, please don't hesitate to reach out for assistance. 
You can raise any issues by contacting your dedicated Codat representative or reaching out to our [support team](mailto:support@codat.io).
We're here to help ensure a smooth experience for you.
<!-- End Codat Support Notes -->

<!-- Start Codat Generated By -->
### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
<!-- End Codat Generated By -->