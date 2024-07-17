# InvoiceTo

Unique identifier of the customer the expense is billable to. The invoiceTo object is currently only supported for QBO and QBD.


## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_minus_sign:                                                  | identifier of customer.                                             | 80000002-1674552702                                                 |
| `type`                                                              | [shared.InvoiceToType](../../../sdk/models/shared/invoicetotype.md) | :heavy_minus_sign:                                                  | The type of contact.                                                | customer                                                            |