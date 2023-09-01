<!-- Start SDK Example Usage -->


```typescript
import { CodatPlatform } from "@codat/platform";
import { CreateCompanyResponse } from "@codat/platform/dist/sdk/models/operations";

const sdk = new CodatPlatform({
  security: {
    authHeader: "",
  },
});

sdk.companies.create({
  description: "Requested early access to the new financing scheme.",
  name: "Bank of Dave",
}).then((res: CreateCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->