# sync

## Overview

Triggering a new sync of expenses to accounting software.

### Available Operations

* [intiateSync](#intiatesync) - Initiate sync

## intiateSync

Initiate sync of pending transactions.

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";
import { IntiateSyncResponse } from "@codat/sync-for-expenses-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sync.intiateSync({
  postSync: {
    datasetIds: [
      "c2ddf7cc-78ca-41ba-928f-c816742cb739",
      "20592939-6fea-4759-aeb1-0faaa2352c59",
      "55907aff-1a3a-42fa-9467-739251aa52c3",
      "f5ad019d-a1ff-4e78-b097-b0074f15471b",
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

