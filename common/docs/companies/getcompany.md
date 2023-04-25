# getCompany
Available in: `companies`

Get metadata for a single company

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyRequest, GetCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.companies.getCompany(req).then((res: GetCompanyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```