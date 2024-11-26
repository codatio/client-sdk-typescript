# RequestSyncRequest

## Example Usage

```typescript
import { RequestSyncRequest } from "@codat/sync-for-commerce/sdk/models/operations";

let value: RequestSyncRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  syncToLatestArgs: {
    syncTo: "2022-10-23T00:00:00Z",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `companyId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | Unique identifier for a company.                                          | 8a210b68-6988-11ed-a1eb-0242ac120002                                      |
| `syncToLatestArgs`                                                        | [shared.SyncToLatestArgs](../../../sdk/models/shared/synctolatestargs.md) | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |