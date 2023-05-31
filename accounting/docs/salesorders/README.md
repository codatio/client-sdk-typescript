# salesOrders

## Overview

Sales orders

### Available Operations

* [get](#get) - Get sales order
* [list](#list) - List sales orders

## get

Get sales order

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetSalesOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, SalesOrderInvoiceStatus, SalesOrderStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.salesOrders.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  salesOrderId: "distinctio",
}).then((res: GetSalesOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get sales orders

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListSalesOrdersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, SalesOrderInvoiceStatus, SalesOrderStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.salesOrders.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "fugit",
}).then((res: ListSalesOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
