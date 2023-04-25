# getProfileSyncSettings
Available in: `settings`

Retrieve the sync settings for your client. This includes how often data types should be queued to be updated, and how much history should be fetched.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { GetProfileSyncSettingsResponse } from "@codat/common/dist/sdk/models/operations";
import { SyncSettingDataTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.settings.getProfileSyncSettings().then((res: GetProfileSyncSettingsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```