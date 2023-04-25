# uploadInvoiceAttachment
Available in: `invoices`

Push invoice attachment

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadInvoiceAttachmentRequest, UploadInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UploadInvoiceAttachmentRequest = {
  requestBody: {
    content: "alias".encode(),
    requestBody: "illum",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.invoices.uploadInvoiceAttachment(req).then((res: UploadInvoiceAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```