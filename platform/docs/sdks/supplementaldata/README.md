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
import { ConfigureSupplementalDataDataType } from "@codat/platform/dist/sdk/models/operations";

(async() => {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.supplementalData.configure({
    supplementalDataConfiguration: {
      supplementalDataConfig: {
        "key": {
          pullData: {
            "key": "string",
          },
          pushData: {
            "key": "string",
          },
        },
      },
    },
    dataType: ConfigureSupplementalDataDataType.Invoices,
    platformKey: "gbol",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ConfigureSupplementalDataRequest](../../models/operations/configuresupplementaldatarequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ConfigureSupplementalDataResponse](../../models/operations/configuresupplementaldataresponse.md)>**


## getConfiguration

The *Get configuration* endpoint returns supplemental data configuration previously created for each integration and data type combination.

[Supplemental data](https://docs.codat.io/using-the-api/additional-data) is additional data you can include in Codat's standard data types.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";
import { GetSupplementalDataConfigurationDataType } from "@codat/platform/dist/sdk/models/operations";

(async() => {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.supplementalData.getConfiguration({
    dataType: GetSupplementalDataConfigurationDataType.Invoices,
    platformKey: "gbol",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetSupplementalDataConfigurationRequest](../../models/operations/getsupplementaldataconfigurationrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `retries`                                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetSupplementalDataConfigurationResponse](../../models/operations/getsupplementaldataconfigurationresponse.md)>**

