# bankFeedAccounts

## Overview

Bank feed bank accounts

### Available Operations

* [create](#create) - Create a bank feed bank account
* [list](#list) - List bank feed bank accounts
* [~~putBankFeed~~](#putbankfeed) - Create bank feed bank accounts :warning: **Deprecated**
* [update](#update) - Update bank feed bank account

## create

Post a BankFeed BankAccount for a single data source connected to a single company.

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
  bankFeedAccount: {
    accountName: "maiores",
    accountNumber: "dicta",
    accountType: "corporis",
    balance: 2961.4,
    currency: "USD",
    feedStartDate: "2022-10-23T00:00:00.000Z",
    id: "b5e6e13b-99d4-488e-9e91-e450ad2abd44",
    modifiedDate: "2022-10-23T00:00:00.000Z",
    sortCode: "aliquid",
    status: "cupiditate",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: CreateBankFeedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateBankFeedRequest](../../models/operations/createbankfeedrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateBankFeedResponse](../../models/operations/createbankfeedresponse.md)>**


## list

﻿The *List bank feed bank accounts* endpoint returns a list of [bank feed accounts](https://docs.codat.io/bank-feeds-api#/schemas/BankFeedAccount) for a given company's connection.

[Bank feed accounts](https://docs.codat.io/bank-feeds-api#/schemas/BankFeedAccount) are the bank's bank account from which transactions are synced into the accounting platform.



### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { ListBankFeedsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankFeedAccounts.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: ListBankFeedsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListBankFeedsRequest](../../models/operations/listbankfeedsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListBankFeedsResponse](../../models/operations/listbankfeedsresponse.md)>**


## ~~putBankFeed~~

Put BankFeed BankAccounts for a single data source connected to a single company.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { PutBankFeedResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankFeedAccounts.putBankFeed({
  requestBody: [
    {
      accountName: "perferendis",
      accountNumber: "magni",
      accountType: "assumenda",
      balance: 3698.08,
      currency: "GBP",
      feedStartDate: "2022-10-23T00:00:00.000Z",
      id: "a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66",
      modifiedDate: "2022-10-23T00:00:00.000Z",
      sortCode: "accusamus",
      status: "non",
    },
    {
      accountName: "occaecati",
      accountNumber: "enim",
      accountType: "accusamus",
      balance: 9654.17,
      currency: "EUR",
      feedStartDate: "2022-10-23T00:00:00.000Z",
      id: "ba88f3a6-6997-4074-ba44-69b6e2141959",
      modifiedDate: "2022-10-23T00:00:00.000Z",
      sortCode: "sint",
      status: "accusantium",
    },
    {
      accountName: "mollitia",
      accountNumber: "reiciendis",
      accountType: "mollitia",
      balance: 3209.97,
      currency: "USD",
      feedStartDate: "2022-10-23T00:00:00.000Z",
      id: "e2516fe4-c8b7-411e-9b7f-d2ed028921cd",
      modifiedDate: "2022-10-23T00:00:00.000Z",
      sortCode: "maxime",
      status: "ea",
    },
  ],
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: PutBankFeedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.PutBankFeedRequest](../../models/operations/putbankfeedrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PutBankFeedResponse](../../models/operations/putbankfeedresponse.md)>**


## update

﻿The *Update bank feed bank account* endpoint updates a single bank feed bank account for a single data source connected to a single company.

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
    accountName: "excepturi",
    accountNumber: "odit",
    accountType: "ea",
    balance: 332.22,
    currency: "GBP",
    feedStartDate: "2022-10-23T00:00:00.000Z",
    id: "b576b0d5-f0d3-40c5-bbb2-587053202c73",
    modifiedDate: "2022-10-23T00:00:00.000Z",
    sortCode: "nostrum",
    status: "hic",
  },
  accountId: "EILBDVJVNUAGVKRQ",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UpdateBankFeedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateBankFeedRequest](../../models/operations/updatebankfeedrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateBankFeedResponse](../../models/operations/updatebankfeedresponse.md)>**

