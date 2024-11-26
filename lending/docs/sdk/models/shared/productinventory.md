# ProductInventory

Information about the total inventory as well as the locations inventory is in.

## Example Usage

```typescript
import { ProductInventory } from "@codat/lending/sdk/models/shared";

let value: ProductInventory = {
  locations: [
    {
      locationRef: {
        id: "13d946f0-c5d5-42bc-b092-97ece17923ab",
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