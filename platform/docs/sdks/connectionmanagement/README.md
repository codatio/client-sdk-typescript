# ConnectionManagement
(*connectionManagement*)

## Overview

Configure connection management UI and retrieve access tokens for authentication.

### Available Operations

* [connectionManagementCorsSettingsGet](#connectionmanagementcorssettingsget) - Get CORS settings
* [connectionManagementCorsSettingsSet](#connectionmanagementcorssettingsset) - Set CORS settings
* [get](#get) - Get access token

## connectionManagementCorsSettingsGet

﻿The *Get CORS settings* endpoint returns the allowed origins (i.e. your domains) you want to allow cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)) with Codat. 

Enabling CORS with Codat is required by our embedded [connection management UI](https://docs.codat.io/auth-flow/optimize/connection-management) to access Codat's API endpoints.

The embedded [connection management UI](https://docs.codat.io/auth-flow/optimize/connection-management) lets your customers control access to their data by allowing them to manage their existing connections.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.connectionManagement.connectionManagementCorsSettingsGet();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetConnectionManagementCorsSettingsResponse](../../sdk/models/operations/getconnectionmanagementcorssettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## connectionManagementCorsSettingsSet

﻿The *Set CORS settings* endpoint allows you to register allowed origins (i.e. your domains) for use in cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).
 
Enabling CORS with Codat is required by our embedded [connection management UI](https://docs.codat.io/auth-flow/optimize/connection-management) to access Codat's API endpoints. 

The embedded [connection management UI](https://docs.codat.io/auth-flow/optimize/connection-management) lets your customers control access to their data by allowing them to manage their existing connections.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.connectionManagement.connectionManagementCorsSettingsSet({
    allowedOrigins: [
      "https://www.bank-of-dave.com",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [shared.ConnectionManagementAllowedOrigins](../../sdk/models/shared/connectionmanagementallowedorigins.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.SetConnectionManagementCorsSettingsResponse](../../sdk/models/operations/setconnectionmanagementcorssettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

﻿Use the *Get access token* endpoint to retrieve a new access token for use by the [connection management UI](https://docs.codat.io/auth-flow/optimize/connection-management).

The embedded [connection management UI](https://docs.codat.io/auth-flow/optimize/connection-management) lets your customers control access to their data by allowing them to manage their existing connections.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.connectionManagement.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetConnectionManagementAccessTokenRequest](../../sdk/models/operations/getconnectionmanagementaccesstokenrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `retries`                                                                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                         | :heavy_minus_sign:                                                                                                               | Configuration to override the default retry behavior of the client.                                                              |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetConnectionManagementAccessTokenResponse](../../sdk/models/operations/getconnectionmanagementaccesstokenresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
