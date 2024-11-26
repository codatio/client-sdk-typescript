# AccountMappingInfo

## Example Usage

```typescript
import { AccountMappingInfo } from "@codat/sync-for-expenses/sdk/models/shared";

let value: AccountMappingInfo = {
  id: "127f3b99-8dc2-4b7e-854c-91ef9bd2757b",
  nominalCode: "300",
  name: "Purchases",
  currency: "GBP",
  accountType: "Expense",
  fullyQualifiedCategory: "Expense.DirectCosts",
  validTransactionTypes: [
    "Payment",
  ],
  validFor: [
    "expense-transactions.Payment",
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Unique identifier of account.                                                                       | 127f3b99-8dc2-4b7e-854c-91ef9bd2757b                                                                |
| `nominalCode`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Code used to identify each nominal account in the accounting software.                              | 300                                                                                                 |
| `name`                                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Name of the account as it appears in the company's accounting software.                             | Purchases                                                                                           |
| `currency`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Currency of the account.                                                                            | GBP                                                                                                 |
| `accountType`                                                                                       | [shared.AccountMappingInfoAccountType](../../../sdk/models/shared/accountmappinginfoaccounttype.md) | :heavy_minus_sign:                                                                                  | Type of the account.                                                                                | Expense                                                                                             |
| `fullyQualifiedCategory`                                                                            | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Full account type and category of the account                                                       | Expense.DirectCosts                                                                                 |
| `isBankAccount`                                                                                     | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Confirms whether the account is a bank account or not.                                              |                                                                                                     |
| `validTransactionTypes`                                                                             | [shared.ValidTransactionTypes](../../../sdk/models/shared/validtransactiontypes.md)[]               | :heavy_minus_sign:                                                                                  | Supported transaction types for the account.                                                        |                                                                                                     |
| `validFor`                                                                                          | [shared.ValidFor](../../../sdk/models/shared/validfor.md)[]                                         | :heavy_minus_sign:                                                                                  | Supported endpoints for the account.                                                                |                                                                                                     |