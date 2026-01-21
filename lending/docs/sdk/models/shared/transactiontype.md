# TransactionType

The type of the platform transaction:  
- `Unknown`  
- `FailedPayout` — Failed transfer of funds from the seller's merchant account to their bank account.  
- `Payment` — Credit and debit card payments.  
- `PaymentFee` — Payment provider's fee on each card payment.  
- `PaymentFeeRefund` — Payment provider's fee that has been refunded to the seller.  
- `Payout` — Transfer of funds from the seller's merchant account to their bank account.  
- `Refund` — Refunds to a customer's credit or debit card.  
- `Transfer` — Secure transfer of funds to the seller's bank account.  

## Example Usage

```typescript
import { TransactionType } from "@codat/lending/sdk/models/shared";

let value: TransactionType = "FailedPayout";
```

## Values

```typescript
"Payment" | "Refund" | "Payout" | "FailedPayout" | "Transfer" | "PaymentFee" | "PaymentFeeRefund" | "Unknown"
```