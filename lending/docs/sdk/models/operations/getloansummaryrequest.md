# GetLoanSummaryRequest

## Example Usage

```typescript
import { GetLoanSummaryRequest } from "@codat/lending/sdk/models/operations";

let value: GetLoanSummaryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  sourceType: "accounting",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Unique identifier for a company.                                                                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                                  |
| `sourceType`                                                                                                          | [operations.GetLoanSummaryQueryParamSourceType](../../../sdk/models/operations/getloansummaryqueryparamsourcetype.md) | :heavy_check_mark:                                                                                                    | Data source type.                                                                                                     |                                                                                                                       |