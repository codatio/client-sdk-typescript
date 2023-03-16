<!-- Start SDK Example Usage -->
```typescript
import {
  AddDataConnectionRequest,
  AddDataConnectionResponse
} from "@codat/synccommerce/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/synccommerce";
const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: AddDataConnectionRequest = {
  requestBody: "unde",
  companyId: "deserunt",
};

sdk.companyManagement.addDataConnection(req).then((res: AddDataConnectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->