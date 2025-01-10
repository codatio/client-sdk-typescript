# GetAccountingTransferRequest

## Example Usage

```typescript
import { GetAccountingTransferRequest } from "@codat/lending/sdk/models/operations";

let value: GetAccountingTransferRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  transferId: "7110701885",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `connectionId`                       | *string*                             | :heavy_check_mark:                   | Unique identifier for a connection.  | 2e9d2c44-f675-40ba-8049-353bfcb5e171 |
| `transferId`                         | *string*                             | :heavy_check_mark:                   | Unique identifier for a transfer.    | 13d946f0-c5d5-42bc-b092-97ece17923ab |