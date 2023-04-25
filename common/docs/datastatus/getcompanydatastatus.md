# getCompanyDataStatus
Available in: `dataStatus`

Get the state of each data type for a company

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyDataStatusRequest, GetCompanyDataStatusResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyDataStatusRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.dataStatus.getCompanyDataStatus(req).then((res: GetCompanyDataStatusResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```