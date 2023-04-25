# getPullOperation
Available in: `dataStatus`

Retrieve information about a single dataset or pull operation.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { GetPullOperationRequest, GetPullOperationResponse } from "@codat/common/dist/sdk/models/operations";
import { PullOperationStatusEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPullOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  datasetId: "eaed9f0f-e77b-4bc9-a58f-ab8b4b99ab18",
};

sdk.dataStatus.getPullOperation(req).then((res: GetPullOperationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```