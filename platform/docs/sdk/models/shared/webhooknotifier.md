# WebhookNotifier

## Example Usage

```typescript
import { WebhookNotifier } from "@codat/platform/sdk/models/shared";

let value: WebhookNotifier = {
  emails: [
    "info@client.com",
  ],
  webhook: "https://webhook.client.com",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `emails`                                             | *string*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |                                                      |
| `webhook`                                            | *string*                                             | :heavy_minus_sign:                                   | The URI the webhook service will use to post events. | https://webhook.client.com                           |