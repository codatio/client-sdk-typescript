# AccountingAccountTransactions

## Example Usage

```typescript
import { AccountingAccountTransactions } from "@codat/lending/sdk/models/shared";

let value: AccountingAccountTransactions = {
  results: [
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      date: "2022-10-23T00:00:00Z",
      currency: "GBP",
      lines: [
        {
          recordRef: {
            dataType: "transfers",
          },
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

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `results`                                                                                           | [shared.AccountingAccountTransaction](../../../sdk/models/shared/accountingaccounttransaction.md)[] | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `pageNumber`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | Current page number.                                                                                |                                                                                                     |
| `pageSize`                                                                                          | *number*                                                                                            | :heavy_check_mark:                                                                                  | Number of items to return in results array.                                                         |                                                                                                     |
| `totalResults`                                                                                      | *number*                                                                                            | :heavy_check_mark:                                                                                  | Total number of items.                                                                              |                                                                                                     |
| `links`                                                                                             | [shared.Links](../../../sdk/models/shared/links.md)                                                 | :heavy_check_mark:                                                                                  | N/A                                                                                                 | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |