# GetPullOperationRequest

## Example Usage

```typescript
import { GetPullOperationRequest } from "@codat/lending/sdk/models/operations";

let value: GetPullOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  datasetId: "6c530ee1-521e-40f1-8d95-5c5a87e8db0c",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `companyId`                                                | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for a company.                           | 8a210b68-6988-11ed-a1eb-0242ac120002                       |
| `datasetId`                                                | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for the dataset that completed its sync. |                                                            |