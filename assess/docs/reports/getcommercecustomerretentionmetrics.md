# getCommerceCustomerRetentionMetrics
Available in: `reports`

Gets the customer retention metrics for a specific company connection, over one or more periods of time.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import {
  GetCommerceCustomerRetentionMetricsRequest,
  GetCommerceCustomerRetentionMetricsResponse,
} from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCommerceCustomerRetentionMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 359444,
  periodLength: 296140,
  periodUnit: PeriodUnitEnum.Week,
  reportDate: "29-09-2020",
};

sdk.reports.getCommerceCustomerRetentionMetrics(req).then((res: GetCommerceCustomerRetentionMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```