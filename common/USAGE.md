<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCompanyRequestBody,
  CreateCompanyResponse
} from "@codat/common/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/common";
const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCompanyRequestBody = {
  description: "unde",
  name: "deserunt",
};

sdk.companies.createCompany(req).then((res: CreateCompanyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->