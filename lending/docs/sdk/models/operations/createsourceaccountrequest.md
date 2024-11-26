# CreateSourceAccountRequest

## Example Usage

```typescript
import { CreateSourceAccountRequest } from "@codat/lending/sdk/models/operations";
import { Decimal } from "@codat/lending/sdk/types";

let value: CreateSourceAccountRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  requestBody: {
    id: "acc-001",
    accountName: "account-081",
    accountType: "checking",
    accountNumber: "12345670",
    routingInfo: {
      bankCode: "21001088",
      type: "bankcode",
    },
    currency: "GBP",
    balance: new Decimal("99.99"),
    accountInfo: {
      description: "account description 1",
      nickname: "account 123",
      accountOpenDate: "2023-05-06T00:00:00Z",
      availableBalance: new Decimal("10"),
    },
    modifiedDate: "2024-08-02T00:00:00.000Z",
    status: "pending",
    feedStartDate: "2024-05-01T00:00:00Z",
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `companyId`                                 | *string*                                    | :heavy_check_mark:                          | Unique identifier for a company.            | 8a210b68-6988-11ed-a1eb-0242ac120002        |
| `connectionId`                              | *string*                                    | :heavy_check_mark:                          | Unique identifier for a connection.         | 2e9d2c44-f675-40ba-8049-353bfcb5e171        |
| `requestBody`                               | *operations.CreateSourceAccountRequestBody* | :heavy_minus_sign:                          | N/A                                         |                                             |