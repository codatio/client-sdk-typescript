# TransactionCode

Code to identify the underlying transaction.

## Example Usage

```typescript
import { TransactionCode } from "@codat/lending/sdk/models/shared";

let value: TransactionCode = "Fee";
```

## Values

```typescript
"Unknown" | "Fee" | "Payment" | "Cash" | "Transfer" | "Interest" | "Cashback" | "Cheque" | "DirectDebit" | "Purchase" | "StandingOrder" | "Adjustment" | "Credit" | "Other" | "NotSupported"
```