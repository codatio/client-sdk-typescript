# Sync
(*sync*)

## Overview

Triggering a new sync of expenses to accounting software.

### Available Operations

* [initiateSync](#initiatesync) - Initiate sync

## initiateSync

Initiate sync of pending transactions.

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";

(async() => {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.sync.initiateSync({
    requestBody: {
      "Assistant": "Hybrid",
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.InitiateSyncRequest](../../models/operations/initiatesyncrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.InitiateSyncResponse](../../models/operations/initiatesyncresponse.md)>**

