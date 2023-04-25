# listBankAccountTransactions
Available in: `bankAccountTransactions`

Gets bank transactions for a given bank account ID

## Example Usage
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { ListBankAccountTransactionsRequest, ListBankAccountTransactionsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { BankTransactionTypeEnum } from "@codat/bank-feeds/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBankAccountTransactionsRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "aliquid",
};

sdk.bankAccountTransactions.listBankAccountTransactions(req).then((res: ListBankAccountTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```