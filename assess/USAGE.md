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
  },
});

const req: GetAccountCategoryRequest = {
  accountId: "unde",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.categories.getAccountCategory(req).then((res: GetAccountCategoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->