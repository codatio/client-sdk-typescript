# createBankTransactions
Available in: `bankAccountTransactions`

Posts bank transactions to the accounting package for a given company.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support POST methods.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBankTransactionsRequest, CreateBankTransactionsResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BankTransactionTypeEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBankTransactionsRequest = {
  bankTransactions: {
    accountId: "cum",
    transactions: [
      {
        amount: 2165.5,
        balance: 5684.34,
        clearedOnDate: "2022-10-23T00:00:00Z",
        counterparty: "aspernatur",
        description: "perferendis",
        id: "5929396f-ea75-496e-b10f-aaa2352c5955",
        modifiedDate: "2022-10-23T00:00:00Z",
        reconciled: false,
        reference: "excepturi",
        sourceModifiedDate: "2022-10-23T00:00:00Z",
        transactionType: BankTransactionTypeEnum.Unknown,
      },
      {
        amount: 4386.01,
        balance: 6342.74,
        clearedOnDate: "2022-10-23T00:00:00Z",
        counterparty: "doloribus",
        description: "sapiente",
        id: "1a3a2fa9-4677-4392-91aa-52c3f5ad019d",
        modifiedDate: "2022-10-23T00:00:00Z",
        reconciled: false,
        reference: "laborum",
        sourceModifiedDate: "2022-10-23T00:00:00Z",
        transactionType: BankTransactionTypeEnum.Credit,
      },
    ],
  },
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 971945,
};

sdk.bankAccountTransactions.createBankTransactions(req).then((res: CreateBankTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```