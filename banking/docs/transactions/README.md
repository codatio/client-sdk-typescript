# transactions

## Overview

An immutable source of up-to-date information on income and expenditure.

### Available Operations

* [get](#get) - Get bank transaction
* [list](#list) - List banking transactions
* [list](#list) - List transactions

## get

Gets a specified bank transaction for a given company

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { GetTransactionRequest, GetTransactionResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCodeEnum } from "@codat/banking/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetTransactionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  transactionId: "nulla",
};

sdk.transactions.get(req).then((res: GetTransactionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets a list of transactions incurred by a company across all bank accounts.

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { ListBankTransactionsRequest, ListBankTransactionsResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCodeEnum } from "@codat/banking/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBankTransactionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "corrupti",
};

sdk.transactions.list(req).then((res: ListBankTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets a list of transactions incurred by a bank account.

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { ListTransactionsRequest, ListTransactionsResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCodeEnum } from "@codat/banking/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListTransactionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "illum",
};

sdk.transactions.list(req).then((res: ListTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
