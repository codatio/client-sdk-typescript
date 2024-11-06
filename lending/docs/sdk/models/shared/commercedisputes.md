# CommerceDisputes

## Example Usage

```typescript
import { CommerceDisputes } from "@codat/lending/sdk/models/shared";

let value: CommerceDisputes = {
  results: [
    {
      modifiedDate: "2022-02-02T11:02:45Z",
      sourceModifiedDate: "2021-03-22T14:39:55",
      id: "03e608e3-bd1c-454f-8c2b-fb0133e43b95",
      disputedTransactions: [
        {
          id: "e63ad857-7e12-4e64-9185-cdfd7c45d09d",
          type: "Order",
        },
      ],
      totalAmount: -47.66,
      currency: "GBP",
      status: "InquiryEvidenceRequired",
      reason: "Unhappy with product",
      dueDate: "2021-03-29T14:39:55",
      createdDate: "2021-03-22T14:39:55",
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
| `results`                                                                                         | [shared.CommerceDispute](../../../sdk/models/shared/commercedispute.md)[]                         | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |