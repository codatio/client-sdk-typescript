# SyncAsExpenses

## Example Usage

```typescript
import { SyncAsExpenses } from "@codat/bank-feeds/sdk/models/shared";

let value: SyncAsExpenses = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `enableSync`                                                                        | *boolean*                                                                           | :heavy_minus_sign:                                                                  | True if expense sync is enabled.                                                    |
| `supplier`                                                                          | [shared.ConfigurationSupplier](../../../sdk/models/shared/configurationsupplier.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `customer`                                                                          | [shared.ConfigurationCustomer](../../../sdk/models/shared/configurationcustomer.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `selectedBankAccountId`                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | The bank account ID being synced.                                                   |
| `bankAccountOptions`                                                                | [shared.BankAccountOption](../../../sdk/models/shared/bankaccountoption.md)[]       | :heavy_minus_sign:                                                                  | N/A                                                                                 |