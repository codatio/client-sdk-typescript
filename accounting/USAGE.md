<!-- Start SDK Example Usage -->
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAccountTransactionResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountTransactionStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountTransactions.get({
  accountTransactionId: "corrupti",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetAccountTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->