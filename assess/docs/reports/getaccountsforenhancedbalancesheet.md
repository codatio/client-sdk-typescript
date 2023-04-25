# getAccountsForEnhancedBalanceSheet
Available in: `reports`

The Enhanced Balance Sheet Accounts endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import {
  GetAccountsForEnhancedBalanceSheetRequest,
  GetAccountsForEnhancedBalanceSheetResponse,
} from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountsForEnhancedBalanceSheetRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 979587,
  reportDate: "29-09-2020",
};

sdk.reports.getAccountsForEnhancedBalanceSheet(req).then((res: GetAccountsForEnhancedBalanceSheetResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```