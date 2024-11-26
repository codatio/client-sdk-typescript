# TransactionSourceRef

## Example Usage

```typescript
import { TransactionSourceRef } from "@codat/lending/sdk/models/shared";

let value: TransactionSourceRef = {
  id: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
  type: "Payment",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | The unique identitifer of the record being referenced                               | 13d946f0-c5d5-42bc-b092-97ece17923ab                                                |
| `type`                                                                              | [shared.TransactionSourceType](../../../sdk/models/shared/transactionsourcetype.md) | :heavy_check_mark:                                                                  | The type of source the transaction arose.                                           |                                                                                     |