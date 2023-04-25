# isAgedCreditorsReportAvailable
Available in: `reports`

Indicates whether the aged creditor report is available for the company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { IsAgedCreditorsReportAvailableRequest, IsAgedCreditorsReportAvailableResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: IsAgedCreditorsReportAvailableRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.reports.isAgedCreditorsReportAvailable(req).then((res: IsAgedCreditorsReportAvailableResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```