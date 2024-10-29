# ClientRateLimitReachedWebhook

Webhook request body for a client that has reached their rate limit.

## Example Usage

```typescript
import { ClientRateLimitReachedWebhook } from "@codat/platform/sdk/models/shared";

let value: ClientRateLimitReachedWebhook = {
  clientId: "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  clientName: "Bank of Dave",
  ruleId: "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  ruleType: "Rate Limit Reached",
  alertId: "a9367074-b5c3-42c4-9be4-be129f43577e",
  message:
    "The current daily rate limit quota of 1000 requests for bae71d36-ff47-420a-b4a6-f8c9ddf41140 has been reached.",
  data: {
    dailyQuota: 1000,
    expiresUtc: "2023-05-03T00:00:00Z",
  },
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | Unique identifier for your client in Codat.                                                                                                              |
| `clientName`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | Name of your client in Codat.                                                                                                                            |
| ~~`ruleId`~~                                                                                                                                             | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Unique identifier for the rule. |
| `ruleType`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | The type of rule.                                                                                                                                        |
| `alertId`                                                                                                                                                | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | Unique identifier of the webhook event.                                                                                                                  |
| `message`                                                                                                                                                | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | A human-readable message about the webhook.                                                                                                              |
| `data`                                                                                                                                                   | [shared.ClientRateLimitReachedWebhookData](../../../sdk/models/shared/clientratelimitreachedwebhookdata.md)                                              | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |