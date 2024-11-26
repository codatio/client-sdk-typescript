# Sync for Commerce

<!-- Start Codat Library Description -->
﻿Embedded accounting integrations for POS and eCommerce platforms.
<!-- End Codat Library Description -->

<!-- Start Summary [summary] -->
## Summary

Sync for Commerce: The API for Sync for Commerce. 

Sync for Commerce automatically replicates and reconciles sales data from a merchant’s source PoS, Payments, and eCommerce systems into their accounting software. This eliminates manual processing by merchants and transforms their ability to run and grow their business.
  
[Explore product](https://docs.codat.io/commerce/overview) | [See our OpenAPI spec](https://github.com/codatio/oas)

Not seeing the endpoints you're expecting? We've [reorganized our products](https://docs.codat.io/updates/230901-new-products), and you may be using a [different version of Sync for Commerce](https://docs.codat.io/sync-for-commerce-v1-api#/).

---

<!-- Start Codat Tags Table -->
## Endpoints

| Endpoints | Description |
| :- |:- |
| Connections | Create new and manage existing data connections for a company. |
| Sync | Initiate data syncs and monitor their status. |
| Sync flow settings | Control text and visibility settings for the Sync Flow. |
| Integrations | Get a list of integrations supported by Sync for Commerce and their logos. |
| Advanced controls | View and manage mapping configured for a company's commerce sync. |
<!-- End Codat Tags Table -->
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

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
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @codat/sync-for-commerce
```

### PNPM

```bash
pnpm add @codat/sync-for-commerce
```

### Bun

```bash
bun add @codat/sync-for-commerce
```

### Yarn

```bash
yarn add @codat/sync-for-commerce zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

## Example Usage
<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

const codatSyncCommerce = new CodatSyncCommerce({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncCommerce.connections.getSyncFlowUrl({
    commerceKey: "<value>",
    accountingKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [advancedControls](docs/sdks/advancedcontrols/README.md)

* [listCompanies](docs/sdks/advancedcontrols/README.md#listcompanies) - List companies
* [createCompany](docs/sdks/advancedcontrols/README.md#createcompany) - Create company
* [getConfiguration](docs/sdks/advancedcontrols/README.md#getconfiguration) - Get company configuration
* [setConfiguration](docs/sdks/advancedcontrols/README.md#setconfiguration) - Set configuration


### [connections](docs/sdks/connections/README.md)

* [getSyncFlowUrl](docs/sdks/connections/README.md#getsyncflowurl) - Start new sync flow
* [list](docs/sdks/connections/README.md#list) - List connections
* [create](docs/sdks/connections/README.md#create) - Create connection
* [updateConnection](docs/sdks/connections/README.md#updateconnection) - Update connection
* [updateAuthorization](docs/sdks/connections/README.md#updateauthorization) - Update authorization

### [integrations](docs/sdks/integrations/README.md)

* [list](docs/sdks/integrations/README.md#list) - List integrations
* [getBranding](docs/sdks/integrations/README.md#getbranding) - Get branding for an integration

### [sync](docs/sdks/sync/README.md)

* [request](docs/sdks/sync/README.md#request) - Initiate new sync
* [requestForDateRange](docs/sdks/sync/README.md#requestfordaterange) - Initiate sync for specific range
* [getStatus](docs/sdks/sync/README.md#getstatus) - Get sync status
* [getLastSuccessfulSync](docs/sdks/sync/README.md#getlastsuccessfulsync) - Last successful sync
* [getLatestSync](docs/sdks/sync/README.md#getlatestsync) - Latest sync status
* [get](docs/sdks/sync/README.md#get) - Get sync status
* [list](docs/sdks/sync/README.md#list) - List sync statuses

### [syncFlowSettings](docs/sdks/syncflowsettings/README.md)

* [getConfigTextSyncFlow](docs/sdks/syncflowsettings/README.md#getconfigtextsyncflow) - Get preferences for text fields
* [updateConfigTextSyncFlow](docs/sdks/syncflowsettings/README.md#updateconfigtextsyncflow) - Update preferences for text fields
* [getVisibleAccounts](docs/sdks/syncflowsettings/README.md#getvisibleaccounts) - List visible accounts
* [updateVisibleAccountsSyncFlow](docs/sdks/syncflowsettings/README.md#updatevisibleaccountssyncflow) - Update visible accounts

</details>
<!-- End Available Resources and Operations [operations] -->



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

- [`advancedControlsCreateCompany`](docs/sdks/advancedcontrols/README.md#createcompany) - Create company
- [`advancedControlsGetConfiguration`](docs/sdks/advancedcontrols/README.md#getconfiguration) - Get company configuration
- [`advancedControlsListCompanies`](docs/sdks/advancedcontrols/README.md#listcompanies) - List companies
- [`advancedControlsSetConfiguration`](docs/sdks/advancedcontrols/README.md#setconfiguration) - Set configuration
- [`connectionsCreate`](docs/sdks/connections/README.md#create) - Create connection
- [`connectionsGetSyncFlowUrl`](docs/sdks/connections/README.md#getsyncflowurl) - Start new sync flow
- [`connectionsList`](docs/sdks/connections/README.md#list) - List connections
- [`connectionsUpdateAuthorization`](docs/sdks/connections/README.md#updateauthorization) - Update authorization
- [`connectionsUpdateConnection`](docs/sdks/connections/README.md#updateconnection) - Update connection
- [`integrationsGetBranding`](docs/sdks/integrations/README.md#getbranding) - Get branding for an integration
- [`integrationsList`](docs/sdks/integrations/README.md#list) - List integrations
- [`syncFlowSettingsGetConfigTextSyncFlow`](docs/sdks/syncflowsettings/README.md#getconfigtextsyncflow) - Get preferences for text fields
- [`syncFlowSettingsGetVisibleAccounts`](docs/sdks/syncflowsettings/README.md#getvisibleaccounts) - List visible accounts
- [`syncFlowSettingsUpdateConfigTextSyncFlow`](docs/sdks/syncflowsettings/README.md#updateconfigtextsyncflow) - Update preferences for text fields
- [`syncFlowSettingsUpdateVisibleAccountsSyncFlow`](docs/sdks/syncflowsettings/README.md#updatevisibleaccountssyncflow) - Update visible accounts
- [`syncGet`](docs/sdks/sync/README.md#get) - Get sync status
- [`syncGetLastSuccessfulSync`](docs/sdks/sync/README.md#getlastsuccessfulsync) - Last successful sync
- [`syncGetLatestSync`](docs/sdks/sync/README.md#getlatestsync) - Latest sync status
- [`syncGetStatus`](docs/sdks/sync/README.md#getstatus) - Get sync status
- [`syncList`](docs/sdks/sync/README.md#list) - List sync statuses
- [`syncRequest`](docs/sdks/sync/README.md#request) - Initiate new sync
- [`syncRequestForDateRange`](docs/sdks/sync/README.md#requestfordaterange) - Initiate sync for specific range

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

const codatSyncCommerce = new CodatSyncCommerce({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncCommerce.connections.getSyncFlowUrl({
    commerceKey: "<value>",
    accountingKey: "<value>",
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

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

const codatSyncCommerce = new CodatSyncCommerce({
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
  const result = await codatSyncCommerce.connections.getSyncFlowUrl({
    commerceKey: "<value>",
    accountingKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `sdk/models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `getSyncFlowUrl` method may throw the following errors:

| Error Type          | Status Code                            | Content Type     |
| ------------------- | -------------------------------------- | ---------------- |
| errors.ErrorMessage | 400, 401, 402, 403, 404, 429, 500, 503 | application/json |
| errors.SDKError     | 4XX, 5XX                               | \*/\*            |

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import {
  ErrorMessage,
  SDKValidationError,
} from "@codat/sync-for-commerce/sdk/models/errors";

const codatSyncCommerce = new CodatSyncCommerce({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  let result;
  try {
    result = await codatSyncCommerce.connections.getSyncFlowUrl({
      commerceKey: "<value>",
      accountingKey: "<value>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorMessage): {
        // Handle err.data$: ErrorMessageData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

const codatSyncCommerce = new CodatSyncCommerce({
  serverURL: "https://api.codat.io",
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncCommerce.connections.getSyncFlowUrl({
    commerceKey: "<value>",
    accountingKey: "<value>",
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
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { HTTPClient } from "@codat/sync-for-commerce/lib/http";

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

const sdk = new CodatSyncCommerce({ httpClient });
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
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

const codatSyncCommerce = new CodatSyncCommerce({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncCommerce.connections.getSyncFlowUrl({
    commerceKey: "<value>",
    accountingKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

const sdk = new CodatSyncCommerce({ debugLogger: console });
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