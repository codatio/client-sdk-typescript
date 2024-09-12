# ProductInventoryLocation

## Example Usage

```typescript
import { ProductInventoryLocation } from "@codat/lending/sdk/models/shared";

let value: ProductInventoryLocation = {
  locationRef: {
    id: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `quantity`                                                       | *Decimal*                                                        | :heavy_minus_sign:                                               | The quantity of stock remaining at location.                     |
| `locationRef`                                                    | [shared.LocationRef](../../../sdk/models/shared/locationref.md)  | :heavy_minus_sign:                                               | Reference to the geographic location where the order was placed. |