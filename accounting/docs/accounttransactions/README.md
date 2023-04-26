# accountTransactions

## Overview

Account transactions

### Available Operations

* [get](#get) - Get account transaction
* [list](#list) - List account transactions

## get

Returns a specific [account transaction](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAccountTransactionRequest, GetAccountTransactionResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountTransactionStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountTransactionRequest = {
  accountTransactionId: "provident",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.accountTransactions.get(req).then((res: GetAccountTransactionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Returns a list of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction) for a given company's connection.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListAccountTransactionsRequest, ListAccountTransactionsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountTransactionStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListAccountTransactionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "distinctio",
};

sdk.accountTransactions.list(req).then((res: ListAccountTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
