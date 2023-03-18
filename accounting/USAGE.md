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
  },
});

const req: GetCreateUpdateAccountTransactionsModelRequest = {
  accountTransactionId: "unde",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.accountTransactions.getCreateUpdateAccountTransactionsModel(req).then((res: GetCreateUpdateAccountTransactionsModelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->