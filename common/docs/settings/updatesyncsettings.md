# updateSyncSettings
Available in: `settings`

Update sync settings for all data types.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { UpdateSyncSettingsRequestBody, UpdateSyncSettingsResponse } from "@codat/common/dist/sdk/models/operations";
import { SyncSettingDataTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateSyncSettingsRequestBody = {
  clientId: "367f7975-267b-439b-90c6-a6040ee680f3",
  overridesDefaults: false,
  settings: [
    {
      dataType: SyncSettingDataTypeEnum.Invoices,
      fetchOnFirstLink: false,
      isLocked: false,
      monthsToSync: 24,
      syncFromUtc: "2022-10-23T00:00:00Z",
      syncFromWindow: 24,
      syncOrder: 38425,
      syncSchedule: 24,
    },
    {
      dataType: SyncSettingDataTypeEnum.Invoices,
      fetchOnFirstLink: false,
      isLocked: false,
      monthsToSync: 24,
      syncFromUtc: "2022-10-23T00:00:00Z",
      syncFromWindow: 24,
      syncOrder: 438601,
      syncSchedule: 24,
    },
    {
      dataType: SyncSettingDataTypeEnum.Invoices,
      fetchOnFirstLink: false,
      isLocked: false,
      monthsToSync: 24,
      syncFromUtc: "2022-10-23T00:00:00Z",
      syncFromWindow: 24,
      syncOrder: 634274,
      syncSchedule: 24,
    },
  ],
};

sdk.settings.updateSyncSettings(req).then((res: UpdateSyncSettingsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```