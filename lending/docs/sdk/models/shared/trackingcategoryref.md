# TrackingCategoryRef

References a category against which the item is tracked.

## Example Usage

```typescript
import { TrackingCategoryRef } from "@codat/lending/sdk/models/shared";

let value: TrackingCategoryRef = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | Unique identifier to the tracking category. |
| `name`                                      | *string*                                    | :heavy_minus_sign:                          | Name of tracking category.                  |