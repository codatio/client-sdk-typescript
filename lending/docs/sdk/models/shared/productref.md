# ProductRef

Reference that links the line item to the correct product details.

## Example Usage

```typescript
import { ProductRef } from "@codat/lending/sdk/models/shared";

let value: ProductRef = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | The unique identifier of the product being referenced. |
| `name`                                                 | *string*                                               | :heavy_minus_sign:                                     | Name of the product being referenced.                  |