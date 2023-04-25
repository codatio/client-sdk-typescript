# getSyncById
Available in: `syncStatus`

Get the sync status for a specified sync

## Example Usage
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetSyncByIdRequest, GetSyncByIdResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetSyncByIdRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
};

sdk.syncStatus.getSyncById(req).then((res: GetSyncByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```