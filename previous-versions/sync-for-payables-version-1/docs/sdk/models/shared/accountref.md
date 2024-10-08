# AccountRef

Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.

## Example Usage

```typescript
import { AccountRef } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: AccountRef = {};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `id`                                | *string*                            | :heavy_minus_sign:                  | 'id' from the Accounts data type.   |
| `name`                              | *string*                            | :heavy_minus_sign:                  | 'name' from the Accounts data type. |