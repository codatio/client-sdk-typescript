# JournalLineTracking

List of record refs associated with the tracking information for the line (eg to a Tracking Category, or customer etc.)

## Example Usage

```typescript
import { JournalLineTracking } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: JournalLineTracking = {
  recordRefs: [
    {
      dataType: "trackingCategories",
    },
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `recordRefs`                                                                  | [shared.TrackingRecordRef](../../../sdk/models/shared/trackingrecordref.md)[] | :heavy_minus_sign:                                                            | N/A                                                                           |