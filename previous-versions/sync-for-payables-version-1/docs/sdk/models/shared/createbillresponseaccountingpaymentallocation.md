# CreateBillResponseAccountingPaymentAllocation

## Example Usage

```typescript
import { CreateBillResponseAccountingPaymentAllocation } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: CreateBillResponseAccountingPaymentAllocation = {
  payment: {
    currency: "GBP",
    paidOnDate: "2022-10-23T00:00:00Z",
  },
  allocation: {
    currency: "GBP",
    allocatedOnDate: "2022-10-23T00:00:00Z",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `payment`                                                                                         | [shared.PaymentAllocationPayment](../../../sdk/models/shared/paymentallocationpayment.md)         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `allocation`                                                                                      | [shared.CreateBillResponseAllocation](../../../sdk/models/shared/createbillresponseallocation.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |