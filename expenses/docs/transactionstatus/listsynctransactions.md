# listSyncTransactions
Available in: `transactionStatus`

Get's the transactions and status for a sync

## Example Usage
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { ListSyncTransactionsRequest, ListSyncTransactionsResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { IntegrationTypeEnum, TransactionStatusEnum } from "@codat/sync-for-expenses/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListSyncTransactionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  page: 1,
  pageSize: 100,
  syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
};

sdk.transactionStatus.listSyncTransactions(req).then((res: ListSyncTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```