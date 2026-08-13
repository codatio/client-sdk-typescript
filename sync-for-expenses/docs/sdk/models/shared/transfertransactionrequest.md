# TransferTransactionRequest

## Example Usage

```typescript
import { TransferTransactionRequest } from "@codat/sync-for-expenses/sdk/models/shared";

let value: TransferTransactionRequest = {
  description: "Transfer from bank account Y to bank account Z",
  date: "string",
  from: {
    accountRef: {
      id: "string",
    },
    amount: 0,
  },
  to: {
    accountRef: {
      id: "string",
    },
    amount: 0,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | Any private, company notes about the transaction.                        | Transfer from bank account Y to bank account Z                           |
| `date`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Date of the transfer transaction as recorded in the accounting software. |                                                                          |
| `from`                                                                   | [shared.From](../../../sdk/models/shared/from.md)                        | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `to`                                                                     | [shared.To](../../../sdk/models/shared/to.md)                            | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |