# getBalanceSheet
Available in: `financials`

Gets the latest balance sheet for a company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBalanceSheetRequest, GetBalanceSheetResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBalanceSheetRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  periodLength: 992382,
  periodsToCompare: 843875,
  startMonth: "2022-10-23T00:00:00Z",
};

sdk.financials.getBalanceSheet(req).then((res: GetBalanceSheetResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```