# GetAccountingPaymentRequest

## Example Usage

```typescript
import { GetAccountingPaymentRequest } from "@codat/lending/sdk/models/operations";

let value: GetAccountingPaymentRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  paymentId: "EILBDVJVNUAGVKRQ",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `paymentId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a payment.     | 13d946f0-c5d5-42bc-b092-97ece17923ab |