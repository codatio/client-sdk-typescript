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
import { AddressTypeEnum, SalesOrderInvoiceStatusEnum, SalesOrderStatusEnum } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.salesOrders.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  salesOrderId: "vel",
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
import { AddressTypeEnum, SalesOrderInvoiceStatusEnum, SalesOrderStatusEnum } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.salesOrders.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "exercitationem",
}).then((res: ListSalesOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
