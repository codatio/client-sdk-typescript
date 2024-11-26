# GetVisibleAccountsRequest

## Example Usage

```typescript
import { GetVisibleAccountsRequest } from "@codat/sync-for-commerce/sdk/models/operations";

let value: GetVisibleAccountsRequest = {
  clientId: "2f864c79-0999-4fa5-a6b0-aa325597f132",
  platformKey: "gbol",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `clientId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | Unique identifier for your client in Codat.                        |                                                                    |
| `platformKey`                                                      | *string*                                                           | :heavy_check_mark:                                                 | A unique 4-letter key to represent a platform in each integration. | gbol                                                               |