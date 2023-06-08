# bankFeedAccounts

## Overview

Bank feed bank accounts

### Available Operations

* [create](#create) - Create bank feed bank accounts
* [get](#get) - List bank feed bank accounts
* [update](#update) - Update bank feed bank account

## create

Put BankFeed BankAccounts for a single data source connected to a single company.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { CreateBankFeedResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankFeedAccounts.create({
  requestBody: [
    {
      accountName: "dolor",
      accountNumber: "debitis",
      accountType: "a",
      balance: 6800.56,
      currency: "in",
      feedStartDate: "2022-10-23T00:00:00.000Z",
      id: "dfb14cd6-6ae3-495e-bb9b-a88f3a669970",
      modifiedDate: "2022-10-23T00:00:00.000Z",
      sortCode: "magnam",
      status: "distinctio",
    },
    {
      accountName: "id",
      accountNumber: "labore",
      accountType: "labore",
      balance: 3834.62,
      currency: "natus",
      feedStartDate: "2022-10-23T00:00:00.000Z",
      id: "6e214195-9890-4afa-963e-2516fe4c8b71",
      modifiedDate: "2022-10-23T00:00:00.000Z",
      sortCode: "repudiandae",
      status: "ullam",
    },
    {
      accountName: "expedita",
      accountNumber: "nihil",
      accountType: "repellat",
      balance: 8411.4,
      currency: "sed",
      feedStartDate: "2022-10-23T00:00:00.000Z",
      id: "d028921c-ddc6-4926-81fb-576b0d5f0d30",
      modifiedDate: "2022-10-23T00:00:00.000Z",
      sortCode: "corporis",
      status: "hic",
    },
  ],
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: CreateBankFeedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get BankFeed BankAccounts for a single data source connected to a single company.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { GetBankFeedsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankFeedAccounts.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetBankFeedsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

Update a single BankFeed BankAccount for a single data source connected to a single company.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { UpdateBankFeedResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankFeedAccounts.update({
  bankFeedAccount: {
    accountName: "libero",
    accountNumber: "nobis",
    accountType: "dolores",
    balance: 3394.04,
    currency: "totam",
    feedStartDate: "2022-10-23T00:00:00.000Z",
    id: "053202c7-3d5f-4e9b-90c2-8909b3fe49a8",
    modifiedDate: "2022-10-23T00:00:00.000Z",
    sortCode: "provident",
    status: "nobis",
  },
  accountId: "7110701885",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UpdateBankFeedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
