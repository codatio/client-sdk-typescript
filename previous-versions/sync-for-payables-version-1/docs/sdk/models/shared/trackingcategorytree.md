# TrackingCategoryTree

The full structure of a specific tracking category including any child or subcategories.

## Example Usage

```typescript
import { TrackingCategoryTree } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: TrackingCategoryTree = {
  modifiedDate: "2022-10-23T00:00:00Z",
  sourceModifiedDate: "2022-10-23T00:00:00Z",
  subCategories: [],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `modifiedDate`                                                                      | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | 2022-10-23 00:00:00 +0000 UTC                                                       |
| `sourceModifiedDate`                                                                | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 | 2022-10-23 00:00:00 +0000 UTC                                                       |
| `id`                                                                                | *string*                                                                            | :heavy_minus_sign:                                                                  | The identifier for the item, unique per tracking category                           |                                                                                     |
| `name`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | The name of the tracking category                                                   |                                                                                     |
| `status`                                                                            | [shared.DefinitionStatus](../../../sdk/models/shared/definitionstatus.md)           | :heavy_minus_sign:                                                                  | Current state of the tracking category.                                             |                                                                                     |
| `parentId`                                                                          | *string*                                                                            | :heavy_minus_sign:                                                                  | The identifier for this item's immediate parent                                     |                                                                                     |
| `hasChildren`                                                                       | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Boolean value indicating whether this category has SubCategories                    |                                                                                     |
| `subCategories`                                                                     | [shared.TrackingCategoryTree](../../../sdk/models/shared/trackingcategorytree.md)[] | :heavy_minus_sign:                                                                  | A collection of subcategories that are nested beneath this category.                |                                                                                     |
| `metadata`                                                                          | [shared.Metadata](../../../sdk/models/shared/metadata.md)                           | :heavy_minus_sign:                                                                  | N/A                                                                                 |                                                                                     |