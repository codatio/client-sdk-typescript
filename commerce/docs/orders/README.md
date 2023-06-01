# orders

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [get](#get) - Get order
* [list](#list) - List orders

## get

Get a specific order placed or held on the linked commerce platform.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { GetOrderResponse } from "@codat/commerce/dist/sdk/models/operations";
import { PaymentStatus, PaymentType, ServiceChargeType } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.orders.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderId: "nulla",
}).then((res: GetOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get a list of orders placed or held on the linked commerce platform

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListOrdersResponse } from "@codat/commerce/dist/sdk/models/operations";
import { PaymentStatus, PaymentType, ServiceChargeType } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.orders.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "corrupti",
}).then((res: ListOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
