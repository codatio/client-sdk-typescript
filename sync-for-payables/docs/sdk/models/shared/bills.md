# Bills

## Example Usage

```typescript
import { Bills } from "@codat/sync-for-payables/sdk/models/shared";
import { Decimal } from "@codat/sync-for-payables/sdk/types";

let value: Bills = {
  results: [
    {
      supplierRef: {
        id: "<id>",
      },
      issueDate: "2022-10-23T00:00:00Z",
      dueDate: "2022-10-23T00:00:00Z",
      currency: "GBP",
      lineItems: [
        {
          unitAmount: new Decimal("2654.66"),
          quantity: new Decimal("9314.53"),
          accountRef: {},
          trackingRefs: [
            {
              id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
              dataType: "trackingCategories",
            },
          ],
        },
      ],
      status: "Open",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `results`                                                     | [shared.Bill](../../../sdk/models/shared/bill.md)[]           | :heavy_minus_sign:                                            | N/A                                                           |
| `pagination`                                                  | [shared.Pagination](../../../sdk/models/shared/pagination.md) | :heavy_minus_sign:                                            | N/A                                                           |