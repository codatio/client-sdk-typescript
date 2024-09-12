# TaxRateRef

Data types that reference a tax rate, for example invoice and bill line items, use a taxRateRef that includes the ID and name of the linked tax rate.

Found on:

- Bill line items
- Bill Credit Note line items
- Credit Note line items
- Direct incomes line items
- Invoice line items
- Items

## Example Usage

```typescript
import { TaxRateRef } from "@codat/lending/sdk/models/shared";

let value: TaxRateRef = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_minus_sign:                                             | Unique identifier for the tax rate in the accounting software. |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Name of the tax rate in the accounting software.               |
| `effectiveTaxRate`                                             | *Decimal*                                                      | :heavy_minus_sign:                                             | Applicable tax rate.                                           |