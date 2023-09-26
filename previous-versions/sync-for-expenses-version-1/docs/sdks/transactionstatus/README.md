# TransactionStatus

## Overview

Retrieve the status of transactions within a sync.

### Available Operations

* [getSyncTransaction](#getsynctransaction) - Get sync transaction
* [listSyncTransactions](#listsynctransactions) - Get sync transactions

## getSyncTransaction

Gets the status of a transaction for a sync

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";
import { GetSyncTransactionResponse } from "@codat/sync-for-expenses-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.transactionStatus.getSyncTransaction({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
  transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
}).then((res: GetSyncTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetSyncTransactionRequest](../../models/operations/getsynctransactionrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetSyncTransactionResponse](../../models/operations/getsynctransactionresponse.md)>**


## listSyncTransactions

Get's the transactions and status for a sync

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";
import { ListSyncTransactionsResponse } from "@codat/sync-for-expenses-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.transactionStatus.listSyncTransactions({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  page: 1,
  pageSize: 100,
  syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
}).then((res: ListSyncTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListSyncTransactionsRequest](../../models/operations/listsynctransactionsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListSyncTransactionsResponse](../../models/operations/listsynctransactionsresponse.md)>**

