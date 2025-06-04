# Cors
(*cors*)

## Overview

### Available Operations

* [~~get~~](#get) - Get CORS settings (old) :warning: **Deprecated** Use [get](docs/sdks/settings/README.md#get) instead.
* [~~set~~](#set) - Set CORS settings (old) :warning: **Deprecated** Use [set](docs/sdks/settings/README.md#set) instead.

## ~~get~~

﻿The *Get CORS settings* endpoint returns the allowed origins (i.e. your domains) you want to allow cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)) with Codat. 

Enabling CORS with Codat is required by our embeddable UIs (such as [Connections SDK](https://docs.codat.io/auth-flow/optimize/connection-management) and [Link SDK](https://docs.codat.io/auth-flow/authorize-embedded-link)) to access Codat's API endpoints.

> :warning: **DEPRECATED**: The new [Get CORS settings](https://docs.codat.io/platform-api#/operations/get-cors-settings) endpoint replaces this endpoint and includes additional functionality.
Update your integrations to use the new path `/corsSettings` as the existing route will be removed in a future release.
. Use `get` instead.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.cors.get();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { corsGet } from "@codat/platform/funcs/corsGet.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await corsGet(codatPlatform);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("corsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ConnectionManagementAllowedOrigins](../../sdk/models/shared/connectionmanagementallowedorigins.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## ~~set~~

﻿The *Set CORS settings* endpoint allows you to register allowed origins (i.e. your domains) for use in cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).
 
Enabling CORS with Codat is required by our embeddable UIs (such as [Connections SDK](https://docs.codat.io/auth-flow/optimize/connection-management) and [Link SDK](https://docs.codat.io/auth-flow/authorize-embedded-link)) to access Codat's API endpoints. 

> :warning: **DEPRECATED**: The new [Set CORS settings](https://docs.codat.io/platform-api#/operations/set-cors-settings) endpoint replaces this endpoint and includes additional functionality.
Update your integrations to use the new path `/corsSettings` as the existing route will be removed in a future release.
. Use `set` instead.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.cors.set({
    allowedOrigins: [
      "https://www.bank-of-dave.com",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { corsSet } from "@codat/platform/funcs/corsSet.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await corsSet(codatPlatform, {
    allowedOrigins: [
      "https://www.bank-of-dave.com",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("corsSet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.ConnectionManagementAllowedOrigins](../../sdk/models/shared/connectionmanagementallowedorigins.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ConnectionManagementAllowedOrigins](../../sdk/models/shared/connectionmanagementallowedorigins.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |