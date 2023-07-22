# bankFeedAccounts

## Overview

Bank feed bank accounts

### Available Operations

* [create](#create) - Create a bank feed bank account
* [delete](#delete) - delete bank feed bank account
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


## delete

The *delete bank feed bank account* endpoint enables you to remove a source account.

Removing a source account will also remove any mapping between the source bank feed bank accounts and the target bankfeed bank account.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { DeleteBankFeedBankAccountResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankFeedAccounts.delete({
  bankFeedAccount: {
    accountName: "quos",
    accountNumber: "perferendis",
    accountType: "magni",
    balance: 8289.4,
    currency: "USD",
    feedStartDate: "2022-10-23T00:00:00.000Z",
    id: "2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6",
    modifiedDate: "2022-10-23T00:00:00.000Z",
    sortCode: "laborum",
    status: "accusamus",
  },
  accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: DeleteBankFeedBankAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.DeleteBankFeedBankAccountRequest](../../models/operations/deletebankfeedbankaccountrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DeleteBankFeedBankAccountResponse](../../models/operations/deletebankfeedbankaccountresponse.md)>**


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
      accountName: "enim",
      accountNumber: "accusamus",
      accountType: "delectus",
      balance: 6925.32,
      currency: "USD",
      feedStartDate: "2022-10-23T00:00:00.000Z",
      id: "a88f3a66-9970-474b-a446-9b6e21419598",
      modifiedDate: "2022-10-23T00:00:00.000Z",
      sortCode: "accusantium",
      status: "mollitia",
    },
    {
      accountName: "reiciendis",
      accountNumber: "mollitia",
      accountType: "ad",
      balance: 4314.18,
      currency: "GBP",
      feedStartDate: "2022-10-23T00:00:00.000Z",
      id: "2516fe4c-8b71-41e5-b7fd-2ed028921cdd",
      modifiedDate: "2022-10-23T00:00:00.000Z",
      sortCode: "ea",
      status: "excepturi",
    },
    {
      accountName: "odit",
      accountNumber: "ea",
      accountType: "accusantium",
      balance: 691.67,
      currency: "EUR",
      feedStartDate: "2022-10-23T00:00:00.000Z",
      id: "576b0d5f-0d30-4c5f-bb25-87053202c73d",
      modifiedDate: "2022-10-23T00:00:00.000Z",
      sortCode: "hic",
      status: "recusandae",
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
    accountName: "omnis",
    accountNumber: "facilis",
    accountType: "perspiciatis",
    balance: 318.38,
    currency: "EUR",
    feedStartDate: "2022-10-23T00:00:00.000Z",
    id: "8909b3fe-49a8-4d9c-bf48-633323f9b77f",
    modifiedDate: "2022-10-23T00:00:00.000Z",
    sortCode: "dolorum",
    status: "numquam",
  },
  accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
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

