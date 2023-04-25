# createBankTransactions
Available in: `bankAccountTransactions`

Posts bank transactions to the accounting package for a given company.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support POST methods.

## Example Usage
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { CreateBankTransactionsRequest, CreateBankTransactionsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import {
  BankTransactionTypeEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/bank-feeds/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBankTransactionsRequest = {
  bankTransactions: {
    accountId: "numquam",
    transactions: [
      {
        amount: 4663.11,
        balance: 4746.97,
        clearedOnDate: "2022-10-23T00:00:00Z",
        counterparty: "velit",
        description: "error",
        id: "251aa52c-3f5a-4d01-9da1-ffe78f097b00",
        modifiedDate: "2022-10-23T00:00:00Z",
        reconciled: false,
        reference: "reprehenderit",
        sourceModifiedDate: "2022-10-23T00:00:00Z",
        transactionType: BankTransactionTypeEnum.Fee,
      },
      {
        amount: 9795.87,
        balance: 1201.96,
        clearedOnDate: "2022-10-23T00:00:00Z",
        counterparty: "corporis",
        description: "dolore",
        id: "71b5e6e1-3b99-4d48-8e1e-91e450ad2abd",
        modifiedDate: "2022-10-23T00:00:00Z",
        reconciled: false,
        reference: "labore",
        sourceModifiedDate: "2022-10-23T00:00:00Z",
        transactionType: BankTransactionTypeEnum.Div,
      },
    ],
  },
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 183191,
};

sdk.bankAccountTransactions.createBankTransactions(req).then((res: CreateBankTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```