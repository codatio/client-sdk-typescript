# Platform

Manage the building blocks of Codat, including companies, connections, and more.

## Summary

Platform API: An API for the common components of all of Codat's products.

These end points cover creating and managing your companies, data connections, and integrations.

[Explore solution](https://docs.codat.io/core-concepts/companies) | [See OpenAPI spec](https://github.com/codatio/oas)

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
yarn add @codat/platform
```

## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).

## SDK Example Usage

### Example

```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.companies.list({
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

### [Companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List companies
* [create](docs/sdks/companies/README.md#create) - Create company
* [get](docs/sdks/companies/README.md#get) - Get company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [replace](docs/sdks/companies/README.md#replace) - Replace company
* [update](docs/sdks/companies/README.md#update) - Update company
* [addProduct](docs/sdks/companies/README.md#addproduct) - Add product
* [removeProduct](docs/sdks/companies/README.md#removeproduct) - Remove product
* [refreshProductData](docs/sdks/companies/README.md#refreshproductdata) - Refresh product data
* [getAccessToken](docs/sdks/companies/README.md#getaccesstoken) - Get company access token
* [getCompanySyncSettings](docs/sdks/companies/README.md#getcompanysyncsettings) - Get company sync settings
* [setCompanySyncSettings](docs/sdks/companies/README.md#setcompanysyncsettings) - Set company sync settings

### [~~ConnectionManagement~~](docs/sdks/connectionmanagement/README.md)

* [~~get~~](docs/sdks/connectionmanagement/README.md#get) - Get access token (old) :warning: **Deprecated** Use [getAccessToken](docs/sdks/companies/README.md#getaccesstoken) instead.

### [Connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - List connections
* [create](docs/sdks/connections/README.md#create) - Create connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection
* [updateAuthorization](docs/sdks/connections/README.md#updateauthorization) - Update authorization

### [~~Cors~~](docs/sdks/cors/README.md)

* [~~get~~](docs/sdks/cors/README.md#get) - Get CORS settings (old) :warning: **Deprecated** Use [get](docs/sdks/settings/README.md#get) instead.
* [~~set~~](docs/sdks/cors/README.md#set) - Set CORS settings (old) :warning: **Deprecated** Use [set](docs/sdks/settings/README.md#set) instead.

### [CustomDataType](docs/sdks/customdatatype/README.md)

* [configure](docs/sdks/customdatatype/README.md#configure) - Configure custom data type
* [getConfiguration](docs/sdks/customdatatype/README.md#getconfiguration) - Get custom data configuration
* [refresh](docs/sdks/customdatatype/README.md#refresh) - Refresh custom data type
* [list](docs/sdks/customdatatype/README.md#list) - List custom data type records

### [Integrations](docs/sdks/integrations/README.md)

* [list](docs/sdks/integrations/README.md#list) - List integrations
* [get](docs/sdks/integrations/README.md#get) - Get integration
* [getBranding](docs/sdks/integrations/README.md#getbranding) - Get branding

### [PushData](docs/sdks/pushdata/README.md)

* [getModelOptions](docs/sdks/pushdata/README.md#getmodeloptions) - Get push options
* [listOperations](docs/sdks/pushdata/README.md#listoperations) - List push operations
* [getOperation](docs/sdks/pushdata/README.md#getoperation) - Get push operation

### [ReadData](docs/sdks/readdata/README.md)

* [getValidationResults](docs/sdks/readdata/README.md#getvalidationresults) - Get validation results

### [RefreshData](docs/sdks/refreshdata/README.md)

* [all](docs/sdks/refreshdata/README.md#all) - Refresh all data
* [byDataType](docs/sdks/refreshdata/README.md#bydatatype) - Refresh data type
* [get](docs/sdks/refreshdata/README.md#get) - Get data status
* [listPullOperations](docs/sdks/refreshdata/README.md#listpulloperations) - List pull operations
* [getPullOperation](docs/sdks/refreshdata/README.md#getpulloperation) - Get pull operation

### [Settings](docs/sdks/settings/README.md)

* [get](docs/sdks/settings/README.md#get) - Get CORS settings
* [set](docs/sdks/settings/README.md#set) - Set CORS settings
* [getProfile](docs/sdks/settings/README.md#getprofile) - Get profile
* [updateProfile](docs/sdks/settings/README.md#updateprofile) - Update profile
* [getSyncSettings](docs/sdks/settings/README.md#getsyncsettings) - Get sync settings
* [updateSyncSettings](docs/sdks/settings/README.md#updatesyncsettings) - Update all sync settings
* [listApiKeys](docs/sdks/settings/README.md#listapikeys) - List API keys
* [createApiKey](docs/sdks/settings/README.md#createapikey) - Create API key
* [deleteApiKey](docs/sdks/settings/README.md#deleteapikey) - Delete API key

### [SupplementalData](docs/sdks/supplementaldata/README.md)

* [configure](docs/sdks/supplementaldata/README.md#configure) - Configure
* [getConfiguration](docs/sdks/supplementaldata/README.md#getconfiguration) - Get configuration

### [Webhooks](docs/sdks/webhooks/README.md)

* [listConsumers](docs/sdks/webhooks/README.md#listconsumers) - List webhook consumers
* [createConsumer](docs/sdks/webhooks/README.md#createconsumer) - Create webhook consumer
* [deleteConsumer](docs/sdks/webhooks/README.md#deleteconsumer) - Delete webhook consumer
* [rotateZapierKey](docs/sdks/webhooks/README.md#rotatezapierkey) - Rotate Zapier key

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

- [`companiesAddProduct`](docs/sdks/companies/README.md#addproduct) - Add product
- [`companiesCreate`](docs/sdks/companies/README.md#create) - Create company
- [`companiesDelete`](docs/sdks/companies/README.md#delete) - Delete a company
- [`companiesGet`](docs/sdks/companies/README.md#get) - Get company
- [`companiesGetAccessToken`](docs/sdks/companies/README.md#getaccesstoken) - Get company access token
- [`companiesGetCompanySyncSettings`](docs/sdks/companies/README.md#getcompanysyncsettings) - Get company sync settings
- [`companiesList`](docs/sdks/companies/README.md#list) - List companies
- [`companiesRefreshProductData`](docs/sdks/companies/README.md#refreshproductdata) - Refresh product data
- [`companiesRemoveProduct`](docs/sdks/companies/README.md#removeproduct) - Remove product
- [`companiesReplace`](docs/sdks/companies/README.md#replace) - Replace company
- [`companiesSetCompanySyncSettings`](docs/sdks/companies/README.md#setcompanysyncsettings) - Set company sync settings
- [`companiesUpdate`](docs/sdks/companies/README.md#update) - Update company
- ~~[`connectionManagementGet`](docs/sdks/connectionmanagement/README.md#get)~~ - Get access token (old) :warning: **Deprecated** Use [`companiesGetAccessToken`](docs/sdks/companies/README.md#getaccesstoken) instead.
- [`connectionsCreate`](docs/sdks/connections/README.md#create) - Create connection
- [`connectionsDelete`](docs/sdks/connections/README.md#delete) - Delete connection
- [`connectionsGet`](docs/sdks/connections/README.md#get) - Get connection
- [`connectionsList`](docs/sdks/connections/README.md#list) - List connections
- [`connectionsUnlink`](docs/sdks/connections/README.md#unlink) - Unlink connection
- [`connectionsUpdateAuthorization`](docs/sdks/connections/README.md#updateauthorization) - Update authorization
- ~~[`corsGet`](docs/sdks/cors/README.md#get)~~ - Get CORS settings (old) :warning: **Deprecated** Use [`settingsGet`](docs/sdks/settings/README.md#get) instead.
- ~~[`corsSet`](docs/sdks/cors/README.md#set)~~ - Set CORS settings (old) :warning: **Deprecated** Use [`settingsSet`](docs/sdks/settings/README.md#set) instead.
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
- [`readDataGetValidationResults`](docs/sdks/readdata/README.md#getvalidationresults) - Get validation results
- [`refreshDataAll`](docs/sdks/refreshdata/README.md#all) - Refresh all data
- [`refreshDataByDataType`](docs/sdks/refreshdata/README.md#bydatatype) - Refresh data type
- [`refreshDataGet`](docs/sdks/refreshdata/README.md#get) - Get data status
- [`refreshDataGetPullOperation`](docs/sdks/refreshdata/README.md#getpulloperation) - Get pull operation
- [`refreshDataListPullOperations`](docs/sdks/refreshdata/README.md#listpulloperations) - List pull operations
- [`settingsCreateApiKey`](docs/sdks/settings/README.md#createapikey) - Create API key
- [`settingsDeleteApiKey`](docs/sdks/settings/README.md#deleteapikey) - Delete API key
- [`settingsGet`](docs/sdks/settings/README.md#get) - Get CORS settings
- [`settingsGetProfile`](docs/sdks/settings/README.md#getprofile) - Get profile
- [`settingsGetSyncSettings`](docs/sdks/settings/README.md#getsyncsettings) - Get sync settings
- [`settingsListApiKeys`](docs/sdks/settings/README.md#listapikeys) - List API keys
- [`settingsSet`](docs/sdks/settings/README.md#set) - Set CORS settings
- [`settingsUpdateProfile`](docs/sdks/settings/README.md#updateprofile) - Update profile
- [`settingsUpdateSyncSettings`](docs/sdks/settings/README.md#updatesyncsettings) - Update all sync settings
- [`supplementalDataConfigure`](docs/sdks/supplementaldata/README.md#configure) - Configure
- [`supplementalDataGetConfiguration`](docs/sdks/supplementaldata/README.md#getconfiguration) - Get configuration
- [`webhooksCreateConsumer`](docs/sdks/webhooks/README.md#createconsumer) - Create webhook consumer
- [`webhooksDeleteConsumer`](docs/sdks/webhooks/README.md#deleteconsumer) - Delete webhook consumer
- [`webhooksListConsumers`](docs/sdks/webhooks/README.md#listconsumers) - List webhook consumers
- [`webhooksRotateZapierKey`](docs/sdks/webhooks/README.md#rotatezapierkey) - Rotate Zapier key

</details>

## Retries

Every operation in this SDK retries failed requests with a default backoff strategy. By default it retries connection errors and responses with status 408, 429 or 5XX, starting at 500 ms and backing off by a factor of 1.5 up to 60 s between attempts, for at most an hour. You can override the retry strategy for a single call, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.companies.list({
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
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
  });

  console.log(result);
}

run();
```

## Error Handling

[`CodatPlatformError`](./src/sdk/models/errors/codatplatformerror.ts) is the base class for all HTTP error responses. It has the following properties:

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
import { CodatPlatform } from "@codat/platform";
import * as errors from "@codat/platform/sdk/models/errors";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  try {
    const result = await codatPlatform.companies.list({
      query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
      orderBy: "-modifiedDate",
      tags: "region=uk && team=invoice-finance",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.CodatPlatformError) {
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
* [`CodatPlatformError`](./src/sdk/models/errors/codatplatformerror.ts): The base class for HTTP error responses.
  * [`ErrorMessage`](./src/sdk/models/errors/errormessage.ts): A Codat API error response. Its structured fields are on `error.data$`.

<details><summary>Less common errors (1)</summary>

<br />

**Inherit from [`CodatPlatformError`](./src/sdk/models/errors/codatplatformerror.ts)**:
* [`SDKError`](./src/sdk/models/errors/sdkerror.ts): The fallback error class if no more specific error class is matched.

</details>

Network failures and timeouts are thrown as `FetchError`, with the original error, such as a `TypeError` or a `TimeoutError`, on `error.cause`. Input that does not match the expected model is thrown as `SDKValidationError`. Neither extends [`CodatPlatformError`](./src/sdk/models/errors/codatplatformerror.ts).

## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  serverURL: "https://api.codat.io",
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.companies.list({
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
import { CodatPlatform } from "@codat/platform";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@codat/platform/lib/http";

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

const sdk = new CodatPlatform({ httpClient: httpClient });
```

## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type   | Scheme  |
| ------------ | ------ | ------- |
| `authHeader` | apiKey | API key |

To authenticate with the API the `authHeader` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.companies.list({
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
import { CodatPlatform } from "@codat/platform";

const sdk = new CodatPlatform({ debugLogger: console });
```

## Support

If you encounter any challenges while utilizing our SDKs, please don't hesitate to reach out for assistance.
You can raise any issues by contacting your dedicated Codat representative or reaching out to our [support team](mailto:support@codat.io).
We're here to help ensure a smooth experience for you.
