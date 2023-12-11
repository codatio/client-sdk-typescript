# Sync for Commerce

<!-- Start Codat Library Description -->
﻿Embedded accounting integrations for POS and eCommerce platforms.
<!-- End Codat Library Description -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @codat/sync-for-commerce
```

### Yarn

```bash
yarn add @codat/sync-for-commerce
```
<!-- End SDK Installation [installation] -->

## Example Usage
<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { Locale } from "@codat/sync-for-commerce/dist/sdk/models/shared";

async function run() {
    const sdk = new CodatSyncCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowSettings.getConfigTextSyncFlow({
        locale: Locale.EnUs,
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

### [syncFlowSettings](docs/sdks/syncflowsettings/README.md)

* [getConfigTextSyncFlow](docs/sdks/syncflowsettings/README.md#getconfigtextsyncflow) - Get preferences for text fields
* [getVisibleAccounts](docs/sdks/syncflowsettings/README.md#getvisibleaccounts) - List visible accounts
* [updateConfigTextSyncFlow](docs/sdks/syncflowsettings/README.md#updateconfigtextsyncflow) - Update preferences for text fields
* [updateVisibleAccountsSyncFlow](docs/sdks/syncflowsettings/README.md#updatevisibleaccountssyncflow) - Update visible accounts

### [advancedControls](docs/sdks/advancedcontrols/README.md)

* [createCompany](docs/sdks/advancedcontrols/README.md#createcompany) - Create company
* [getConfiguration](docs/sdks/advancedcontrols/README.md#getconfiguration) - Get company configuration
* [listCompanies](docs/sdks/advancedcontrols/README.md#listcompanies) - List companies
* [setConfiguration](docs/sdks/advancedcontrols/README.md#setconfiguration) - Set configuration

### [connections](docs/sdks/connections/README.md)

* [create](docs/sdks/connections/README.md#create) - Create connection
* [getSyncFlowUrl](docs/sdks/connections/README.md#getsyncflowurl) - Start new sync flow
* [list](docs/sdks/connections/README.md#list) - List connections
* [updateAuthorization](docs/sdks/connections/README.md#updateauthorization) - Update authorization
* [updateConnection](docs/sdks/connections/README.md#updateconnection) - Update connection

### [sync](docs/sdks/sync/README.md)

* [get](docs/sdks/sync/README.md#get) - Get sync status
* [getLastSuccessfulSync](docs/sdks/sync/README.md#getlastsuccessfulsync) - Last successful sync
* [getLatestSync](docs/sdks/sync/README.md#getlatestsync) - Latest sync status
* [getStatus](docs/sdks/sync/README.md#getstatus) - Get sync status
* [list](docs/sdks/sync/README.md#list) - List sync statuses
* [request](docs/sdks/sync/README.md#request) - Initiate new sync
* [requestForDateRange](docs/sdks/sync/README.md#requestfordaterange) - Initiate sync for specific range

### [integrations](docs/sdks/integrations/README.md)

* [getBranding](docs/sdks/integrations/README.md#getbranding) - Get branding for an integration
* [list](docs/sdks/integrations/README.md#list) - List integrations
<!-- End Available Resources and Operations [operations] -->



<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { Locale } from "@codat/sync-for-commerce/dist/sdk/models/shared";

async function run() {
    const sdk = new CodatSyncCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowSettings.getConfigTextSyncFlow(
        {
            locale: Locale.EnUs,
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
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { Locale } from "@codat/sync-for-commerce/dist/sdk/models/shared";

async function run() {
    const sdk = new CodatSyncCommerce({
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

    const res = await sdk.syncFlowSettings.getConfigTextSyncFlow({
        locale: Locale.EnUs,
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
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { Locale } from "@codat/sync-for-commerce/dist/sdk/models/shared";

async function run() {
    const sdk = new CodatSyncCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    let res;
    try {
        res = await sdk.syncFlowSettings.getConfigTextSyncFlow({
            locale: Locale.EnUs,
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
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { Locale } from "@codat/sync-for-commerce/dist/sdk/models/shared";

async function run() {
    const sdk = new CodatSyncCommerce({
        serverIdx: 0,
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowSettings.getConfigTextSyncFlow({
        locale: Locale.EnUs,
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
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { Locale } from "@codat/sync-for-commerce/dist/sdk/models/shared";

async function run() {
    const sdk = new CodatSyncCommerce({
        serverURL: "https://api.codat.io",
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowSettings.getConfigTextSyncFlow({
        locale: Locale.EnUs,
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
import { @codat/sync-for-commerce } from "CodatSyncCommerce";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new CodatSyncCommerce({defaultClient: httpClient});
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
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { Locale } from "@codat/sync-for-commerce/dist/sdk/models/shared";

async function run() {
    const sdk = new CodatSyncCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowSettings.getConfigTextSyncFlow({
        locale: Locale.EnUs,
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
### Support

If you encounter any challenges while utilizing our SDKs, please don't hesitate to reach out for assistance. 
You can raise any issues by contacting your dedicated Codat representative or reaching out to our [support team](mailto:support@codat.io).
We're here to help ensure a smooth experience for you.
<!-- End Codat Support Notes -->

<!-- Start Codat Generated By -->
### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
<!-- End Codat Generated By -->