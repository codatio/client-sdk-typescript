# sync

## Overview

Initiate a sync of Sync for Commerce company data into their respective accounting software.

### Available Operations

* [requestSync](#requestsync) - Run a Commerce sync from the last successful sync
* [requestSyncForDateRange](#requestsyncfordaterange) - Run a Commerce sync from a given date range

## requestSync

Run a Commerce sync from the last successful sync up to the date provided (optional), otherwise UtcNow is used.
If there was no previously successful sync, the start date in the config is used.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { RequestSyncRequest, RequestSyncResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: RequestSyncRequest = {
  syncToLatestArgs: {
    syncTo: "nulla",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.sync.requestSync(req).then((res: RequestSyncResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## requestSyncForDateRange

Run a Commerce sync from the specified start date to the specified finish date in the request payload.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { RequestSyncForDateRangeRequest, RequestSyncForDateRangeResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: RequestSyncForDateRangeRequest = {
  dateRange: {
    finish: "corrupti",
    start: "illum",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.sync.requestSyncForDateRange(req).then((res: RequestSyncForDateRangeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
