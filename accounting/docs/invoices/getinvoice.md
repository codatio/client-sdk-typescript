# getInvoice
Available in: `invoices`

Get invoice

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetInvoiceRequest, GetInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum1, InvoiceStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetInvoiceRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.invoices.getInvoice(req).then((res: GetInvoiceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```