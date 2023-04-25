# getLatestSync
Available in: `syncStatus`

Gets the latest sync status

## Example Usage
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetLatestSyncRequest, GetLatestSyncResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetLatestSyncRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.syncStatus.getLatestSync(req).then((res: GetLatestSyncResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```