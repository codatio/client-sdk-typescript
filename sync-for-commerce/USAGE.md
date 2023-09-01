<!-- Start SDK Example Usage -->
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { CreateCompanyResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceType, DataConnectionStatus } from "@codat/sync-for-commerce/dist/sdk/models/shared";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companyManagement.createCompany({
  name: "Bob's Burgers",
}).then((res: CreateCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->