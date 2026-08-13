# ClientRateLimitWebhookPayload

## Example Usage

```typescript
import { ClientRateLimitWebhookPayload } from "@codat/sync-for-expenses/sdk/models/shared";

let value: ClientRateLimitWebhookPayload = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `dailyQuota`                                         | *number*                                             | :heavy_minus_sign:                                   | The number of available requests per day.            |
| `quotaRemaining`                                     | *number*                                             | :heavy_minus_sign:                                   | Total number of requests remaining for your client.  |
| `expiryDate`                                         | *string*                                             | :heavy_minus_sign:                                   | The date time in UTC when your daily quota is reset. |