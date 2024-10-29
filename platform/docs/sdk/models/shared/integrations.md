# Integrations

## Example Usage

```typescript
import { Integrations } from "@codat/platform/sdk/models/shared";

let value: Integrations = {
  results: [
    {
      key: "gbol",
      logoUrl: "http://example.com",
      name: "Xero",
      enabled: true,
      sourceId: "accounting",
      sourceType: "Expense",
      integrationId: "497a18ca-284e-40c0-985d-f72be35d468e",
      isOfflineConnector: true,
      isBeta: true,
      dataProvidedBy: "string",
      datatypeFeatures: [
        {
          dataType: "invoices",
          supportedFeatures: [
            {
              featureType: "GetAsPdf",
              featureState: "Deprecated",
            },
          ],
        },
      ],
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
| `results`                                                                                         | [shared.Integration](../../../sdk/models/shared/integration.md)[]                                 | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |