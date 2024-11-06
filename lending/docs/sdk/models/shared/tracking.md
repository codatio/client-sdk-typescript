# Tracking

## Example Usage

```typescript
import { Tracking } from "@codat/lending/sdk/models/shared";

let value: Tracking = {
  recordRefs: [
    {
      dataType: "trackingCategories",
    },
  ],
  invoiceTo: {
    dataType: "invoice",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `recordRefs`                                                                                                                                                                                                                                            | [shared.TrackingRecordRef](../../../sdk/models/shared/trackingrecordref.md)[]                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                     |
| `invoiceTo`                                                                                                                                                                                                                                             | [shared.RecordRef](../../../sdk/models/shared/recordref.md)                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                      | Links the current record to the underlying record or data type that created it. <br/><br/>For example, if a journal entry is generated based on an invoice, this property allows you to connect the journal entry to the underlying invoice in our data model.  |