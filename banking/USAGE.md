<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ListBankingAccountBalancesRequest, ListBankingAccountBalancesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: ListBankingAccountBalancesRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    companyId: "unde",
    connectionId: "deserunt",
  },
  queryParams: {
    orderBy: "porro",
    page: 8442.66,
    pageSize: 6027.63,
    query: "vero",
  },
};

sdk.accountBalances.listBankingAccountBalances(req).then((res: ListBankingAccountBalancesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->