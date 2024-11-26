# DataTypeFeature

Describes support for a given datatype and associated operations

## Example Usage

```typescript
import { DataTypeFeature } from "@codat/sync-for-commerce/sdk/models/shared";

let value: DataTypeFeature = {
  supportedFeatures: [
    {
      featureType: "Get",
      featureState: "Release",
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `dataType`                                                                  | [shared.DataTypes](../../../sdk/models/shared/datatypes.md)                 | :heavy_minus_sign:                                                          | Available data types                                                        | invoices                                                                    |
| `supportedFeatures`                                                         | [shared.SupportedFeature](../../../sdk/models/shared/supportedfeature.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |