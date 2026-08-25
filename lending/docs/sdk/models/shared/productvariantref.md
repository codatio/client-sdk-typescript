# ProductVariantRef

Reference that links the line item to the specific version of product that has been ordered.

## Example Usage

```typescript
import { ProductVariantRef } from "@codat/lending/sdk/models/shared";

let value: ProductVariantRef = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | The unique identifier of the product variant being referenced. |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Name of the product variant being referenced.                  |