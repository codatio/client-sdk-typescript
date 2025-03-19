# Items

## Example Usage

```typescript
import { Items } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: Items = {
  name: "<value>",
  amount: new Decimal("6925.32"),
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `name`                         | *string*                       | :heavy_check_mark:             | Name assigned to withheld tax. |
| `amount`                       | *Decimal*                      | :heavy_check_mark:             | Amount of tax withheld.        |