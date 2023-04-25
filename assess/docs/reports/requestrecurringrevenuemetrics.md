# requestRecurringRevenueMetrics
Available in: `reports`

Request production of key subscription revenue metrics.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { RequestRecurringRevenueMetricsRequest, RequestRecurringRevenueMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: RequestRecurringRevenueMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.reports.requestRecurringRevenueMetrics(req).then((res: RequestRecurringRevenueMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```