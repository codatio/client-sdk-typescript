# ~~TrackingCategoryRef~~

References a category against which the item is tracked.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { TrackingCategoryRef } from "@codat/lending/sdk/models/shared";

let value: TrackingCategoryRef = {
  id: "<id>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | Unique identifier to the tracking category. |
| `name`                                      | *string*                                    | :heavy_minus_sign:                          | Name of tracking category.                  |