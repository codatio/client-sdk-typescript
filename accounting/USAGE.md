<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountTransactionRequest,
  GetAccountTransactionResponse 
} from "@codat/accounting/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/accounting";

const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  }
});
    
const req: GetAccountTransactionRequest = {
  pathParams: {
    accountTransactionId: "unde",
    companyId: "deserunt",
    connectionId: "porro",
  },
};

sdk.accountTransactions.getAccountTransaction(req).then((res: GetAccountTransactionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->