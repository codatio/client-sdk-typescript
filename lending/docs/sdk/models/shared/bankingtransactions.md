# BankingTransactions

## Example Usage

```typescript
import { BankingTransactions } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: BankingTransactions = {
  results: [
    {
      modifiedDate: "2022-05-23T16:32:50Z",
      sourceModifiedDate: "2021-06-28T10:48:12",
      id: "0130b5bb-1419-40f6-8a27-7362d0381229",
      accountId: "1703194f-7805-4da8-bac0-2ba5da4a4216",
      description:
        "Payments for direct income ce149943-c157-43fc-aac7-42a716b655b6",
      amount: new Decimal("5062.39"),
      currency: "GBP",
      postedDate: "2021-07-06T00:00:00",
      authorizedDate: "2021-07-06T00:00:00",
      merchantName: "New Look",
      transactionCategoryRef: {
        id: "health-and-fitness-sports",
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
| `results`                                                                                         | [shared.BankingTransaction](../../../sdk/models/shared/bankingtransaction.md)[]                   | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |