# ListDataIntegrityDetailsRequest

## Example Usage

```typescript
import { ListDataIntegrityDetailsRequest } from "@codat/lending/sdk/models/operations";

let value: ListDataIntegrityDetailsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: "banking-accounts",
  query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
  orderBy: "-modifiedDate",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `companyId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | Unique identifier for a company.                                                                | 8a210b68-6988-11ed-a1eb-0242ac120002                                                            |
| `dataType`                                                                                      | [shared.DataIntegrityDataType](../../../sdk/models/shared/dataintegritydatatype.md)             | :heavy_check_mark:                                                                              | A key for a Codat data type.                                                                    | banking-accounts                                                                                |
| `page`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | Page number. [Read more](https://docs.codat.io/using-the-api/paging).                           | 1                                                                                               |
| `pageSize`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging). | 100                                                                                             |
| `query`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).                  | id=e3334455-1aed-4e71-ab43-6bccf12092ee                                                         |
| `orderBy`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).   | -modifiedDate                                                                                   |