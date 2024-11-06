# CreateBankAccountRequest

## Example Usage

```typescript
import { CreateBankAccountRequest } from "@codat/lending/sdk/models/operations";

let value: CreateBankAccountRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  accountingBankAccount: {
    modifiedDate: "2022-10-23T00:00:00Z",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    currency: "GBP",
    status: "Active",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `companyId`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier for a company.                                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                                |
| `connectionId`                                                                      | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier for a connection.                                                 | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                |
| `timeoutInMinutes`                                                                  | *number*                                                                            | :heavy_minus_sign:                                                                  | Time limit for the push operation to complete before it is timed out.               |                                                                                     |
| `allowSyncOnPushComplete`                                                           | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Allow a sync upon push completion.                                                  |                                                                                     |
| `accountingBankAccount`                                                             | [shared.AccountingBankAccount](../../../sdk/models/shared/accountingbankaccount.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |                                                                                     |