# LocationRef

Reference to the geographic location where the order was placed.

## Example Usage

```typescript
import { LocationRef } from "@codat/lending/sdk/models/shared";

let value: LocationRef = {
  id: "7110701885",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | The unique identitifer of the location being referenced. | 13d946f0-c5d5-42bc-b092-97ece17923ab                     |
| `name`                                                   | *string*                                                 | :heavy_minus_sign:                                       | Name of the location being referenced.                   |                                                          |