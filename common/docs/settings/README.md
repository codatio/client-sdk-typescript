# settings

## Overview

Manage your Codat instance.

### Available Operations

* [getProfile](#getprofile) - Get profile
* [getProfileSyncSettings](#getprofilesyncsettings) - Get sync settings
* [updateProfile](#updateprofile) - Update profile
* [updateSyncSettings](#updatesyncsettings) - Update all sync settings

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
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getProfileSyncSettings

Retrieve the sync settings for your client. This includes how often data types should be queued to be updated, and how much history should be fetched.

### Example Usage

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

## updateProfile

Update your Codat profile

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { Profile, UpdateProfileResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: shared.Profile = {
  alertAuthHeader: "explicabo",
  apiKey: "nobis",
  confirmCompanyName: false,
  iconUrl: "enim",
  logoUrl: "omnis",
  name: "Bob's Burgers",
  redirectUrl: "nemo",
  whiteListUrls: [
    "https://bobs-burgers.com/redirect",
    "https://bobs-burgers.com/redirect",
  ],
};

sdk.settings.updateProfile(req).then((res: UpdateProfileResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateSyncSettings

Update sync settings for all data types.

### Example Usage

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
      syncFromUtc: "accusantium",
      syncFromWindow: 24,
      syncOrder: 438601,
      syncSchedule: 24,
    },
    {
      dataType: SyncSettingDataTypeEnum.Invoices,
      fetchOnFirstLink: false,
      isLocked: false,
      monthsToSync: 24,
      syncFromUtc: "culpa",
      syncFromWindow: 24,
      syncOrder: 988374,
      syncSchedule: 24,
    },
    {
      dataType: SyncSettingDataTypeEnum.Invoices,
      fetchOnFirstLink: false,
      isLocked: false,
      monthsToSync: 24,
      syncFromUtc: "sapiente",
      syncFromWindow: 24,
      syncOrder: 102044,
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
