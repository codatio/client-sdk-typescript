# settings

## Overview

Manage your Codat instance.

### Available Operations

* [~~getProfile~~](#getprofile) - Get profile :warning: **Deprecated**
* [getSyncSettings](#getsyncsettings) - Get sync settings
* [updateProfile](#updateprofile) - Update profile
* [updateSyncSettings](#updatesyncsettings) - Update all sync settings

## ~~getProfile~~

Fetch your Codat profile.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetProfileResponse } from "@codat/common/dist/sdk/models/operations";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
  },
});

sdk.settings.getProfile().then((res: GetProfileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetProfileResponse](../../models/operations/getprofileresponse.md)>**


## getSyncSettings

Retrieve the sync settings for your client. This includes how often data types should be queued to be updated, and how much history should be fetched.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetProfileSyncSettingsResponse } from "@codat/common/dist/sdk/models/operations";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
  },
});

sdk.settings.getSyncSettings().then((res: GetProfileSyncSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetProfileSyncSettingsResponse](../../models/operations/getprofilesyncsettingsresponse.md)>**


## updateProfile

Update your Codat profile

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { UpdateProfileResponse } from "@codat/common/dist/sdk/models/operations";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
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
    "https://bobs-burgers.com",
  ],
}).then((res: UpdateProfileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.Profile](../../models/shared/profile.md)                    | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.UpdateProfileResponse](../../models/operations/updateprofileresponse.md)>**


## updateSyncSettings

Update sync settings for all data types.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { UpdateProfileSyncSettingsResponse } from "@codat/common/dist/sdk/models/operations";
import { SyncSettingDataType } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
  },
});

sdk.settings.updateSyncSettings({
  clientId: "367f7975-267b-439b-90c6-a6040ee680f3",
  overridesDefaults: false,
  settings: [
    {
      dataType: SyncSettingDataType.Invoices,
      fetchOnFirstLink: false,
      isLocked: false,
      monthsToSync: 24,
      syncFromUtc: "2022-10-23T00:00:00.000Z",
      syncFromWindow: 24,
      syncOrder: 449950,
      syncSchedule: 24,
    },
    {
      dataType: SyncSettingDataType.Invoices,
      fetchOnFirstLink: false,
      isLocked: false,
      monthsToSync: 24,
      syncFromUtc: "2022-10-23T00:00:00.000Z",
      syncFromWindow: 24,
      syncOrder: 613064,
      syncSchedule: 24,
    },
    {
      dataType: SyncSettingDataType.Invoices,
      fetchOnFirstLink: false,
      isLocked: false,
      monthsToSync: 24,
      syncFromUtc: "2022-10-23T00:00:00.000Z",
      syncFromWindow: 24,
      syncOrder: 902349,
      syncSchedule: 24,
    },
    {
      dataType: SyncSettingDataType.Invoices,
      fetchOnFirstLink: false,
      isLocked: false,
      monthsToSync: 24,
      syncFromUtc: "2022-10-23T00:00:00.000Z",
      syncFromWindow: 24,
      syncOrder: 99280,
      syncSchedule: 24,
    },
  ],
}).then((res: UpdateProfileSyncSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.UpdateProfileSyncSettingsRequestBody](../../models/operations/updateprofilesyncsettingsrequestbody.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `retries`                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                             | :heavy_minus_sign:                                                                                                 | Configuration to override the default retry behavior of the client.                                                |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.UpdateProfileSyncSettingsResponse](../../models/operations/updateprofilesyncsettingsresponse.md)>**

