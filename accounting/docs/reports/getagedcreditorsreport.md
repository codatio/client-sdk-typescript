# getAgedCreditorsReport
Available in: `reports`

Returns aged creditors report for company that shows the total balance owed by a business to its suppliers over time.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAgedCreditorsReportRequest, GetAgedCreditorsReportResponse } from "@codat/accounting/dist/sdk/models/operations";
import { RFCDate } from "@codat/accounting/dist/sdk/types";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAgedCreditorsReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 12,
  periodLengthDays: 30,
  reportDate: new RFCDate("2022-12-31"),
};

sdk.reports.getAgedCreditorsReport(req).then((res: GetAgedCreditorsReportResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```