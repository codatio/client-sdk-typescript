# AgedCreditor

## Example Usage

```typescript
import { AgedCreditor } from "@codat/lending/sdk/models/shared";

let value: AgedCreditor = {
  supplierId: "f594cefb-7750-4c3a-bab2-b5322026dee9",
  supplierName: "John Doe",
  agedCurrencyOutstanding: [
    {
      currency: "USD",
      agedOutstandingAmounts: [
        {
          fromDate: "2022-10-23T00:00:00Z",
          toDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `supplierId`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | Supplier ID of the aged creditor.                                                         | f594cefb-7750-4c3a-bab2-b5322026dee9                                                      |
| `supplierName`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | Supplier name of the aged creditor.                                                       | John Doe                                                                                  |
| `agedCurrencyOutstanding`                                                                 | [shared.AgedCurrencyOutstanding](../../../sdk/models/shared/agedcurrencyoutstanding.md)[] | :heavy_minus_sign:                                                                        | Array of aged creditors by currency.                                                      |                                                                                           |