# CommerceProducts

## Example Usage

```typescript
import { CommerceProducts } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: CommerceProducts = {
  results: [
    {
      id: "13d946f0-c5d5-42bc-b092-97ece17923ab",
      name: "Hard Drive",
      description: "Install of Windows 11 (Professional Edition)",
      categorization: "Hardware",
      variants: [
        {
          modifiedDate: "2022-10-23T00:00:00Z",
          sourceModifiedDate: "2022-10-23T00:00:00Z",
          id: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
          name: "Red Coat",
          sku: "Coat-Red-Lrg",
          barcode: "564158468416486458646886484",
          unitOfMeasure: "m",
          vatPercentage: new Decimal("20"),
          prices: [
            {
              currency: "EUR",
            },
          ],
          inventory: {
            locations: [
              {
                locationRef: {
                  id: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
                },
              },
            ],
          },
          createdDate: "2022-10-23T00:00:00Z",
        },
      ],
    },
  ],
  pageNumber: 1,
  pageSize: 10,
  totalResults: 1,
  links: {
    self: {
      href: "/companies/{id}/data/{dataType}",
    },
    current: {
      href: "/companies/{id}/data/{dataType}?page=1&pageSize=10",
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `results`                                                                                         | [shared.CommerceProduct](../../../sdk/models/shared/commerceproduct.md)[]                         | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |