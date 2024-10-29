# GetCustomDataTypeConfigurationRequest

## Example Usage

```typescript
import { GetCustomDataTypeConfigurationRequest } from "@codat/platform/sdk/models/operations";

let value: GetCustomDataTypeConfigurationRequest = {
  platformKey: "gbol",
  customDataIdentifier: "DynamicsPurchaseOrders",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `platformKey`                                                      | *string*                                                           | :heavy_check_mark:                                                 | A unique 4-letter key to represent a platform in each integration. | gbol                                                               |
| `customDataIdentifier`                                             | *string*                                                           | :heavy_check_mark:                                                 | Unique identifier for a custom data type.                          | DynamicsPurchaseOrders                                             |