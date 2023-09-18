# Accounts

## Overview

Accounts

### Available Operations

* [create](#create) - Create account
* [get](#get) - Get account
* [getCreateModel](#getcreatemodel) - Get create account model
* [list](#list) - List accounts

## create

The *Create account* endpoint creates a new [account](https://docs.codat.io/sync-for-payables-api#/schemas/Account) for a given company's connection.

[Accounts](https://docs.codat.io/sync-for-payables-api#/schemas/Account) are the categories a business uses to record accounting transactions.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create account model](https://docs.codat.io/sync-for-payables-api#/operations/get-create-chartOfAccounts-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { CreateAccountResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";
import { AccountStatus, AccountType } from "@codat/sync-for-payables/dist/sdk/models/shared";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accounts.create({
  account: {
    currency: "EUR",
    currentBalance: 0,
    description: "Invoices the business has issued but has not yet collected payment on.",
    fullyQualifiedCategory: "Asset.Current",
    fullyQualifiedName: "Cash On Hand",
    id: "1b6266d1-1e44-46c5-8eb5-a8f98e03124e",
    isBankAccount: false,
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    name: "Accounts Receivable",
    nominalCode: "610",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: AccountStatus.Active,
    type: AccountType.Asset,
    validDatatypeLinks: [
      {
        links: [
          "suscipit",
        ],
        property: "iure",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 297534,
}).then((res: CreateAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateAccountRequest](../../models/operations/createaccountrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateAccountResponse](../../models/operations/createaccountresponse.md)>**


## get

The *Get account* endpoint returns a single account for a given `accountId`.

[Accounts](https://docs.codat.io/sync-for-payables-api#/schemas/Account) are the categories a business uses to record accounting transactions.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support getting a specific account.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { GetAccountResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accounts.get({
  accountId: "debitis",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetAccountRequest](../../models/operations/getaccountrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetAccountResponse](../../models/operations/getaccountresponse.md)>**


## getCreateModel

﻿The *Get create account model* endpoint returns the expected data for the request payload when creating an [account](https://docs.codat.io/sync-for-payables-api#/schemas/Account) for a given company and integration.

[Accounts](https://docs.codat.io/sync-for-payables-api#/schemas/Account) are the categories a business uses to record accounting transactions.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { GetCreateAccountModelResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accounts.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateAccountModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetCreateAccountModelRequest](../../models/operations/getcreateaccountmodelrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetCreateAccountModelResponse](../../models/operations/getcreateaccountmodelresponse.md)>**


## list

﻿The *List accounts* endpoint returns a list of [accounts](https://docs.codat.io/sync-for-payables-api#/schemas/Account) for a given company's connection.

[Accounts](https://docs.codat.io/sync-for-payables-api#/schemas/Account) are the categories a business uses to record accounting transactions.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).

### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { ListAccountsResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accounts.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "ipsa",
}).then((res: ListAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListAccountsRequest](../../models/operations/listaccountsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListAccountsResponse](../../models/operations/listaccountsresponse.md)>**

