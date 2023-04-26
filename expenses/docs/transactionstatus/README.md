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
import { GetSyncTransactionRequest, GetSyncTransactionResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { IntegrationTypeEnum, TransactionStatusEnum } from "@codat/sync-for-expenses/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetSyncTransactionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
  transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
};

sdk.transactionStatus.getSyncTransaction(req).then((res: GetSyncTransactionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listSyncTransactions

Get's the transactions and status for a sync

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { ListSyncTransactionsRequest, ListSyncTransactionsResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { IntegrationTypeEnum, TransactionStatusEnum } from "@codat/sync-for-expenses/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListSyncTransactionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  page: 1,
  pageSize: 100,
  syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
};

sdk.transactionStatus.listSyncTransactions(req).then((res: ListSyncTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
