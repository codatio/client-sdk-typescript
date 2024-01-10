# Configuration
(*configuration*)

## Overview

Configure bank feeds for a company.

### Available Operations

* [get](#get) - Get configuration
* [setConfiguration](#setconfiguration) - Set configuration

## get

﻿The *Get configuration* endpoint returns the current configuration for a given company ID.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

async function run() {
  const sdk = new CodatBankFeeds({
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
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetConfigurationRequest](../../sdk/models/operations/getconfigurationrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetConfigurationResponse](../../sdk/models/operations/getconfigurationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## setConfiguration

﻿Use *Set configuration* endpoint to configure a given company ID.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

async function run() {
  const sdk = new CodatBankFeeds({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.configuration.setConfiguration({
    configuration: {
      companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
      configuration: {
        syncAsBankFeeds: {
          bankAccountOptions: [
            {},
          ],
        },
        syncAsExpenses: {
          bankAccountOptions: [
            {},
          ],
          customer: {
            customerOptions: [
              {},
            ],
          },
          supplier: {
            supplierOptions: [
              {},
            ],
          },
        },
      },
      schedule: {
        frequencyOptions: [
          "string",
        ],
      },
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.SetConfigurationRequest](../../sdk/models/operations/setconfigurationrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.SetConfigurationResponse](../../sdk/models/operations/setconfigurationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
