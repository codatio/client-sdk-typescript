# getPushOperation
Available in: `pushData`

Retrieve push operation.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { GetPushOperationRequest, GetPushOperationResponse } from "@codat/common/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPushOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  pushOperationKey: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
};

sdk.pushData.getPushOperation(req).then((res: GetPushOperationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```