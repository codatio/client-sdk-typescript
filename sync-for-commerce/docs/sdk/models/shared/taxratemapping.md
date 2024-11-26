# TaxRateMapping

## Example Usage

```typescript
import { TaxRateMapping } from "@codat/sync-for-commerce/sdk/models/shared";

let value: TaxRateMapping = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `selectedCommerceTaxRateIds`                                                        | *string*[]                                                                          | :heavy_minus_sign:                                                                  | Selected tax component id from the list of tax components on the commerce software. |
| `selectedAccountingTaxRateId`                                                       | *string*                                                                            | :heavy_minus_sign:                                                                  | Selected tax rate id from the list of tax rates on the accounting software.         |