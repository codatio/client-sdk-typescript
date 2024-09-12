# WithholdingTax

## Example Usage

```typescript
import { WithholdingTax } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: WithholdingTax = {
  name: "<value>",
  amount: new Decimal("9413.78"),
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `name`                         | *string*                       | :heavy_check_mark:             | Name assigned to withheld tax. |
| `amount`                       | *Decimal*                      | :heavy_check_mark:             | Amount of tax withheld.        |