# SalesOrderReference

## Example Usage

```typescript
import { SalesOrderReference } from "@codat/lending/sdk/models/shared";

let value: SalesOrderReference = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | Unique identifier to a record in `dataType`.                                                |
| `dataType`                                                                                  | [shared.AccountingInvoiceDataType](../../../sdk/models/shared/accountinginvoicedatatype.md) | :heavy_minus_sign:                                                                          | The underlying data type associated to the reference `id`.                                  |