# ExpensesSyncWebhook

## Example Usage

```typescript
import { ExpensesSyncWebhook } from "@codat/sync-for-expenses/sdk/models/shared";

let value: ExpensesSyncWebhook = {
  id: "ba29118f-5406-4e59-b05c-ba307ca38d01",
  eventType: "expenses.sync.successful",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier of the event.                                                               | ba29118f-5406-4e59-b05c-ba307ca38d01                                                          |
| `eventType`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The type of event.                                                                            | **Example 1:** expenses.sync.successful<br/>**Example 2:** expenses.sync.unsuccessful         |
| `generatedDate`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The date time in UTC the event was generated in Codat.                                        |                                                                                               |
| `payload`                                                                                     | [shared.ExpensesSyncWebhookPayload](../../../sdk/models/shared/expensessyncwebhookpayload.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |