# ListIntegrationsRequest

## Example Usage

```typescript
import { ListIntegrationsRequest } from "@codat/platform/sdk/models/operations";

let value: ListIntegrationsRequest = {
  page: 1,
  pageSize: 100,
  query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
  orderBy: "-modifiedDate",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `page`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | Page number. [Read more](https://docs.codat.io/using-the-api/paging).                           | 1                                                                                               |
| `pageSize`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging). | 100                                                                                             |
| `query`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).                  | id=e3334455-1aed-4e71-ab43-6bccf12092ee                                                         |
| `orderBy`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).   | -modifiedDate                                                                                   |