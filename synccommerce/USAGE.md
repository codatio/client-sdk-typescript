<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddDataConnectionRequest, AddDataConnectionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddDataConnectionRequest = {
  pathParams: {
    companyId: "unde",
  },
  request: "deserunt",
};

sdk.companyManagement.addDataConnection(req).then((res: AddDataConnectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->