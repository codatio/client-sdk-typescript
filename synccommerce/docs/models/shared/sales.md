# Sales


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `accounts`                                                            | Record<string, [ConfigAccount](../../models/shared/configaccount.md)> | :heavy_minus_sign:                                                    | N/A                                                                   |
| `grouping`                                                            | [Grouping](../../models/shared/grouping.md)                           | :heavy_minus_sign:                                                    | N/A                                                                   |
| `invoiceStatus`                                                       | [InvoiceStatus](../../models/shared/invoicestatus.md)                 | :heavy_minus_sign:                                                    | N/A                                                                   |
| `newTaxRates`                                                         | [NewTaxRates](../../models/shared/newtaxrates.md)                     | :heavy_minus_sign:                                                    | N/A                                                                   |
| `salesCustomer`                                                       | [Customer](../../models/shared/customer.md)                           | :heavy_minus_sign:                                                    | N/A                                                                   |
| `syncSales`                                                           | *boolean*                                                             | :heavy_minus_sign:                                                    | Boolean indicator for syncing sales.                                  |
| `taxRates`                                                            | Record<string, [TaxRateAmount](../../models/shared/taxrateamount.md)> | :heavy_minus_sign:                                                    | N/A                                                                   |