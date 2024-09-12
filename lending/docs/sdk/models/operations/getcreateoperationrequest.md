# GetCreateOperationRequest

## Example Usage

```typescript
import { GetCreateOperationRequest } from "@codat/lending/sdk/models/operations";

let value: GetCreateOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  pushOperationKey: "986e881e-ad4f-40e1-8125-63f94e29e973",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `companyId`                               | *string*                                  | :heavy_check_mark:                        | Unique identifier for a company.          | 8a210b68-6988-11ed-a1eb-0242ac120002      |
| `pushOperationKey`                        | *string*                                  | :heavy_check_mark:                        | Unique identifier for the push operation. |                                           |