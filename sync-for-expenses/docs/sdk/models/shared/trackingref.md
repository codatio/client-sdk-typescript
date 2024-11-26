# TrackingRef

## Example Usage

```typescript
import { TrackingRef } from "@codat/sync-for-expenses/sdk/models/shared";

let value: TrackingRef = {
  id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
  dataType: "trackingCategories",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Unique identifier of the linked reference from mapping options or the unique identifier of the linked customer. | e9a1b63d-9ff0-40e7-8038-016354b987e6                                                                            |
| `dataType`                                                                                                      | [shared.TrackingRefDataType](../../../sdk/models/shared/trackingrefdatatype.md)                                 | :heavy_minus_sign:                                                                                              | The type of the linked reference                                                                                | trackingCategories                                                                                              |