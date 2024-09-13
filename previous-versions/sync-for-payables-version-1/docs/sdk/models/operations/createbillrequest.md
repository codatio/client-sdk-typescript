# CreateBillRequest

## Example Usage

```typescript
import { CreateBillRequest } from "@codat/sync-for-payables-version-1/sdk/models/operations";
import { Decimal } from "@codat/sync-for-payables-version-1/sdk/types";

let value: CreateBillRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  bill: {
    modifiedDate: "2022-10-23T00:00:00Z",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    issueDate: "2022-10-23T00:00:00Z",
    dueDate: "2022-10-23T00:00:00Z",
    currency: "GBP",
    status: "Open",
    subTotal: new Decimal("9979.63"),
    taxAmount: new Decimal("30.99"),
    totalAmount: new Decimal("3621.89"),
    paymentAllocations: [
      {
        payment: {
          currency: "USD",
          paidOnDate: "2022-10-23T00:00:00Z",
        },
        allocation: {
          currency: "EUR",
          allocatedOnDate: "2022-10-23T00:00:00Z",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `companyId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a company.                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                  |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a connection.                                   | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                  |
| `timeoutInMinutes`                                                    | *number*                                                              | :heavy_minus_sign:                                                    | Time limit for the push operation to complete before it is timed out. |                                                                       |
| `bill`                                                                | [shared.Bill](../../../sdk/models/shared/bill.md)                     | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |