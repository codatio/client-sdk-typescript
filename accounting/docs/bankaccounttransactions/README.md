# bankAccountTransactions

## Overview

Bank transactions for bank accounts

### Available Operations

* [create](#create) - Create bank transactions
* [getCreateModel](#getcreatemodel) - List push options for bank account bank transactions
* [list](#list) - List bank transactions for bank account

## create

Posts bank transactions to the accounting package for a given company.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) to see which integrations support this endpoint.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBankTransactionsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccountTransactions.create({
  createBankTransactions: {
    accountId: "excepturi",
    transactions: [
      {
        amount: 9255.97,
        date: "2022-10-23T00:00:00.000Z",
        description: "ab",
        id: "51a05dfc-2ddf-47cc-b8ca-1ba928fc8167",
      },
      {
        amount: 2645.55,
        date: "2022-10-23T00:00:00.000Z",
        description: "impedit",
        id: "b7392059-2939-46fe-a759-6eb10faaa235",
      },
    ],
  },
  accountId: "explicabo",
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 750686,
}).then((res: CreateBankTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Gets the options of pushing bank account transactions.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateBankAccountModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccountTransactions.getCreateModel({
  accountId: "enim",
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
import { CodatAccounting } from "@codat/accounting";
import { ListBankAccountTransactionsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BankTransactionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccountTransactions.list({
  accountId: "omnis",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "nemo",
}).then((res: ListBankAccountTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
