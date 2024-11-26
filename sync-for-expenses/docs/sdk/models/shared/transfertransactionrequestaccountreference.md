# TransferTransactionRequestAccountReference

Reference of the account you are transferring money to.

## Example Usage

```typescript
import { TransferTransactionRequestAccountReference } from "@codat/sync-for-expenses/sdk/models/shared";

let value: TransferTransactionRequestAccountReference = {
  id: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `id`                              | *string*                          | :heavy_check_mark:                | 'id' from the Accounts data type. |