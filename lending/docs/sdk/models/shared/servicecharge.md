# ServiceCharge

## Example Usage

```typescript
import { ServiceCharge } from "@codat/lending/sdk/models/shared";

let value: ServiceCharge = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | Service charges for this order.                                                         |
| `totalAmount`                                                                           | *Decimal | number*                                                                      | :heavy_minus_sign:                                                                      | Total amount of the service charge, including tax.                                      |
| `taxPercentage`                                                                         | *Decimal | number*                                                                      | :heavy_minus_sign:                                                                      | Percentage rate (from 0 to 100) of any tax applied to the service charge.               |
| `taxAmount`                                                                             | *Decimal | number*                                                                      | :heavy_minus_sign:                                                                      | Amount of the service charge that is tax.                                               |
| `taxes`                                                                                 | [shared.TaxComponentAllocation](../../../sdk/models/shared/taxcomponentallocation.md)[] | :heavy_minus_sign:                                                                      | Taxes breakdown as applied to service charges.                                          |
| `quantity`                                                                              | *number*                                                                                | :heavy_minus_sign:                                                                      | The number of times the charge is charged.                                              |
| `type`                                                                                  | [shared.ServiceChargeType](../../../sdk/models/shared/servicechargetype.md)             | :heavy_minus_sign:                                                                      | N/A                                                                                     |