<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCompanyConfigurationRequest, GetCompanyConfigurationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    authorization: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetCompanyConfigurationRequest = {
  pathParams: {
    companyId: "unde",
  },
};

sdk.configuration.getCompanyConfiguration(req).then((res: GetCompanyConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->