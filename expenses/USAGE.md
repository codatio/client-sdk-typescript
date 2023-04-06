<!-- Start SDK Example Usage -->
```typescript
import {
  GetCompanyConfigurationRequest,
  GetCompanyConfigurationResponse
} from "@codat/sync-for-expenses/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyConfigurationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.configuration.getCompanyConfiguration(req).then((res: GetCompanyConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->