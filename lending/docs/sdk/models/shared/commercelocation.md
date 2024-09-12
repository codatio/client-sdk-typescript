# CommerceLocation

The Location datatype holds information on the geographic location at which stocks of products may be held, as referenced in the Products data type.

A Location also holds information on geographic locations where orders were placed, as referenced in the Orders data type.

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-locations) for this data type.

## Example Usage

```typescript
import { CommerceLocation } from "@codat/lending/sdk/models/shared";

let value: CommerceLocation = {
  modifiedDate: "2020-08-12T14:37:37",
  sourceModifiedDate: "2020-08-12T14:37:37",
  id: "15",
  name: "London Warehouse",
  address: {
    type: "Inventory",
    line1: "Warner House",
    line2: "98 Theobald's Road",
    city: "London",
    region: "",
    country: "United Kingdom",
    postalCode: "WC1X 8WB",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `modifiedDate`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | 2022-10-23 00:00:00 +0000 UTC                                           |
| `sourceModifiedDate`                                                    | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | 2022-10-23 00:00:00 +0000 UTC                                           |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | A unique, persistent identifier for this record                         | 13d946f0-c5d5-42bc-b092-97ece17923ab                                    |
| `name`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | Name of this location                                                   |                                                                         |
| `address`                                                               | [shared.CommerceAddress](../../../sdk/models/shared/commerceaddress.md) | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |