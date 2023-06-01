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
import { BankTransactionType, DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccountTransactions.create({
  bankTransactions: {
    accountId: "veritatis",
    transactions: [
      {
        amount: 202.18,
        balance: 3682.41,
        clearedOnDate: "repellendus",
        counterparty: "sapiente",
        description: "quo",
        id: "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392",
        modifiedDate: "perferendis",
        reconciled: false,
        reference: "ad",
        sourceModifiedDate: "natus",
        transactionType: BankTransactionType.Debit,
      },
      {
        amount: 6120.96,
        balance: 2223.21,
        clearedOnDate: "natus",
        counterparty: "laboriosam",
        description: "hic",
        id: "ea7596eb-10fa-4aa2-b52c-5955907aff1a",
        modifiedDate: "dolorem",
        reconciled: false,
        reference: "culpa",
        sourceModifiedDate: "consequuntur",
        transactionType: BankTransactionType.Other,
      },
      {
        amount: 6531.08,
        balance: 5818.5,
        clearedOnDate: "numquam",
        counterparty: "commodi",
        description: "quam",
        id: "739251aa-52c3-4f5a-9019-da1ffe78f097",
        modifiedDate: "cum",
        reconciled: false,
        reference: "perferendis",
        sourceModifiedDate: "doloremque",
        transactionType: BankTransactionType.Dep,
      },
    ],
  },
  accountId: "ut",
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 979587,
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
  accountId: "dicta",
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
  accountId: "corporis",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "dolore",
}).then((res: ListBankAccountTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
