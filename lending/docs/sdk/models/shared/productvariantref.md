# ProductVariantRef

Reference that links the line item to the specific version of product that has been ordered.

## Example Usage

```typescript
import { ProductVariantRef } from "@codat/lending/sdk/models/shared";

let value: ProductVariantRef = {
  id: "13d946f0-c5d5-42bc-b092-97ece17923ab",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | The unique identifier of the product variant being referenced. | 13d946f0-c5d5-42bc-b092-97ece17923ab                           |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Name of the product variant being referenced.                  |                                                                |