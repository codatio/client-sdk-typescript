<!-- Start SDK Example Usage -->
```typescript
import { CodatCommerce } from "@codat/commerce";
import { GetCompanyInfoResponse } from "@codat/commerce/dist/sdk/models/operations";
import { AddressType, CompanyInfoWeblinkType, PhoneNumberType } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companyInfo.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCompanyInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->