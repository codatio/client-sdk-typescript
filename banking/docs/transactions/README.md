# transactions

## Overview

An immutable source of up-to-date information on income and expenditure.

### Available Operations

* [get](#get) - Get bank transaction
* [list](#list) - List transactions
* [~~listBankTransactions~~](#listbanktransactions) - List banking transactions :warning: **Deprecated** - Use `list` instead.

## get

Gets a specified bank transaction for a given company

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { GetTransactionResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCode } from "@codat/banking/dist/sdk/models/shared";

const sdk = new CodatBanking({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.transactions.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  transactionId: "nulla",
}).then((res: GetTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets a list of transactions incurred by a bank account.

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { ListTransactionsResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCode } from "@codat/banking/dist/sdk/models/shared";

const sdk = new CodatBanking({
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
  query: "corrupti",
}).then((res: ListTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~listBankTransactions~~

Gets a list of transactions incurred by a company across all bank accounts.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible. Use `list` instead.

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { ListBankTransactionsResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCode } from "@codat/banking/dist/sdk/models/shared";

const sdk = new CodatBanking({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.transactions.listBankTransactions({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "illum",
}).then((res: ListBankTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
