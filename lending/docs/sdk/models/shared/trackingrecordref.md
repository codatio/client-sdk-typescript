# TrackingRecordRef

Links to the customer or tracking category.

## Example Usage

```typescript
import { TrackingRecordRef } from "@codat/lending/sdk/models/shared";

let value: TrackingRecordRef = {
  dataType: "trackingCategories",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | 'id' of the underlying record or data type.                                                 |                                                                                             |
| `dataType`                                                                                  | [shared.TrackingRecordRefDataType](../../../sdk/models/shared/trackingrecordrefdatatype.md) | :heavy_minus_sign:                                                                          | Name of underlying data type.                                                               | trackingCategories                                                                          |