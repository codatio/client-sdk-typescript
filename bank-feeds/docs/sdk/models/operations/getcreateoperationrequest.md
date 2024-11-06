# GetCreateOperationRequest

## Example Usage

```typescript
import { GetCreateOperationRequest } from "@codat/bank-feeds/sdk/models/operations";

let value: GetCreateOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  pushOperationKey: "052f77a5-2d38-431d-8ffe-c516320b0c21",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `pushOperationKey`                   | *string*                             | :heavy_check_mark:                   | Push operation key.                  |                                      |