# GetCreateOperationRequest

## Example Usage

```typescript
import { GetCreateOperationRequest } from "@codat/bank-feeds/sdk/models/operations";

let value: GetCreateOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  pushOperationKey: "c2fa3fb4-3803-4657-a49d-182b692275fc",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `pushOperationKey`                   | *string*                             | :heavy_check_mark:                   | Push operation key.                  |                                      |