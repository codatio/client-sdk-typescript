# ClientRateLimitWebhook

## Example Usage

```typescript
import { ClientRateLimitWebhook } from "@codat/sync-for-expenses/sdk/models/shared";

let value: ClientRateLimitWebhook = {
  id: "743ec94a-8aa4-44bb-8bd4-e1855ee0e74b",
  eventType: "client.rateLimit.reset",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Unique identifier of the event.                                                                     | 743ec94a-8aa4-44bb-8bd4-e1855ee0e74b                                                                |
| `eventType`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The type of event.                                                                                  | **Example 1:** client.rateLimit.reset<br/>**Example 2:** client.rateLimit.reached                   |
| `generatedDate`                                                                                     | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The date time in UTC the event was generated in Codat.                                              |                                                                                                     |
| `payload`                                                                                           | [shared.ClientRateLimitWebhookPayload](../../../sdk/models/shared/clientratelimitwebhookpayload.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |