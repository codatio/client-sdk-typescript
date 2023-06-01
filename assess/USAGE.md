<!-- Start SDK Example Usage -->
```typescript
import { CodatAssess } from "@codat/assess";
import { GetAccountCategoryResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.categories.getAccountCategory({
  accountId: "corrupti",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetAccountCategoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->