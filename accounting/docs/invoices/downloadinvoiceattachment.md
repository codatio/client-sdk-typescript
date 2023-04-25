# downloadInvoiceAttachment
Available in: `invoices`

Download invoice attachments

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadInvoiceAttachmentRequest, DownloadInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadInvoiceAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.invoices.downloadInvoiceAttachment(req).then((res: DownloadInvoiceAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```