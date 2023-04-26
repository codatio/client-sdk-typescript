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
import { GetLastSuccessfulSyncRequest, GetLastSuccessfulSyncResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetLastSuccessfulSyncRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.syncStatus.getLastSuccessfulSync(req).then((res: GetLastSuccessfulSyncResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getLatestSync

Gets the latest sync status

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetLatestSyncRequest, GetLatestSyncResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetLatestSyncRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.syncStatus.getLatestSync(req).then((res: GetLatestSyncResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getSyncById

Get the sync status for a specified sync

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetSyncByIdRequest, GetSyncByIdResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetSyncByIdRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
};

sdk.syncStatus.getSyncById(req).then((res: GetSyncByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listSyncs

Gets a list of sync statuses

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { ListSyncsRequest, ListSyncsResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListSyncsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.syncStatus.listSyncs(req).then((res: ListSyncsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
