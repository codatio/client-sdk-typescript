<!-- Start SDK Example Usage -->
```typescript
import {
  GetCompanyConfigurationRequest,
  GetCompanyConfigurationResponse
} from "@codat/expenses/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/expenses";

const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  }
});
    
const req: GetCompanyConfigurationRequest = {
  pathParams: {
    companyId: "unde",
  },
};

sdk.configuration.getCompanyConfiguration(req).then((res: GetCompanyConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->