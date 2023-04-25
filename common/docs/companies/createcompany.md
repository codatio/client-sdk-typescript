# createCompany
Available in: `companies`

Create a new company

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { CompanyRequestBody, CreateCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: shared.CompanyRequestBody = {
  description: "corrupti",
  name: "Ben Mueller",
};

sdk.companies.createCompany(req).then((res: CreateCompanyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```