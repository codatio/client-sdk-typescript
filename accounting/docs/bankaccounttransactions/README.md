# bankAccountTransactions

## Overview

Bank transactions for bank accounts

### Available Operations

* [create](#create) - Create bank transactions
* [getCreateModel](#getcreatemodel) - List push options for bank account bank transactions
* [list](#list) - List bank transactions for bank account
* [listTransactions](#listtransactions) - List all bank transactions

## create

Posts bank transactions to the accounting package for a given company.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support POST methods.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBankTransactionsRequest, CreateBankTransactionsResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BankTransactionTypeEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBankTransactionsRequest = {
  bankTransactions: {
    accountId: "quis",
    transactions: [
      {
        amount: 6481.72,
        balance: 202.18,
        clearedOnDate: "ipsam",
        counterparty: "repellendus",
        description: "sapiente",
        id: "c2ddf7cc-78ca-41ba-928f-c816742cb739",
        modifiedDate: "aspernatur",
        reconciled: false,
        reference: "perferendis",
        sourceModifiedDate: "ad",
        transactionType: BankTransactionTypeEnum.Check,
      },
    ],
  },
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 149675,
};

sdk.bankAccountTransactions.create(req).then((res: CreateBankTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Gets the options of pushing bank account transactions.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateBankAccountModelRequest, GetCreateBankAccountModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateBankAccountModelRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bankAccountTransactions.getCreateModel(req).then((res: GetCreateBankAccountModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets bank transactions for a given bank account ID

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBankAccountTransactionsRequest, ListBankAccountTransactionsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BankTransactionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
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
  query: "iste",
};

sdk.bankAccountTransactions.list(req).then((res: ListBankAccountTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listTransactions

Gets the latest bank transactions for given account ID and company. Doesn't require connection ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBankTransactionsRequest, ListBankTransactionsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BankTransactionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBankTransactionsRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "dolor",
};

sdk.bankAccountTransactions.listTransactions(req).then((res: ListBankTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
