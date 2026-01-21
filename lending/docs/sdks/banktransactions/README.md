# LoanWriteback.BankTransactions

## Overview

### Available Operations

* [getCreateModel](#getcreatemodel) - Get create bank account transactions model
* [create](#create) - Create bank account transactions

## getCreateModel

The *Get create bank account transactions model* endpoint returns the expected data for the request payload when creating [bank account transactions](https://docs.codat.io/lending-api#/schemas/BankTransactions) for a given company and integration.

[Bank account transactions](https://docs.codat.io/lending-api#/schemas/BankTransactions) are records of money that has moved in and out of an SMB's bank account.

**Integration-specific behavior**

See the *response examples* for integration-specific indicative models.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-create-bank-transactions-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/bankAccounts/{accountId}/bankTransactions" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.bankTransactions.getCreateModel({
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
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackBankTransactionsGetCreateModel } from "@codat/lending/funcs/loanWritebackBankTransactionsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackBankTransactionsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackBankTransactionsGetCreateModel failed:", res.error);
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

## create

The *Create bank account transactions* endpoint creates new [bank account transactions](https://docs.codat.io/lending-api#/schemas/BankTransactions) for a given company's connection.

[Bank account transactions](https://docs.codat.io/lending-api#/schemas/BankTransactions) are records of money that has moved in and out of an SMB's bank account.

**Integration-specific behavior**

Required data may vary by integration. To see what data to post, first call [Get create bank transaction model](https://docs.codat.io/lending-api#/operations/get-create-bankTransactions-model).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-bank-transactions" method="post" path="/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.bankTransactions.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    accountingCreateBankTransactions: {
      accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
      transactions: [
        {
          date: "2022-10-23T00:00:00Z",
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
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackBankTransactionsCreate } from "@codat/lending/funcs/loanWritebackBankTransactionsCreate.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackBankTransactionsCreate(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    accountingCreateBankTransactions: {
      accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
      transactions: [
        {
          date: "2022-10-23T00:00:00Z",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackBankTransactionsCreate failed:", res.error);
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

**Promise\<[shared.AccountingCreateBankTransactionsResponse](../../sdk/models/shared/accountingcreatebanktransactionsresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |