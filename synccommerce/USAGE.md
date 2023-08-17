<!-- Start SDK Example Usage -->


```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { GetConfigurationResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.configurationAdvanced.getConfiguration({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetConfigurationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->