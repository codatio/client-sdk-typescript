# BillLineItem

## Example Usage

```typescript
import { BillLineItem } from "@codat/sync-for-payables/sdk/models/shared";

let value: BillLineItem = {
  trackingRefs: [
    {
      id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
      dataType: "trackingCategories",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | Friendly name of the goods or services received.                      |
| `unitAmount`                                                          | *Decimal*                                                             | :heavy_minus_sign:                                                    | Unit price of the goods or service.                                   |
| `quantity`                                                            | *Decimal*                                                             | :heavy_minus_sign:                                                    | Number of units of goods or services received.                        |
| `taxAmount`                                                           | *Decimal*                                                             | :heavy_minus_sign:                                                    | Amount of tax applied to the line item.                               |
| `accountRef`                                                          | [shared.BillAccountRef](../../../sdk/models/shared/billaccountref.md) | :heavy_minus_sign:                                                    | Reference to the account to which the line item is linked.            |
| `totalAmount`                                                         | *Decimal*                                                             | :heavy_minus_sign:                                                    | Total amount of the line, including tax.                              |
| `taxRateRef`                                                          | [shared.BillTaxRateRef](../../../sdk/models/shared/billtaxrateref.md) | :heavy_minus_sign:                                                    | Reference to the tax rate to which the line item is linked.           |
| `trackingRefs`                                                        | [shared.TrackingRef](../../../sdk/models/shared/trackingref.md)[]     | :heavy_minus_sign:                                                    | N/A                                                                   |