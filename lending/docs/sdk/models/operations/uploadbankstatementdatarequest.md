# UploadBankStatementDataRequest

## Example Usage

```typescript
import { UploadBankStatementDataRequest } from "@codat/lending/sdk/models/operations";

let value: UploadBankStatementDataRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  datasetId: "c2fd90be-851c-4e1c-90f9-84e4dfc81773",
  requestBody: {
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
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                             | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Unique identifier for a company.                                                                                                        | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                                                    |
| `connectionId`                                                                                                                          | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Unique identifier for a connection.                                                                                                     | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                                                                    |
| `datasetId`                                                                                                                             | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Unique identifier for the dataset that completed its sync.                                                                              |                                                                                                                                         |
| `path`                                                                                                                                  | [shared.Path](../../../sdk/models/shared/path.md)                                                                                       | :heavy_minus_sign:                                                                                                                      | The endpoint path of the third-party banking service that the request body originates from. Only required if the source is not `codat`. |                                                                                                                                         |
| `requestBody`                                                                                                                           | *operations.UploadBankStatementDataRequestBody*                                                                                         | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |                                                                                                                                         |