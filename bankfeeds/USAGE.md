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

sdk.bankAccountTransactions.create({
  bankTransactions: {
    accountId: "corrupti",
    amount: 5928.45,
    balance: 7151.9,
    clearedOnDate: "quibusdam",
    description: "unde",
    id: "d8d69a67-4e0f-4467-8c87-96ed151a05df",
    modifiedDate: "quo",
    reconciled: false,
    sourceModifiedDate: "odit",
    transactionType: BankTransactionType.DirectDebit,
  },
  accountId: "at",
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 978619,
}).then((res: CreateBankTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->