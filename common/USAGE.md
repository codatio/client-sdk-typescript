<!-- Start SDK Example Usage -->
```typescript
import { CodatCommon } from "@codat/common";
import { CreateCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { CompanyRequestBody, DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: shared.CompanyRequestBody = {
  description: "corrupti",
  name: "Kelvin Sporer",
};

sdk.companies.create(req).then((res: CreateCompanyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->