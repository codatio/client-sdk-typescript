# integrations

## Overview

View and manage your available integrations in Codat.

### Available Operations

* [get](#get) - Get integration
* [getBranding](#getbranding) - Get branding
* [list](#list) - List integrations

## get

Get single integration, by platformKey

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";
import { GetIntegrationResponse } from "@codat/platform/dist/sdk/models/operations";

const sdk = new CodatPlatform({
  security: {
    authHeader: "",
  },
});

sdk.integrations.get({
  platformKey: "gbol",
}).then((res: GetIntegrationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetIntegrationRequest](../../models/operations/getintegrationrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetIntegrationResponse](../../models/operations/getintegrationresponse.md)>**


## getBranding

Get branding for platform.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";
import { GetIntegrationsBrandingResponse } from "@codat/platform/dist/sdk/models/operations";

const sdk = new CodatPlatform({
  security: {
    authHeader: "",
  },
});

sdk.integrations.getBranding({
  platformKey: "gbol",
}).then((res: GetIntegrationsBrandingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetIntegrationsBrandingRequest](../../models/operations/getintegrationsbrandingrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetIntegrationsBrandingResponse](../../models/operations/getintegrationsbrandingresponse.md)>**


## list

List your available integrations

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";
import { ListIntegrationsResponse } from "@codat/platform/dist/sdk/models/operations";

const sdk = new CodatPlatform({
  security: {
    authHeader: "",
  },
});

sdk.integrations.list({
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "suscipit",
}).then((res: ListIntegrationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListIntegrationsRequest](../../models/operations/listintegrationsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListIntegrationsResponse](../../models/operations/listintegrationsresponse.md)>**

