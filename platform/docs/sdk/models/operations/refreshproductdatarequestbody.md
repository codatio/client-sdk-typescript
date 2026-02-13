# RefreshProductDataRequestBody

Optionally specify one or more data types to refresh for the given custom product. If omitted, the product's scheduled refresh is triggered as usual. When provided, each data type must be valid for the specified product.

## Example Usage

```typescript
import { RefreshProductDataRequestBody } from "@codat/platform/sdk/models/operations";

let value: RefreshProductDataRequestBody = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `dataTypes`                                        | *string*[]                                         | :heavy_minus_sign:                                 | One or more data types to refresh for the product. |