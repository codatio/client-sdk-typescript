# listAccountTransactions
Available in: `accountTransactions`

Gets the account transactions for a given company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListAccountTransactionsRequest, ListAccountTransactionsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountTransactionStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListAccountTransactionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "distinctio",
};

sdk.accountTransactions.listAccountTransactions(req).then((res: ListAccountTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```