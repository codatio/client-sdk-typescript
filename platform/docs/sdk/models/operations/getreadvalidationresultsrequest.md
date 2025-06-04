# GetReadValidationResultsRequest

## Example Usage

```typescript
import { GetReadValidationResultsRequest } from "@codat/platform/sdk/models/operations";

let value: GetReadValidationResultsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  datasetId: "1de8e25b-3163-4226-821d-24f258b2878d",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `companyId`                                                | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for a company.                           | 8a210b68-6988-11ed-a1eb-0242ac120002                       |
| `datasetId`                                                | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for the dataset that completed its sync. |                                                            |