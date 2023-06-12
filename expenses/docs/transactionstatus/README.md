# transactionStatus

## Overview

Retrieve the status of transactions within a sync.

### Available Operations

* [getSyncTransaction](#getsynctransaction) - Get Sync Transaction
* [listSyncTransactions](#listsynctransactions) - Get Sync transactions

## getSyncTransaction

Gets the status of a transaction for a sync

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetSyncTransactionResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { IntegrationType, TransactionStatus } from "@codat/sync-for-expenses/dist/sdk/models/shared";

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

## listSyncTransactions

Get's the transactions and status for a sync

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { ListSyncTransactionsResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { IntegrationType, TransactionStatus } from "@codat/sync-for-expenses/dist/sdk/models/shared";

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