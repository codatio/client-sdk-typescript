# AccountMapping
(*accountMapping*)

## Overview

Bank feed bank account mapping.

### Available Operations

* [create](#create) - Create bank feed account mapping
* [get](#get) - List bank feed account mappings

## create

﻿The *Create bank account mapping* endpoint creates a new mapping between a source bank account and a potential account in the accounting platform (target account).

A bank feed account mapping is a specified link between the source account (provided by the Codat user) and the target account (the end users account in the underlying platform).

To find valid target account options, first call list bank feed account mappings.

This endpoint is only needed if building an account management UI.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

(async() => {
  const sdk = new CodatBankFeeds({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.accountMapping.create({
    requestBody: {
      "sourceAccountId": "online",
      "targetAccountId": "Configuration",
      "feedStartDate": "Money",
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.CreateBankAccountMappingRequest](../../models/operations/createbankaccountmappingrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CreateBankAccountMappingResponse](../../models/operations/createbankaccountmappingresponse.md)>**


## get

﻿The *List bank account mappings* endpoint returns information about a source bank account and any current or potential target mapping accounts.

A bank feed account mapping is a specified link between the source account (provided by the Codat user) and the target account (the end users account in the underlying platform).

This endpoint is only needed if building an account management UI.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

(async() => {
  const sdk = new CodatBankFeeds({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.accountMapping.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetBankAccountMappingRequest](../../models/operations/getbankaccountmappingrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetBankAccountMappingResponse](../../models/operations/getbankaccountmappingresponse.md)>**

