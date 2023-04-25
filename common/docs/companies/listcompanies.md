# listCompanies
Available in: `companies`

List all companies that you have created in Codat.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { ListCompaniesRequest, ListCompaniesResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListCompaniesRequest = {
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "iure",
};

sdk.companies.listCompanies(req).then((res: ListCompaniesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```