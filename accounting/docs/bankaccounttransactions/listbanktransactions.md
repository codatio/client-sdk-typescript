# listBankTransactions
Available in: `bankAccountTransactions`

Gets the latest bank transactions for given account ID and company. Doesn't require connection ID.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBankTransactionsRequest, ListBankTransactionsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BankTransactionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBankTransactionsRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "vero",
};

sdk.bankAccountTransactions.listBankTransactions(req).then((res: ListBankTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```