<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountCategoryRequest,
  GetAccountCategoryResponse 
} from "@codat/assess/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/assess";

const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  }
});
    
const req: GetAccountCategoryRequest = {
  pathParams: {
    accountId: "unde",
    companyId: "deserunt",
    connectionId: "porro",
  },
};

sdk.categories.getAccountCategory(req).then((res: GetAccountCategoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->