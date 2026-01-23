# GetLatestManagedBankFeedSyncRequest

## Example Usage

```typescript
import { GetLatestManagedBankFeedSyncRequest } from "@codat/bank-feeds/sdk/models/operations";

let value: GetLatestManagedBankFeedSyncRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  sourceAccountId: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `connectionId`                       | *string*                             | :heavy_check_mark:                   | Unique identifier for a connection.  | 2e9d2c44-f675-40ba-8049-353bfcb5e171 |
| `sourceAccountId`                    | *string*                             | :heavy_check_mark:                   | The ID of the source bank account.   |                                      |