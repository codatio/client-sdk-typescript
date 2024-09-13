# UpdateBillResponseWithholdingTax

## Example Usage

```typescript
import { UpdateBillResponseWithholdingTax } from "@codat/sync-for-payables-version-1/sdk/models/shared";
import { Decimal } from "@codat/sync-for-payables-version-1/sdk/types";

let value: UpdateBillResponseWithholdingTax = {
  name: "<value>",
  amount: new Decimal("1811.51"),
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `name`                         | *string*                       | :heavy_check_mark:             | Name assigned to withheld tax. |
| `amount`                       | *Decimal*                      | :heavy_check_mark:             | Amount of tax withheld.        |