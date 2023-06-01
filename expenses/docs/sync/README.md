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
      "96ed151a-05df-4c2d-9f7c-c78ca1ba928f",
      "c816742c-b739-4205-9293-96fea7596eb1",
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: IntiateSyncResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
