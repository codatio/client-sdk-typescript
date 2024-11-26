# InvoiceStatus

## Example Usage

```typescript
import { InvoiceStatus } from "@codat/sync-for-commerce/sdk/models/shared";

let value: InvoiceStatus = {
  selectedInvoiceStatus: "Submitted",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `selectedInvoiceStatus`                                      | *string*                                                     | :heavy_minus_sign:                                           | Selected option for invoice status for invoice to be synced. | Submitted                                                    |
| `invoiceStatusOptions`                                       | *string*[]                                                   | :heavy_minus_sign:                                           | Options for invoice statuses.                                |                                                              |