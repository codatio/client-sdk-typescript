<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CompanyRequestBody,
  CreateCompanyResponse
} from "@codat/common/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { CodatCommon } from "@codat/common";
const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: shared.CompanyRequestBody = {
  description: "corrupti",
  name: "provident",
};

sdk.companies.createCompany(req).then((res: CreateCompanyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->