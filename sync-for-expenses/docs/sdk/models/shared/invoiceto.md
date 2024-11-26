# InvoiceTo

Unique identifier for the customer billed for the transaction. The `invoiceTo` object is currently supported only for QuickBooks Online and QuickBooks Desktop.

## Example Usage

```typescript
import { InvoiceTo } from "@codat/sync-for-expenses/sdk/models/shared";

let value: InvoiceTo = {
  id: "80000002-1674552702",
  type: "customer",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_minus_sign:                                                  | identifier of customer.                                             | 80000002-1674552702                                                 |
| `type`                                                              | [shared.InvoiceToType](../../../sdk/models/shared/invoicetotype.md) | :heavy_minus_sign:                                                  | The type of contact.                                                | customer                                                            |