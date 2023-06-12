# GetBalanceSheetRequest


## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `companyId`                                       | *string*                                          | :heavy_check_mark:                                | N/A                                               | 8a210b68-6988-11ed-a1eb-0242ac120002              |
| `periodLength`                                    | *number*                                          | :heavy_check_mark:                                | Number of months defining the period of interest. | 4                                                 |
| `periodsToCompare`                                | *number*                                          | :heavy_check_mark:                                | Number of periods with `periodLength` to compare. | 20                                                |
| `startMonth`                                      | *string*                                          | :heavy_minus_sign:                                | N/A                                               | 2022-10-23T00:00:00.000Z                          |