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
      accountName: "ipsa",
      accountNumber: "reiciendis",
      accountType: "est",
      balance: 6531.4,
      currency: "laborum",
      feedStartDate: "dolores",
      id: "352c5955-907a-4ff1-a3a2-fa9467739251",
      modifiedDate: "laborum",
      sortCode: "animi",
      status: "enim",
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
    accountName: "odit",
    accountNumber: "quo",
    accountType: "sequi",
    balance: 9495.72,
    currency: "ipsam",
    feedStartDate: "id",
    id: "d019da1f-fe78-4f09-bb00-74f15471b5e6",
    modifiedDate: "repudiandae",
    sortCode: "quae",
    status: "ipsum",
  },
  accountId: "quidem",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UpdateBankFeedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
