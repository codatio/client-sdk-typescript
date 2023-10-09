# Webhooks
(*webhooks*)

## Overview

Manage webhooks, rules, and events.

### Available Operations

* [create](#create) - Create webhook
* [get](#get) - Get webhook
* [list](#list) - List webhooks

## create

Create a new webhook configuration

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

(async() => {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.webhooks.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    notifiers: {
      emails: [
        "i",
        "n",
        "f",
        "o",
        "@",
        "c",
        "l",
        "i",
        "e",
        "n",
        "t",
        ".",
        "c",
        "o",
        "m",
      ],
      webhook: "https://webhook.client.com",
    },
    type: "bluetooth Extended",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.CreateRule](../../models/shared/createrule.md)              | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CreateRuleResponse](../../models/operations/createruleresponse.md)>**


## get

Get a single webhook

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

(async() => {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.webhooks.get({
    ruleId: "7318949f-c008-4936-a8ff-10d7ab563fa6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetWebhookRequest](../../models/operations/getwebhookrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetWebhookResponse](../../models/operations/getwebhookresponse.md)>**


## list

List webhooks that you are subscribed to.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

(async() => {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.webhooks.list({
    orderBy: "-modifiedDate",
    page: 1,
    pageSize: 100,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListRulesRequest](../../models/operations/listrulesrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `retries`                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                     | :heavy_minus_sign:                                                         | Configuration to override the default retry behavior of the client.        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListRulesResponse](../../models/operations/listrulesresponse.md)>**

