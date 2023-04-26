<!-- Start SDK Example Usage -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetCompanyConfigurationRequest, GetCompanyConfigurationResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyConfigurationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.configuration.getCompanyConfiguration(req).then((res: GetCompanyConfigurationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->