# TransferTransactionRequest

## Example Usage

```typescript
import { TransferTransactionRequest } from "@codat/sync-for-expenses/sdk/models/shared";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

let value: TransferTransactionRequest = {
  description: "Transfer from bank account Y to bank account Z",
  date: "2022-10-23T00:00:00Z",
  from: {
    accountRef: {
      id: "<id>",
    },
    amount: new Decimal("871.29"),
  },
  to: {
    accountRef: {
      id: "<id>",
    },
    amount: new Decimal("202.18"),
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `description`                                     | *string*                                          | :heavy_minus_sign:                                | Any private, company notes about the transaction. | Transfer from bank account Y to bank account Z    |
| `date`                                            | *string*                                          | :heavy_check_mark:                                | N/A                                               | 2022-10-23 00:00:00 +0000 UTC                     |
| `from`                                            | [shared.From](../../../sdk/models/shared/from.md) | :heavy_check_mark:                                | N/A                                               |                                                   |
| `to`                                              | [shared.To](../../../sdk/models/shared/to.md)     | :heavy_check_mark:                                | N/A                                               |                                                   |