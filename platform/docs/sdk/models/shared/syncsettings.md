# SyncSettings

## Example Usage

```typescript
import { SyncSettings } from "@codat/platform/sdk/models/shared";

let value: SyncSettings = {
  settings: [
    {
      dataType: "invoices",
      fetchOnFirstLink: true,
      syncSchedule: 24,
      syncOrder: 0,
      syncFromUtc: "2020-01-01T12:00:00.000Z",
      syncFromWindow: 24,
      monthsToSync: 24,
      isLocked: true,
    },
  ],
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                                                      | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Unique identifier for your client in Codat.                                                                                     |
| `settings`                                                                                                                      | [shared.SyncSetting](../../../sdk/models/shared/syncsetting.md)[]                                                               | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `overridesDefaults`                                                                                                             | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | Set to `True` if you want to override the default [sync settings](https://docs.codat.io/knowledge-base/advanced-sync-settings). |