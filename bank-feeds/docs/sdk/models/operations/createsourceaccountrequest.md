# CreateSourceAccountRequest

## Example Usage

```typescript
import { CreateSourceAccountRequest } from "@codat/bank-feeds/sdk/models/operations";
import { Decimal } from "@codat/bank-feeds/sdk/types";

let value: CreateSourceAccountRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  requestBody: {
    id: "acc-002",
    accountName: "account-081",
    accountType: "Credit",
    accountNumber: "12345670",
    sortCode: "123456",
    currency: "GBP",
    balance: new Decimal("99.99"),
    modifiedDate: "2023-01-09T14:14:14.1057478Z",
    status: "pending",
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `companyId`                                 | *string*                                    | :heavy_check_mark:                          | Unique identifier for a company.            | 8a210b68-6988-11ed-a1eb-0242ac120002        |
| `connectionId`                              | *string*                                    | :heavy_check_mark:                          | Unique identifier for a connection.         | 2e9d2c44-f675-40ba-8049-353bfcb5e171        |
| `requestBody`                               | *operations.CreateSourceAccountRequestBody* | :heavy_minus_sign:                          | N/A                                         |                                             |