# customers

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [get](#get) - Get customer
* [list](#list) - List customers

## get

Get a specific commerce customer for the given company and data connection.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { GetCustomerResponse } from "@codat/commerce/dist/sdk/models/operations";
import { AddressType } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "corrupti",
}).then((res: GetCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

List all commerce customers for the given company and data connection

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListCustomersResponse } from "@codat/commerce/dist/sdk/models/operations";
import { AddressType } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "provident",
}).then((res: ListCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
