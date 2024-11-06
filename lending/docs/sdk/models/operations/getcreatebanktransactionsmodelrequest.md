# GetCreateBankTransactionsModelRequest

## Example Usage

```typescript
import { GetCreateBankTransactionsModelRequest } from "@codat/lending/sdk/models/operations";

let value: GetCreateBankTransactionsModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  accountId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `connectionId`                       | *string*                             | :heavy_check_mark:                   | Unique identifier for a connection.  | 2e9d2c44-f675-40ba-8049-353bfcb5e171 |
| `accountId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for an account.    | 13d946f0-c5d5-42bc-b092-97ece17923ab |