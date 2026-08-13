# LocationRef

Reference to the geographic location where the order was placed.

## Example Usage

```typescript
import { LocationRef } from "@codat/lending/sdk/models/shared";

let value: LocationRef = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | The unique identitifer of the location being referenced. |
| `name`                                                   | *string*                                                 | :heavy_minus_sign:                                       | Name of the location being referenced.                   |