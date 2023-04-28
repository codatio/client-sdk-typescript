# syncStatus

## Overview

Check the status of ongoing or previous expense syncs.

### Available Operations

* [getLastSuccessfulSync](#getlastsuccessfulsync) - Last successful sync
* [getLatestSync](#getlatestsync) - Latest sync status
* [getSyncById](#getsyncbyid) - Get Sync status
* [listSyncs](#listsyncs) - List sync statuses

## getLastSuccessfulSync

Gets the status of the last successfull sync

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetLastSuccessfulSyncResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.syncStatus.getLastSuccessfulSync({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetLastSuccessfulSyncResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getLatestSync

Gets the latest sync status

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetLatestSyncResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.syncStatus.getLatestSync({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetLatestSyncResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSyncById

Get the sync status for a specified sync

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetSyncByIdResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.syncStatus.getSyncById({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
}).then((res: GetSyncByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listSyncs

Gets a list of sync statuses

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { ListSyncsResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.syncStatus.listSyncs({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: ListSyncsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
