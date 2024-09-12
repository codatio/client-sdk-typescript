# AccountingPaymentAllocation

## Example Usage

```typescript
import { AccountingPaymentAllocation } from "@codat/lending/sdk/models/shared";

let value: AccountingPaymentAllocation = {
  payment: {
    accountRef: {},
    currency: "EUR",
    paidOnDate: "2022-10-23T00:00:00Z",
  },
  allocation: {
    currency: "GBP",
    allocatedOnDate: "2022-10-23T00:00:00Z",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `payment`                                                                                 | [shared.PaymentAllocationPayment](../../../sdk/models/shared/paymentallocationpayment.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `allocation`                                                                              | [shared.Allocation](../../../sdk/models/shared/allocation.md)                             | :heavy_check_mark:                                                                        | N/A                                                                                       |