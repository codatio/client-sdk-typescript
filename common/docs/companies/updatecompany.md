# updateCompany
Available in: `companies`

Updates the given company with a new name and description

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { UpdateCompanyRequest, UpdateCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateCompanyRequest = {
  companyRequestBody: {
    description: "magnam",
    name: "Larry Windler",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.companies.updateCompany(req).then((res: UpdateCompanyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```