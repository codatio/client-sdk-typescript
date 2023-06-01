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
      accountName: "provident",
      accountNumber: "necessitatibus",
      accountType: "sint",
      balance: 6389.21,
      currency: "dolor",
      feedStartDate: "debitis",
      id: "fa77dfb1-4cd6-46ae-b95e-fb9ba88f3a66",
      modifiedDate: "natus",
      sortCode: "omnis",
      status: "molestiae",
    },
    {
      accountName: "perferendis",
      accountNumber: "nihil",
      accountType: "magnam",
      balance: 7160.75,
      currency: "id",
      feedStartDate: "labore",
      id: "469b6e21-4195-4989-8afa-563e2516fe4c",
      modifiedDate: "deleniti",
      sortCode: "facilis",
      status: "in",
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
    accountName: "architecto",
    accountNumber: "architecto",
    accountType: "repudiandae",
    balance: 3523.12,
    currency: "expedita",
    feedStartDate: "nihil",
    id: "fd2ed028-921c-4ddc-a926-01fb576b0d5f",
    modifiedDate: "perferendis",
    sortCode: "fugiat",
    status: "amet",
  },
  accountId: "aut",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UpdateBankFeedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
