# WithholdingTax

## Example Usage

```typescript
import { WithholdingTax } from "@codat/lending/sdk/models/shared";

let value: WithholdingTax = {
  name: "string",
  amount: 0,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `name`                         | *string*                       | :heavy_check_mark:             | Name assigned to withheld tax. |
| `amount`                       | *Decimal | number*             | :heavy_check_mark:             | Amount of tax withheld.        |