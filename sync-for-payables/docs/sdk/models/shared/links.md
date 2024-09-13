# Links

## Example Usage

```typescript
import { Links } from "@codat/sync-for-payables/sdk/models/shared";

let value: Links = {
  self: {
    href: "/companies",
  },
  current: {
    href: "/companies?page=1&pageSize=10",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `self`                                                | [shared.HalRef](../../../sdk/models/shared/halref.md) | :heavy_check_mark:                                    | N/A                                                   |
| `current`                                             | [shared.HalRef](../../../sdk/models/shared/halref.md) | :heavy_check_mark:                                    | N/A                                                   |
| `next`                                                | [shared.HalRef](../../../sdk/models/shared/halref.md) | :heavy_minus_sign:                                    | N/A                                                   |
| `previous`                                            | [shared.HalRef](../../../sdk/models/shared/halref.md) | :heavy_minus_sign:                                    | N/A                                                   |