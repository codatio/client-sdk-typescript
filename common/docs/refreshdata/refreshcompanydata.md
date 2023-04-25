# refreshCompanyData
Available in: `refreshData`

Refreshes all data types marked Fetch on first link.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { RefreshCompanyDataRequest, RefreshCompanyDataResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: RefreshCompanyDataRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.refreshData.refreshCompanyData(req).then((res: RefreshCompanyDataResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```