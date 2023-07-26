# sync

## Overview

Triggering a new sync of expenses to accounting software.

### Available Operations

* [intiateSync](#intiatesync) - Initiate sync

## intiateSync

Initiate sync of pending transactions.

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { IntiateSyncResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sync.intiateSync({
  postSync: {
    datasetIds: [
      "1a05dfc2-ddf7-4cc7-8ca1-ba928fc81674",
      "2cb73920-5929-4396-bea7-596eb10faaa2",
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: IntiateSyncResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.IntiateSyncRequest](../../models/operations/intiatesyncrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.IntiateSyncResponse](../../models/operations/intiatesyncresponse.md)>**

