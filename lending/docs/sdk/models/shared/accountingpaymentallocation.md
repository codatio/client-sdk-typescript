# AccountingPaymentAllocation

## Example Usage

```typescript
import { AccountingPaymentAllocation } from "@codat/lending/sdk/models/shared";

let value: AccountingPaymentAllocation = {
  payment: {
    id: "string",
    note: "string",
    reference: "string",
    accountRef: {
      id: "string",
      name: "string",
    },
    currency: "GBP",
    currencyRate: 0,
    paidOnDate: "2022-10-23T00:00:00Z",
    totalAmount: 0,
  },
  allocation: {
    currency: "GBP",
    currencyRate: 0,
    allocatedOnDate: "2022-10-23T00:00:00Z",
    totalAmount: 0,
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `payment`                                                                                 | [shared.PaymentAllocationPayment](../../../sdk/models/shared/paymentallocationpayment.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `allocation`                                                                              | [shared.Allocation](../../../sdk/models/shared/allocation.md)                             | :heavy_check_mark:                                                                        | N/A                                                                                       |