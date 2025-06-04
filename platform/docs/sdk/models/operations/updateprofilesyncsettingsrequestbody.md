# UpdateProfileSyncSettingsRequestBody

Include a `syncSetting` object for each data type.
`syncFromWindow`, `syncFromUTC` & `monthsToSync` only need to be included if you wish to set a value for them.

## Example Usage

```typescript
import { UpdateProfileSyncSettingsRequestBody } from "@codat/platform/sdk/models/operations";

let value: UpdateProfileSyncSettingsRequestBody = {
  clientId: "eb0cba37-2d9a-4e1d-b267-f39dcdd04b92",
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

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                                                  | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Unique identifier for your client in Codat.                                                                                 |
| `settings`                                                                                                                  | [shared.SyncSetting](../../../sdk/models/shared/syncsetting.md)[]                                                           | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `overridesDefaults`                                                                                                         | *boolean*                                                                                                                   | :heavy_minus_sign:                                                                                                          | Set to `True` if you want to override default [sync settings](https://docs.codat.io/knowledge-base/advanced-sync-settings). |