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
    currency: "EUR",
    lineItems: [
      {
        unitAmount: new Decimal("7782.76"),
        quantity: new Decimal("8483.45"),
        accountRef: {},
        tracking: {
          recordRefs: [
            {
              dataType: "trackingCategories",
            },
          ],
          invoiceTo: {
            dataType: "invoice",
          },
        },
      },
    ],
    paymentAllocations: [
      {
        payment: {
          accountRef: {},
          currency: "GBP",
          paidOnDate: "2022-10-23T00:00:00Z",
        },
        allocation: {
          currency: "GBP",
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      },
    ],
    subTotal: new Decimal("680.93"),
    taxAmount: new Decimal("9438.51"),
    totalAmount: new Decimal("9649.25"),
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