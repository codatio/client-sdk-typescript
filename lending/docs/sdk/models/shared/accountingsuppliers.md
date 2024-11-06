# AccountingSuppliers

## Example Usage

```typescript
import { AccountingSuppliers } from "@codat/lending/sdk/models/shared";

let value: AccountingSuppliers = {
  results: [
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "C520FFD4-F6F6-4FC2-A6D2-5D7088B2B14F",
      supplierName: "Kelly's Industrial Supplies",
      contactName: "Kelly's Industrial Supplies",
      emailAddress: "sales@kellysupplies.com",
      phone: "07999 999999",
      addresses: [
        {
          type: "Billing",
          line1: "Unit 51",
          line2: "Bakersfield Industrial Estate",
          city: "Bakersfield",
          region: "California",
          country: "USA",
        },
      ],
      registrationNumber: "string",
      taxNumber: "string",
      status: "Unknown",
      defaultCurrency: "string",
      metadata: {
        isDeleted: true,
      },
      supplementalData: {
        content: {
          "property1": {
            "property1": null,
            "property2": null,
          },
          "property2": {
            "property1": null,
            "property2": null,
          },
        },
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
| `results`                                                                                         | [shared.AccountingSupplier](../../../sdk/models/shared/accountingsupplier.md)[]                   | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |