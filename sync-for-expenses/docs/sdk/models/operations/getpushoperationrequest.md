# GetPushOperationRequest

## Example Usage

```typescript
import { GetPushOperationRequest } from "@codat/sync-for-expenses/sdk/models/operations";

let value: GetPushOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  pushOperationKey: "bea84f57-6f25-4a19-9743-8575f2159a6f",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `pushOperationKey`                   | *string*                             | :heavy_check_mark:                   | Push operation key.                  |                                      |