# ProductInventory

Information about the total inventory as well as the locations inventory is in.

## Example Usage

```typescript
import { ProductInventory } from "@codat/lending/sdk/models/shared";

let value: ProductInventory = {
  locations: [
    {
      locationRef: {
        id: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
      },
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `totalQuantity`                                                                             | *Decimal*                                                                                   | :heavy_minus_sign:                                                                          | The total quantity of stock remaining across locations.                                     |
| `locations`                                                                                 | [shared.ProductInventoryLocation](../../../sdk/models/shared/productinventorylocation.md)[] | :heavy_minus_sign:                                                                          | N/A                                                                                         |