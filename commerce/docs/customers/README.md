# customers

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [list](#list) - List customers

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
  query: "corrupti",
}).then((res: ListCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
