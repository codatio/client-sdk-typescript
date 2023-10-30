# Configuration
(*configuration*)

## Overview

Manage mapping options and sync configuration.

### Available Operations

* [get](#get) - Get company configuration
* [getMappingOptions](#getmappingoptions) - Mapping options
* [set](#set) - Set company configuration

## get

Gets a companies expense sync configuration

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

(async() => {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.configuration.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetCompanyConfigurationRequest](../../models/operations/getcompanyconfigurationrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetCompanyConfigurationResponse](../../models/operations/getcompanyconfigurationresponse.md)>**


## getMappingOptions

Gets the expense mapping options for a companies accounting software

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

(async() => {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.configuration.getMappingOptions({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetMappingOptionsRequest](../../models/operations/getmappingoptionsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetMappingOptionsResponse](../../models/operations/getmappingoptionsresponse.md)>**


## set

Sets a companies expense sync configuration

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

(async() => {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.configuration.set({
    companyConfiguration: {
      bankAccount: {
        id: "32",
      },
      customer: {},
      supplier: {},
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.SetCompanyConfigurationRequest](../../models/operations/setcompanyconfigurationrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.SetCompanyConfigurationResponse](../../models/operations/setcompanyconfigurationresponse.md)>**

