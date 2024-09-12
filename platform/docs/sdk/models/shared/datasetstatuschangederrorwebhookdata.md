# DatasetStatusChangedErrorWebhookData

## Example Usage

```typescript
import { DatasetStatusChangedErrorWebhookData } from "@codat/platform/sdk/models/shared";

let value: DatasetStatusChangedErrorWebhookData = {
  dataType: "invoices",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `dataType`                                                                  | [shared.PropertieDataType](../../../sdk/models/shared/propertiedatatype.md) | :heavy_minus_sign:                                                          | Available data types                                                        | invoices                                                                    |
| `datasetStatus`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | The current status of the dataset's sync.                                   |                                                                             |
| `datasetId`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | Unique identifier for the dataset that completed its sync.                  |                                                                             |