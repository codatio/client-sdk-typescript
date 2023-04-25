# getEnhancedProfitAndLoss
Available in: `reports`

Gets a fully categorized profit and loss statement for a given company, over one or more period(s).

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedProfitAndLossRequest, GetEnhancedProfitAndLossResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetEnhancedProfitAndLossRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 575947,
  periodLength: 83112,
  reportDate: "29-09-2020",
};

sdk.reports.getEnhancedProfitAndLoss(req).then((res: GetEnhancedProfitAndLossResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```