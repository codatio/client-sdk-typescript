# GetPullOperationRequest

## Example Usage

```typescript
import { GetPullOperationRequest } from "@codat/platform/sdk/models/operations";

let value: GetPullOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  datasetId: "abd44269-802d-4502-a94b-b4f63c969e9a",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `companyId`                                                | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for a company.                           | 8a210b68-6988-11ed-a1eb-0242ac120002                       |
| `datasetId`                                                | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for the dataset that completed its sync. |                                                            |