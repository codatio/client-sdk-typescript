# AccountingBankAccountType

The type of transactions and balances on the account.  
For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.  
For Debit accounts, positive balances are assets, and positive transactions **increase** assets.

## Example Usage

```typescript
import { AccountingBankAccountType } from "@codat/lending/sdk/models/shared";

let value: AccountingBankAccountType = "Credit";
```

## Values

```typescript
"Unknown" | "Credit" | "Debit"
```