<!-- Start SDK Example Usage -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { CreateBankTransactionsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { BankTransactionType, DataType, PushChangeType, PushOperationStatus } from "@codat/bank-feeds/dist/sdk/models/shared";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccountTransactions.createBankTransactions({
  bankTransactions: {
    accountId: "corrupti",
    transactions: [
      {
        amount: 7151.9,
        balance: 8442.66,
        clearedOnDate: "unde",
        counterparty: "nulla",
        description: "corrupti",
        id: "d69a674e-0f46-47cc-8796-ed151a05dfc2",
        modifiedDate: "at",
        reconciled: false,
        reference: "at",
        sourceModifiedDate: "maiores",
        transactionType: BankTransactionType.Atm,
      },
      {
        amount: 7991.59,
        balance: 8009.11,
        clearedOnDate: "esse",
        counterparty: "totam",
        description: "porro",
        id: "a1ba928f-c816-4742-8b73-9205929396fe",
        modifiedDate: "fuga",
        reconciled: false,
        reference: "in",
        sourceModifiedDate: "corporis",
        transactionType: BankTransactionType.Check,
      },
      {
        amount: 4370.32,
        balance: 9023.49,
        clearedOnDate: "quidem",
        counterparty: "architecto",
        description: "ipsa",
        id: "faaa2352-c595-4590-baff-1a3a2fa94677",
        modifiedDate: "velit",
        reconciled: false,
        reference: "error",
        sourceModifiedDate: "quia",
        transactionType: BankTransactionType.SerChg,
      },
    ],
  },
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 110375,
}).then((res: CreateBankTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->