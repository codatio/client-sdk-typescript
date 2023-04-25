# downloadInvoicePdf
Available in: `invoices`

Get invoice as PDF

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadInvoicePdfRequest, DownloadInvoicePdfResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadInvoicePdfRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.invoices.downloadInvoicePdf(req).then((res: DownloadInvoicePdfResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```