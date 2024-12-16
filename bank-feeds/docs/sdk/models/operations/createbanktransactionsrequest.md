# CreateBankTransactionsRequest

## Example Usage

```typescript
import { CreateBankTransactionsRequest } from "@codat/bank-feeds/sdk/models/operations";
import { Decimal } from "@codat/bank-feeds/sdk/types";

let value: CreateBankTransactionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  accountId: "7110701885",
  createBankTransactions: {
    accountId: "Checking 0202",
    transactions: [
      {
        id: "716422529",
        date: "2022-10-23T00:00:00Z",
        description:
          "Debit for Payment Id sdp-1-57379a43-c4b8-49f5-bd7c-699189ee7a60",
        counterparty: "ACME INC",
        reference: "reference for transaction",
        reconciled: false,
        amount: new Decimal("999.99"),
        balance: new Decimal("-999.99"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `companyId`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | Unique identifier for a company.                                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                                  |
| `connectionId`                                                                        | *string*                                                                              | :heavy_check_mark:                                                                    | Unique identifier for a connection.                                                   | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                  |
| `accountId`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | Unique identifier for an account.                                                     | 13d946f0-c5d5-42bc-b092-97ece17923ab                                                  |
| `timeoutInMinutes`                                                                    | *number*                                                                              | :heavy_minus_sign:                                                                    | Time limit for the push operation to complete before it is timed out.                 |                                                                                       |
| `allowSyncOnPushComplete`                                                             | *boolean*                                                                             | :heavy_minus_sign:                                                                    | Allow a sync upon push completion.                                                    |                                                                                       |
| `createBankTransactions`                                                              | [shared.CreateBankTransactions](../../../sdk/models/shared/createbanktransactions.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |