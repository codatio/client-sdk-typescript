# ListReconciledInvoicesRequest

## Example Usage

```typescript
import { ListReconciledInvoicesRequest } from "@codat/lending/sdk/models/operations";

let value: ListReconciledInvoicesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `companyId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | Unique identifier for a company.                                                                | 8a210b68-6988-11ed-a1eb-0242ac120002                                                            |
| `page`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | Page number. [Read more](https://docs.codat.io/using-the-api/paging).                           | 1                                                                                               |
| `pageSize`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging). | 100                                                                                             |
| `query`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).                  | id=e3334455-1aed-4e71-ab43-6bccf12092ee                                                         |