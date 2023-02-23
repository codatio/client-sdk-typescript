<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetBankAccountPushOptionsRequest, GetBankAccountPushOptionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetBankAccountPushOptionsRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    accountId: "unde",
    companyId: "deserunt",
    connectionId: "porro",
  },
  queryParams: {
    orderBy: "nulla",
    page: 6027.63,
    pageSize: 8579.46,
    query: "perspiciatis",
  },
};

sdk.bankAccountTransactions.getBankAccountPushOptions(req).then((res: GetBankAccountPushOptionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->