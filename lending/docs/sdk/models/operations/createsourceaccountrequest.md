# CreateSourceAccountRequest

## Example Usage

```typescript
import { CreateSourceAccountRequest } from "@codat/lending/sdk/models/operations";
import { Decimal } from "@codat/lending/sdk/types";

let value: CreateSourceAccountRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  requestBody: {
    id: "<id>",
    accountName: "<value>",
    accountType: "loan",
    accountNumber: "<value>",
    currency: "USD",
    balance: new Decimal("2436.78"),
    modifiedDate: "2022-10-23T00:00:00Z",
    accountInfo: {
      accountOpenDate: "2022-10-23",
    },
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `companyId`                                 | *string*                                    | :heavy_check_mark:                          | Unique identifier for a company.            | 8a210b68-6988-11ed-a1eb-0242ac120002        |
| `connectionId`                              | *string*                                    | :heavy_check_mark:                          | Unique identifier for a connection.         | 2e9d2c44-f675-40ba-8049-353bfcb5e171        |
| `requestBody`                               | *operations.CreateSourceAccountRequestBody* | :heavy_minus_sign:                          | N/A                                         |                                             |