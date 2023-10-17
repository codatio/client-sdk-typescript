# TaxComponents
(*taxComponents*)

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [get](#get) - Get tax component
* [list](#list) - List tax components

## get

The *Get tax* endpoint returns a single tax for a given taxId.

[Tax components](https://docs.codat.io/commerce-api#/schemas/TaxComponent) are tax rates from the commerce platform, including tax rate's name and value.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-taxComponents) for integrations that support getting a specific tax.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";

(async() => {
  const sdk = new CodatCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.taxComponents.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    taxId: "Northeast Hatchback Kia",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

The *List tax components* endpoint returns a list of [tax components](https://docs.codat.io/commerce-api#/schemas/TaxComponent) for a given company's connection.

[Tax components](https://docs.codat.io/commerce-api#/schemas/TaxComponent) are tax rates from the commerce platform, including tax rate's name and value.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";

(async() => {
  const sdk = new CodatCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.taxComponents.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListTaxComponentsRequest](../../models/operations/listtaxcomponentsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListTaxComponentsResponse](../../models/operations/listtaxcomponentsresponse.md)>**

