# Transactions

## Overview

Create new bank account transactions for a company's connections, and see previous operations.

### Available Operations

* [create](#create) - Create bank transactions
* [getCreateModel](#getcreatemodel) - Get create bank transactions model
* [getCreateOperation](#getcreateoperation) - Get create operation
* [listCreateOperations](#listcreateoperations) - List create operations

## create

﻿The *Create bank transactions* endpoint creates new [bank transactions](https://docs.codat.io/bank-feeds-api#/schemas/BankTransactions) for a given company's connection.

[Bank transactions](https://docs.codat.io/bank-feeds-api#/schemas/BankTransactions) are records of monetary amounts that have moved in and out of an SMB's bank account.

**Integration-specific behavior**

The required properties may vary based on the integration. For detailed requirements specific to each accounting software, refer to the API reference examples.
Alternatively, you can view the [Get create bank transaction model](https://docs.codat.io/bank-feeds-api#/operations/get-create-bank-transactions-model) for more information.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-bank-transactions" method="post" path="/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions" -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { Decimal } from "@codat/bank-feeds/sdk/types";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.transactions.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    createBankTransactions: {
      accountId: "49cd5a42-b311-4750-9361-52e2ed1d4653",
      transactions: [
        {
          id: "716422529",
          date: "2023-08-22T10:21:00",
          description: "Repayment of Credit Card",
          counterparty: "Bank of Example",
          reference: "Ref-12345",
          reconciled: true,
          amount: new Decimal("100"),
          balance: new Decimal("100"),
          transactionType: "Credit",
        },
        {
          id: "716422530",
          date: "2023-08-22T10:22:00",
          description: "Amazon Purchase",
          counterparty: "Amazon",
          reference: "Ref-12346",
          reconciled: false,
          amount: new Decimal("-100"),
          balance: new Decimal("0"),
          transactionType: "Debit",
        },
        {
          id: "716422531",
          date: "2023-08-22T10:23:00",
          description: "Office Supplies",
          counterparty: "Office Mart",
          reference: "Ref-12347",
          reconciled: false,
          amount: new Decimal("-60"),
          balance: new Decimal("-60"),
          transactionType: "Debit",
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatBankFeedsCore } from "@codat/bank-feeds/core.js";
import { transactionsCreate } from "@codat/bank-feeds/funcs/transactionsCreate.js";
import { Decimal } from "@codat/bank-feeds/sdk/types";

// Use `CodatBankFeedsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatBankFeeds = new CodatBankFeedsCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await transactionsCreate(codatBankFeeds, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    createBankTransactions: {
      accountId: "49cd5a42-b311-4750-9361-52e2ed1d4653",
      transactions: [
        {
          id: "716422529",
          date: "2023-08-22T10:21:00",
          description: "Repayment of Credit Card",
          counterparty: "Bank of Example",
          reference: "Ref-12345",
          reconciled: true,
          amount: new Decimal("100"),
          balance: new Decimal("100"),
          transactionType: "Credit",
        },
        {
          id: "716422530",
          date: "2023-08-22T10:22:00",
          description: "Amazon Purchase",
          counterparty: "Amazon",
          reference: "Ref-12346",
          reconciled: false,
          amount: new Decimal("-100"),
          balance: new Decimal("0"),
          transactionType: "Debit",
        },
        {
          id: "716422531",
          date: "2023-08-22T10:23:00",
          description: "Office Supplies",
          counterparty: "Office Mart",
          reference: "Ref-12347",
          reconciled: false,
          amount: new Decimal("-60"),
          balance: new Decimal("-60"),
          transactionType: "Debit",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBankTransactionsRequest](../../sdk/models/operations/createbanktransactionsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CreateBankTransactionsResponse](../../sdk/models/shared/createbanktransactionsresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getCreateModel

The *Get create bank account transactions model* endpoint returns the expected data for the request payload when creating [bank account transactions](https://docs.codat.io/bank-feeds-api#/schemas/BankTransactions) for a given company and integration.

[Bank account transactions](https://docs.codat.io/bank-feeds-api#/schemas/BankTransactions) are records of money that has moved in and out of an SMB's bank account.

**Integration-specific behavior**

See the *response examples* for integration-specific indicative models.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-create-bank-transactions-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/bankAccounts/{accountId}/bankTransactions" -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.transactions.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatBankFeedsCore } from "@codat/bank-feeds/core.js";
import { transactionsGetCreateModel } from "@codat/bank-feeds/funcs/transactionsGetCreateModel.js";

// Use `CodatBankFeedsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatBankFeeds = new CodatBankFeedsCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await transactionsGetCreateModel(codatBankFeeds, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGetCreateModel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCreateBankTransactionsModelRequest](../../sdk/models/operations/getcreatebanktransactionsmodelrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PushOption](../../sdk/models/shared/pushoption.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## getCreateOperation

The **Get create operation** endpoint returns a specific [write operation](/using-the-api/push) identified by the `pushOperationKey` that was performed on the company.

Write operations are actions that send requests to Codat, enabling the creation, updating, deletion of records, or uploading attachments in the connected accounting software.

For bank feeds, your push operations will only relate to the `bankTransactions` data type.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-create-operation" method="get" path="/companies/{companyId}/push/{pushOperationKey}" -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.transactions.getCreateOperation({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    pushOperationKey: "23a26d56-6e3d-4414-865c-4fa7ebbb43e3",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatBankFeedsCore } from "@codat/bank-feeds/core.js";
import { transactionsGetCreateOperation } from "@codat/bank-feeds/funcs/transactionsGetCreateOperation.js";

// Use `CodatBankFeedsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatBankFeeds = new CodatBankFeedsCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await transactionsGetCreateOperation(codatBankFeeds, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    pushOperationKey: "23a26d56-6e3d-4414-865c-4fa7ebbb43e3",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGetCreateOperation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCreateOperationRequest](../../sdk/models/operations/getcreateoperationrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PushOperation](../../sdk/models/shared/pushoperation.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## listCreateOperations

The **List create operations** endpoint returns a list of [write operations](/using-the-api/push) performed on the company.

Write operations are actions that send requests to Codat, enabling the creation, updating, deletion of records, or uploading attachments in the connected accounting software. 

For bank feeds, use this endpoint to view write operations related to the `bankTransactions` data type.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-create-operations" method="get" path="/companies/{companyId}/push" -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.transactions.listCreateOperations({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatBankFeedsCore } from "@codat/bank-feeds/core.js";
import { transactionsListCreateOperations } from "@codat/bank-feeds/funcs/transactionsListCreateOperations.js";

// Use `CodatBankFeedsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatBankFeeds = new CodatBankFeedsCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await transactionsListCreateOperations(codatBankFeeds, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsListCreateOperations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCreateOperationsRequest](../../sdk/models/operations/listcreateoperationsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PushOperations](../../sdk/models/shared/pushoperations.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |