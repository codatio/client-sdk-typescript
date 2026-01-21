# GetCreateOperationRequest

## Example Usage

```typescript
import { GetCreateOperationRequest } from "@codat/lending/sdk/models/operations";

let value: GetCreateOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  pushOperationKey: "ab6924f9-5f88-45a4-9930-c36dc0697c8a",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `companyId`                               | *string*                                  | :heavy_check_mark:                        | Unique identifier for a company.          | 8a210b68-6988-11ed-a1eb-0242ac120002      |
| `pushOperationKey`                        | *string*                                  | :heavy_check_mark:                        | Unique identifier for the push operation. |                                           |