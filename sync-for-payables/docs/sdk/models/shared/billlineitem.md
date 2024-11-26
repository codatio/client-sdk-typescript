# BillLineItem

## Example Usage

```typescript
import { BillLineItem } from "@codat/sync-for-payables/sdk/models/shared";
import { Decimal } from "@codat/sync-for-payables/sdk/types";

let value: BillLineItem = {
  unitAmount: new Decimal("8326.20"),
  quantity: new Decimal("7781.57"),
  accountRef: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | Friendly name of the goods or services received.                      |
| `unitAmount`                                                          | *Decimal*                                                             | :heavy_check_mark:                                                    | Unit price of the goods or service.                                   |
| `quantity`                                                            | *Decimal*                                                             | :heavy_check_mark:                                                    | Number of units of goods or services received.                        |
| `taxAmount`                                                           | *Decimal*                                                             | :heavy_minus_sign:                                                    | Amount of tax applied to the line item.                               |
| `accountRef`                                                          | [shared.BillAccountRef](../../../sdk/models/shared/billaccountref.md) | :heavy_check_mark:                                                    | Reference to the account to which the line item is linked.            |
| `totalAmount`                                                         | *Decimal*                                                             | :heavy_minus_sign:                                                    | Total amount of the line, including tax.                              |
| `taxRateRef`                                                          | [shared.BillTaxRateRef](../../../sdk/models/shared/billtaxrateref.md) | :heavy_minus_sign:                                                    | Reference to the tax rate to which the line item is linked.           |