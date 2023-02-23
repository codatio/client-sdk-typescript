<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateCompanyRequest, CreateCompanyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateCompanyRequest = {
  request: {
    description: "unde",
    name: "deserunt",
  },
};

sdk.companies.createCompany(req).then((res: CreateCompanyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->