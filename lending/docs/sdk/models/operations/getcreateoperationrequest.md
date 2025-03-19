# GetCreateOperationRequest

## Example Usage

```typescript
import { GetCreateOperationRequest } from "@codat/lending/sdk/models/operations";

let value: GetCreateOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  pushOperationKey: "074d34cb-8b60-4081-b0fd-20f42b14fa86",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `companyId`                               | *string*                                  | :heavy_check_mark:                        | Unique identifier for a company.          | 8a210b68-6988-11ed-a1eb-0242ac120002      |
| `pushOperationKey`                        | *string*                                  | :heavy_check_mark:                        | Unique identifier for the push operation. |                                           |