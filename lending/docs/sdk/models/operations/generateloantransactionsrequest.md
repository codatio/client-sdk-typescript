# GenerateLoanTransactionsRequest

## Example Usage

```typescript
import { GenerateLoanTransactionsRequest } from "@codat/lending/sdk/models/operations";

let value: GenerateLoanTransactionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  sourceType: "banking",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `companyId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a company.                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                  |
| `sourceType`                                                          | [operations.SourceType](../../../sdk/models/operations/sourcetype.md) | :heavy_check_mark:                                                    | Data source type.                                                     |                                                                       |