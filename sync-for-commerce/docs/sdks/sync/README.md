# Sync
(*sync*)

## Overview

Initiate and monitor the sync of company data into accounting software.

### Available Operations

* [get](#get) - Get sync status
* [getLastSuccessfulSync](#getlastsuccessfulsync) - Last successful sync
* [getLatestSync](#getlatestsync) - Latest sync status
* [getStatus](#getstatus) - Get sync status
* [list](#list) - List sync statuses
* [request](#request) - Initiate new sync
* [requestForDateRange](#requestfordaterange) - Initiate sync for specific range

## get

Get the sync status for a specified sync

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

(async() => {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.sync.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetSyncByIdRequest](../../sdk/models/operations/getsyncbyidrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../internal/utils/retryconfig.md)                           | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetSyncByIdResponse](../../sdk/models/operations/getsyncbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getLastSuccessfulSync

Gets the status of the last successful sync

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

(async() => {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.sync.getLastSuccessfulSync({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetLastSuccessfulSyncRequest](../../sdk/models/operations/getlastsuccessfulsyncrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetLastSuccessfulSyncResponse](../../sdk/models/operations/getlastsuccessfulsyncresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getLatestSync

Gets the latest sync status

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

(async() => {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.sync.getLatestSync({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetLatestSyncRequest](../../sdk/models/operations/getlatestsyncrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetLatestSyncResponse](../../sdk/models/operations/getlatestsyncresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getStatus

Gets a list of sync statuses.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

(async() => {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.sync.getStatus({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetSyncStatusRequest](../../sdk/models/operations/getsyncstatusrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetSyncStatusResponse](../../sdk/models/operations/getsyncstatusresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## list

Gets a list of sync statuses

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

(async() => {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.sync.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListSyncsRequest](../../sdk/models/operations/listsyncsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                       | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListSyncsResponse](../../sdk/models/operations/listsyncsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## request

Run a Commerce sync from the last successful sync up to the date provided (optional), otherwise UtcNow is used.\r\nIf there was no previously successful sync, the start date in the config is used.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

(async() => {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.sync.request({
    syncToLatestArgs: {
      syncTo: "2022-10-23T00:00:00.000Z",
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.RequestSyncRequest](../../sdk/models/operations/requestsyncrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../internal/utils/retryconfig.md)                           | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.RequestSyncResponse](../../sdk/models/operations/requestsyncresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## requestForDateRange

Initiate a sync for the specified start date to the specified finish date in the request payload.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

(async() => {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.sync.requestForDateRange({
    syncRange: {
      dateRange: {
        finish: "2022-10-23T00:00:00.000Z",
        start: "2022-10-23T00:00:00.000Z",
      },
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.RequestSyncForDateRangeRequest](../../sdk/models/operations/requestsyncfordaterangerequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.RequestSyncForDateRangeResponse](../../sdk/models/operations/requestsyncfordaterangeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
