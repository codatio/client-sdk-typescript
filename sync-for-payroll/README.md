# Sync for Payroll

<!-- Start Codat Library Description -->
Push payroll to accounting platforms.
<!-- End Codat Library Description -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @codat/sync-for-payroll
```

### PNPM

```bash
pnpm add @codat/sync-for-payroll
```

### Bun

```bash
bun add @codat/sync-for-payroll
```

### Yarn

```bash
yarn add @codat/sync-for-payroll zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

## Example Usage
<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";

const codatSyncPayroll = new CodatSyncPayroll({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatSyncPayroll.companies.list({
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

### [manageData](docs/sdks/managedata/README.md)

* [refreshAllDataTypes](docs/sdks/managedata/README.md#refreshalldatatypes) - Refresh all data
* [getDataStatus](docs/sdks/managedata/README.md#getdatastatus) - Get data status
* [refreshDataType](docs/sdks/managedata/README.md#refreshdatatype) - Refresh data type
* [listPullOperations](docs/sdks/managedata/README.md#listpulloperations) - List pull operations
* [list](docs/sdks/managedata/README.md#list) - List push operations
* [getPullOperation](docs/sdks/managedata/README.md#getpulloperation) - Get pull operation
* [getPushOperation](docs/sdks/managedata/README.md#getpushoperation) - Get push operation

### [accounts](docs/sdks/accounts/README.md)

* [list](docs/sdks/accounts/README.md#list) - List accounts
* [get](docs/sdks/accounts/README.md#get) - Get account
* [getCreateModel](docs/sdks/accounts/README.md#getcreatemodel) - Get create account model
* [create](docs/sdks/accounts/README.md#create) - Create account

### [journalEntries](docs/sdks/journalentries/README.md)

* [list](docs/sdks/journalentries/README.md#list) - List journal entries
* [get](docs/sdks/journalentries/README.md#get) - Get journal entry
* [delete](docs/sdks/journalentries/README.md#delete) - Delete journal entry
* [getCreateModel](docs/sdks/journalentries/README.md#getcreatemodel) - Get create journal entry model
* [create](docs/sdks/journalentries/README.md#create) - Create journal entry

### [journals](docs/sdks/journals/README.md)

* [list](docs/sdks/journals/README.md#list) - List journals
* [get](docs/sdks/journals/README.md#get) - Get journal
* [getCreateModel](docs/sdks/journals/README.md#getcreatemodel) - Get create journal model
* [create](docs/sdks/journals/README.md#create) - Create journal

### [trackingCategories](docs/sdks/trackingcategories/README.md)

* [list](docs/sdks/trackingcategories/README.md#list) - List tracking categories
* [get](docs/sdks/trackingcategories/README.md#get) - Get tracking categories

### [companyInfo](docs/sdks/companyinfo/README.md)

* [getAccountingProfile](docs/sdks/companyinfo/README.md#getaccountingprofile) - Get company accounting profile
<!-- End Available Resources and Operations [operations] -->



<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";

const codatSyncPayroll = new CodatSyncPayroll({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatSyncPayroll.companies.list(
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
import { CodatSyncPayroll } from "@codat/sync-for-payroll";

const codatSyncPayroll = new CodatSyncPayroll({
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
    const result = await codatSyncPayroll.companies.list({
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
import { CodatSyncPayroll } from "@codat/sync-for-payroll";
import { SDKValidationError } from "@codat/sync-for-payroll/sdk/models/errors";

const codatSyncPayroll = new CodatSyncPayroll({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    let result;
    try {
        result = await codatSyncPayroll.companies.list({
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
import { CodatSyncPayroll } from "@codat/sync-for-payroll";

const codatSyncPayroll = new CodatSyncPayroll({
    serverIdx: 0,
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatSyncPayroll.companies.list({
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
import { CodatSyncPayroll } from "@codat/sync-for-payroll";

const codatSyncPayroll = new CodatSyncPayroll({
    serverURL: "https://api.codat.io",
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatSyncPayroll.companies.list({
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
import { CodatSyncPayroll } from "@codat/sync-for-payroll";
import { HTTPClient } from "@codat/sync-for-payroll/lib/http";

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

const sdk = new CodatSyncPayroll({ httpClient });
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
import { CodatSyncPayroll } from "@codat/sync-for-payroll";

const codatSyncPayroll = new CodatSyncPayroll({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatSyncPayroll.companies.list({
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