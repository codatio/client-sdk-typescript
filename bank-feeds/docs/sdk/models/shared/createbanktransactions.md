# CreateBankTransactions

## Example Usage

```typescript
import { CreateBankTransactions } from "@codat/bank-feeds/sdk/models/shared";
import { Decimal } from "@codat/bank-feeds/sdk/types";

let value: CreateBankTransactions = {
  accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  transactions: [
    {
      id: "716422529",
      date: "2023-08-22T10:21:00",
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

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                | Example                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                         | Unique identifier for a bank account.                                                                                                                                                                                      | **Example 1:** 13d946f0-c5d5-42bc-b092-97ece17923ab<br/>**Example 2:** 9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2<br/>**Example 3:** 7110701885<br/>**Example 4:** EILBDVJVNUAGVKRQ<br/>**Example 5:** Checking 0202 |
| `transactions`                                                                                                                                                                                                             | [shared.BankTransactions](../../../sdk/models/shared/banktransactions.md)[]                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |                                                                                                                                                                                                                            |