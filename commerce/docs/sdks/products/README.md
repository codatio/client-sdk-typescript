# products

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [get](#get) - Get product
* [getCategory](#getcategory) - Get product category
* [list](#list) - List products
* [listCategories](#listcategories) - List product categories

## get

The Products data type provides the company's product inventory, and includes the price and quantity of all products, and product variants, available for sale.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { GetProductResponse } from "@codat/commerce/dist/sdk/models/operations";
import { ProductVariantStatus } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.products.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  productId: "suscipit",
}).then((res: GetProductResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetProductRequest](../../models/operations/getproductrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetProductResponse](../../models/operations/getproductresponse.md)>**


## getCategory

Product categories are used to classify a group of products together, either by type (e.g. "Furniture") or sometimes by tax profile.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { GetProductCategoryResponse } from "@codat/commerce/dist/sdk/models/operations";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.products.getCategory({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  productId: "iure",
}).then((res: GetProductCategoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetProductCategoryRequest](../../models/operations/getproductcategoryrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetProductCategoryResponse](../../models/operations/getproductcategoryresponse.md)>**


## list

The Products data type provides the company's product inventory, and includes the price and quantity of all products, and product variants, available for sale.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListProductsResponse } from "@codat/commerce/dist/sdk/models/operations";
import { ProductVariantStatus } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.products.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "magnam",
}).then((res: ListProductsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListProductsRequest](../../models/operations/listproductsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListProductsResponse](../../models/operations/listproductsresponse.md)>**


## listCategories

Product categories are used to classify a group of products together, either by type (eg "Furniture"), or sometimes by tax profile.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListProductCategoriesResponse } from "@codat/commerce/dist/sdk/models/operations";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.products.listCategories({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "debitis",
}).then((res: ListProductCategoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ListProductCategoriesRequest](../../models/operations/listproductcategoriesrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ListProductCategoriesResponse](../../models/operations/listproductcategoriesresponse.md)>**

