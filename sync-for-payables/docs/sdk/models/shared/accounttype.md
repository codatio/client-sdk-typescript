# AccountType

The type of transactions and balances on the account.  
For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.  
For Debit accounts, positive balances are assets, and positive transactions **increase** assets.

## Example Usage

```typescript
import { AccountType } from "@codat/sync-for-payables/sdk/models/shared";

let value: AccountType = "Unknown";
```

## Values

```typescript
"Unknown" | "Credit" | "Debit"
```