# settings

## Overview

Manage your Codat instance.

### Available Operations

* [getProfile](#getprofile) - Get profile
* [getSyncSettings](#getsyncsettings) - Update all sync settings
* [updateProfile](#updateprofile) - Update profile

## getProfile

Fetch your Codat profile.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetProfileResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.settings.getProfile().then((res: GetProfileResponse | AxiosError) => {
  if (res instanceof GetProfileResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getSyncSettings

Update sync settings for all data types.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { UpdateSyncSettingsResponse } from "@codat/common/dist/sdk/models/operations";
import { SyncSettingDataTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.settings.getSyncSettings({
  clientId: "367f7975-267b-439b-90c6-a6040ee680f3",
  overridesDefaults: false,
  settings: [
    {
      dataType: SyncSettingDataTypeEnum.Invoices,
      fetchOnFirstLink: false,
      isLocked: false,
      monthsToSync: 24,
      syncFromUtc: "nobis",
      syncFromWindow: 24,
      syncOrder: 315428,
      syncSchedule: 24,
    },
  ],
}).then((res: UpdateSyncSettingsResponse | AxiosError) => {
  if (res instanceof UpdateSyncSettingsResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateProfile

Update your Codat profile

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { UpdateProfileResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.settings.updateProfile({
  alertAuthHeader: "Bearer tXEiHiRK7XCtI8TNHbpGs1LI1pumdb4Cl1QIo7B2",
  apiKey: "sartANTjHAkLdbyDfaynoTQb7pkmj6hXHmnQKMrB",
  confirmCompanyName: false,
  iconUrl: "https://client-images.codat.io/icon/042399f5-d104-4f38-9ce8-cac3524f4e88_3f5623af-d992-4c22-bc08-e58c520a8526.ico",
  logoUrl: "https://client-images.codat.io/logo/042399f5-d104-4f38-9ce8-cac3524f4e88_5806cb1f-7342-4c0e-a0a8-99bfbc47b0ff.png",
  name: "Bob's Burgers",
  redirectUrl: "https://bobs-burgers.{countrySuffix}/{companyId}",
  whiteListUrls: [
    "https://bobs-burgers.com",
    "https://bobs-burgers.com",
    "https://bobs-burgers.com",
  ],
}).then((res: UpdateProfileResponse | AxiosError) => {
  if (res instanceof UpdateProfileResponse && res.statusCode == 200) {
    // handle response
  }
});
```
