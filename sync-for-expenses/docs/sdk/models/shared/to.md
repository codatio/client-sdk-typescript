# To

## Example Usage

```typescript
import { To } from "@codat/sync-for-expenses/sdk/models/shared";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

let value: To = {
  accountRef: {
    id: "<id>",
  },
  amount: new Decimal("9255.97"),
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `accountRef`                                                                                                                  | [shared.TransferTransactionRequestAccountReference](../../../sdk/models/shared/transfertransactionrequestaccountreference.md) | :heavy_check_mark:                                                                                                            | Reference of the account you are transferring money to.                                                                       |
| `amount`                                                                                                                      | *Decimal*                                                                                                                     | :heavy_check_mark:                                                                                                            | Amount that has been transferred to the account in the native currency of the account.                                        |