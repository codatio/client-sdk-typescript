# AccountingCreateBankTransactions

## Example Usage

```typescript
import { AccountingCreateBankTransactions } from "@codat/lending/sdk/models/shared";

let value: AccountingCreateBankTransactions = {
  accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  transactions: [
    {
      date: "2022-10-23T00:00:00Z",
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Unique identifier for a bank account.                                                               | 13d946f0-c5d5-42bc-b092-97ece17923ab                                                                |
| `transactions`                                                                                      | [shared.CreateBankAccountTransaction](../../../sdk/models/shared/createbankaccounttransaction.md)[] | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |