<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCommerceInfoRequest, GetCommerceInfoResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
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