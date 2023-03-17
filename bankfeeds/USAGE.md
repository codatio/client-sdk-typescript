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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBankAccountPushOptionsRequest = {
  accountId: "unde",
  companyId: "deserunt",
  connectionId: "porro",
  orderBy: "nulla",
  page: 602763,
  pageSize: 857946,
  query: "perspiciatis",
};

sdk.bankAccountTransactions.getBankAccountPushOptions(req).then((res: GetBankAccountPushOptionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->