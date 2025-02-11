# GetAccountingDirectIncomeAttachmentRequest

## Example Usage

```typescript
import { GetAccountingDirectIncomeAttachmentRequest } from "@codat/lending/sdk/models/operations";

let value: GetAccountingDirectIncomeAttachmentRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `companyId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a company.                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                  |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a connection.                                   | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                  |
| `directIncomeId`                                                      | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a direct income.                                | 13d946f0-c5d5-42bc-b092-97ece17923ab                                  |
| `attachmentId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for an attachment.                                  | 8a210b68-6988-11ed-a1eb-0242ac120002                                  |
| `timeoutInMinutes`                                                    | *number*                                                              | :heavy_minus_sign:                                                    | Time limit for the push operation to complete before it is timed out. |                                                                       |