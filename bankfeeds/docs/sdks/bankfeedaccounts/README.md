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
      accountName: "doloremque",
      accountNumber: "reprehenderit",
      accountType: "ut",
      balance: 9795.87,
      currency: "GBP",
      feedStartDate: "2022-10-23T00:00:00.000Z",
      id: "471b5e6e-13b9-49d4-88e1-e91e450ad2ab",
      modifiedDate: "2022-10-23T00:00:00.000Z",
      sortCode: "labore",
      status: "modi",
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

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateBankFeedRequest](../../models/operations/createbankfeedrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateBankFeedResponse](../../models/operations/createbankfeedresponse.md)>**


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

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetBankFeedsRequest](../../models/operations/getbankfeedsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetBankFeedsResponse](../../models/operations/getbankfeedsresponse.md)>**


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
    accountName: "qui",
    accountNumber: "aliquid",
    accountType: "cupiditate",
    balance: 5528.22,
    currency: "GBP",
    feedStartDate: "2022-10-23T00:00:00.000Z",
    id: "d502a94b-b4f6-43c9-a9e9-a3efa77dfb14",
    modifiedDate: "2022-10-23T00:00:00.000Z",
    sortCode: "facere",
    status: "ea",
  },
  accountId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
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

