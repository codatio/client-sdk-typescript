# syncFlowPreferences

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
import { GetConfigTextSyncFlowResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.syncFlowPreferences.getConfigTextSyncFlow().then((res: GetConfigTextSyncFlowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetConfigTextSyncFlowResponse](../../models/operations/getconfigtextsyncflowresponse.md)>**


## getVisibleAccounts

Return accounts which are visible on sync flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { GetVisibleAccountsResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.syncFlowPreferences.getVisibleAccounts({
  clientId: "674e0f46-7cc8-4796-ad15-1a05dfc2ddf7",
  platformKey: "cc78ca1b-a928-4fc8-9674-2cb739205929",
}).then((res: GetVisibleAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetVisibleAccountsRequest](../../models/operations/getvisibleaccountsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetVisibleAccountsResponse](../../models/operations/getvisibleaccountsresponse.md)>**


## updateConfigTextSyncFlow

Set preferences for the text fields on sync flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { UpdateConfigTextSyncFlowResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.syncFlowPreferences.updateConfigTextSyncFlow({
  "natus": {
    required: false,
    text: "laboriosam",
  },
}).then((res: UpdateConfigTextSyncFlowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [Record<string, shared.Localization>](../../models//.md)            | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.UpdateConfigTextSyncFlowResponse](../../models/operations/updateconfigtextsyncflowresponse.md)>**


## updateVisibleAccountsSyncFlow

Update which accounts are visible on sync flow.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { UpdateVisibleAccountsSyncFlowResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.syncFlowPreferences.updateVisibleAccountsSyncFlow({
  visibleAccounts: {
    visibleAccounts: [
      "saepe",
      "fuga",
      "in",
      "corporis",
    ],
  },
  commerceKey: "96eb10fa-aa23-452c-9955-907aff1a3a2f",
}).then((res: UpdateVisibleAccountsSyncFlowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.UpdateVisibleAccountsSyncFlowRequest](../../models/operations/updatevisibleaccountssyncflowrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `retries`                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                             | :heavy_minus_sign:                                                                                                 | Configuration to override the default retry behavior of the client.                                                |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.UpdateVisibleAccountsSyncFlowResponse](../../models/operations/updatevisibleaccountssyncflowresponse.md)>**

