# accountTransactions

## Overview

Account transactions

### Available Operations

* [get](#get) - Get account transaction
* [list](#list) - List account transactions

## get

﻿Returns a specific [account transaction](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAccountTransactionResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountTransactionStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountTransactions.get({
  accountTransactionId: "provident",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetAccountTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

﻿The *List account transactions* endpoint returns a list of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction) for a given company's connection.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListAccountTransactionsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountTransactionStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountTransactions.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "distinctio",
}).then((res: ListAccountTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
