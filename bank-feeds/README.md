# Bank Feeds

<!-- Start Codat Library Description -->
﻿Bank Feeds API enables your SMB users to set up bank feeds from accounts in your application to supported accounting platforms.
<!-- End Codat Library Description -->

<!-- Start Summary [summary] -->
## Summary

Bank Feeds: Bank Feeds solution enables your SMB users to set up bank feeds from accounts in your application to supported accounting software.

A bank feed is a connection between a source bank account in your application and a target bank account in a supported accounting software.

[Explore solution](https://docs.codat.io/bank-feeds-api/overview) | [See OpenAPI spec](https://github.com/codatio/oas)

---
<!-- Start Codat Tags Table -->
## Endpoints

| Endpoints | Description |
| :- |:- |
| Companies | Create and manage your SMB users' companies. |
| Connections | Create new and manage existing data connections for a company. |
| Source accounts | Provide and manage lists of source bank accounts. |
| Account mapping | Extra functionality for building an account management UI. |
| Company information | Get detailed information about a company from the underlying platform. |
| Transactions | Create new bank account transactions for a company's connections, and see previous operations. |
<!-- End Codat Tags Table -->
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Bank Feeds](#bank-feeds)
  * [Endpoints](#endpoints)
  * [SDK Installation](#sdk-installation)
  * [Example Usage](#example-usage)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Requirements](#requirements)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Debugging](#debugging)
  * [Support](#support)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @codat/bank-feeds
```

### PNPM

```bash
pnpm add @codat/bank-feeds
```

### Bun

```bash
bun add @codat/bank-feeds
```

### Yarn

```bash
yarn add @codat/bank-feeds
```
<!-- End SDK Installation [installation] -->

## Example Usage
<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.companies.create({
    name: "Technicalium",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [AccountMapping](docs/sdks/accountmapping/README.md)

* [get](docs/sdks/accountmapping/README.md#get) - List bank feed accounts
* [create](docs/sdks/accountmapping/README.md#create) - Create bank feed account mapping

### [BankAccounts](docs/sdks/bankaccounts/README.md)

* [list](docs/sdks/bankaccounts/README.md#list) - List bank accounts
* [getCreateModel](docs/sdks/bankaccounts/README.md#getcreatemodel) - Get create/update bank account model
* [create](docs/sdks/bankaccounts/README.md#create) - Create bank account

### [Companies](docs/sdks/companies/README.md)

* [create](docs/sdks/companies/README.md#create) - Create company
* [list](docs/sdks/companies/README.md#list) - List companies
* [get](docs/sdks/companies/README.md#get) - Get company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [replace](docs/sdks/companies/README.md#replace) - Replace company
* [update](docs/sdks/companies/README.md#update) - Update company
* [getAccessToken](docs/sdks/companies/README.md#getaccesstoken) - Get company access token

### [CompanyInformation](docs/sdks/companyinformation/README.md)

* [get](docs/sdks/companyinformation/README.md#get) - Get company information

### [Connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - List connections
* [create](docs/sdks/connections/README.md#create) - Create connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [ManagedBankFeeds](docs/sdks/managedbankfeeds/README.md)

* [getSync](docs/sdks/managedbankfeeds/README.md#getsync) - Get sync
* [getLatestSync](docs/sdks/managedbankfeeds/README.md#getlatestsync) - Get latest sync
* [runAdHocSync](docs/sdks/managedbankfeeds/README.md#runadhocsync) - Run ad-hoc sync

### [SourceAccounts](docs/sdks/sourceaccounts/README.md)

* [createBatch](docs/sdks/sourceaccounts/README.md#createbatch) - Create source accounts
* [create](docs/sdks/sourceaccounts/README.md#create) - Create single source account
* [list](docs/sdks/sourceaccounts/README.md#list) - List source accounts
* [update](docs/sdks/sourceaccounts/README.md#update) - Update source account
* [delete](docs/sdks/sourceaccounts/README.md#delete) - Delete source account
* [generateCredentials](docs/sdks/sourceaccounts/README.md#generatecredentials) - Generate source account credentials
* [deleteCredentials](docs/sdks/sourceaccounts/README.md#deletecredentials) - Delete all source account credentials

### [Transactions](docs/sdks/transactions/README.md)

* [create](docs/sdks/transactions/README.md#create) - Create bank transactions
* [getCreateModel](docs/sdks/transactions/README.md#getcreatemodel) - Get create bank transactions model
* [getCreateOperation](docs/sdks/transactions/README.md#getcreateoperation) - Get create operation
* [listCreateOperations](docs/sdks/transactions/README.md#listcreateoperations) - List create operations

</details>
<!-- End Available Resources and Operations [operations] -->





<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.companies.create({
    name: "Technicalium",
  }, {
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
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
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
  const result = await codatBankFeeds.companies.create({
    name: "Technicalium",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->



<!-- Start Error Handling [errors] -->
## Error Handling

[`CodatBankFeedsError`](./src/sdk/models/errors/codatbankfeedserror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import * as errors from "@codat/bank-feeds/sdk/models/errors";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  try {
    const result = await codatBankFeeds.companies.create({
      name: "Technicalium",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.CodatBankFeedsError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorMessage) {
        console.log(error.data$.statusCode); // number
        console.log(error.data$.service); // string
        console.log(error.data$.error); // string
        console.log(error.data$.correlationId); // string
        console.log(error.data$.validation); // shared.ErrorValidation
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`CodatBankFeedsError`](./src/sdk/models/errors/codatbankfeedserror.ts): The base class for HTTP error responses.
  * [`ErrorMessage`](./src/sdk/models/errors/errormessage.ts): The request made is not valid.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/sdk/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/sdk/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`CodatBankFeedsError`](./src/sdk/models/errors/codatbankfeedserror.ts)**:
* [`ResponseValidationError`](./src/sdk/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  serverURL: "https://api.codat.io",
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.companies.create({
    name: "Technicalium",
  });

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
import { CodatBankFeeds } from "@codat/bank-feeds";
import { HTTPClient } from "@codat/bank-feeds/lib/http";

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

const sdk = new CodatBankFeeds({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type   | Scheme  |
| ------------ | ------ | ------- |
| `authHeader` | apiKey | API key |

To authenticate with the API the `authHeader` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.companies.create({
    name: "Technicalium",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountMappingCreate`](docs/sdks/accountmapping/README.md#create) - Create bank feed account mapping
- [`accountMappingGet`](docs/sdks/accountmapping/README.md#get) - List bank feed accounts
- [`bankAccountsCreate`](docs/sdks/bankaccounts/README.md#create) - Create bank account
- [`bankAccountsGetCreateModel`](docs/sdks/bankaccounts/README.md#getcreatemodel) - Get create/update bank account model
- [`bankAccountsList`](docs/sdks/bankaccounts/README.md#list) - List bank accounts
- [`companiesCreate`](docs/sdks/companies/README.md#create) - Create company
- [`companiesDelete`](docs/sdks/companies/README.md#delete) - Delete a company
- [`companiesGet`](docs/sdks/companies/README.md#get) - Get company
- [`companiesGetAccessToken`](docs/sdks/companies/README.md#getaccesstoken) - Get company access token
- [`companiesList`](docs/sdks/companies/README.md#list) - List companies
- [`companiesReplace`](docs/sdks/companies/README.md#replace) - Replace company
- [`companiesUpdate`](docs/sdks/companies/README.md#update) - Update company
- [`companyInformationGet`](docs/sdks/companyinformation/README.md#get) - Get company information
- [`connectionsCreate`](docs/sdks/connections/README.md#create) - Create connection
- [`connectionsDelete`](docs/sdks/connections/README.md#delete) - Delete connection
- [`connectionsGet`](docs/sdks/connections/README.md#get) - Get connection
- [`connectionsList`](docs/sdks/connections/README.md#list) - List connections
- [`connectionsUnlink`](docs/sdks/connections/README.md#unlink) - Unlink connection
- [`managedBankFeedsGetLatestSync`](docs/sdks/managedbankfeeds/README.md#getlatestsync) - Get latest sync
- [`managedBankFeedsGetSync`](docs/sdks/managedbankfeeds/README.md#getsync) - Get sync
- [`managedBankFeedsRunAdHocSync`](docs/sdks/managedbankfeeds/README.md#runadhocsync) - Run ad-hoc sync
- [`sourceAccountsCreate`](docs/sdks/sourceaccounts/README.md#create) - Create single source account
- [`sourceAccountsCreateBatch`](docs/sdks/sourceaccounts/README.md#createbatch) - Create source accounts
- [`sourceAccountsDelete`](docs/sdks/sourceaccounts/README.md#delete) - Delete source account
- [`sourceAccountsDeleteCredentials`](docs/sdks/sourceaccounts/README.md#deletecredentials) - Delete all source account credentials
- [`sourceAccountsGenerateCredentials`](docs/sdks/sourceaccounts/README.md#generatecredentials) - Generate source account credentials
- [`sourceAccountsList`](docs/sdks/sourceaccounts/README.md#list) - List source accounts
- [`sourceAccountsUpdate`](docs/sdks/sourceaccounts/README.md#update) - Update source account
- [`transactionsCreate`](docs/sdks/transactions/README.md#create) - Create bank transactions
- [`transactionsGetCreateModel`](docs/sdks/transactions/README.md#getcreatemodel) - Get create bank transactions model
- [`transactionsGetCreateOperation`](docs/sdks/transactions/README.md#getcreateoperation) - Get create operation
- [`transactionsListCreateOperations`](docs/sdks/transactions/README.md#listcreateoperations) - List create operations

</details>
<!-- End Standalone functions [standalone-funcs] -->

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
import { CodatBankFeeds } from "@codat/bank-feeds";
import { openAsBlob } from "node:fs";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.sourceAccounts.generateCredentials({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    requestBody: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const sdk = new CodatBankFeeds({ debugLogger: console });
```
<!-- End Debugging [debug] -->

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