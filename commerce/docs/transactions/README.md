# transactions

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [list](#list) - List transactions

## list

Details of all financial transactions recorded in the commerce or point of sale system are added to the Transactions data type. For example, payments, service charges, and fees.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListTransactionsResponse } from "@codat/commerce/dist/sdk/models/operations";
import { TransactionSourceType, TransactionType } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.transactions.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "vel",
}).then((res: ListTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
