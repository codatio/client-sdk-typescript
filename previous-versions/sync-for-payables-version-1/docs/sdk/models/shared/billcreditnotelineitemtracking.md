# BillCreditNoteLineItemTracking

Categories, and a project and customer, against which the item is tracked.

## Example Usage

```typescript
import { BillCreditNoteLineItemTracking } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: BillCreditNoteLineItemTracking = {
  categoryRefs: [
    {
      id: "<id>",
    },
  ],
  isBilledTo: "Customer",
  isRebilledTo: "Project",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `categoryRefs`                                                                                                                            | [shared.TrackingCategoryRef](../../../sdk/models/shared/trackingcategoryref.md)[]                                                         | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `customerRef`                                                                                                                             | [shared.BillCreditNoteLineItemCustomerRef](../../../sdk/models/shared/billcreditnotelineitemcustomerref.md)                               | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |
| `projectRef`                                                                                                                              | [shared.BillCreditNoteLineItemAccountingProjectReference](../../../sdk/models/shared/billcreditnotelineitemaccountingprojectreference.md) | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |
| `isBilledTo`                                                                                                                              | [shared.BilledToType](../../../sdk/models/shared/billedtotype.md)                                                                         | :heavy_check_mark:                                                                                                                        | Defines if the invoice or credit note is billed/rebilled to a project or customer.                                                        |
| `isRebilledTo`                                                                                                                            | [shared.BilledToType](../../../sdk/models/shared/billedtotype.md)                                                                         | :heavy_check_mark:                                                                                                                        | Defines if the invoice or credit note is billed/rebilled to a project or customer.                                                        |