<!-- Start SDK Example Usage -->
```typescript
import {
  GetCommerceInfoRequest,
  GetCommerceInfoResponse
} from "@codat/commerce/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/commerce";
const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});
    
const req: GetCommerceInfoRequest = {
  pathParams: {
    companyId: "unde",
    connectionId: "deserunt",
  },
};

sdk.companyInfo.getCommerceInfo(req).then((res: GetCommerceInfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->