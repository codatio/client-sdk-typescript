# ReportLineInput


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Identifier for the account, unique for the company in the accounting platform. |
| `items`                                                                        | [shared.ReportLine](../../../sdk/models/shared/reportline.md)[]                | :heavy_minus_sign:                                                             | An array of ReportLine items.                                                  |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Name of the report line item.                                                  |
| `value`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | Numerical value of the line item.                                              |