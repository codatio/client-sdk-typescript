# GetSyncByIdRequest

## Example Usage

```typescript
import { GetSyncByIdRequest } from "@codat/sync-for-expenses/sdk/models/operations";

let value: GetSyncByIdRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `syncId`                             | *string*                             | :heavy_check_mark:                   | Unique identifier for a sync.        | 6fb40d5e-b13e-11ed-afa1-0242ac120002 |