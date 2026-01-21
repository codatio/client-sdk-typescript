# UploadBankStatementDataRequest

## Example Usage

```typescript
import { UploadBankStatementDataRequest } from "@codat/lending/sdk/models/operations";

let value: UploadBankStatementDataRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  datasetId: "b48991bc-5bf4-4cf4-8090-7c3419f0a6eb",
  requestBody: {
    "results": [
      {
        "id": "1703194f-7805-4da8-bac0-2ba5da4a4216",
        "name": "Business Current Account",
        "informalName": "Codat",
        "holder": "Codat Ltd",
        "type": "Debit",
        "balance": {
          "available": -459987.97,
          "current": -459964.9,
          "limit": 5000,
        },
        "identifiers": {
          "type": "Depository",
          "subtype": "checking",
          "number": "46762629",
          "bankCode": 9911,
          "iban": "GB29 LOYD 4773 2346 7626 29",
          "bic": "LOYDGB21006",
          "maskedAccountNumber": "LOYDGB21006",
        },
        "currency": "GBP",
        "institution": {
          "id": "lloyds-bank",
          "name": "Lloyds Bank",
        },
        "modifiedDate": "2022-05-23T16:32:50Z",
        "sourceModifiedDate": "2021-08-14T05:04:12",
      },
    ],
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