# CreateDirectCostRequest

## Example Usage

```typescript
import { CreateDirectCostRequest } from "@codat/lending/sdk/models/operations";
import { Decimal } from "@codat/lending/sdk/types";

let value: CreateDirectCostRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostPrototype: {
    issueDate: "2022-10-23T00:00:00Z",
    currency: "GBP",
    lineItems: [
      {
        unitAmount: new Decimal("4610.07"),
        quantity: new Decimal("2277.59"),
        accountRef: {},
        tracking: {
          recordRefs: [
            {
              dataType: "trackingCategories",
            },
          ],
          invoiceTo: {
            dataType: "transfer",
          },
        },
      },
    ],
    paymentAllocations: [
      {
        payment: {
          accountRef: {},
          currency: "USD",
          paidOnDate: "2022-10-23T00:00:00Z",
        },
        allocation: {
          currency: "USD",
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      },
    ],
    subTotal: new Decimal("8869.61"),
    taxAmount: new Decimal("8801.07"),
    totalAmount: new Decimal("6188.26"),
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `companyId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | Unique identifier for a company.                                                | 8a210b68-6988-11ed-a1eb-0242ac120002                                            |
| `connectionId`                                                                  | *string*                                                                        | :heavy_check_mark:                                                              | Unique identifier for a connection.                                             | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                            |
| `timeoutInMinutes`                                                              | *number*                                                                        | :heavy_minus_sign:                                                              | Time limit for the push operation to complete before it is timed out.           |                                                                                 |
| `allowSyncOnPushComplete`                                                       | *boolean*                                                                       | :heavy_minus_sign:                                                              | Allow a sync upon push completion.                                              |                                                                                 |
| `directCostPrototype`                                                           | [shared.DirectCostPrototype](../../../sdk/models/shared/directcostprototype.md) | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |