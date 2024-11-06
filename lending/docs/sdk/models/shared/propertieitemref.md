# PropertieItemRef

Reference to the item the line is linked to.

## Example Usage

```typescript
import { PropertieItemRef } from "@codat/lending/sdk/models/shared";

let value: PropertieItemRef = {
  id: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for the item in the accounting software. |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | Name of the item in the accounting software.               |