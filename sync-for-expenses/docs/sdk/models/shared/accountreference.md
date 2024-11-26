# AccountReference

Reference of the account you are transferring money from.

## Example Usage

```typescript
import { AccountReference } from "@codat/sync-for-expenses/sdk/models/shared";

let value: AccountReference = {
  id: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `id`                              | *string*                          | :heavy_check_mark:                | 'id' from the Accounts data type. |