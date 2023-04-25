# getAccountingMarketingMetrics
Available in: `excelReports`

Request an Excel report for download.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { GetAccountingMarketingMetricsRequest, GetAccountingMarketingMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountingMarketingMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 739264,
  periodLength: 19987,
  periodUnit: PeriodUnitEnum.Day,
  reportDate: "29-09-2020",
  showInputValues: false,
};

sdk.excelReports.getAccountingMarketingMetrics(req).then((res: GetAccountingMarketingMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```