# getProfitAndLoss
Available in: `financials`

Gets the latest profit and loss for a company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetProfitAndLossRequest, GetProfitAndLossResponse } from "@codat/accounting/dist/sdk/models/operations";
import { ReportBasisEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetProfitAndLossRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  periodLength: 251070,
  periodsToCompare: 785469,
  startMonth: "2022-10-23T00:00:00Z",
};

sdk.financials.getProfitAndLoss(req).then((res: GetProfitAndLossResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```