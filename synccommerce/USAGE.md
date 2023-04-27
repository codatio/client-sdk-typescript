<!-- Start SDK Example Usage -->
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { CreateCompanyResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companyManagement.createCompany({
  name: "Bob's Burgers",
}).then((res: CreateCompanyResponse | AxiosError) => {
  if (res instanceof CreateCompanyResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->