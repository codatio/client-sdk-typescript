# Adjustments

## Overview

Create transactions that represent your adjustments to your customers' spend.

### Available Operations

* [create](#create) - Create adjustment transaction

## create

Use the *Create adjustment expense* endpoint to create an [adjustment](https://docs.codat.io/sync-for-expenses-api#/schemas/AdjustmentTransactionRequest) in the accounting software for a given company's connection. 

Adjustments represent write-offs and transaction alterations, such as foreign exchange adjustments, in the form of a journal entry. 

### Supported Integrations

| Integration           | Supported |
|-----------------------|-----------|
| QuickBooks Desktop    | Yes       |

### Example Usage: Create adjustment

<!-- UsageSnippet language="typescript" operationID="create-adjustment-transaction" method="post" path="/companies/{companyId}/sync/expenses/adjustment-transactions" example="Create adjustment" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.adjustments.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "3357b3df-5f2e-465d-b9ba-226519dbb8f1",
        date: "2024-05-21T00:00:00+00:00",
        currency: "USD",
        currencyRate: new Decimal("1"),
        reference: "test reference",
        lines: [
          {
            amount: new Decimal("50"),
            accountRef: {
              id: "80000018-1671793811",
            },
            description: "debit line",
            trackingRefs: [
              {
                id: "80000003-1674553958",
              },
            ],
            invoiceTo: {
              id: "80000002-1674552702",
              type: "customer",
            },
          },
          {
            amount: new Decimal("-50"),
            accountRef: {
              id: "80000028-1671794219",
            },
            description: "credit line",
            trackingRefs: [
              {
                id: "80000003-1674553958",
              },
            ],
          },
        ],
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { adjustmentsCreate } from "@codat/sync-for-expenses/funcs/adjustmentsCreate.js";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await adjustmentsCreate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "3357b3df-5f2e-465d-b9ba-226519dbb8f1",
        date: "2024-05-21T00:00:00+00:00",
        currency: "USD",
        currencyRate: new Decimal("1"),
        reference: "test reference",
        lines: [
          {
            amount: new Decimal("50"),
            accountRef: {
              id: "80000018-1671793811",
            },
            description: "debit line",
            trackingRefs: [
              {
                id: "80000003-1674553958",
              },
            ],
            invoiceTo: {
              id: "80000002-1674552702",
              type: "customer",
            },
          },
          {
            amount: new Decimal("-50"),
            accountRef: {
              id: "80000028-1671794219",
            },
            description: "credit line",
            trackingRefs: [
              {
                id: "80000003-1674553958",
              },
            ],
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adjustmentsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="create-adjustment-transaction" method="post" path="/companies/{companyId}/sync/expenses/adjustment-transactions" example="Example 1" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.adjustments.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "6a13b8cf-d482-4389-9f93-08d52faa3dc0",
        date: "2022-10-23T00:00:00Z",
        currency: "Lilangeni",
        lines: [],
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { adjustmentsCreate } from "@codat/sync-for-expenses/funcs/adjustmentsCreate.js";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await adjustmentsCreate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "6a13b8cf-d482-4389-9f93-08d52faa3dc0",
        date: "2022-10-23T00:00:00Z",
        currency: "Lilangeni",
        lines: [],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adjustmentsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Malformed query

<!-- UsageSnippet language="typescript" operationID="create-adjustment-transaction" method="post" path="/companies/{companyId}/sync/expenses/adjustment-transactions" example="Malformed query" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.adjustments.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "6a13b8cf-d482-4389-9f93-08d52faa3dc0",
        date: "2022-10-23T00:00:00Z",
        currency: "Lilangeni",
        lines: [],
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { adjustmentsCreate } from "@codat/sync-for-expenses/funcs/adjustmentsCreate.js";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await adjustmentsCreate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "6a13b8cf-d482-4389-9f93-08d52faa3dc0",
        date: "2022-10-23T00:00:00Z",
        currency: "Lilangeni",
        lines: [],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adjustmentsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAdjustmentTransactionRequest](../../sdk/models/operations/createadjustmenttransactionrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AdjustmentTransactionResponse](../../sdk/models/shared/adjustmenttransactionresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |