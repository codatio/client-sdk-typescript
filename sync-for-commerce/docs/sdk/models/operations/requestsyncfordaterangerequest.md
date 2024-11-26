# RequestSyncForDateRangeRequest

## Example Usage

```typescript
import { RequestSyncForDateRangeRequest } from "@codat/sync-for-commerce/sdk/models/operations";

let value: RequestSyncForDateRangeRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  syncRange: {
    dateRange: {
      start: "2022-10-23T00:00:00Z",
      finish: "2022-10-23T00:00:00Z",
    },
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `companyId`                                                 | *string*                                                    | :heavy_check_mark:                                          | Unique identifier for a company.                            | 8a210b68-6988-11ed-a1eb-0242ac120002                        |
| `syncRange`                                                 | [shared.SyncRange](../../../sdk/models/shared/syncrange.md) | :heavy_minus_sign:                                          | N/A                                                         |                                                             |