# TrackingRefAdjustmentTransaction

## Example Usage

```typescript
import { TrackingRefAdjustmentTransaction } from "@codat/sync-for-expenses/sdk/models/shared";

let value: TrackingRefAdjustmentTransaction = {
  id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
  dataType: "trackingCategories",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Unique identifier of the linked reference from mapping options or the unique identifier of the linked customer or supplier. | e9a1b63d-9ff0-40e7-8038-016354b987e6                                                                                        |
| `dataType`                                                                                                                  | [shared.TrackingRefAdjustmentTransactionDataType](../../../sdk/models/shared/trackingrefadjustmenttransactiondatatype.md)   | :heavy_minus_sign:                                                                                                          | The type of the linked reference                                                                                            | trackingCategories                                                                                                          |