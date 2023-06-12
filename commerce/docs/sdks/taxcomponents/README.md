# taxComponents

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [get](#get) - Get tax component
* [list](#list) - List tax components

## get

This endpoint returns a specific tax rate from the commerce platform, including tax rate names and values. This supports the mapping of tax rates from the commerce platform to the accounting platform.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { GetTaxComponentResponse } from "@codat/commerce/dist/sdk/models/operations";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.taxComponents.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  taxId: "ipsa",
}).then((res: GetTaxComponentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetTaxComponentRequest](../../models/operations/gettaxcomponentrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetTaxComponentResponse](../../models/operations/gettaxcomponentresponse.md)>**


## list

This endpoint returns a lists of tax rates from the commerce platform, including tax rate names and values. This supports the mapping of tax rates from the commerce platform to the accounting platform.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListTaxComponentsResponse } from "@codat/commerce/dist/sdk/models/operations";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.taxComponents.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "delectus",
}).then((res: ListTaxComponentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListTaxComponentsRequest](../../models/operations/listtaxcomponentsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListTaxComponentsResponse](../../models/operations/listtaxcomponentsresponse.md)>**

