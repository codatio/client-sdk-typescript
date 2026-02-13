# SetCompanySyncSettingsRequestBody

Include a `syncSetting` object for each data type.
`syncFromWindow`, `syncFromUTC` & `monthsToSync` only need to be included if you wish to set a value for them.

## Example Usage

```typescript
import { SetCompanySyncSettingsRequestBody } from "@codat/platform/sdk/models/operations";

let value: SetCompanySyncSettingsRequestBody = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                 | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Unique identifier for your SMB in Codat.                                                                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                                        |
| `settings`                                                                                                                  | [shared.SyncSetting](../../../sdk/models/shared/syncsetting.md)[]                                                           | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `overridesDefaults`                                                                                                         | *boolean*                                                                                                                   | :heavy_minus_sign:                                                                                                          | Set to `True` if you want to override default [sync settings](https://docs.codat.io/knowledge-base/advanced-sync-settings). |                                                                                                                             |