# bankAccountTransactions

## Overview

Bank feed bank accounts

### Available Operations

* [create](#create) - Create bank transactions
* [get](#get) - List push options for bank account bank transactions
* [list](#list) - List bank transactions for bank account

## create

Posts bank transactions to the accounting package for a given company.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) to see which integrations support this endpoint.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { CreateBankTransactionsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { BankTransactionType, DataType, PushChangeType, PushOperationStatus } from "@codat/bank-feeds/dist/sdk/models/shared";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccountTransactions.create({
  bankTransactions: {
    accountId: "molestiae",
    amount: 7991.59,
    balance: 8009.11,
    clearedOnDate: "2022-10-23T00:00:00.000Z",
    description: "totam",
    id: "ca1ba928-fc81-4674-acb7-39205929396f",
    modifiedDate: "2022-10-23T00:00:00.000Z",
    reconciled: false,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    transactionType: BankTransactionType.Atm,
  },
  accountId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 613064,
}).then((res: CreateBankTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets the options of pushing bank account transactions.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { GetCreateBankAccountModelResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { PushOptionType } from "@codat/bank-feeds/dist/sdk/models/shared";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccountTransactions.get({
  accountId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateBankAccountModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets bank transactions for a given bank account ID

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { ListBankAccountTransactionsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { BankTransactionType } from "@codat/bank-feeds/dist/sdk/models/shared";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccountTransactions.list({
  accountId: "EILBDVJVNUAGVKRQ",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quidem",
}).then((res: ListBankAccountTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
