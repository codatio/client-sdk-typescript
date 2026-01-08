# GetPushOperationRequest

## Example Usage

```typescript
import { GetPushOperationRequest } from "@codat/sync-for-payables-version-1/sdk/models/operations";

let value: GetPushOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  pushOperationKey: "14a4a880-31a4-4db5-88cb-40c00b392985",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `pushOperationKey`                   | *string*                             | :heavy_check_mark:                   | Push operation key.                  |                                      |