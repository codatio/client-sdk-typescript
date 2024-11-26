# UpdateVisibleAccountsSyncFlowRequest

## Example Usage

```typescript
import { UpdateVisibleAccountsSyncFlowRequest } from "@codat/sync-for-commerce/sdk/models/operations";

let value: UpdateVisibleAccountsSyncFlowRequest = {
  platformKey: "gbol",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `platformKey`                                                           | *string*                                                                | :heavy_check_mark:                                                      | A unique 4-letter key to represent a platform in each integration.      | gbol                                                                    |
| `visibleAccounts`                                                       | [shared.VisibleAccounts](../../../sdk/models/shared/visibleaccounts.md) | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |