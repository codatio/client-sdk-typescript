# paymentMethods

## Overview

Payment methods

### Available Operations

* [get](#get) - Get payment method
* [list](#list) - List all payment methods

## get

Gets the specified payment method for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetPaymentMethodResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PaymentMethodStatus, PaymentMethodType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.paymentMethods.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  paymentMethodId: "ut",
}).then((res: GetPaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the payment methods for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListPaymentMethodsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PaymentMethodStatus, PaymentMethodType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.paymentMethods.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "sunt",
}).then((res: ListPaymentMethodsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
