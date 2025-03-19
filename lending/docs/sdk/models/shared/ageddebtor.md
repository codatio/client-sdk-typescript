# AgedDebtor

## Example Usage

```typescript
import { AgedDebtor } from "@codat/lending/sdk/models/shared";

let value: AgedDebtor = {
  customerId: "f594cefb-7750-4c3a-bab2-b5322026dee9",
  customerName: "John Doe",
  agedCurrencyOutstanding: [
    {
      currency: "EUR",
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
| `customerId`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | Customer ID of the aged debtor.                                                           | f594cefb-7750-4c3a-bab2-b5322026dee9                                                      |
| `customerName`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | Customer name of the aged debtor.                                                         | John Doe                                                                                  |
| `agedCurrencyOutstanding`                                                                 | [shared.AgedCurrencyOutstanding](../../../sdk/models/shared/agedcurrencyoutstanding.md)[] | :heavy_minus_sign:                                                                        | Array of aged debtors by currency.                                                        |                                                                                           |