<!-- Start SDK Example Usage -->
```typescript
import {
  GetCreateUpdateAccountTransactionsModelRequest,
  GetCreateUpdateAccountTransactionsModelResponse 
} from "@codat/accounting/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/accounting";

const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  }
});
    
const req: GetCreateUpdateAccountTransactionsModelRequest = {
  pathParams: {
    accountTransactionId: "unde",
    companyId: "deserunt",
    connectionId: "porro",
  },
};

sdk.accountTransactions.getCreateUpdateAccountTransactionsModel(req).then((res: GetCreateUpdateAccountTransactionsModelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->