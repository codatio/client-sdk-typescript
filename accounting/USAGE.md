<!-- Start SDK Example Usage -->
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAccountTransactionResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountTransactionStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.accountTransactions.get({
  accountTransactionId: "corrupti",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetAccountTransactionResponse | AxiosError) => {
  if (res instanceof GetAccountTransactionResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->