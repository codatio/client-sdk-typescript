# UploadBankStatementDataRequest

## Example Usage

```typescript
import { UploadBankStatementDataRequest } from "@codat/lending/sdk/models/operations";

let value: UploadBankStatementDataRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  datasetId: "d7ee4988-f4fe-47dc-8a53-ad0a7e5782bd",
  requestBody: {
    modifiedDate: "2022-10-23T00:00:00Z",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    id: "<id>",
    name: "<value>",
    type: "Debit",
    balance: {},
    identifiers: {
      type: "Other",
    },
    currency: "Moldovan Leu",
    institution: {},
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