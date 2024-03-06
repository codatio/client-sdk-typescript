# SupplementalData
(*supplementalData*)

## Overview

View and configure supplemental data for supported data types.

### Available Operations

* [configure](#configure) - Configure
* [getConfiguration](#getconfiguration) - Get configuration

## configure

The *Configure* endpoint allows you to maintain or change configuration required to return supplemental data for each integration and data type combination.

[Supplemental data](https://docs.codat.io/using-the-api/additional-data) is additional data you can include in Codat's standard data types.

**Integration-specific behaviour**
See the *examples* for integration-specific frequently requested properties.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";
import { DataType } from "@codat/platform/dist/sdk/models/operations";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.supplementalData.configure({
    supplementalDataConfiguration: {
      supplementalDataConfig: {
        "orders-supplemental-data": {
          dataSource: "/orders",
          pullData: {
            "orderNumber": "order_num",
          },
          pushData: {
            "orderNumber": "order_num",
          },
        },
      },
    },
    dataType: DataType.Invoices,
    platformKey: "gbol",
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
| `request`                                                                                                      | [operations.ConfigureSupplementalDataRequest](../../sdk/models/operations/configuresupplementaldatarequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.ConfigureSupplementalDataResponse](../../sdk/models/operations/configuresupplementaldataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getConfiguration

The *Get configuration* endpoint returns supplemental data configuration previously created for each integration and data type combination.

[Supplemental data](https://docs.codat.io/using-the-api/additional-data) is additional data you can include in Codat's standard data types.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";
import { PathParamDataType } from "@codat/platform/dist/sdk/models/operations";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.supplementalData.getConfiguration({
    dataType: PathParamDataType.Invoices,
    platformKey: "gbol",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetSupplementalDataConfigurationRequest](../../sdk/models/operations/getsupplementaldataconfigurationrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `retries`                                                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                           | Configuration to override the default retry behavior of the client.                                                          |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetSupplementalDataConfigurationResponse](../../sdk/models/operations/getsupplementaldataconfigurationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
