# NewTaxRates


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `accountingTaxRateOptions`                                              | [shared.Option](../../../sdk/models/shared/option.md)[]                 | :heavy_minus_sign:                                                      | Array of accounting tax rate options.                                   |
| `commerceTaxRateOptions`                                                | [shared.Option](../../../sdk/models/shared/option.md)[]                 | :heavy_minus_sign:                                                      | Array of tax component options.                                         |
| `defaultZeroTaxRateOptions`                                             | [shared.Option](../../../sdk/models/shared/option.md)[]                 | :heavy_minus_sign:                                                      | Default zero tax rate selected for sync.                                |
| `selectedDefaultZeroTaxRateId`                                          | *string*                                                                | :heavy_minus_sign:                                                      | Default tax rate selected for sync.                                     |
| `taxRateMappings`                                                       | [shared.TaxRateMapping](../../../sdk/models/shared/taxratemapping.md)[] | :heavy_minus_sign:                                                      | Array of tax component to rate mapppings.                               |