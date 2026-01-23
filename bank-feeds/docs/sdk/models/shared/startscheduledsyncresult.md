# StartScheduledSyncResult

Represents the result of an ad-hoc sync request.

## Example Usage

```typescript
import { StartScheduledSyncResult } from "@codat/bank-feeds/sdk/models/shared";

let value: StartScheduledSyncResult = {
  syncId: "d1441ebb-900c-458f-906f-e691e76f9408",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `syncId`                                    | *string*                                    | :heavy_check_mark:                          | The unique identifier for the created sync. |