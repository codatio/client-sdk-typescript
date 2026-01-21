# LoanWriteback.Transfers

## Overview

### Available Operations

* [getCreateModel](#getcreatemodel) - Get create transfer model
* [create](#create) - Create transfer

## getCreateModel

The *Get create transfer model* endpoint returns the expected data for the request payload when creating a [transfer](https://docs.codat.io/lending-api#/schemas/Transfer) for a given company and integration.

[Transfers](https://docs.codat.io/lending-api#/schemas/Transfer) record the movement of money between two bank accounts, or between a bank account and a nominal account.

**Integration-specific behavior**

See the *response examples* for integration-specific indicative models.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-create-transfers-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/transfers" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.transfers.getCreateModel({
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
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackTransfersGetCreateModel } from "@codat/lending/funcs/loanWritebackTransfersGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackTransfersGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackTransfersGetCreateModel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCreateTransfersModelRequest](../../sdk/models/operations/getcreatetransfersmodelrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

The *Create transfer* endpoint creates a new [transfer](https://docs.codat.io/lending-api#/schemas/Transfer) for a given company's connection.

[Transfers](https://docs.codat.io/lending-api#/schemas/Transfer) record the movement of money between two bank accounts, or between a bank account and a nominal account.

**Integration-specific behavior**

Required data may vary by integration. To see what data to post, first call [Get create transfer model](https://docs.codat.io/lending-api#/operations/get-create-transfers-model).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-transfer" method="post" path="/companies/{companyId}/connections/{connectionId}/push/transfers" -->
```typescript
import { CodatLending } from "@codat/lending";
import { Decimal } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.transfers.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    accountingTransfer: {
      description: "test transfers push 20230126 12.08",
      contactRef: {
        id: "80000028-167239230944",
        dataType: "customers",
      },
      date: "2023-01-26T11:51:18.104Z",
      from: {
        accountRef: {
          id: "80000028-1671794219",
          dataType: "bankAccounts",
        },
        amount: new Decimal("12"),
      },
      to: {
        accountRef: {
          id: "80000004-1671793811",
          dataType: "bankAccounts",
        },
        amount: new Decimal("12"),
      },
      status: "Unknown",
      trackingCategoryRefs: [
        {
          id: "80000001-1674553252",
          name: "Class 1",
        },
      ],
      metadata: {
        isDeleted: true,
      },
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
import { loanWritebackTransfersCreate } from "@codat/lending/funcs/loanWritebackTransfersCreate.js";
import { Decimal } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackTransfersCreate(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    accountingTransfer: {
      description: "test transfers push 20230126 12.08",
      contactRef: {
        id: "80000028-167239230944",
        dataType: "customers",
      },
      date: "2023-01-26T11:51:18.104Z",
      from: {
        accountRef: {
          id: "80000028-1671794219",
          dataType: "bankAccounts",
        },
        amount: new Decimal("12"),
      },
      to: {
        accountRef: {
          id: "80000004-1671793811",
          dataType: "bankAccounts",
        },
        amount: new Decimal("12"),
      },
      status: "Unknown",
      trackingCategoryRefs: [
        {
          id: "80000001-1674553252",
          name: "Class 1",
        },
      ],
      metadata: {
        isDeleted: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("loanWritebackTransfersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTransferRequest](../../sdk/models/operations/createtransferrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingCreateTransferResponse](../../sdk/models/shared/accountingcreatetransferresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |