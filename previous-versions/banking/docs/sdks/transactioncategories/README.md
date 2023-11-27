# TransactionCategories
(*transactionCategories*)

## Overview

Hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.

### Available Operations

* [get](#get) - Get transaction category
* [list](#list) - List transaction categories

## get

The *Get transaction category* endpoint returns a single transaction category for a given transactionCategoryId.

[Transaction categories](https://docs.codat.io/banking-api#/schemas/TransactionCategory) are associated with a transaction to provide greater contextual meaning to transaction activity.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactionCategories) for integrations that support getting a specific transaction category.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";

(async() => {
  const sdk = new CodatBanking({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.transactionCategories.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    transactionCategoryId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetTransactionCategoryRequest](../../sdk/models/operations/gettransactioncategoryrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetTransactionCategoryResponse](../../sdk/models/operations/gettransactioncategoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## list

The *List transaction categories* endpoint returns a list of [transaction categories](https://docs.codat.io/banking-api#/schemas/TransactionCategory) for a given company's connection.

[Transaction categories](https://docs.codat.io/banking-api#/schemas/TransactionCategory) are associated with a transaction to provide greater contextual meaning to transaction activity.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";

(async() => {
  const sdk = new CodatBanking({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.transactionCategories.list({
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

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.ListTransactionCategoriesRequest](../../sdk/models/operations/listtransactioncategoriesrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.ListTransactionCategoriesResponse](../../sdk/models/operations/listtransactioncategoriesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
