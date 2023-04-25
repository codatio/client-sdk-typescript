# listBankTransactions
Available in: `transactions`

Gets a list of transactions incurred by a company across all bank accounts.

## Example Usage
```typescript
import { CodatBanking } from "@codat/banking";
import { ListBankTransactionsRequest, ListBankTransactionsResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCodeEnum } from "@codat/banking/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBankTransactionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "corrupti",
};

sdk.transactions.listBankTransactions(req).then((res: ListBankTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```