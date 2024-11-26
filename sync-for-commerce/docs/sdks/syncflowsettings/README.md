# SyncFlowSettings
(*syncFlowSettings*)

## Overview

Control text and visibility settings for the Sync Flow.

### Available Operations

* [getConfigTextSyncFlow](#getconfigtextsyncflow) - Get preferences for text fields
* [updateConfigTextSyncFlow](#updateconfigtextsyncflow) - Update preferences for text fields
* [getVisibleAccounts](#getvisibleaccounts) - List visible accounts
* [updateVisibleAccountsSyncFlow](#updatevisibleaccountssyncflow) - Update visible accounts

## getConfigTextSyncFlow

Return preferences set for the text fields on sync flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

const codatSyncCommerce = new CodatSyncCommerce({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncCommerce.syncFlowSettings.getConfigTextSyncFlow({
    locale: "en-us",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncCommerceCore } from "@codat/sync-for-commerce/core.js";
import { syncFlowSettingsGetConfigTextSyncFlow } from "@codat/sync-for-commerce/funcs/syncFlowSettingsGetConfigTextSyncFlow.js";

// Use `CodatSyncCommerceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncCommerce = new CodatSyncCommerceCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await syncFlowSettingsGetConfigTextSyncFlow(codatSyncCommerce, {
    locale: "en-us",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConfigTextSyncFlowRequest](../../sdk/models/operations/getconfigtextsyncflowrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: shared.Localization }](../../models/.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 401, 402, 403, 429, 500, 503 | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## updateConfigTextSyncFlow

Set preferences for the text fields on sync flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

const codatSyncCommerce = new CodatSyncCommerce({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncCommerce.syncFlowSettings.updateConfigTextSyncFlow({
    locale: "en-us",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncCommerceCore } from "@codat/sync-for-commerce/core.js";
import { syncFlowSettingsUpdateConfigTextSyncFlow } from "@codat/sync-for-commerce/funcs/syncFlowSettingsUpdateConfigTextSyncFlow.js";

// Use `CodatSyncCommerceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncCommerce = new CodatSyncCommerceCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await syncFlowSettingsUpdateConfigTextSyncFlow(codatSyncCommerce, {
    locale: "en-us",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateConfigTextSyncFlowRequest](../../sdk/models/operations/updateconfigtextsyncflowrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: shared.Localization }](../../models/.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorMessage               | 400, 401, 402, 403, 429, 500, 503 | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## getVisibleAccounts

Return accounts which are visible on sync flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

const codatSyncCommerce = new CodatSyncCommerce({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncCommerce.syncFlowSettings.getVisibleAccounts({
    clientId: "8f9478fc-e6cf-445e-b122-74136f8fd7ab",
    platformKey: "gbol",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncCommerceCore } from "@codat/sync-for-commerce/core.js";
import { syncFlowSettingsGetVisibleAccounts } from "@codat/sync-for-commerce/funcs/syncFlowSettingsGetVisibleAccounts.js";

// Use `CodatSyncCommerceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncCommerce = new CodatSyncCommerceCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await syncFlowSettingsGetVisibleAccounts(codatSyncCommerce, {
    clientId: "8f9478fc-e6cf-445e-b122-74136f8fd7ab",
    platformKey: "gbol",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetVisibleAccountsRequest](../../sdk/models/operations/getvisibleaccountsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.VisibleAccounts](../../sdk/models/shared/visibleaccounts.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorMessage               | 401, 402, 403, 404, 429, 500, 503 | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## updateVisibleAccountsSyncFlow

Update which accounts are visible on sync flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

const codatSyncCommerce = new CodatSyncCommerce({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncCommerce.syncFlowSettings.updateVisibleAccountsSyncFlow({
    platformKey: "gbol",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncCommerceCore } from "@codat/sync-for-commerce/core.js";
import { syncFlowSettingsUpdateVisibleAccountsSyncFlow } from "@codat/sync-for-commerce/funcs/syncFlowSettingsUpdateVisibleAccountsSyncFlow.js";

// Use `CodatSyncCommerceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncCommerce = new CodatSyncCommerceCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await syncFlowSettingsUpdateVisibleAccountsSyncFlow(codatSyncCommerce, {
    platformKey: "gbol",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateVisibleAccountsSyncFlowRequest](../../sdk/models/operations/updatevisibleaccountssyncflowrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.VisibleAccounts](../../sdk/models/shared/visibleaccounts.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorMessage                    | 400, 401, 402, 403, 404, 429, 500, 503 | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |