# TrackingCategoryMappingInfo

## Example Usage

```typescript
import { TrackingCategoryMappingInfo } from "@codat/sync-for-expenses/sdk/models/shared";

let value: TrackingCategoryMappingInfo = {
  id: "DEPARTMENT_2",
  name: "New York",
  parentId: "DEPARTMENTS",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_minus_sign:                                                      | Unique identifier of the tracking category.                             | DEPARTMENT_2                                                            |
| `name`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | Name of the tracking category as it appears in the accounting software. | New York                                                                |
| `hasChildren`                                                           | *boolean*                                                               | :heavy_minus_sign:                                                      | Boolean of whether the tracking category has child categories.          |                                                                         |
| `parentId`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | ID of the parent tracking category                                      | DEPARTMENTS                                                             |