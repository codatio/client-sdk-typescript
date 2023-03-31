<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CreateCompany,
  CreateCompanyResponse
} from "@codat/synccommerce/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/synccommerce";
const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: shared.CreateCompany = {
  name: "Bob's Burgers",
};

sdk.companyManagement.createCompany(req).then((res: CreateCompanyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->