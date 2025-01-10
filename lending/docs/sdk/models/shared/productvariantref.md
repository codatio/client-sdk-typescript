# ProductVariantRef

Reference that links the line item to the specific version of product that has been ordered.

## Example Usage

```typescript
import { ProductVariantRef } from "@codat/lending/sdk/models/shared";

let value: ProductVariantRef = {
  id: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | The unique identifier of the product variant being referenced. | 13d946f0-c5d5-42bc-b092-97ece17923ab                           |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Name of the product variant being referenced.                  |                                                                |