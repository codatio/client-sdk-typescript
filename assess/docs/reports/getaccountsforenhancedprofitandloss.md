# getAccountsForEnhancedProfitAndLoss
Available in: `reports`

The Enhanced Profit and Loss Accounts endpoint returns a list of categorized accounts that appear on a company’s Profit and Loss. It also includes a balance per the financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import {
  GetAccountsForEnhancedProfitAndLossRequest,
  GetAccountsForEnhancedProfitAndLossResponse,
} from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountsForEnhancedProfitAndLossRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 120196,
  reportDate: "29-09-2020",
};

sdk.reports.getAccountsForEnhancedProfitAndLoss(req).then((res: GetAccountsForEnhancedProfitAndLossResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```