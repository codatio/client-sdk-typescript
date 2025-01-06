# DownloadAccountingInvoiceAttachmentRequest

## Example Usage

```typescript
import { DownloadAccountingInvoiceAttachmentRequest } from "@codat/lending/sdk/models/operations";

let value: DownloadAccountingInvoiceAttachmentRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "7110701885",
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `connectionId`                       | *string*                             | :heavy_check_mark:                   | Unique identifier for a connection.  | 2e9d2c44-f675-40ba-8049-353bfcb5e171 |
| `invoiceId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for an invoice.    | 13d946f0-c5d5-42bc-b092-97ece17923ab |
| `attachmentId`                       | *string*                             | :heavy_check_mark:                   | Unique identifier for an attachment. | 8a210b68-6988-11ed-a1eb-0242ac120002 |