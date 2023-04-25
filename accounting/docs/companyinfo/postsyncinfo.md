# postSyncInfo
Available in: `companyInfo`

Initiates the process of synchronising basic info for a company

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { PostSyncInfoRequest, PostSyncInfoResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DatasetStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: PostSyncInfoRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.companyInfo.postSyncInfo(req).then((res: PostSyncInfoResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```