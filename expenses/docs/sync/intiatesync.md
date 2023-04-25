# intiateSync
Available in: `sync`

Initiate sync of pending transactions.

## Example Usage
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { IntiateSyncRequest, IntiateSyncResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: IntiateSyncRequest = {
  postSync: {
    datasetIds: [
      "7cc8796e-d151-4a05-9fc2-ddf7cc78ca1b",
      "a928fc81-6742-4cb7-b920-5929396fea75",
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.sync.intiateSync(req).then((res: IntiateSyncResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```