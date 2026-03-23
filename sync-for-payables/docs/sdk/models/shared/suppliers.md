# Suppliers

## Example Usage

```typescript
import { Suppliers } from "@codat/sync-for-payables/sdk/models/shared";
import { Decimal } from "@codat/sync-for-payables/sdk/types";

let value: Suppliers = {
  results: [
    {
      id: "sup-10933920",
      supplierName: "Northridge Office Supplies",
      contactName: "Sarah Johnson",
      emailAddress: "sarah.johnson@northridgesupplies.co.uk",
      phone: "+44 (0)1223 322410",
      addresses: [
        {
          type: "Billing",
          line1: "Flat 1",
          line2: "2 Dennis Avenue",
          city: "London",
          region: "Camden",
          country: "GB",
          postalCode: "EC1N 7TE",
        },
      ],
      status: "Active",
      balance: new Decimal("0"),
      defaultCurrency: "GBP",
      sourceModifiedDate: "2026-03-18T10:30:00Z",
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `results`                                                     | [shared.Supplier](../../../sdk/models/shared/supplier.md)[]   | :heavy_minus_sign:                                            | N/A                                                           |
| `pagination`                                                  | [shared.Pagination](../../../sdk/models/shared/pagination.md) | :heavy_minus_sign:                                            | N/A                                                           |