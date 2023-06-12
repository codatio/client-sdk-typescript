# transactionCategories

## Overview

Hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.

### Available Operations

* [get](#get) - Get transaction category
* [list](#list) - List all transaction categories

## get

Gets a specified bank transaction category for a given company

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { GetTransactionCategoryResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCategoryStatus } from "@codat/banking/dist/sdk/models/shared";

const sdk = new CodatBanking({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.transactionCategories.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  transactionCategoryId: "unde",
}).then((res: GetTransactionCategoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetTransactionCategoryRequest](../../models/operations/gettransactioncategoryrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetTransactionCategoryResponse](../../models/operations/gettransactioncategoryresponse.md)>**


## list

Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transactionactivity.

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { ListTransactionCategoriesResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCategoryStatus } from "@codat/banking/dist/sdk/models/shared";

const sdk = new CodatBanking({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.transactionCategories.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "nulla",
}).then((res: ListTransactionCategoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListTransactionCategoriesRequest](../../models/operations/listtransactioncategoriesrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListTransactionCategoriesResponse](../../models/operations/listtransactioncategoriesresponse.md)>**

