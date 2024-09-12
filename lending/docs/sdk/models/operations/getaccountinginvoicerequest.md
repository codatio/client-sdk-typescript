# GetAccountingInvoiceRequest

## Example Usage

```typescript
import { GetAccountingInvoiceRequest } from "@codat/lending/sdk/models/operations";

let value: GetAccountingInvoiceRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `invoiceId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for an invoice.    |                                      |