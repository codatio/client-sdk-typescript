# getSyncTransaction
Available in: `transactionStatus`

Gets the status of a transaction for a sync

## Example Usage
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetSyncTransactionRequest, GetSyncTransactionResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { IntegrationTypeEnum, TransactionStatusEnum } from "@codat/sync-for-expenses/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetSyncTransactionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
  transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
};

sdk.transactionStatus.getSyncTransaction(req).then((res: GetSyncTransactionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```