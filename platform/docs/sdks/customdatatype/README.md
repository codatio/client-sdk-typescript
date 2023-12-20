# CustomDataType
(*customDataType*)

## Overview

View and configure custom data types for supported integrations.

### Available Operations

* [configure](#configure) - Configure custom data type
* [getConfiguration](#getconfiguration) - Get custom data configuration
* [list](#list) - List custom data type records
* [refresh](#refresh) - Refresh custom data type

## configure

The *Configure custom data type* endpoint allows you to maintain or change the configuration required to return a custom data type for a specific integration. 

A [custom data type](https://docs.codat.io/using-the-api/custom-data) is an additional data type you can create that is not included in Codat's standardized data model.

### Tips and traps

- You can only configure a single custom data type for a single platform at a time. Use the endpoint multiple times if you need to configure it for multiple platforms. 

- You can only indicate a single data source for each customer data type. 

- Make your custom configuration as similar as possible to our standard data types so you can interact with them in exactly the same way.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customDataType.configure({
    customDataTypeConfiguration: {
      keyBy: [
        "string",
      ],
      requiredData: {
        "key": "string",
      },
      sourceModifiedDate: [
        "string",
      ],
    },
    customDataIdentifier: "DynamicsPurchaseOrders",
    platformKey: "gbol",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ConfigureCustomDataTypeRequest](../../sdk/models/operations/configurecustomdatatyperequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ConfigureCustomDataTypeResponse](../../sdk/models/operations/configurecustomdatatyperesponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getConfiguration

The *Get custom data configuration* endpoint returns existing configuration details for the specified custom data type and integration pair you previously configured.

A [custom data type](https://docs.codat.io/using-the-api/custom-data) is an additional data type you can create that is not included in Codat's standardized data model.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customDataType.getConfiguration({
    customDataIdentifier: "DynamicsPurchaseOrders",
    platformKey: "gbol",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetCustomDataTypeConfigurationRequest](../../sdk/models/operations/getcustomdatatypeconfigurationrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `retries`                                                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                 | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetCustomDataTypeConfigurationResponse](../../sdk/models/operations/getcustomdatatypeconfigurationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

The *List custom data type records* endpoint returns a paginated list of records pulled for the specified custom data type you previously configured.

A [custom data type](https://docs.codat.io/using-the-api/custom-data) is an additional data type you can create that is not included in Codat's standardized data model.s endpoint returns a paginated list of records whose schema is defined [Configure custom data type](https://docs.codat.io/platform-api#/operations/configure-custom-data-type)

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customDataType.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    customDataIdentifier: "DynamicsPurchaseOrders",
    page: 1,
    pageSize: 100,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.ListCustomDataTypeRecordsRequest](../../sdk/models/operations/listcustomdatatyperecordsrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.ListCustomDataTypeRecordsResponse](../../sdk/models/operations/listcustomdatatyperecordsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## refresh

The *Refresh custom data type* endpoint refreshes the specified custom data type for a given company. This is an asynchronous operation that will sync updated data from the linked integration into Codat for you to view.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.customDataType.refresh({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    customDataIdentifier: "DynamicsPurchaseOrders",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.RefreshCustomDataTypeRequest](../../sdk/models/operations/refreshcustomdatatyperequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.RefreshCustomDataTypeResponse](../../sdk/models/operations/refreshcustomdatatyperesponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
