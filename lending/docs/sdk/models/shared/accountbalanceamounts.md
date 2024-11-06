# AccountBalanceAmounts

Depending on the data provided by the underlying bank, not all balances are always available.

## Example Usage

```typescript
import { AccountBalanceAmounts } from "@codat/lending/sdk/models/shared";

let value: AccountBalanceAmounts = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `available`                                                                                                                                    | *Decimal*                                                                                                                                      | :heavy_minus_sign:                                                                                                                             | The balance available in the account, including any pending transactions. This doesn't include additional funds available from any overdrafts. |
| `current`                                                                                                                                      | *Decimal*                                                                                                                                      | :heavy_minus_sign:                                                                                                                             | The balance of the account only including cleared transactions.                                                                                |
| `limit`                                                                                                                                        | *Decimal*                                                                                                                                      | :heavy_minus_sign:                                                                                                                             | The minimum allowed balance for the account. For example, a $100.00 overdraft would show as a limit of `-100.00`.                              |