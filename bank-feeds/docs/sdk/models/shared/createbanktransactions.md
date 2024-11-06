# CreateBankTransactions

## Example Usage

```typescript
import { CreateBankTransactions } from "@codat/bank-feeds/sdk/models/shared";
import { Decimal } from "@codat/bank-feeds/sdk/types";

let value: CreateBankTransactions = {
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
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | Unique identifier for a bank account.                                       | 13d946f0-c5d5-42bc-b092-97ece17923ab                                        |
| `transactions`                                                              | [shared.BankTransactions](../../../sdk/models/shared/banktransactions.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |