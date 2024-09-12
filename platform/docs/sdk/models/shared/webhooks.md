# Webhooks

## Example Usage

```typescript
import { Webhooks } from "@codat/platform/sdk/models/shared";

let value: Webhooks = {
  results: [
    {
      id: "ff89c50e-a719-4ef5-a182-9917e53927b6",
      type: "DataConnectionStatusChanged",
      companyId: "39b73b17-cc2e-429e-915d-71654e9dcd1e",
      notifiers: {
        emails: [
          "info@client.com",
        ],
        webhook: "https://webhook.client.com",
      },
    },
    {
      id: "ff89c50e-a719-4ef5-a182-9917e53927b6",
      type: "DataConnectionStatusChanged",
      companyId: "39b73b17-cc2e-429e-915d-71654e9dcd1e",
      notifiers: {
        emails: [
          "info@client.com",
        ],
        webhook: "https://webhook.client.com",
      },
    },
  ],
  pageNumber: 1,
  pageSize: 10,
  totalResults: 1,
  links: {
    self: {
      href: "/companies/{id}/data/{dataType}",
    },
    current: {
      href: "/companies/{id}/data/{dataType}?page=1&pageSize=10",
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `results`                                                                                         | [shared.Webhook](../../../sdk/models/shared/webhook.md)[]                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |