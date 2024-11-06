# CommerceProductCategory

Product categories are used to classify a group of products together, either by type (e.g. "Furniture"), or sometimes by tax profile.

## Example Usage

```typescript
import { CommerceProductCategory } from "@codat/lending/sdk/models/shared";

let value: CommerceProductCategory = {
  modifiedDate: "2022-10-23T00:00:00Z",
  sourceModifiedDate: "2022-10-23T00:00:00Z",
  id: "\"102\"",
  name: "Entertainment",
  ancestorRefs: [
    {
      id: "13d946f0-c5d5-42bc-b092-97ece17923ab",
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `modifiedDate`                                                                                           | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | 2022-10-23 00:00:00 +0000 UTC                                                                            |
| `sourceModifiedDate`                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | 2022-10-23 00:00:00 +0000 UTC                                                                            |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The unique identifier of the product category                                                            | "102"                                                                                                    |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The name of the product category                                                                         | Entertainment                                                                                            |
| `ancestorRefs`                                                                                           | [shared.CommerceRecordRef](../../../sdk/models/shared/commercerecordref.md)[]                            | :heavy_minus_sign:                                                                                       | A collection of parent product categories implicitly ordered with the immediate parent last in the list. |                                                                                                          |
| `hasChildren`                                                                                            | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | A boolean indicating whether there are other product categories beneath this one in the hierarchy.       |                                                                                                          |