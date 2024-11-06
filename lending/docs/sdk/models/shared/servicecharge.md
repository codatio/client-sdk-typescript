# ServiceCharge

## Example Usage

```typescript
import { ServiceCharge } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: ServiceCharge = {
  description: "A service charge",
  totalAmount: new Decimal("0"),
  taxPercentage: new Decimal("0"),
  taxAmount: new Decimal("12.5"),
  taxes: [
    {
      taxComponentRef: {
        id: "EILBDVJVNUAGVKRQ",
        name: "<value>",
      },
    },
  ],
  quantity: 1,
  type: "Overpayment",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | Service charges for this order.                                                         | A service charge                                                                        |
| `totalAmount`                                                                           | *Decimal*                                                                               | :heavy_minus_sign:                                                                      | Total amount of the service charge, including tax.                                      | 0                                                                                       |
| `taxPercentage`                                                                         | *Decimal*                                                                               | :heavy_minus_sign:                                                                      | Percentage rate (from 0 to 100) of any tax applied to the service charge.               | 0                                                                                       |
| `taxAmount`                                                                             | *Decimal*                                                                               | :heavy_minus_sign:                                                                      | Amount of the service charge that is tax.                                               | 0                                                                                       |
| `taxes`                                                                                 | [shared.TaxComponentAllocation](../../../sdk/models/shared/taxcomponentallocation.md)[] | :heavy_minus_sign:                                                                      | Taxes breakdown as applied to service charges.                                          |                                                                                         |
| `quantity`                                                                              | *number*                                                                                | :heavy_minus_sign:                                                                      | The number of times the charge is charged.                                              | 1                                                                                       |
| `type`                                                                                  | [shared.ServiceChargeType](../../../sdk/models/shared/servicechargetype.md)             | :heavy_minus_sign:                                                                      | The type of the service charge.                                                         | Overpayment                                                                             |