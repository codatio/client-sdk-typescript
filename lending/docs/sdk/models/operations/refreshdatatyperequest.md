# RefreshDataTypeRequest

## Example Usage

```typescript
import { RefreshDataTypeRequest } from "@codat/lending/sdk/models/operations";

let value: RefreshDataTypeRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: "invoices",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `companyId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique identifier for a company.                                                           | 8a210b68-6988-11ed-a1eb-0242ac120002                                                       |
| `dataType`                                                                                 | [shared.DataType](../../../sdk/models/shared/datatype.md)                                  | :heavy_check_mark:                                                                         | A key for a Codat data type.                                                               | invoices                                                                                   |
| `connectionId`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | Optionally, provide a data connection id to only queue pull operations on that connection. |                                                                                            |