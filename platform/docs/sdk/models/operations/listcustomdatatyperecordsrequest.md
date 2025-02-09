# ListCustomDataTypeRecordsRequest

## Example Usage

```typescript
import { ListCustomDataTypeRecordsRequest } from "@codat/platform/sdk/models/operations";

let value: ListCustomDataTypeRecordsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customDataIdentifier: "DynamicsPurchaseOrders",
  page: 1,
  pageSize: 100,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `companyId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | Unique identifier for a company.                                                                | 8a210b68-6988-11ed-a1eb-0242ac120002                                                            |
| `connectionId`                                                                                  | *string*                                                                                        | :heavy_check_mark:                                                                              | Unique identifier for a connection.                                                             | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                            |
| `customDataIdentifier`                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | Unique identifier for a custom data type.                                                       | DynamicsPurchaseOrders                                                                          |
| `page`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | Page number. [Read more](https://docs.codat.io/using-the-api/paging).                           | 1                                                                                               |
| `pageSize`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging). | 100                                                                                             |