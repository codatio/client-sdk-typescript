# NewTaxRates

## Example Usage

```typescript
import { NewTaxRates } from "@codat/sync-for-commerce/sdk/models/shared";

let value: NewTaxRates = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `accountingTaxRateOptions`                                                        | [shared.ConfigurationOption](../../../sdk/models/shared/configurationoption.md)[] | :heavy_minus_sign:                                                                | Array of accounting tax rate options.                                             |
| `commerceTaxRateOptions`                                                          | [shared.ConfigurationOption](../../../sdk/models/shared/configurationoption.md)[] | :heavy_minus_sign:                                                                | Array of tax component options.                                                   |
| `taxRateMappings`                                                                 | [shared.TaxRateMapping](../../../sdk/models/shared/taxratemapping.md)[]           | :heavy_minus_sign:                                                                | Array of tax component to rate mappings.                                          |
| `selectedDefaultZeroTaxRateId`                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | Default tax rate selected for sync.                                               |
| `defaultZeroTaxRateOptions`                                                       | [shared.ConfigurationOption](../../../sdk/models/shared/configurationoption.md)[] | :heavy_minus_sign:                                                                | Default zero tax rate selected for sync.                                          |