# Transaction

## Example Usage

```typescript
import { Transaction } from "@codat/sync-for-expenses/sdk/models/shared";

let value: Transaction = {
  transactionId: "aa02271d-ed5f-47f5-be76-778d5905225a",
  status: "Completed",
  integrationType: "expenses",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `transactionId`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | Your unique idenfier of the transaction.                                                       | aa02271d-ed5f-47f5-be76-778d5905225a                                                           |
| `status`                                                                                       | [shared.TransactionStatus](../../../sdk/models/shared/transactionstatus.md)                    | :heavy_minus_sign:                                                                             | Status of the transaction.                                                                     | Completed                                                                                      |
| `message`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | Metadata such as validation errors or the resulting record created in the accounting software. |                                                                                                |
| `integrationType`                                                                              | [shared.IntegrationType](../../../sdk/models/shared/integrationtype.md)                        | :heavy_minus_sign:                                                                             | Type of transaction that has been processed e.g. Expense or Bank Feed.                         | expenses                                                                                       |