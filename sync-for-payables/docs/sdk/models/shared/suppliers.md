# Suppliers

## Example Usage

```typescript
import { Suppliers } from "@codat/sync-for-payables/sdk/models/shared";

let value: Suppliers = {
  results: [
    {
      id: "C520FFD4-F6F6-4FC2-A6D2-5D7088B2B14F",
      supplierName: "Kelly's Industrial Supplies",
      contactName: "Kelly Ipsum",
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
      status: "Active",
      defaultCurrency: "GBP",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `results`                                                     | [shared.Supplier](../../../sdk/models/shared/supplier.md)[]   | :heavy_minus_sign:                                            | N/A                                                           |
| `pagination`                                                  | [shared.Pagination](../../../sdk/models/shared/pagination.md) | :heavy_minus_sign:                                            | N/A                                                           |