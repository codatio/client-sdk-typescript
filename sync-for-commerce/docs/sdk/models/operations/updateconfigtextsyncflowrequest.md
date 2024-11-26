# UpdateConfigTextSyncFlowRequest

## Example Usage

```typescript
import { UpdateConfigTextSyncFlowRequest } from "@codat/sync-for-commerce/sdk/models/operations";

let value: UpdateConfigTextSyncFlowRequest = {
  locale: "en-us",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `locale`                                                                          | [shared.Locale](../../../sdk/models/shared/locale.md)                             | :heavy_check_mark:                                                                | Localization identifier for English (US) or French.                               | en-us                                                                             |
| `requestBody`                                                                     | Record<string, [shared.Localization](../../../sdk/models/shared/localization.md)> | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |