# getEnhancedInvoicesReport
Available in: `reports`

Gets a list of invoices linked to the corresponding banking transaction

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedInvoicesReportRequest, GetEnhancedInvoicesReportResponse } from "@codat/assess/dist/sdk/models/operations";
import { InvoiceStatusEnum, PaymentLinkTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetEnhancedInvoicesReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  page: 1,
  pageSize: 100,
  query: "repudiandae",
};

sdk.reports.getEnhancedInvoicesReport(req).then((res: GetEnhancedInvoicesReportResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```