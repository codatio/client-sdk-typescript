# bankFeedAccounts

## Overview

Bank feed bank accounts

### Available Operations

* [createBankFeed](#createbankfeed) - Create bank feed bank accounts
* [getBankFeeds](#getbankfeeds) - List bank feed bank accounts
* [updateBankFeed](#updatebankfeed) - Update bank feed bank account

## createBankFeed

Put BankFeed BankAccounts for a single data source connected to a single company.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { CreateBankFeedRequest, CreateBankFeedResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBankFeedRequest = {
  requestBody: [
    {
      accountName: "vel",
      accountNumber: "natus",
      accountType: "omnis",
      balance: 4748.67,
      currency: "perferendis",
      feedStartDate: "nihil",
      id: "4ba4469b-6e21-4419-9989-0afa563e2516",
      modifiedDate: "doloribus",
      sortCode: "debitis",
      status: "eius",
    },
    {
      accountName: "maxime",
      accountNumber: "deleniti",
      accountType: "facilis",
      balance: 4479.26,
      currency: "architecto",
      feedStartDate: "architecto",
      id: "e5b7fd2e-d028-4921-8ddc-692601fb576b",
      modifiedDate: "eaque",
      sortCode: "pariatur",
      status: "nemo",
    },
  ],
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bankFeedAccounts.createBankFeed(req).then((res: CreateBankFeedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getBankFeeds

Get BankFeed BankAccounts for a single data source connected to a single company.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { GetBankFeedsRequest, GetBankFeedsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBankFeedsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bankFeedAccounts.getBankFeeds(req).then((res: GetBankFeedsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateBankFeed

Update a single BankFeed BankAccount for a single data source connected to a single company.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { UpdateBankFeedRequest, UpdateBankFeedResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateBankFeedRequest = {
  bankFeedAccount: {
    accountName: "voluptatibus",
    accountNumber: "perferendis",
    accountType: "fugiat",
    balance: 2307.42,
    currency: "aut",
    feedStartDate: "cumque",
    id: "5fbb2587-0532-402c-b3d5-fe9b90c28909",
    modifiedDate: "rerum",
    sortCode: "adipisci",
    status: "asperiores",
  },
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bankFeedAccounts.updateBankFeed(req).then((res: UpdateBankFeedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
