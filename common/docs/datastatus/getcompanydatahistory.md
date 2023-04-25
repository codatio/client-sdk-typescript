# getCompanyDataHistory
Available in: `dataStatus`

Gets the pull operation history (datasets) for a given company.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyDataHistoryRequest, GetCompanyDataHistoryResponse } from "@codat/common/dist/sdk/models/operations";
import { PullOperationStatusEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyDataHistoryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quis",
};

sdk.dataStatus.getCompanyDataHistory(req).then((res: GetCompanyDataHistoryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```