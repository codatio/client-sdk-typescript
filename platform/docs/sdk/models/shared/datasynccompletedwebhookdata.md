# DataSyncCompletedWebhookData

## Example Usage

```typescript
import { DataSyncCompletedWebhookData } from "@codat/platform/sdk/models/shared";

let value: DataSyncCompletedWebhookData = {
  dataType: "invoices",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `dataType`                                                                  | [shared.PropertieDataType](../../../sdk/models/shared/propertiedatatype.md) | :heavy_minus_sign:                                                          | Available data types                                                        | invoices                                                                    |
| `datasetId`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | Unique identifier for the dataset that completed its sync.                  |                                                                             |