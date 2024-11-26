# CreateTransferTransactionRequest

## Example Usage

```typescript
import { CreateTransferTransactionRequest } from "@codat/sync-for-expenses/sdk/models/operations";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

let value: CreateTransferTransactionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
  transferTransactionRequest: {
    description: "Transfer from bank account Y to bank account Z",
    date: "2022-10-23T00:00:00Z",
    from: {
      accountRef: {
        id: "<id>",
      },
      amount: new Decimal("5173.09"),
    },
    to: {
      accountRef: {
        id: "<id>",
      },
      amount: new Decimal("4240.89"),
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `companyId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for a company.                                                              | 8a210b68-6988-11ed-a1eb-0242ac120002                                                          |
| `transactionId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for your SMB's transaction.                                             | 336694d8-2dca-4cb5-a28d-3ccb83e55eee                                                          |
| `transferTransactionRequest`                                                                  | [shared.TransferTransactionRequest](../../../sdk/models/shared/transfertransactionrequest.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |