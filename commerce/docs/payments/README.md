# payments

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [list](#list) - List payments
* [listMethods](#listmethods) - List payment methods

## list

List commerce payments for the given company & data connection.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListPaymentsResponse } from "@codat/commerce/dist/sdk/models/operations";
import { PaymentStatus } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.payments.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quibusdam",
}).then((res: ListPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listMethods

Retrieve a list of payment methods, such as card, cash or other online payment methods, as held in the linked commerce platform.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListPaymentMethodsResponse } from "@codat/commerce/dist/sdk/models/operations";
import { PaymentMethodStatus } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.payments.listMethods({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "unde",
}).then((res: ListPaymentMethodsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
