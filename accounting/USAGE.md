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
    apiKey: "YOUR_API_KEY_HERE",
  }
});
    
const req: GetAccountTransactionRequest = {
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
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