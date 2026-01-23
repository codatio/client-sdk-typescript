# GetManagedBankFeedSyncRequest

## Example Usage

```typescript
import { GetManagedBankFeedSyncRequest } from "@codat/bank-feeds/sdk/models/operations";

let value: GetManagedBankFeedSyncRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  sourceAccountId: "<id>",
  syncId: "a87728cf-9cad-4ba1-835d-09ce3880055c",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `connectionId`                       | *string*                             | :heavy_check_mark:                   | Unique identifier for a connection.  | 2e9d2c44-f675-40ba-8049-353bfcb5e171 |
| `sourceAccountId`                    | *string*                             | :heavy_check_mark:                   | The ID of the source bank account.   |                                      |
| `syncId`                             | *string*                             | :heavy_check_mark:                   | The ID of the sync.                  |                                      |