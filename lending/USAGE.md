<!-- Start SDK Example Usage -->


```typescript
import { CodatLending } from "@codat/lending";
import { ListAccountingBankAccountTransactionsResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingBankData.listTransactions({
  accountId: "corrupti",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "provident",
}).then((res: ListAccountingBankAccountTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->