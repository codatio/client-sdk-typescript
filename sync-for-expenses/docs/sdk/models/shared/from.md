# From

## Example Usage

```typescript
import { From } from "@codat/sync-for-expenses/sdk/models/shared";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

let value: From = {
  accountRef: {
    id: "<id>",
  },
  amount: new Decimal("5680.45"),
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `accountRef`                                                                             | [shared.AccountReference](../../../sdk/models/shared/accountreference.md)                | :heavy_check_mark:                                                                       | Reference of the account you are transferring money from.                                |
| `amount`                                                                                 | *Decimal*                                                                                | :heavy_check_mark:                                                                       | Amount that has been transferred from the account in the native currency of the account. |