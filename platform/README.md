# Platform

<!-- Start Codat Library Description -->
Manage the building blocks of Codat, including companies, connections, and more.
<!-- End Codat Library Description -->

<!-- Start Summary [summary] -->
## Summary

Platform API: Platform API

An API for the common components of all of Codat's products.

These end points cover creating and managing your companies, data connections, and integrations.

[Read about the building blocks of Codat...](https://docs.codat.io/core-concepts/companies) | [See our OpenAPI spec](https://github.com/codatio/oas) 

---
<!-- Start Codat Tags Table -->
## Endpoints

| Endpoints | Description |
| :- |:- |
| Companies | Create and manage your SMB users' companies. |
| Connections | Create new and manage existing data connections for a company. |
| Connection management | Configure connection management UI and retrieve access tokens for authentication. |
| Webhooks | Create and manage webhooks that listen to Codat's events. |
| Integrations | Get a list of integrations supported by Codat and their logos. |
| Refresh data | Initiate data refreshes, view pull status and history. |
| Settings | Manage company profile configuration, sync settings, and API keys. |
| Push data | Initiate and monitor Create, Update, and Delete operations. |
| Supplemental data | Configure and pull additional data you can include in Codat's standard data types. |
| Custom data type | Configure and pull additional data types that are not included in Codat's standardized data model. |
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
npm add @codat/platform
```

### PNPM

```bash
pnpm add @codat/platform
```

### Bun

```bash
bun add @codat/platform
```

### Yarn

```bash
yarn add @codat/platform zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

## Example Usage
<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.companies.list({
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

<details open>
<summary>Available methods</summary>


### [companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List companies
* [create](docs/sdks/companies/README.md#create) - Create company
* [get](docs/sdks/companies/README.md#get) - Get company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [update](docs/sdks/companies/README.md#update) - Update company
* [addProduct](docs/sdks/companies/README.md#addproduct) - Add product
* [removeProduct](docs/sdks/companies/README.md#removeproduct) - Remove product

### [connectionManagement](docs/sdks/connectionmanagement/README.md)

* [getAccessToken](docs/sdks/connectionmanagement/README.md#getaccesstoken) - Get access token

#### [connectionManagement.corsSettings](docs/sdks/corssettings/README.md)

* [get](docs/sdks/corssettings/README.md#get) - Get CORS settings
* [set](docs/sdks/corssettings/README.md#set) - Set CORS settings

### [connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - List connections
* [create](docs/sdks/connections/README.md#create) - Create connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection
* [updateAuthorization](docs/sdks/connections/README.md#updateauthorization) - Update authorization

### [customDataType](docs/sdks/customdatatype/README.md)

* [configure](docs/sdks/customdatatype/README.md#configure) - Configure custom data type
* [getConfiguration](docs/sdks/customdatatype/README.md#getconfiguration) - Get custom data configuration
* [refresh](docs/sdks/customdatatype/README.md#refresh) - Refresh custom data type
* [list](docs/sdks/customdatatype/README.md#list) - List custom data type records

### [integrations](docs/sdks/integrations/README.md)

* [list](docs/sdks/integrations/README.md#list) - List integrations
* [get](docs/sdks/integrations/README.md#get) - Get integration
* [getBranding](docs/sdks/integrations/README.md#getbranding) - Get branding

### [pushData](docs/sdks/pushdata/README.md)

* [getModelOptions](docs/sdks/pushdata/README.md#getmodeloptions) - Get push options
* [listOperations](docs/sdks/pushdata/README.md#listoperations) - List push operations
* [getOperation](docs/sdks/pushdata/README.md#getoperation) - Get push operation

### [refreshData](docs/sdks/refreshdata/README.md)

* [all](docs/sdks/refreshdata/README.md#all) - Refresh all data
* [byDataType](docs/sdks/refreshdata/README.md#bydatatype) - Refresh data type
* [get](docs/sdks/refreshdata/README.md#get) - Get data status
* [listPullOperations](docs/sdks/refreshdata/README.md#listpulloperations) - List pull operations
* [getPullOperation](docs/sdks/refreshdata/README.md#getpulloperation) - Get pull operation

### [settings](docs/sdks/settings/README.md)

* [getProfile](docs/sdks/settings/README.md#getprofile) - Get profile
* [updateProfile](docs/sdks/settings/README.md#updateprofile) - Update profile
* [getSyncSettings](docs/sdks/settings/README.md#getsyncsettings) - Get sync settings
* [updateSyncSettings](docs/sdks/settings/README.md#updatesyncsettings) - Update all sync settings
* [listApiKeys](docs/sdks/settings/README.md#listapikeys) - List API keys
* [createApiKey](docs/sdks/settings/README.md#createapikey) - Create API key
* [deleteApiKey](docs/sdks/settings/README.md#deleteapikey) - Delete API key

### [supplementalData](docs/sdks/supplementaldata/README.md)

* [configure](docs/sdks/supplementaldata/README.md#configure) - Configure
* [getConfiguration](docs/sdks/supplementaldata/README.md#getconfiguration) - Get configuration

### [webhooks](docs/sdks/webhooks/README.md)

* [~~list~~](docs/sdks/webhooks/README.md#list) - List webhooks (legacy) :warning: **Deprecated**
* [~~create~~](docs/sdks/webhooks/README.md#create) - Create webhook (legacy) :warning: **Deprecated**
* [~~get~~](docs/sdks/webhooks/README.md#get) - Get webhook (legacy) :warning: **Deprecated**
* [listConsumers](docs/sdks/webhooks/README.md#listconsumers) - List webhook consumers
* [createConsumer](docs/sdks/webhooks/README.md#createconsumer) - Create webhook consumer
* [deleteConsumer](docs/sdks/webhooks/README.md#deleteconsumer) - Delete webhook consumer

</details>
<!-- End Available Resources and Operations [operations] -->



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

- [`companiesAddProduct`](docs/sdks/companies/README.md#addproduct) - Add product
- [`companiesCreate`](docs/sdks/companies/README.md#create) - Create company
- [`companiesDelete`](docs/sdks/companies/README.md#delete) - Delete a company
- [`companiesGet`](docs/sdks/companies/README.md#get) - Get company
- [`companiesList`](docs/sdks/companies/README.md#list) - List companies
- [`companiesRemoveProduct`](docs/sdks/companies/README.md#removeproduct) - Remove product
- [`companiesUpdate`](docs/sdks/companies/README.md#update) - Update company
- [`connectionManagementCorsSettingsGet`](docs/sdks/corssettings/README.md#get) - Get CORS settings
- [`connectionManagementCorsSettingsSet`](docs/sdks/corssettings/README.md#set) - Set CORS settings
- [`connectionManagementGetAccessToken`](docs/sdks/connectionmanagement/README.md#getaccesstoken) - Get access token
- [`connectionsCreate`](docs/sdks/connections/README.md#create) - Create connection
- [`connectionsDelete`](docs/sdks/connections/README.md#delete) - Delete connection
- [`connectionsGet`](docs/sdks/connections/README.md#get) - Get connection
- [`connectionsList`](docs/sdks/connections/README.md#list) - List connections
- [`connectionsUnlink`](docs/sdks/connections/README.md#unlink) - Unlink connection
- [`connectionsUpdateAuthorization`](docs/sdks/connections/README.md#updateauthorization) - Update authorization
- [`customDataTypeConfigure`](docs/sdks/customdatatype/README.md#configure) - Configure custom data type
- [`customDataTypeGetConfiguration`](docs/sdks/customdatatype/README.md#getconfiguration) - Get custom data configuration
- [`customDataTypeList`](docs/sdks/customdatatype/README.md#list) - List custom data type records
- [`customDataTypeRefresh`](docs/sdks/customdatatype/README.md#refresh) - Refresh custom data type
- [`integrationsGet`](docs/sdks/integrations/README.md#get) - Get integration
- [`integrationsGetBranding`](docs/sdks/integrations/README.md#getbranding) - Get branding
- [`integrationsList`](docs/sdks/integrations/README.md#list) - List integrations
- [`pushDataGetModelOptions`](docs/sdks/pushdata/README.md#getmodeloptions) - Get push options
- [`pushDataGetOperation`](docs/sdks/pushdata/README.md#getoperation) - Get push operation
- [`pushDataListOperations`](docs/sdks/pushdata/README.md#listoperations) - List push operations
- [`refreshDataAll`](docs/sdks/refreshdata/README.md#all) - Refresh all data
- [`refreshDataByDataType`](docs/sdks/refreshdata/README.md#bydatatype) - Refresh data type
- [`refreshDataGet`](docs/sdks/refreshdata/README.md#get) - Get data status
- [`refreshDataGetPullOperation`](docs/sdks/refreshdata/README.md#getpulloperation) - Get pull operation
- [`refreshDataListPullOperations`](docs/sdks/refreshdata/README.md#listpulloperations) - List pull operations
- [`settingsCreateApiKey`](docs/sdks/settings/README.md#createapikey) - Create API key
- [`settingsDeleteApiKey`](docs/sdks/settings/README.md#deleteapikey) - Delete API key
- [`settingsGetProfile`](docs/sdks/settings/README.md#getprofile) - Get profile
- [`settingsGetSyncSettings`](docs/sdks/settings/README.md#getsyncsettings) - Get sync settings
- [`settingsListApiKeys`](docs/sdks/settings/README.md#listapikeys) - List API keys
- [`settingsUpdateProfile`](docs/sdks/settings/README.md#updateprofile) - Update profile
- [`settingsUpdateSyncSettings`](docs/sdks/settings/README.md#updatesyncsettings) - Update all sync settings
- [`supplementalDataConfigure`](docs/sdks/supplementaldata/README.md#configure) - Configure
- [`supplementalDataGetConfiguration`](docs/sdks/supplementaldata/README.md#getconfiguration) - Get configuration
- [`webhooksCreateConsumer`](docs/sdks/webhooks/README.md#createconsumer) - Create webhook consumer
- [`webhooksDeleteConsumer`](docs/sdks/webhooks/README.md#deleteconsumer) - Delete webhook consumer
- [`webhooksListConsumers`](docs/sdks/webhooks/README.md#listconsumers) - List webhook consumers
- ~~[`webhooksCreate`](docs/sdks/webhooks/README.md#create)~~ - Create webhook (legacy) :warning: **Deprecated**
- ~~[`webhooksGet`](docs/sdks/webhooks/README.md#get)~~ - Get webhook (legacy) :warning: **Deprecated**
- ~~[`webhooksList`](docs/sdks/webhooks/README.md#list)~~ - List webhooks (legacy) :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
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
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
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
  const result = await codatPlatform.companies.list({
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

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `sdk/models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `list` method may throw the following errors:

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorMessage                    | 400, 401, 402, 403, 404, 429, 500, 503 | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |

```typescript
import { CodatPlatform } from "@codat/platform";
import {
  ErrorMessage,
  SDKValidationError,
} from "@codat/platform/sdk/models/errors";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  let result;
  try {
    result = await codatPlatform.companies.list({
      page: 1,
      pageSize: 100,
      query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
      orderBy: "-modifiedDate",
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

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.codat.io` | None |

```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  serverIdx: 0,
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.companies.list({
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
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  serverURL: "https://api.codat.io",
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.companies.list({
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
import { CodatPlatform } from "@codat/platform";
import { HTTPClient } from "@codat/platform/lib/http";

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

const sdk = new CodatPlatform({ httpClient });
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
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.companies.list({
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

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CodatPlatform } from "@codat/platform";

const sdk = new CodatPlatform({ debugLogger: console });
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