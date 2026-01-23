# BankAccounts

## Overview

Access bank accounts in an SMBs accounting software.

### Available Operations

* [list](#list) - List bank accounts
* [getCreateModel](#getcreatemodel) - Get create/update bank account model
* [create](#create) - Create bank account

## list

The *List bank accounts* endpoint returns a list of [bank accounts](https://docs.codat.io/bank-feeds-api#/schemas/BankAccount) for a given company's connection.

[Bank accounts](https://docs.codat.io/bank-feeds-api#/schemas/BankAccount) are financial accounts maintained by a bank or other financial institution.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/bank-feeds-api#/operations/refresh-company-data).
    

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-bank-accounts" method="get" path="/companies/{companyId}/connections/{connectionId}/data/bankAccounts" -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.bankAccounts.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
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
import { bankAccountsList } from "@codat/bank-feeds/funcs/bankAccountsList.js";

// Use `CodatBankFeedsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatBankFeeds = new CodatBankFeedsCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await bankAccountsList(codatBankFeeds, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankAccountsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListBankAccountsRequest](../../sdk/models/operations/listbankaccountsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.BankAccounts](../../sdk/models/shared/bankaccounts.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorMessage               | 400, 401, 402, 403, 404, 409, 429 | application/json                  |
| errors.ErrorMessage               | 500, 503                          | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## getCreateModel

The *Get create/update bank account model* endpoint returns the expected data for the request payload when creating and updating a [bank account](https://docs.codat.io/bank-feeds-api#/schemas/BankAccount) for a given company and integration.

[Bank accounts](https://docs.codat.io/bank-feeds-api#/schemas/BankAccount) are financial accounts maintained by a bank or other financial institution.

**Integration-specific behavior**

See the *response examples* for integration-specific indicative models.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-create-bankAccounts-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/bankAccounts" -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.bankAccounts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatBankFeedsCore } from "@codat/bank-feeds/core.js";
import { bankAccountsGetCreateModel } from "@codat/bank-feeds/funcs/bankAccountsGetCreateModel.js";

// Use `CodatBankFeedsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatBankFeeds = new CodatBankFeedsCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await bankAccountsGetCreateModel(codatBankFeeds, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankAccountsGetCreateModel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCreateBankAccountsModelRequest](../../sdk/models/operations/getcreatebankaccountsmodelrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## create

The *Create bank account* endpoint creates a new [bank account](https://docs.codat.io/bank-feeds-api#/schemas/BankAccount) for a given company's connection.

[Bank accounts](https://docs.codat.io/bank-feeds-api#/schemas/BankAccount) are financial accounts maintained by a bank or other financial institution.

**Integration-specific behavior**

Required data may vary by integration. To see what data to post, first call [Get create/update bank account model](https://docs.codat.io/bank-feeds-api#/operations/get-create-update-bankAccounts-model).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-bank-account" method="post" path="/companies/{companyId}/connections/{connectionId}/push/bankAccounts" -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.bankAccounts.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    bankAccountPrototype: {
      currency: "GBP",
      status: "Active",
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
import { bankAccountsCreate } from "@codat/bank-feeds/funcs/bankAccountsCreate.js";

// Use `CodatBankFeedsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatBankFeeds = new CodatBankFeedsCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await bankAccountsCreate(codatBankFeeds, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    bankAccountPrototype: {
      currency: "GBP",
      status: "Active",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankAccountsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBankAccountRequest](../../sdk/models/operations/createbankaccountrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.BankAccountCreateResponse](../../sdk/models/shared/bankaccountcreateresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |