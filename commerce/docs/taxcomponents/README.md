# taxComponents

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [list](#list) - List tax components

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
  query: "illum",
}).then((res: ListTaxComponentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
