# getEnhancedCashFlowTransactions
Available in: `reports`

The Enhanced Cash Flow Transactions endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedCashFlowTransactionsRequest, GetEnhancedCashFlowTransactionsResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetEnhancedCashFlowTransactionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  page: 1,
  pageSize: 100,
  query: "rem",
};

sdk.reports.getEnhancedCashFlowTransactions(req).then((res: GetEnhancedCashFlowTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```