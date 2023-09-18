# Settings

## Overview

Manage your Codat instance.

### Available Operations

* [createApiKey](#createapikey) - Create API key
* [deleteApiKey](#deleteapikey) - Delete api key
* [~~getProfile~~](#getprofile) - Get profile :warning: **Deprecated**
* [getSyncSettings](#getsyncsettings) - Get sync settings
* [listApiKeys](#listapikeys) - List API keys
* [updateProfile](#updateprofile) - Update profile
* [updateSyncSettings](#updatesyncsettings) - Update all sync settings

## createApiKey

Use the *Create API keys* endpoint to generate a new API key for your client.

[API keys](https://docs.codat.io/codat-api#/schemas/apiKeys) are tokens used to control access to the API. Include this token in the `Authorization` header parameter when making API calls, following the word "Basic" and a space with your API key.

You can [read more](https://docs.codat.io/using-the-api/authentication) about authentication at Codat and managing API keys via the Portal UI or API.

### Tips and pitfalls

* Your first API key is created for you. Access this key via [Codat's Portal](https://app.codat.io/developers/api-keys).
* If you require multiple API keys, perform multiple calls to the *Create API keys* endpoint. 
* The number of API keys is limited to 10. If you have reached the maximum amount of keys, use the *Delete API key* endpoint to delete an unused key first.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";
import { CreateApiKeyResponse } from "@codat/platform/dist/sdk/models/operations";

const sdk = new CodatPlatform({
  security: {
    authHeader: "",
  },
});

sdk.settings.createApiKey({
  name: "azure-invoice-finance-processor",
}).then((res: CreateApiKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.CreateApiKey](../../models/shared/createapikey.md)          | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CreateApiKeyResponse](../../models/operations/createapikeyresponse.md)>**


## deleteApiKey

Use the *Delete API keys* endpoint to delete an existing API key, providing its valid `id` as a parameter. Note that this operation is not reversible.

[API keys](https://docs.codat.io/accounting-api#/schemas/apiKeys) are tokens used to control access to the API. Include this token in the `Authorization` header parameter when making API calls, following the word "Basic" and a space with your API key.

You can [read more](https://docs.codat.io/using-the-api/authentication) about authentication at Codat and managing API keys via the Portal UI or API.

### Tips and pitfalls

* It is possible to delete the last remaining API key. If this happens, a new key can be created via the [API key management page](https://app.codat.io/developers/api-keys) of the Portal.
* It is possible to delete the API key used to authenticate the *Delete API key* request.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";
import { DeleteApiKeyResponse } from "@codat/platform/dist/sdk/models/operations";

const sdk = new CodatPlatform({
  security: {
    authHeader: "",
  },
});

sdk.settings.deleteApiKey({
  apiKeyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: DeleteApiKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteApiKeyRequest](../../models/operations/deleteapikeyrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteApiKeyResponse](../../models/operations/deleteapikeyresponse.md)>**


## ~~getProfile~~

Fetch your Codat profile.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";
import { GetProfileResponse } from "@codat/platform/dist/sdk/models/operations";

const sdk = new CodatPlatform({
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
import { CodatPlatform } from "@codat/platform";
import { GetProfileSyncSettingsResponse } from "@codat/platform/dist/sdk/models/operations";

const sdk = new CodatPlatform({
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


## listApiKeys

Use the *List API keys* endpoint to return a list of all API keys that currently exist for your client. This includes keys created via the Portal UI or the *Create API keys* endpoint.

[API keys](https://docs.codat.io/accounting-api#/schemas/apiKeys) are tokens used to control access to the API. Include this token in the `Authorization` header parameter when making API calls, following the word "Basic" and a space with your API key.

You can [read more](https://docs.codat.io/using-the-api/authentication) about authentication at Codat and managing API keys via the Portal UI or API.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";
import { ListApiKeysResponse } from "@codat/platform/dist/sdk/models/operations";

const sdk = new CodatPlatform({
  security: {
    authHeader: "",
  },
});

sdk.settings.listApiKeys().then((res: ListApiKeysResponse) => {
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

**Promise<[operations.ListApiKeysResponse](../../models/operations/listapikeysresponse.md)>**


## updateProfile

Update your Codat profile

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";
import { UpdateProfileResponse } from "@codat/platform/dist/sdk/models/operations";

const sdk = new CodatPlatform({
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
import { CodatPlatform } from "@codat/platform";
import { UpdateProfileSyncSettingsResponse } from "@codat/platform/dist/sdk/models/operations";
import { SyncSettingDataTypes } from "@codat/platform/dist/sdk/models/shared";

const sdk = new CodatPlatform({
  security: {
    authHeader: "",
  },
});

sdk.settings.updateSyncSettings({
  clientId: "367f7975-267b-439b-90c6-a6040ee680f3",
  overridesDefaults: false,
  settings: [
    {
      dataType: SyncSettingDataTypes.Invoices,
      fetchOnFirstLink: false,
      isLocked: false,
      monthsToSync: 24,
      syncFromUtc: "2022-10-23T00:00:00.000Z",
      syncFromWindow: 24,
      syncOrder: 612096,
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

