# NewTaxRates


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `accountingTaxRateOptions`                                | [Option](../../models/shared/option.md)[]                 | :heavy_minus_sign:                                        | Array of accounting tax rate options.                     |
| `commerceTaxRateOptions`                                  | [Option](../../models/shared/option.md)[]                 | :heavy_minus_sign:                                        | Array of tax component options.                           |
| `defaultZeroTaxRateOptions`                               | [Option](../../models/shared/option.md)[]                 | :heavy_minus_sign:                                        | Default zero tax rate selected for sync.                  |
| `selectedDefaultZeroTaxRateId`                            | *string*                                                  | :heavy_minus_sign:                                        | Default tax rate selected for sync.                       |
| `taxRateMappings`                                         | [TaxRateMapping](../../models/shared/taxratemapping.md)[] | :heavy_minus_sign:                                        | Array of tax component to rate mapppings.                 |