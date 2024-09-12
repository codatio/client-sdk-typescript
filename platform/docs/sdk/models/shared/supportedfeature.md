# SupportedFeature

## Example Usage

```typescript
import { SupportedFeature } from "@codat/platform/sdk/models/shared";

let value: SupportedFeature = {
  featureType: "Get",
  featureState: "Release",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `featureType`                                                     | [shared.FeatureType](../../../sdk/models/shared/featuretype.md)   | :heavy_check_mark:                                                | The type of feature.                                              | Get                                                               |
| `featureState`                                                    | [shared.FeatureState](../../../sdk/models/shared/featurestate.md) | :heavy_check_mark:                                                | The current release state of the feature.                         | Release                                                           |