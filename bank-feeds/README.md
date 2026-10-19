# Bank Feeds

Bank Feeds solution enables your SMB users to set up bank feeds from accounts in your application to supported accounting software.

## Summary

Bank Feeds: Bank Feeds solution enables your SMB users to set up bank feeds from accounts in your application to supported accounting software.

A bank feed is a connection between a source bank account in your application and a target bank account in a supported accounting software.

[Explore solution](https://docs.codat.io/bank-feeds-api/overview) | [See OpenAPI spec](https://github.com/codatio/oas)

## Endpoints

| Endpoints | Description |
| :- |:- |
| Companies | Create and manage your SMB users' companies. |
| Connections | Create new and manage existing data connections for a company. |
| Source accounts | Provide and manage lists of source bank accounts. |
| Account mapping | Extra functionality for building an account management UI. |
| Company information | Get detailed information about a company from the underlying platform. |
| Transactions | Create new bank account transactions for a company's connections, and see previous operations. |

## Table of Contents

* [Summary](#summary)
* [Endpoints](#endpoints)
* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
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

## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).

## SDK Example Usage

### Example

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.companies.create({
    name: "Bank of Dave",
    description: "Requested early access to the new financing scheme.",
  });

  console.log(result);
}

run();
```

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
* [generateOtp](docs/sdks/sourceaccounts/README.md#generateotp) - Generate one-time password

### [Transactions](docs/sdks/transactions/README.md)

* [create](docs/sdks/transactions/README.md#create) - Create bank transactions
* [getCreateModel](docs/sdks/transactions/README.md#getcreatemodel) - Get create bank transactions model
* [getCreateOperation](docs/sdks/transactions/README.md#getcreateoperation) - Get create operation
* [listCreateOperations](docs/sdks/transactions/README.md#listcreateoperations) - List create operations

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
- [`sourceAccountsGenerateOtp`](docs/sdks/sourceaccounts/README.md#generateotp) - Generate one-time password
- [`sourceAccountsList`](docs/sdks/sourceaccounts/README.md#list) - List source accounts
- [`sourceAccountsUpdate`](docs/sdks/sourceaccounts/README.md#update) - Update source account
- [`transactionsCreate`](docs/sdks/transactions/README.md#create) - Create bank transactions
- [`transactionsGetCreateModel`](docs/sdks/transactions/README.md#getcreatemodel) - Get create bank transactions model
- [`transactionsGetCreateOperation`](docs/sdks/transactions/README.md#getcreateoperation) - Get create operation
- [`transactionsListCreateOperations`](docs/sdks/transactions/README.md#listcreateoperations) - List create operations

</details>

## Retries

Every operation in this SDK retries failed requests with a default backoff strategy. By default it retries connection errors and responses with status 408, 429 or 5XX, starting at 500 ms and backing off by a factor of 1.5 up to 60 s between attempts, for at most an hour. You can override the retry strategy for a single call, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.companies.create({
    name: "Bank of Dave",
    description: "Requested early access to the new financing scheme.",
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
    name: "Bank of Dave",
    description: "Requested early access to the new financing scheme.",
  });

  console.log(result);
}

run();
```

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
      name: "Bank of Dave",
      description: "Requested early access to the new financing scheme.",
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
  * [`ErrorMessage`](./src/sdk/models/errors/errormessage.ts): A Codat API error response. Its structured fields are on `error.data$`.

<details><summary>Less common errors (1)</summary>

<br />

**Inherit from [`CodatBankFeedsError`](./src/sdk/models/errors/codatbankfeedserror.ts)**:
* [`SDKError`](./src/sdk/models/errors/sdkerror.ts): The fallback error class if no more specific error class is matched.

</details>

Network failures and timeouts are thrown as `FetchError`, with the original error, such as a `TypeError` or a `TimeoutError`, on `error.cause`. Input that does not match the expected model is thrown as `SDKValidationError`. Neither extends [`CodatBankFeedsError`](./src/sdk/models/errors/codatbankfeedserror.ts).

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
    name: "Bank of Dave",
    description: "Requested early access to the new financing scheme.",
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
import { CodatBankFeeds } from "@codat/bank-feeds";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@codat/bank-feeds/lib/http";

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

const sdk = new CodatBankFeeds({ httpClient: httpClient });
```

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
    name: "Bank of Dave",
    description: "Requested early access to the new financing scheme.",
  });

  console.log(result);
}

run();
```

## Debugging

You can set up your SDK to log the method and URL of each request and the status of each response.

You can pass a logger that matches `console`'s interface as an SDK option.

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const sdk = new CodatBankFeeds({ debugLogger: console });
```

## Support

If you encounter any challenges while utilizing our SDKs, please don't hesitate to reach out for assistance.
You can raise any issues by contacting your dedicated Codat representative or reaching out to our [support team](mailto:support@codat.io).
We're here to help ensure a smooth experience for you.
