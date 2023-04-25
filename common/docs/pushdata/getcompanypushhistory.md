# getCompanyPushHistory
Available in: `pushData`

List push operation records.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyPushHistoryRequest, GetCompanyPushHistoryResponse } from "@codat/common/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyPushHistoryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "deserunt",
};

sdk.pushData.getCompanyPushHistory(req).then((res: GetCompanyPushHistoryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```