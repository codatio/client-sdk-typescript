# AccountsPayableTracking

Categories, and a project and customer, against which the item is tracked.

## Example Usage

```typescript
import { AccountsPayableTracking } from "@codat/lending/sdk/models/shared";

let value: AccountsPayableTracking = {
  categoryRefs: [
    {
      id: "<id>",
    },
  ],
  isBilledTo: "Unknown",
  isRebilledTo: "NotApplicable",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `categoryRefs`                                                                      | [shared.TrackingCategoryRef](../../../sdk/models/shared/trackingcategoryref.md)[]   | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `customerRef`                                                                       | [shared.AccountingCustomerRef](../../../sdk/models/shared/accountingcustomerref.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `projectRef`                                                                        | [shared.ProjectRef](../../../sdk/models/shared/projectref.md)                       | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `isBilledTo`                                                                        | [shared.BilledToType](../../../sdk/models/shared/billedtotype.md)                   | :heavy_check_mark:                                                                  | Defines if the invoice or credit note is billed/rebilled to a project or customer.  |
| `isRebilledTo`                                                                      | [shared.BilledToType](../../../sdk/models/shared/billedtotype.md)                   | :heavy_check_mark:                                                                  | Defines if the invoice or credit note is billed/rebilled to a project or customer.  |