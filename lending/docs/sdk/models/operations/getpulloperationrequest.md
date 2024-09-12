# GetPullOperationRequest

## Example Usage

```typescript
import { GetPullOperationRequest } from "@codat/lending/sdk/models/operations";

let value: GetPullOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  datasetId: "aa8e4824-d0ab-4407-9088-e51862065e90",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `companyId`                                                | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for a company.                           | 8a210b68-6988-11ed-a1eb-0242ac120002                       |
| `datasetId`                                                | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for the dataset that completed its sync. |                                                            |