# ServiceCharge

## Example Usage

```typescript
import { ServiceCharge } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: ServiceCharge = {
  description: "A service charge",
  totalAmount: new Decimal("0"),
  taxPercentage: new Decimal("0"),
  taxAmount: new Decimal("0"),
  taxes: [
    {
      taxComponentRef: {
        id: "13d946f0-c5d5-42bc-b092-97ece17923ab",
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
| `totalAmount`                                                                           | *Decimal*                                                                               | :heavy_minus_sign:                                                                      | Total amount of the service charge, including tax.                                      | **Example 1:** 0<br/>**Example 2:** 12.5<br/>**Example 3:** 45                          |
| `taxPercentage`                                                                         | *Decimal*                                                                               | :heavy_minus_sign:                                                                      | Percentage rate (from 0 to 100) of any tax applied to the service charge.               | **Example 1:** 0<br/>**Example 2:** 12.5<br/>**Example 3:** 45                          |
| `taxAmount`                                                                             | *Decimal*                                                                               | :heavy_minus_sign:                                                                      | Amount of the service charge that is tax.                                               | **Example 1:** 0<br/>**Example 2:** 12.5<br/>**Example 3:** 45                          |
| `taxes`                                                                                 | [shared.TaxComponentAllocation](../../../sdk/models/shared/taxcomponentallocation.md)[] | :heavy_minus_sign:                                                                      | Taxes breakdown as applied to service charges.                                          |                                                                                         |
| `quantity`                                                                              | *number*                                                                                | :heavy_minus_sign:                                                                      | The number of times the charge is charged.                                              | **Example 1:** 1<br/>**Example 2:** 12<br/>**Example 3:** 45                            |
| `type`                                                                                  | [shared.ServiceChargeType](../../../sdk/models/shared/servicechargetype.md)             | :heavy_minus_sign:                                                                      | The type of the service charge.                                                         | Overpayment                                                                             |