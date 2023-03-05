<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCompanyRequest,
  CreateCompanyResponse 
} from "@codat/common/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/common";

const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  }
});
    
const req: CreateCompanyRequest = {
  request: {
    description: "unde",
    name: "deserunt",
  },
};

sdk.companies.createCompany(req).then((res: CreateCompanyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->