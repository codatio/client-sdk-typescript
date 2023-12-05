# TaxRates
(*taxRates*)

## Overview

Tax rates

### Available Operations

* [get](#get) - Get tax rate
* [list](#list) - List all tax rates

## get

The *Get tax rate* endpoint returns a single tax rate for a given taxRateId.

[Tax rates](https://docs.codat.io/accounting-api#/schemas/TaxRate) are a set of taxes and associated rates within the SMB's accounting package.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=taxRates) for integrations that support getting a specific tax rate.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";

async function run() {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.taxRates.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    taxRateId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetTaxRateRequest](../../sdk/models/operations/gettaxraterequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                         | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetTaxRateResponse](../../sdk/models/operations/gettaxrateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## list

The *List tax rates* endpoint returns a list of [tax rates](https://docs.codat.io/accounting-api#/schemas/TaxRate) for a given company's connection.

[Tax rates](https://docs.codat.io/accounting-api#/schemas/TaxRate) are a set of taxes and associated rates within the SMB's accounting package.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";

async function run() {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.taxRates.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    orderBy: "-modifiedDate",
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListTaxRatesRequest](../../sdk/models/operations/listtaxratesrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListTaxRatesResponse](../../sdk/models/operations/listtaxratesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
