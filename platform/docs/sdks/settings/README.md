# Settings
(*settings*)

## Overview

Manage your Codat instance.

### Available Operations

* [createApiKey](#createapikey) - Create API key
* [deleteApiKey](#deleteapikey) - Delete API key
* [~~getProfile~~](#getprofile) - Get profile :warning: **Deprecated**
* [getSyncSettings](#getsyncsettings) - Get sync settings
* [listApiKeys](#listapikeys) - List API keys
* [updateProfile](#updateprofile) - Update profile
* [updateSyncSettings](#updatesyncsettings) - Update all sync settings

## createApiKey

Use the *Create API keys* endpoint to generate a new API key for your client.

[API keys](https://docs.codat.io/platform-api#/schemas/apiKeys) are tokens used to control access to the API. Include this token in the `Authorization` header parameter when making API calls, following the word "Basic" and a space with your API key.

You can [read more](https://docs.codat.io/using-the-api/authentication) about authentication at Codat and managing API keys via the Portal UI or API.

### Tips and pitfalls

* Your first API key is created for you. Access this key via [Codat's Portal](https://app.codat.io/developers/api-keys).
* If you require multiple API keys, perform multiple calls to the *Create API keys* endpoint. 
* The number of API keys is limited to 10. If you have reached the maximum amount of keys, use the *Delete API key* endpoint to delete an unused key first.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

(async() => {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.settings.createApiKey({
    name: "azure-invoice-finance-processor",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

[API keys](https://docs.codat.io/platform-api#/schemas/apiKeys) are tokens used to control access to the API. Include this token in the `Authorization` header parameter when making API calls, following the word "Basic" and a space with your API key.

You can [read more](https://docs.codat.io/using-the-api/authentication) about authentication at Codat and managing API keys via the Portal UI or API.

### Tips and pitfalls

* It is possible to delete the last remaining API key. If this happens, a new key can be created via the [API key management page](https://app.codat.io/developers/api-keys) of the Portal.
* It is possible to delete the API key used to authenticate the *Delete API key* request.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

(async() => {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.settings.deleteApiKey({
    apiKeyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.settings.getProfile();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetProfileResponse](../../models/operations/getprofileresponse.md)>**


## getSyncSettings

Retrieve the [sync settings](https://docs.codat.io/knowledge-base/advanced-sync-settings) for your client. This includes how often data types should be queued to be updated, and how much history should be fetched.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

(async() => {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.settings.getSyncSettings();

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

[API keys](https://docs.codat.io/platform-api#/schemas/apiKeys) are tokens used to control access to the API. Include this token in the `Authorization` header parameter when making API calls, following the word "Basic" and a space with your API key.

You can [read more](https://docs.codat.io/using-the-api/authentication) about authentication at Codat and managing API keys via the Portal UI or API.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

(async() => {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.settings.listApiKeys();

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.settings.updateProfile({
    alertAuthHeader: "Bearer tXEiHiRK7XCtI8TNHbpGs1LI1pumdb4Cl1QIo7B2",
    apiKey: "sartANTjHAkLdbyDfaynoTQb7pkmj6hXHmnQKMrB",
    iconUrl: "https://client-images.codat.io/icon/042399f5-d104-4f38-9ce8-cac3524f4e88_3f5623af-d992-4c22-bc08-e58c520a8526.ico",
    logoUrl: "https://client-images.codat.io/logo/042399f5-d104-4f38-9ce8-cac3524f4e88_5806cb1f-7342-4c0e-a0a8-99bfbc47b0ff.png",
    name: "Bob's Burgers",
    redirectUrl: "https://bobs-burgers.{countrySuffix}/{companyId}",
    whiteListUrls: [
      "h",
      "t",
      "t",
      "p",
      "s",
      ":",
      "/",
      "/",
      "b",
      "o",
      "b",
      "s",
      "-",
      "b",
      "u",
      "r",
      "g",
      "e",
      "r",
      "s",
      ".",
      "c",
      "o",
      "m",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { DataType } from "@codat/platform/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.settings.updateSyncSettings({
    clientId: "ce429104-79f0-4085-a720-e2d40fcc800f",
    settings: [
      {
        dataType: DataType.Invoices,
        fetchOnFirstLink: false,
        monthsToSync: 24,
        syncFromUtc: "2022-10-23T00:00:00.000Z",
        syncFromWindow: 24,
        syncOrder: 334238,
        syncSchedule: 24,
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.UpdateProfileSyncSettingsRequestBody](../../models/operations/updateprofilesyncsettingsrequestbody.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `retries`                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                             | :heavy_minus_sign:                                                                                                 | Configuration to override the default retry behavior of the client.                                                |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.UpdateProfileSyncSettingsResponse](../../models/operations/updateprofilesyncsettingsresponse.md)>**

