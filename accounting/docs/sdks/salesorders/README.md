# salesOrders

## Overview

Sales orders

### Available Operations

* [get](#get) - Get sales order
* [list](#list) - List sales orders

## get

The *Get sales order* endpoint returns a single sales order for a given salesOrderId.

[Sales orders](https://docs.codat.io/accounting-api#/schemas/SalesOrder) represent a customer's intention to purchase goods or services from the SMB.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=salesOrders) for integrations that support getting a specific sales order.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


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
  salesOrderId: "officia",
}).then((res: GetSalesOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetSalesOrderRequest](../../models/operations/getsalesorderrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetSalesOrderResponse](../../models/operations/getsalesorderresponse.md)>**


## list

The *List sales orders* endpoint returns a list of [sales orders](https://docs.codat.io/accounting-api#/schemas/SalesOrder) for a given company's connection.

[Sales orders](https://docs.codat.io/accounting-api#/schemas/SalesOrder) represent a customer's intention to purchase goods or services from the SMB.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

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
  query: "mollitia",
}).then((res: ListSalesOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListSalesOrdersRequest](../../models/operations/listsalesordersrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListSalesOrdersResponse](../../models/operations/listsalesordersresponse.md)>**

