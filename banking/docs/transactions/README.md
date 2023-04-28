# transactions

## Overview

An immutable source of up-to-date information on income and expenditure.

### Available Operations

* [get](#get) - Get bank transaction
* [list](#list) - List transactions

## get

Gets a specified bank transaction for a given company

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { GetTransactionResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCodeEnum } from "@codat/banking/dist/sdk/models/shared";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
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
import { TransactionCodeEnum } from "@codat/banking/dist/sdk/models/shared";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
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
