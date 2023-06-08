<!-- Start SDK Example Usage -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { CreateBankTransactionsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/bank-feeds/dist/sdk/models/shared";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccountTransactions.create({
  createBankTransactions: {
    accountId: "corrupti",
    transactions: [
      {
        amount: 7151.9,
        date: "2022-10-23T00:00:00.000Z",
        description: "unde",
        id: "d8d69a67-4e0f-4467-8c87-96ed151a05df",
      },
      {
        amount: 7781.57,
        date: "2022-10-23T00:00:00.000Z",
        description: "at",
        id: "df7cc78c-a1ba-4928-bc81-6742cb739205",
      },
      {
        amount: 6176.36,
        date: "2022-10-23T00:00:00.000Z",
        description: "iste",
        id: "396fea75-96eb-410f-aaa2-352c5955907a",
      },
    ],
  },
  accountId: "EILBDVJVNUAGVKRQ",
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 958950,
}).then((res: CreateBankTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->