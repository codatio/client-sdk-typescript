# ~~AccountingCreateBankAccountTransactions~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { AccountingCreateBankAccountTransactions } from "@codat/lending/sdk/models/shared";

let value: AccountingCreateBankAccountTransactions = {
  accountId: "7110701885",
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