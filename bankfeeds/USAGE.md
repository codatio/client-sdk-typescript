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
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "unde",
};

sdk.bankAccountTransactions.getBankAccountPushOptions(req).then((res: GetBankAccountPushOptionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->