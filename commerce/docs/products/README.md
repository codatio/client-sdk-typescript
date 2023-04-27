# products

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [list](#list) - List products
* [listCategories](#listcategories) - List product categories

## list

The Products data type provides the company's product inventory, and includes the price and quantity of all products, and product variants, available for sale.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListProductsResponse } from "@codat/commerce/dist/sdk/models/operations";
import { ProductVariantStatusEnum } from "@codat/commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.products.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "nulla",
}).then((res: ListProductsResponse | AxiosError) => {
  if (res instanceof ListProductsResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listCategories

Product categories are used to classify a group of products together, either by type (eg "Furniture"), or sometimes by tax profile.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListProductCategoriesResponse } from "@codat/commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.products.listCategories({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "corrupti",
}).then((res: ListProductCategoriesResponse | AxiosError) => {
  if (res instanceof ListProductCategoriesResponse && res.statusCode == 200) {
    // handle response
  }
});
```
