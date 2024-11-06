# PushOperations

## Example Usage

```typescript
import { PushOperations } from "@codat/lending/sdk/models/shared";

let value: PushOperations = {
  results: [
    {
      changes: [
        {
          recordRef: {
            dataType: "invoices",
          },
        },
      ],
      dataType: "invoices",
      companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
      pushOperationKey: "5a4fb5c1-63a1-4648-b5b0-a34cf5d1ac26",
      dataConnectionKey: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
      requestedOnUtc: "2022-10-23T00:00:00Z",
      completedOnUtc: "2022-10-23T00:00:00Z",
      status: "Success",
      statusCode: 307,
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
| `results`                                                                                         | [shared.PushOperation](../../../sdk/models/shared/pushoperation.md)[]                             | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |