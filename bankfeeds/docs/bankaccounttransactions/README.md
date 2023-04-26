# bankAccountTransactions

## Overview

Bank feed bank accounts

### Available Operations

* [createBankTransactions](#createbanktransactions) - Create bank transactions
* [getCreateBankAccountModel](#getcreatebankaccountmodel) - List push options for bank account bank transactions
* [listBankAccountTransactions](#listbankaccounttransactions) - List bank transactions for bank account

## createBankTransactions

Posts bank transactions to the accounting package for a given company.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support POST methods.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { CreateBankTransactionsRequest, CreateBankTransactionsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import {
  BankTransactionTypeEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/bank-feeds/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBankTransactionsRequest = {
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
        transactionType: BankTransactionTypeEnum.Credit,
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
        transactionType: BankTransactionTypeEnum.Cash,
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
        transactionType: BankTransactionTypeEnum.Other,
      },
    ],
  },
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 230533,
};

sdk.bankAccountTransactions.createBankTransactions(req).then((res: CreateBankTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateBankAccountModel

Gets the options of pushing bank account transactions.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { GetCreateBankAccountModelRequest, GetCreateBankAccountModelResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/bank-feeds/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateBankAccountModelRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bankAccountTransactions.getCreateBankAccountModel(req).then((res: GetCreateBankAccountModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listBankAccountTransactions

Gets bank transactions for a given bank account ID

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { ListBankAccountTransactionsRequest, ListBankAccountTransactionsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { BankTransactionTypeEnum } from "@codat/bank-feeds/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBankAccountTransactionsRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "deserunt",
};

sdk.bankAccountTransactions.listBankAccountTransactions(req).then((res: ListBankAccountTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
