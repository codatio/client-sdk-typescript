<!-- Start SDK Example Usage -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetCompanyConfigurationResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.configuration.getCompanyConfiguration({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetCompanyConfigurationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->