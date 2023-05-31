# bankAccountTransactions

## Overview

Bank feed bank accounts

### Available Operations

* [createBankTransactions](#createbanktransactions) - Create bank transactions
* [getCreateBankAccountModel](#getcreatebankaccountmodel) - List push options for bank account bank transactions
* [listBankAccountTransactions](#listbankaccounttransactions) - List bank transactions for bank account

## createBankTransactions

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

sdk.bankAccountTransactions.createBankTransactions({
  bankTransactions: {
    accountId: "laborum",
    transactions: [
      {
        amount: 3172.02,
        balance: 1381.83,
        clearedOnDate: "quo",
        counterparty: "sequi",
        description: "tenetur",
        id: "5ad019da-1ffe-478f-897b-0074f15471b5",
        modifiedDate: "accusamus",
        reconciled: false,
        reference: "commodi",
        sourceModifiedDate: "repudiandae",
        transactionType: BankTransactionType.Credit,
      },
      {
        amount: 2168.22,
        balance: 6924.72,
        clearedOnDate: "molestias",
        counterparty: "excepturi",
        description: "pariatur",
        id: "488e1e91-e450-4ad2-abd4-4269802d502a",
        modifiedDate: "excepturi",
        reconciled: false,
        reference: "tempora",
        sourceModifiedDate: "facilis",
        transactionType: BankTransactionType.Cash,
      },
      {
        amount: 2884.76,
        balance: 9621.89,
        clearedOnDate: "eum",
        counterparty: "non",
        description: "eligendi",
        id: "969e9a3e-fa77-4dfb-94cd-66ae395efb9b",
        modifiedDate: "id",
        reconciled: false,
        reference: "blanditiis",
        sourceModifiedDate: "deleniti",
        transactionType: BankTransactionType.Other,
      },
    ],
  },
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 230533,
}).then((res: CreateBankTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateBankAccountModel

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

sdk.bankAccountTransactions.getCreateBankAccountModel({
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateBankAccountModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listBankAccountTransactions

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

sdk.bankAccountTransactions.listBankAccountTransactions({
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "deserunt",
}).then((res: ListBankAccountTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
