<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDataAssessAccountsCategoriesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));

sdk.categories.getDataAssessAccountsCategories().then((res: GetDataAssessAccountsCategoriesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->