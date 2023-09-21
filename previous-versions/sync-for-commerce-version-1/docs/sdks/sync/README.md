# Sync

## Overview

Initiate a sync of Sync for Commerce company data into their respective accounting software.

### Available Operations

* [getSyncStatus](#getsyncstatus) - Get status for a company's syncs
* [requestSync](#requestsync) - Sync new
* [requestSyncForDateRange](#requestsyncfordaterange) - Sync range

## getSyncStatus

Check the sync history and sync status for a company.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";
import { GetSyncStatusResponse } from "@codat/sync-for-commerce-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sync.getSyncStatus({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetSyncStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetSyncStatusRequest](../../models/operations/getsyncstatusrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetSyncStatusResponse](../../models/operations/getsyncstatusresponse.md)>**


## requestSync

Run a Commerce sync from the last successful sync up to the date provided (optional), otherwise UtcNow is used.
If there was no previously successful sync, the start date in the config is used.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";
import { RequestSyncResponse } from "@codat/sync-for-commerce-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sync.requestSync({
  syncToLatestArgs: {
    syncTo: "2022-10-23T00:00:00.000Z",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: RequestSyncResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.RequestSyncRequest](../../models/operations/requestsyncrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.RequestSyncResponse](../../models/operations/requestsyncresponse.md)>**


## requestSyncForDateRange

Run a Commerce sync from the specified start date to the specified finish date in the request payload.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";
import { RequestSyncForDateRangeResponse } from "@codat/sync-for-commerce-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sync.requestSyncForDateRange({
  syncRange: {
    dateRange: {
      finish: "2022-10-23T00:00:00.000Z",
      start: "2022-10-23T00:00:00.000Z",
    },
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: RequestSyncForDateRangeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.RequestSyncForDateRangeRequest](../../models/operations/requestsyncfordaterangerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.RequestSyncForDateRangeResponse](../../models/operations/requestsyncfordaterangeresponse.md)>**

