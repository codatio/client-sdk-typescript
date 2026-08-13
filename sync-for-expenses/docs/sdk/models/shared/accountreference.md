# AccountReference

Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.

## Example Usage

```typescript
import { AccountReference } from "@codat/sync-for-expenses/sdk/models/shared";

let value: AccountReference = {
  id: "string",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `id`                              | *string*                          | :heavy_check_mark:                | 'id' from the Accounts data type. |