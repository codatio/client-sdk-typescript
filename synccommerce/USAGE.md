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
    authHeader: "Basic YOUR_ENCODED_API_KEY",
  },
});

const req: AddDataConnectionRequest = {
  requestBody: "unde",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.companyManagement.addDataConnection(req).then((res: AddDataConnectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->