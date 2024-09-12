# CommerceTransactions

## Example Usage

```typescript
import { CommerceTransactions } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: CommerceTransactions = {
  results: [
    {
      createdDate: "2022-10-23T00:00:00Z",
      sourceCreatedDate: "2022-10-23T00:00:00Z",
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "13d946f0-c5d5-42bc-b092-97ece17923ab",
      totalAmount: new Decimal("194.12"),
      currency: "EUR",
      subType: "Invoice payment",
      transactionSourceRef: {
        id: "7110701885",
        type: "Payment",
      },
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
| `results`                                                                                         | [shared.CommerceTransaction](../../../sdk/models/shared/commercetransaction.md)[]                 | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |