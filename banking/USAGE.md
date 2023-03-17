<!-- Start SDK Example Usage -->
```typescript
import {
  ListBankingAccountBalancesRequest,
  ListBankingAccountBalancesResponse
} from "@codat/banking/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/banking";
const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBankingAccountBalancesRequest = {
  companyId: "unde",
  connectionId: "deserunt",
  orderBy: "porro",
  page: 844266,
  pageSize: 602763,
  query: "vero",
};

sdk.accountBalances.listBankingAccountBalances(req).then((res: ListBankingAccountBalancesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->