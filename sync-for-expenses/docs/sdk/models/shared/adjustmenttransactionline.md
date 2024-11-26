# AdjustmentTransactionLine

## Example Usage

```typescript
import { AdjustmentTransactionLine } from "@codat/sync-for-expenses/sdk/models/shared";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

let value: AdjustmentTransactionLine = {
  amount: new Decimal("50"),
  accountRef: {
    id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
  },
  description: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
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
| `amount`                                                                                                                                                        | *Decimal*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                              | Amount of the line. A positive line represents a debit; a negative line represents a credit.                                                                    | 50                                                                                                                                                              |
| `accountRef`                                                                                                                                                    | [shared.RecordRef](../../../sdk/models/shared/recordref.md)                                                                                                     | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `description`                                                                                                                                                   | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Any private, company notes about the transaction.                                                                                                               | APPLE.COM/BILL - 09001077498 - Card Ending: 4590                                                                                                                |
| `trackingRefs`                                                                                                                                                  | [shared.TrackingRefAdjustmentTransaction](../../../sdk/models/shared/trackingrefadjustmenttransaction.md)[]                                                     | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `invoiceTo`                                                                                                                                                     | [shared.InvoiceTo](../../../sdk/models/shared/invoiceto.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                              | Unique identifier for the customer billed for the transaction. The `invoiceTo` object is currently supported only for QuickBooks Online and QuickBooks Desktop. |                                                                                                                                                                 |