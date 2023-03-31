<!-- Start SDK Example Usage -->
```typescript
import {
  CreateBankTransactionsRequest,
  CreateBankTransactionsResponse
} from "@codat/bankfeeds/dist/sdk/models/operations";
import {
  BankTransactionTypeEnum,
} from "@codat/bankfeeds/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { Codat } from "@codat/bankfeeds";
const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBankTransactionsRequest = {
  bankTransactions: {
    accountId: "unde",
    transactions: [
      {
        amount: 7151.9,
        balance: 8442.66,
        counterparty: "id",
        date: "2022-10-23T00:00:00Z",
        description: "vero",
        id: "perspiciatis",
        modifiedDate: "2022-10-23T00:00:00Z",
        reconciled: false,
        reference: "nulla",
        sourceModifiedDate: "2022-10-23T00:00:00Z",
        transactionType: BankTransactionTypeEnum.Dep,
      },
      {
        amount: 6235.64,
        balance: 6458.94,
        counterparty: "eum",
        date: "2022-10-23T00:00:00Z",
        description: "iusto",
        id: "ullam",
        modifiedDate: "2022-10-23T00:00:00Z",
        reconciled: false,
        reference: "saepe",
        sourceModifiedDate: "2022-10-23T00:00:00Z",
        transactionType: BankTransactionTypeEnum.Credit,
      },
      {
        amount: 9636.63,
        balance: 2726.56,
        counterparty: "eum",
        date: "2022-10-23T00:00:00Z",
        description: "voluptatum",
        id: "autem",
        modifiedDate: "2022-10-23T00:00:00Z",
        reconciled: false,
        reference: "vel",
        sourceModifiedDate: "2022-10-23T00:00:00Z",
        transactionType: BankTransactionTypeEnum.Pos,
      },
    ],
  },
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 479977,
};

sdk.bankAccountTransactions.createBankTransactions(req).then((res: CreateBankTransactionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->