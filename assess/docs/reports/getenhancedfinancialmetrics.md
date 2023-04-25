# getEnhancedFinancialMetrics
Available in: `reports`

Gets all the available financial metrics for a given company, over one or more periods.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedFinancialMetricsRequest, GetEnhancedFinancialMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import {
  FinancialMetricErrorsTypeEnum,
  FinancialMetricErrorTypeEnum,
  FinancialMetricKeyEnum,
  FinancialMetricMetricUnitEnum,
  FinancialMetricPeriodsErrorsTypeEnum,
  FinancialMetricsPeriodUnitEnum,
} from "@codat/assess/dist/sdk/models/shared";
import { RFCDate } from "@codat/assess/dist/sdk/types";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetEnhancedFinancialMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  numberOfPeriods: 916723,
  periodLength: 93940,
  reportDate: "29-09-2020",
  showMetricInputs: false,
};

sdk.reports.getEnhancedFinancialMetrics(req).then((res: GetEnhancedFinancialMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```