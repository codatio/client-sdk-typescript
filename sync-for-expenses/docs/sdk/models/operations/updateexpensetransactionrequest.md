# UpdateExpenseTransactionRequest

## Example Usage

```typescript
import { UpdateExpenseTransactionRequest } from "@codat/sync-for-expenses/sdk/models/operations";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

let value: UpdateExpenseTransactionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
  updateExpenseRequest: {
    type: "Payment",
    issueDate: "2022-06-28T00:00:00.000Z",
    currency: "GBP",
    contactRef: {
      id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
      type: "Supplier",
    },
    bankAccountRef: {
      id: "787dfb37-5707-4dc0-8a86-8d74e4cc78ea",
    },
    merchantName: "Amazon UK",
    lines: [
      {
        netAmount: new Decimal("100"),
        taxAmount: new Decimal("20"),
        taxRateRef: {
          id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
        },
        accountRef: {
          id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
        },
        itemRef: {
          id: "80000002-1675158984",
        },
        trackingRefs: [
          {
            id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
            dataType: "trackingCategories",
          },
        ],
        invoiceTo: {
          id: "80000002-1674552702",
          type: "customer",
        },
      },
    ],
    notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `companyId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a company.                                                  | 8a210b68-6988-11ed-a1eb-0242ac120002                                              |
| `transactionId`                                                                   | *string*                                                                          | :heavy_check_mark:                                                                | The unique identifier for your SMB's transaction.                                 | 336694d8-2dca-4cb5-a28d-3ccb83e55eee                                              |
| `updateExpenseRequest`                                                            | [shared.UpdateExpenseRequest](../../../sdk/models/shared/updateexpenserequest.md) | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |