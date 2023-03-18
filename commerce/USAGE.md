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
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.companyInfo.getCommerceInfo(req).then((res: GetCommerceInfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->