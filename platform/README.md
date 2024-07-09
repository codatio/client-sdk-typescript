# Platform

<!-- Start Codat Library Description -->
Manage the building blocks of Codat, including companies, connections, and more.
<!-- End Codat Library Description -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

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

### [companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List companies
* [create](docs/sdks/companies/README.md#create) - Create company
* [get](docs/sdks/companies/README.md#get) - Get company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [update](docs/sdks/companies/README.md#update) - Update company

### [connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - List connections
* [create](docs/sdks/connections/README.md#create) - Create connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection
* [updateAuthorization](docs/sdks/connections/README.md#updateauthorization) - Update authorization

### [connectionManagement](docs/sdks/connectionmanagement/README.md)

* [getAccessToken](docs/sdks/connectionmanagement/README.md#getaccesstoken) - Get access token

### [connectionManagement.corsSettings](docs/sdks/corssettings/README.md)

* [get](docs/sdks/corssettings/README.md#get) - Get CORS settings
* [set](docs/sdks/corssettings/README.md#set) - Set CORS settings

### [refreshData](docs/sdks/refreshdata/README.md)

* [all](docs/sdks/refreshdata/README.md#all) - Refresh all data
* [byDataType](docs/sdks/refreshdata/README.md#bydatatype) - Refresh data type
* [get](docs/sdks/refreshdata/README.md#get) - Get data status
* [listPullOperations](docs/sdks/refreshdata/README.md#listpulloperations) - List pull operations
* [getPullOperation](docs/sdks/refreshdata/README.md#getpulloperation) - Get pull operation

### [groups](docs/sdks/groups/README.md)

* [addCompany](docs/sdks/groups/README.md#addcompany) - Add company
* [removeCompany](docs/sdks/groups/README.md#removecompany) - Remove company
* [list](docs/sdks/groups/README.md#list) - List groups
* [create](docs/sdks/groups/README.md#create) - Create group

### [webhooks](docs/sdks/webhooks/README.md)

* [~~list~~](docs/sdks/webhooks/README.md#list) - List webhooks :warning: **Deprecated**
* [~~create~~](docs/sdks/webhooks/README.md#create) - Create webhook :warning: **Deprecated**
* [~~get~~](docs/sdks/webhooks/README.md#get) - Get webhook :warning: **Deprecated**
* [listConsumers](docs/sdks/webhooks/README.md#listconsumers) - List webhook consumers
* [createConsumer](docs/sdks/webhooks/README.md#createconsumer) - Create webhook consumer
* [deleteConsumer](docs/sdks/webhooks/README.md#deleteconsumer) - Delete webhook consumer

### [integrations](docs/sdks/integrations/README.md)

* [list](docs/sdks/integrations/README.md#list) - List integrations
* [get](docs/sdks/integrations/README.md#get) - Get integration
* [getBranding](docs/sdks/integrations/README.md#getbranding) - Get branding

### [settings](docs/sdks/settings/README.md)

* [getProfile](docs/sdks/settings/README.md#getprofile) - Get profile
* [updateProfile](docs/sdks/settings/README.md#updateprofile) - Update profile
* [getSyncSettings](docs/sdks/settings/README.md#getsyncsettings) - Get sync settings
* [updateSyncSettings](docs/sdks/settings/README.md#updatesyncsettings) - Update all sync settings
* [listApiKeys](docs/sdks/settings/README.md#listapikeys) - List API keys
* [createApiKey](docs/sdks/settings/README.md#createapikey) - Create API key
* [deleteApiKey](docs/sdks/settings/README.md#deleteapikey) - Delete API key

### [pushData](docs/sdks/pushdata/README.md)

* [getModelOptions](docs/sdks/pushdata/README.md#getmodeloptions) - Get push options
* [listOperations](docs/sdks/pushdata/README.md#listoperations) - List push operations
* [getOperation](docs/sdks/pushdata/README.md#getoperation) - Get push operation

### [supplementalData](docs/sdks/supplementaldata/README.md)

* [configure](docs/sdks/supplementaldata/README.md#configure) - Configure
* [getConfiguration](docs/sdks/supplementaldata/README.md#getconfiguration) - Get configuration

### [customDataType](docs/sdks/customdatatype/README.md)

* [configure](docs/sdks/customdatatype/README.md#configure) - Configure custom data type
* [getConfiguration](docs/sdks/customdatatype/README.md#getconfiguration) - Get custom data configuration
* [refresh](docs/sdks/customdatatype/README.md#refresh) - Refresh custom data type
* [list](docs/sdks/customdatatype/README.md#list) - List custom data type records
<!-- End Available Resources and Operations [operations] -->



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
    const result = await codatPlatform.companies.list(
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

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { CodatPlatform } from "@codat/platform";
import { SDKValidationError } from "@codat/platform/sdk/models/errors";

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