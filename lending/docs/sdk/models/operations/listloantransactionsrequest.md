# ListLoanTransactionsRequest

## Example Usage

```typescript
import { ListLoanTransactionsRequest } from "@codat/lending/sdk/models/operations";

let value: ListLoanTransactionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  sourceType: "banking",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `companyId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | Unique identifier for a company.                                                          | 8a210b68-6988-11ed-a1eb-0242ac120002                                                      |
| `sourceType`                                                                              | [operations.QueryParamSourceType](../../../sdk/models/operations/queryparamsourcetype.md) | :heavy_check_mark:                                                                        | Data source type.                                                                         |                                                                                           |