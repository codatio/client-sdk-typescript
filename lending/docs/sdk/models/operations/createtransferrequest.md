# CreateTransferRequest

## Example Usage

```typescript
import { CreateTransferRequest } from "@codat/lending/sdk/models/operations";

let value: CreateTransferRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  accountingTransfer: {
    modifiedDate: "2022-10-23T00:00:00Z",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    date: "2022-10-23T00:00:00Z",
    from: {
      accountRef: {},
      currency: "GBP",
    },
    to: {
      accountRef: {},
      currency: "GBP",
    },
    depositedRecordRefs: [
      {
        dataType: "accountTransaction",
      },
    ],
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `companyId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | Unique identifier for a company.                                              | 8a210b68-6988-11ed-a1eb-0242ac120002                                          |
| `connectionId`                                                                | *string*                                                                      | :heavy_check_mark:                                                            | Unique identifier for a connection.                                           | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                          |
| `timeoutInMinutes`                                                            | *number*                                                                      | :heavy_minus_sign:                                                            | Time limit for the push operation to complete before it is timed out.         |                                                                               |
| `allowSyncOnPushComplete`                                                     | *boolean*                                                                     | :heavy_minus_sign:                                                            | Allow a sync upon push completion.                                            |                                                                               |
| `accountingTransfer`                                                          | [shared.AccountingTransfer](../../../sdk/models/shared/accountingtransfer.md) | :heavy_minus_sign:                                                            | N/A                                                                           |                                                                               |