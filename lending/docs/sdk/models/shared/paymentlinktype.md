# PaymentLinkType

Types of payment line links, either:  
`Unknown`  
`Unlinked` - Not used  
`Invoice` - ID refers to the invoice  
`CreditNote` - ID refers to the credit note  
`Refund` - ID refers to the sibling payment  
`Payment` - ID refers to the sibling payment  
`PaymentOnAccount` - ID refers to the customer  
`Other` - ID refers to the customer  
`Manual Journal`  
`Discount` - ID refers to the payment

## Example Usage

```typescript
import { PaymentLinkType } from "@codat/lending/sdk/models/shared";

let value: PaymentLinkType = "Unlinked";
```

## Values

```typescript
"Unknown" | "Unlinked" | "Invoice" | "CreditNote" | "Other" | "Refund" | "Payment" | "PaymentOnAccount" | "ManualJournal" | "Discount"
```