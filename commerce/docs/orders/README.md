# orders

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [list](#list) - List orders

## list

Get a list of orders placed or held on the linked commerce platform

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListOrdersRequest, ListOrdersResponse } from "@codat/commerce/dist/sdk/models/operations";
import { PaymentStatusEnum, PaymentTypeEnum, ServiceChargeTypeEnum } from "@codat/commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListOrdersRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "distinctio",
};

sdk.orders.list(req).then((res: ListOrdersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
