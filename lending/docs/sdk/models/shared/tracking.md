# Tracking

Categories, and a project and customer, against which the item is tracked.

## Example Usage

```typescript
import { Tracking } from "@codat/lending/sdk/models/shared";

let value: Tracking = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `recordRefs`                                                                    | [shared.TrackingRecordRef](../../../sdk/models/shared/trackingrecordref.md)[]   | :heavy_check_mark:                                                              | N/A                                                                             |
| `invoiceTo`                                                                     | [shared.AccountingRecordRef](../../../sdk/models/shared/accountingrecordref.md) | :heavy_minus_sign:                                                              | N/A                                                                             |