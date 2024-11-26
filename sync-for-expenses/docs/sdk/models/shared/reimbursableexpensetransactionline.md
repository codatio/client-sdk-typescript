# ReimbursableExpenseTransactionLine

## Example Usage

```typescript
import { ReimbursableExpenseTransactionLine } from "@codat/sync-for-expenses/sdk/models/shared";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

let value: ReimbursableExpenseTransactionLine = {
  description: "2-night hotel stay",
  netAmount: new Decimal("100"),
  taxAmount: new Decimal("20"),
  taxRateRef: {
    id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
  },
  accountRef: {
    id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
  },
  itemRef: {
    id: "80000002-1675158984",
  },
  trackingRefs: [
    {
      id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
      dataType: "trackingCategories",
    },
  ],
  invoiceTo: {
    id: "80000002-1674552702",
    type: "customer",
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                                                                   | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | line description                                                                                                                                                | 2-night hotel stay                                                                                                                                              |
| `netAmount`                                                                                                                                                     | *Decimal*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                              | Amount of the line, exclusive of tax.                                                                                                                           | 100                                                                                                                                                             |
| `taxAmount`                                                                                                                                                     | *Decimal*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                              | Amount of tax for the line.                                                                                                                                     | 20                                                                                                                                                              |
| `taxRateRef`                                                                                                                                                    | [shared.RecordRef](../../../sdk/models/shared/recordref.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `accountRef`                                                                                                                                                    | [shared.RecordRef](../../../sdk/models/shared/recordref.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `itemRef`                                                                                                                                                       | [shared.ItemRef](../../../sdk/models/shared/itemref.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `trackingRefs`                                                                                                                                                  | [shared.TrackingRef](../../../sdk/models/shared/trackingref.md)[]                                                                                               | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `invoiceTo`                                                                                                                                                     | [shared.InvoiceTo](../../../sdk/models/shared/invoiceto.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                              | Unique identifier for the customer billed for the transaction. The `invoiceTo` object is currently supported only for QuickBooks Online and QuickBooks Desktop. |                                                                                                                                                                 |