# ProductInventoryLocation

## Example Usage

```typescript
import { ProductInventoryLocation } from "@codat/lending/sdk/models/shared";

let value: ProductInventoryLocation = {
  locationRef: {
    id: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `quantity`                                                       | *Decimal*                                                        | :heavy_minus_sign:                                               | The quantity of stock remaining at location.                     |
| `locationRef`                                                    | [shared.LocationRef](../../../sdk/models/shared/locationref.md)  | :heavy_minus_sign:                                               | Reference to the geographic location where the order was placed. |