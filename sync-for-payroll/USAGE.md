<!-- Start SDK Example Usage -->


```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";
import { GetAccountingProfileResponse } from "@codat/sync-for-payroll/dist/sdk/models/operations";

const sdk = new CodatSyncPayroll({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.getAccountingProfile({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetAccountingProfileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->