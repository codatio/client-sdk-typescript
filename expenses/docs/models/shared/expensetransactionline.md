# ExpenseTransactionLine


## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `accountRef`                                    | [RecordRef](../../models/shared/recordref.md)   | :heavy_check_mark:                              | N/A                                             |                                                 |
| `netAmount`                                     | *number*                                        | :heavy_check_mark:                              | Amount of the line, exclusive of tax.           | 110.42                                          |
| `taxAmount`                                     | *number*                                        | :heavy_check_mark:                              | Amount of tax for the line.                     | 14.43                                           |
| `taxRateRef`                                    | [RecordRef](../../models/shared/recordref.md)   | :heavy_minus_sign:                              | N/A                                             |                                                 |
| `trackingRefs`                                  | [RecordRef](../../models/shared/recordref.md)[] | :heavy_minus_sign:                              | N/A                                             |                                                 |