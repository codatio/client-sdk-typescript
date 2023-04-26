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
import { GetPaymentMethodRequest, GetPaymentMethodResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PaymentMethodStatusEnum, PaymentMethodTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPaymentMethodRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  paymentMethodId: "ea",
};

sdk.paymentMethods.get(req).then((res: GetPaymentMethodResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the payment methods for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListPaymentMethodsRequest, ListPaymentMethodsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum, BillStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListPaymentMethodsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "error",
};

sdk.paymentMethods.list(req).then((res: ListPaymentMethodsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
