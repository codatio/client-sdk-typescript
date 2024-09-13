# SupplierRef

Reference to the supplier the record relates to.

## Example Usage

```typescript
import { SupplierRef } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: SupplierRef = {
  id: "<id>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | The supplier's unique ID |
| `supplierName`           | *string*                 | :heavy_minus_sign:       | The supplier's name      |