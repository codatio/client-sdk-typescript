# PullOperations

## Example Usage

```typescript
import { PullOperations } from "@codat/platform/sdk/models/shared";

let value: PullOperations = {
  results: [
    {
      id: "97d60846-f07a-4d42-b5a0-0bdcc6ebf56b",
      companyId: "4645bd78-8988-45bc-ac9e-67ba5df6e4e5",
      connectionId: "51baa045-4836-4317-a42e-3542e991e581",
      dataType: "invoices",
      status: "Initial",
      statusDescription: "Paused until 2022-10-23T00:00:00.000Z",
      requested: "2022-11-14T11:18:37.2798351Z",
      completed: "2022-10-23T00:00:00Z",
      progress: 10,
      isCompleted: false,
      isErrored: false,
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
| `results`                                                                                         | [shared.PullOperation](../../../sdk/models/shared/pulloperation.md)[]                             | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |