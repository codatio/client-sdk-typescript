# ApAccountRef

## Example Usage

```typescript
import { ApAccountRef } from "@codat/sync-for-expenses/sdk/models/shared";

let value: ApAccountRef = {
  id: "8000004C-1724173136",
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       | Example                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                              | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | Unique identifier for the Accounts Payable account associated with the transaction. The `apAccountRef` object is currently supported only for QuickBooks Desktop. | 8000004C-1724173136                                                                                                                                               |