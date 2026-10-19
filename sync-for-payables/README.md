# Sync for Payables

Streamline your customers' accounts payable workflow.

## Summary

Bill pay (synchronous solution): The API reference for the synchronous Bill Pay solution.

The synchronous Bill Pay solution is an API and a set of supporting tools designed to integrate a bill pay flow into your app as quickly as possible. It's ideal for facilitating essential bill payment processes within your SMB's accounting software.

[Explore solution](https://docs.codat.io/payables/overview) | [See OpenAPI spec](https://github.com/codatio/oas)

## Supported Integrations

| Integration       | Supported |
|-------------------|-----------|
| FreeAgent         | Yes       |
| QuickBooks Online | Yes       |
| Oracle NetSuite   | Yes       |
| Sage Intacct      | Yes       |
| Xero              | Yes       |
| Zoho Books        | Yes       |

## Endpoints

| Endpoints | Description |
| :- |:- |
| Companies | Create and manage your SMB users' companies. |
| Connections | Create new and manage existing data connections for a company. |
| Company information | View company profile from the source platform. |
| Bills | Get, create, and update Bills. |
| Bill payments | Get, create, and update Bill payments. |
| Suppliers | Get, create, and update Suppliers. |
| Bank accounts | Create a bank account for a given company's connection. |

## Table of Contents

* [Summary](#summary)
* [Supported Integrations](#supported-integrations)
* [Endpoints](#endpoints)
* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [File uploads](#file-uploads)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
* [Support](#support)

## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @codat/sync-for-payables
```

### PNPM

```bash
pnpm add @codat/sync-for-payables
```

### Bun

```bash
bun add @codat/sync-for-payables
```

### Yarn

```bash
yarn add @codat/sync-for-payables
```

## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).

## SDK Example Usage

### Example

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.list({
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
  });

  console.log(result);
}

run();
```

## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [BankAccounts](docs/sdks/bankaccounts/README.md)

* [create](docs/sdks/bankaccounts/README.md#create) - Create bank account

### [BillPayments](docs/sdks/billpayments/README.md)

* [getPaymentOptions](docs/sdks/billpayments/README.md#getpaymentoptions) - Get payment mapping options
* [create](docs/sdks/billpayments/README.md#create) - Create bill payment

### [Bills](docs/sdks/bills/README.md)

* [getBillOptions](docs/sdks/bills/README.md#getbilloptions) - Get bill mapping options
* [list](docs/sdks/bills/README.md#list) - List bills
* [create](docs/sdks/bills/README.md#create) - Create bill
* [update](docs/sdks/bills/README.md#update) - Update bill
* [uploadAttachment](docs/sdks/bills/README.md#uploadattachment) - Upload bill attachment
* [listAttachments](docs/sdks/bills/README.md#listattachments) - List bill attachments
* [downloadAttachment](docs/sdks/bills/README.md#downloadattachment) - Download bill attachment

### [Companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List companies
* [create](docs/sdks/companies/README.md#create) - Create company
* [replace](docs/sdks/companies/README.md#replace) - Replace company
* [update](docs/sdks/companies/README.md#update) - Update company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [get](docs/sdks/companies/README.md#get) - Get company

### [CompanyInformation](docs/sdks/companyinformation/README.md)

* [get](docs/sdks/companyinformation/README.md#get) - Get company information

### [Connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - List connections
* [create](docs/sdks/connections/README.md#create) - Create connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [Suppliers](docs/sdks/suppliers/README.md)

* [list](docs/sdks/suppliers/README.md#list) - List suppliers
* [create](docs/sdks/suppliers/README.md#create) - Create supplier
* [update](docs/sdks/suppliers/README.md#update) - Update supplier

</details>

## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`bankAccountsCreate`](docs/sdks/bankaccounts/README.md#create) - Create bank account
- [`billPaymentsCreate`](docs/sdks/billpayments/README.md#create) - Create bill payment
- [`billPaymentsGetPaymentOptions`](docs/sdks/billpayments/README.md#getpaymentoptions) - Get payment mapping options
- [`billsCreate`](docs/sdks/bills/README.md#create) - Create bill
- [`billsDownloadAttachment`](docs/sdks/bills/README.md#downloadattachment) - Download bill attachment
- [`billsGetBillOptions`](docs/sdks/bills/README.md#getbilloptions) - Get bill mapping options
- [`billsList`](docs/sdks/bills/README.md#list) - List bills
- [`billsListAttachments`](docs/sdks/bills/README.md#listattachments) - List bill attachments
- [`billsUpdate`](docs/sdks/bills/README.md#update) - Update bill
- [`billsUploadAttachment`](docs/sdks/bills/README.md#uploadattachment) - Upload bill attachment
- [`companiesCreate`](docs/sdks/companies/README.md#create) - Create company
- [`companiesDelete`](docs/sdks/companies/README.md#delete) - Delete a company
- [`companiesGet`](docs/sdks/companies/README.md#get) - Get company
- [`companiesList`](docs/sdks/companies/README.md#list) - List companies
- [`companiesReplace`](docs/sdks/companies/README.md#replace) - Replace company
- [`companiesUpdate`](docs/sdks/companies/README.md#update) - Update company
- [`companyInformationGet`](docs/sdks/companyinformation/README.md#get) - Get company information
- [`connectionsCreate`](docs/sdks/connections/README.md#create) - Create connection
- [`connectionsDelete`](docs/sdks/connections/README.md#delete) - Delete connection
- [`connectionsGet`](docs/sdks/connections/README.md#get) - Get connection
- [`connectionsList`](docs/sdks/connections/README.md#list) - List connections
- [`connectionsUnlink`](docs/sdks/connections/README.md#unlink) - Unlink connection
- [`suppliersCreate`](docs/sdks/suppliers/README.md#create) - Create supplier
- [`suppliersList`](docs/sdks/suppliers/README.md#list) - List suppliers
- [`suppliersUpdate`](docs/sdks/suppliers/README.md#update) - Update supplier

</details>

## File uploads

Certain SDK methods accept files as part of a multi-part request. Pass the file's contents as a `Blob` (including a `File`), an `ArrayBuffer` or a `Uint8Array`. A raw `ReadableStream` is not supported. The following example demonstrates how to attach a file to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a `Blob` handle to a file without reading the entire contents into memory up front:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function returns a `Blob` for a file.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { openAsBlob } from "node:fs";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.bills.uploadAttachment({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    attachmentUpload: {
      file: {
        fileName: "example.file",
        content: await openAsBlob("example.file"),
      },
    },
  });

  console.log(result);
}

run();
```

## Retries

Every operation in this SDK retries failed requests with a default backoff strategy. By default it retries connection errors and responses with status 408, 429 or 5XX, starting at 500 ms and backing off by a factor of 1.5 up to 60 s between attempts, for at most an hour. You can override the retry strategy for a single call, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.list({
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
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

If you'd like to override the default retry strategy for all operations, you can provide a retryConfig at SDK initialization:
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
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
  const result = await codatSyncPayables.companies.list({
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
  });

  console.log(result);
}

run();
```

## Error Handling

[`CodatSyncPayablesError`](./src/sdk/models/errors/codatsyncpayableserror.ts) is the base class for all HTTP error responses. It has the following properties:

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
import { CodatSyncPayables } from "@codat/sync-for-payables";
import * as errors from "@codat/sync-for-payables/sdk/models/errors";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  try {
    const result = await codatSyncPayables.companies.list({
      query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
      orderBy: "-modifiedDate",
      tags: "region=uk && team=invoice-finance",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.CodatSyncPayablesError) {
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
* [`CodatSyncPayablesError`](./src/sdk/models/errors/codatsyncpayableserror.ts): The base class for HTTP error responses.
  * [`ErrorMessage`](./src/sdk/models/errors/errormessage.ts): A Codat API error response. Its structured fields are on `error.data$`.

<details><summary>Less common errors (1)</summary>

<br />

**Inherit from [`CodatSyncPayablesError`](./src/sdk/models/errors/codatsyncpayableserror.ts)**:
* [`SDKError`](./src/sdk/models/errors/sdkerror.ts): The fallback error class if no more specific error class is matched.

</details>

Network failures and timeouts are thrown as `FetchError`, with the original error, such as a `TypeError` or a `TimeoutError`, on `error.cause`. Input that does not match the expected model is thrown as `SDKValidationError`. Neither extends [`CodatSyncPayablesError`](./src/sdk/models/errors/codatsyncpayableserror.ts).

## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  serverURL: "https://api.codat.io",
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.list({
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
  });

  console.log(result);
}

run();
```

## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@codat/sync-for-payables/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
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

const sdk = new CodatSyncPayables({ httpClient: httpClient });
```

## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type   | Scheme  |
| ------------ | ------ | ------- |
| `authHeader` | apiKey | API key |

To authenticate with the API the `authHeader` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.list({
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
  });

  console.log(result);
}

run();
```

## Debugging

You can set up your SDK to log the method and URL of each request and the status of each response.

You can pass a logger that matches `console`'s interface as an SDK option.

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const sdk = new CodatSyncPayables({ debugLogger: console });
```

## Support

If you encounter any challenges while utilizing our SDKs, please don't hesitate to reach out for assistance.
You can raise any issues by contacting your dedicated Codat representative or reaching out to our [support team](mailto:support@codat.io).
We're here to help ensure a smooth experience for you.
