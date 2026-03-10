# Transfers

## Overview

Create and update transactions that represent the movement of your customers' money.

### Available Operations

* [create](#create) - Create transfer transaction

## create

Use the *Create transfer* endpoint to create or update a [transfer transaction](https://docs.codat.io/sync-for-expenses-api#/schemas/TransferTransactionRequest) in the accounting software for a given company's connection. 

Transfers record the movement of money between two bank accounts, or between a bank account and a nominal account. Use them to represent actions such as topping up a debit card account or a balance transfer to another credit card.

The `from.amount` and `to.amount` fields are in the native currency of the account.

### Supported Integrations
| Integration           | Create transfer  | Update transfer  |
|-----------------------|------------------|------------------|
| Dynamics				| No			   | No				  |
| FreeAgent             | Yes              | Yes              |
| NetSuite              | No               | No               |
| QuickBooks Desktop    | Yes              | No               |
| QuickBooks Online     | Yes              | Yes              |
| Sage Intacct          | No               | No               |
| Xero                  | Yes              | No               |
| Zoho Books            | No               | No               |

### Example Usage: Create transfer

<!-- UsageSnippet language="typescript" operationID="create-transfer-transaction" method="put" path="/companies/{companyId}/sync/expenses/transfer-transactions/{transactionId}" example="Create transfer" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.transfers.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    transferTransactionRequest: {
      description: "Sample transfer description",
      date: "2021-05-21T00:00:00+00:00",
      from: {
        accountRef: {
          id: "787dfb37-5707-4dc0-8a86-8d74e4cc78ea",
        },
        amount: new Decimal("100"),
      },
      to: {
        accountRef: {
          id: "777dfb37-5506-3dc0-6g86-8d34z4cc78ea",
        },
        amount: new Decimal("100"),
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
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { transfersCreate } from "@codat/sync-for-expenses/funcs/transfersCreate.js";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await transfersCreate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    transferTransactionRequest: {
      description: "Sample transfer description",
      date: "2021-05-21T00:00:00+00:00",
      from: {
        accountRef: {
          id: "787dfb37-5707-4dc0-8a86-8d74e4cc78ea",
        },
        amount: new Decimal("100"),
      },
      to: {
        accountRef: {
          id: "777dfb37-5506-3dc0-6g86-8d34z4cc78ea",
        },
        amount: new Decimal("100"),
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="create-transfer-transaction" method="put" path="/companies/{companyId}/sync/expenses/transfer-transactions/{transactionId}" example="Example 1" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.transfers.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    transferTransactionRequest: {
      description: "Transfer from bank account Y to bank account Z",
      date: "2022-10-23T00:00:00Z",
      from: {
        accountRef: {
          id: "<id>",
        },
        amount: new Decimal("7329.18"),
      },
      to: {
        accountRef: {
          id: "<id>",
        },
        amount: new Decimal("522.15"),
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
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { transfersCreate } from "@codat/sync-for-expenses/funcs/transfersCreate.js";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await transfersCreate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    transferTransactionRequest: {
      description: "Transfer from bank account Y to bank account Z",
      date: "2022-10-23T00:00:00Z",
      from: {
        accountRef: {
          id: "<id>",
        },
        amount: new Decimal("7329.18"),
      },
      to: {
        accountRef: {
          id: "<id>",
        },
        amount: new Decimal("522.15"),
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Malformed query

<!-- UsageSnippet language="typescript" operationID="create-transfer-transaction" method="put" path="/companies/{companyId}/sync/expenses/transfer-transactions/{transactionId}" example="Malformed query" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.transfers.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    transferTransactionRequest: {
      description: "Transfer from bank account Y to bank account Z",
      date: "2022-10-23T00:00:00Z",
      from: {
        accountRef: {
          id: "<id>",
        },
        amount: new Decimal("7329.18"),
      },
      to: {
        accountRef: {
          id: "<id>",
        },
        amount: new Decimal("522.15"),
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
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { transfersCreate } from "@codat/sync-for-expenses/funcs/transfersCreate.js";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await transfersCreate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    transferTransactionRequest: {
      description: "Transfer from bank account Y to bank account Z",
      date: "2022-10-23T00:00:00Z",
      from: {
        accountRef: {
          id: "<id>",
        },
        amount: new Decimal("7329.18"),
      },
      to: {
        accountRef: {
          id: "<id>",
        },
        amount: new Decimal("522.15"),
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTransferTransactionRequest](../../sdk/models/operations/createtransfertransactionrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.TransferTransactionResponse](../../sdk/models/shared/transfertransactionresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |