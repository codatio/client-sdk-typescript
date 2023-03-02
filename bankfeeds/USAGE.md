<!-- Start SDK Example Usage -->
```typescript
import {
  GetBankAccountPushOptionsRequest,
  GetBankAccountPushOptionsResponse 
} from "@codat/bankfeeds/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/bankfeeds";

const sdk = new Codat({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  }
});
    
const req: GetBankAccountPushOptionsRequest = {
  security: {
    apiKey: "YOUR_API_KEY_HERE",
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