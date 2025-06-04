# GetPullOperationRequest

## Example Usage

```typescript
import { GetPullOperationRequest } from "@codat/platform/sdk/models/operations";

let value: GetPullOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  datasetId: "2e524c49-3726-44e5-9563-576172cc15aa",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `companyId`                                                | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for a company.                           | 8a210b68-6988-11ed-a1eb-0242ac120002                       |
| `datasetId`                                                | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for the dataset that completed its sync. |                                                            |