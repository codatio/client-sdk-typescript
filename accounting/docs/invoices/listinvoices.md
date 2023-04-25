# listInvoices
Available in: `invoices`

Gets the latest invoices for a company, with pagination

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoicesRequest, ListInvoicesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum1, InvoiceStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListInvoicesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "nesciunt",
};

sdk.invoices.listInvoices(req).then((res: ListInvoicesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```