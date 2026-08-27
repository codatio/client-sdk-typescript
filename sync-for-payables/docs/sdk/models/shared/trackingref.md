# TrackingRef

## Example Usage

```typescript
import { TrackingRef } from "@codat/sync-for-payables/sdk/models/shared";

let value: TrackingRef = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Unique identifier of the linked tracking category or the unique identifier of the linked customer.                                               |
| `dataType`                                                                                                                                       | [shared.DataType](../../../sdk/models/shared/datatype.md)                                                                                        | :heavy_minus_sign:                                                                                                                               | The type of the linked reference.                                                                                                                |
| `isBillable`                                                                                                                                     | *boolean*                                                                                                                                        | :heavy_minus_sign:                                                                                                                               | If a customer has been set as the trackingRefs.id then this boolean can be used to set whether the line item is billable to the customer or not. |