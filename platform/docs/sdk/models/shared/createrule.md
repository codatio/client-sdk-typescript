# CreateRule

Create a message that notifies a URL of an event based on its given type or condition.

## Example Usage

```typescript
import { CreateRule } from "@codat/platform/sdk/models/shared";

let value: CreateRule = {
  type: "DataConnectionStatusChanged",
  companyId: "39b73b17-cc2e-429e-915d-71654e9dcd1e",
  notifiers: {
    emails: [
      "info@client.com",
    ],
    webhook: "https://webhook.client.com",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `type`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | The type of webhook.                                                    |                                                                         |
| `companyId`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | Unique identifier for your SMB in Codat.                                | 8a210b68-6988-11ed-a1eb-0242ac120002                                    |
| `notifiers`                                                             | [shared.WebhookNotifier](../../../sdk/models/shared/webhooknotifier.md) | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |