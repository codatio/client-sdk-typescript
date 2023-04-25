# getCommerceRefundsMetrics
Available in: `reports`

Gets the refunds information for a specific company connection, over one or more periods of time.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { GetCommerceRefundsMetricsRequest, GetCommerceRefundsMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCommerceRefundsMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 64147,
  periodLength: 216822,
  periodUnit: PeriodUnitEnum.Month,
  reportDate: "29-09-2020",
};

sdk.reports.getCommerceRefundsMetrics(req).then((res: GetCommerceRefundsMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```