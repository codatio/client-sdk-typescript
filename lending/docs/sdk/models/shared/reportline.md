# ReportLine

## Example Usage

```typescript
import { ReportLine } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: ReportLine = {
  value: new Decimal("6706.38"),
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Identifier for the account, unique for the company in the accounting software. |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Name of the report line item.                                                  |
| `value`                                                                        | *Decimal*                                                                      | :heavy_check_mark:                                                             | Numerical value of the line item.                                              |
| `items`                                                                        | [shared.ReportLine](../../../sdk/models/shared/reportline.md)[]                | :heavy_minus_sign:                                                             | An array of ReportLine items.                                                  |