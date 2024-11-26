# TaxRateMappingInfo

## Example Usage

```typescript
import { TaxRateMappingInfo } from "@codat/sync-for-expenses/sdk/models/shared";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

let value: TaxRateMappingInfo = {
  id: "23_Bills",
  name: "20% Bill tax Bills",
  code: "20% Bill tax",
  effectiveTaxRate: new Decimal("20"),
  totalTaxRate: new Decimal("20"),
  validTransactionTypes: [
    "Payment",
  ],
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | Unique identifier of tax rate.                                                        | 23_Bills                                                                              |
| `name`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | Name of the tax rate in the accounting software.                                      | 20% Bill tax Bills                                                                    |
| `code`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | Code for the tax rate from the accounting software.                                   | 20% Bill tax                                                                          |
| `effectiveTaxRate`                                                                    | *Decimal*                                                                             | :heavy_minus_sign:                                                                    | Effective tax rate.                                                                   | 20                                                                                    |
| `totalTaxRate`                                                                        | *Decimal*                                                                             | :heavy_minus_sign:                                                                    | Total (not compounded) sum of the components of a tax rate.                           | 20                                                                                    |
| `validTransactionTypes`                                                               | [shared.ValidTransactionTypes](../../../sdk/models/shared/validtransactiontypes.md)[] | :heavy_minus_sign:                                                                    | Supported transaction types for the account.                                          |                                                                                       |