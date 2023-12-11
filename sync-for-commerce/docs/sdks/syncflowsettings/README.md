# SyncFlowSettings
(*syncFlowSettings*)

## Overview

Configure preferences for any given Sync for Commerce company using sync flow.

### Available Operations

* [getConfigTextSyncFlow](#getconfigtextsyncflow) - Get preferences for text fields
* [getVisibleAccounts](#getvisibleaccounts) - List visible accounts
* [updateConfigTextSyncFlow](#updateconfigtextsyncflow) - Update preferences for text fields
* [updateVisibleAccountsSyncFlow](#updatevisibleaccountssyncflow) - Update visible accounts

## getConfigTextSyncFlow

Return preferences set for the text fields on sync flow.

### Example Usage

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

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetConfigTextSyncFlowRequest](../../sdk/models/operations/getconfigtextsyncflowrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetConfigTextSyncFlowResponse](../../sdk/models/operations/getconfigtextsyncflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getVisibleAccounts

Return accounts which are visible on sync flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

async function run() {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.syncFlowSettings.getVisibleAccounts({
    clientId: "86fe9741-738d-4f2c-8e96-9c3f84156e91",
    platformKey: "gbol",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetVisibleAccountsRequest](../../sdk/models/operations/getvisibleaccountsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetVisibleAccountsResponse](../../sdk/models/operations/getvisibleaccountsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateConfigTextSyncFlow

Set preferences for the text fields on sync flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { Locale } from "@codat/sync-for-commerce/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.syncFlowSettings.updateConfigTextSyncFlow({
    requestBody: {
      "key": {},
    },
    locale: Locale.EnUs,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateConfigTextSyncFlowRequest](../../sdk/models/operations/updateconfigtextsyncflowrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `retries`                                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                           | Configuration to override the default retry behavior of the client.                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateConfigTextSyncFlowResponse](../../sdk/models/operations/updateconfigtextsyncflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateVisibleAccountsSyncFlow

Update which accounts are visible on sync flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

async function run() {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.syncFlowSettings.updateVisibleAccountsSyncFlow({
    visibleAccounts: {
      visibleAccounts: [
        "string",
      ],
    },
    platformKey: "gbol",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.UpdateVisibleAccountsSyncFlowRequest](../../sdk/models/operations/updatevisibleaccountssyncflowrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `retries`                                                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                     | Configuration to override the default retry behavior of the client.                                                    |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.UpdateVisibleAccountsSyncFlowResponse](../../sdk/models/operations/updatevisibleaccountssyncflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
