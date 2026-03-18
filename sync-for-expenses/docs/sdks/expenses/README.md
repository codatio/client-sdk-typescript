# Expenses

## Overview

Create and update transactions that represent your customers' spend.

### Available Operations

* [create](#create) - Create expense transaction
* [update](#update) - Update expense transactions

## create

The *Create expense* endpoint creates an [expense transaction](https://docs.codat.io/sync-for-expenses-api#/schemas/ExpenseTransaction) in the accounting software for a given company's connection. 

[Expense transactions](https://docs.codat.io/sync-for-expenses-api#/schemas/ExpenseTransaction) represent transactions made with a company debit or credit card. 

### Supported Integrations

| Integration                   | Supported |
|-------------------------------|-----------|
| Dynamics 365 Business Central | Yes       |
| FreeAgent                     | Yes       |
| QuickBooks Desktop            | Yes       |
| QuickBooks Online             | Yes       |
| Oracle NetSuite               | Yes       |
| Sage Intacct                  | Yes       |
| Xero                          | Yes       |
| Zoho Books                    | Yes       |


### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="create-expense-transaction" method="post" path="/companies/{companyId}/sync/expenses/expense-transactions" example="Example 1" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.expenses.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "a44135b0-6882-489a-83fe-a0c57a4afb19",
        type: "Payment",
        issueDate: "2024-05-21T00:00:00+00:00",
        currency: "GBP",
        currencyRate: new Decimal("1"),
        contactRef: {
          id: "430",
        },
        bankAccountRef: {
          id: "97",
        },
        merchantName: "Amazon UK",
        lines: [
          {
            netAmount: new Decimal("100"),
            taxAmount: new Decimal("20"),
            taxRateRef: {
              id: "23_Bills",
            },
            accountRef: {
              id: "35",
            },
            trackingRefs: [
              {
                id: "DEPARTMENT_3",
              },
              {},
            ],
            invoiceTo: {
              id: "504",
              type: "customer",
            },
          },
        ],
        notes: "amazon purchase",
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
import { expensesCreate } from "@codat/sync-for-expenses/funcs/expensesCreate.js";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await expensesCreate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "a44135b0-6882-489a-83fe-a0c57a4afb19",
        type: "Payment",
        issueDate: "2024-05-21T00:00:00+00:00",
        currency: "GBP",
        currencyRate: new Decimal("1"),
        contactRef: {
          id: "430",
        },
        bankAccountRef: {
          id: "97",
        },
        merchantName: "Amazon UK",
        lines: [
          {
            netAmount: new Decimal("100"),
            taxAmount: new Decimal("20"),
            taxRateRef: {
              id: "23_Bills",
            },
            accountRef: {
              id: "35",
            },
            trackingRefs: [
              {
                id: "DEPARTMENT_3",
              },
              {},
            ],
            invoiceTo: {
              id: "504",
              type: "customer",
            },
          },
        ],
        notes: "amazon purchase",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expensesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Malformed query

<!-- UsageSnippet language="typescript" operationID="create-expense-transaction" method="post" path="/companies/{companyId}/sync/expenses/expense-transactions" example="Malformed query" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.expenses.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "a44135b0-6882-489a-83fe-a0c57a4afb19",
        type: "Payment",
        issueDate: "2024-05-21T00:00:00+00:00",
        currency: "GBP",
        currencyRate: new Decimal("1"),
        contactRef: {
          id: "430",
        },
        bankAccountRef: {
          id: "97",
        },
        merchantName: "Amazon UK",
        lines: [
          {
            netAmount: new Decimal("100"),
            taxAmount: new Decimal("20"),
            taxRateRef: {
              id: "23_Bills",
            },
            accountRef: {
              id: "35",
            },
            trackingRefs: [
              {
                id: "DEPARTMENT_3",
              },
              {},
            ],
            invoiceTo: {
              id: "504",
              type: "customer",
            },
          },
        ],
        notes: "amazon purchase",
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
import { expensesCreate } from "@codat/sync-for-expenses/funcs/expensesCreate.js";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await expensesCreate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "a44135b0-6882-489a-83fe-a0c57a4afb19",
        type: "Payment",
        issueDate: "2024-05-21T00:00:00+00:00",
        currency: "GBP",
        currencyRate: new Decimal("1"),
        contactRef: {
          id: "430",
        },
        bankAccountRef: {
          id: "97",
        },
        merchantName: "Amazon UK",
        lines: [
          {
            netAmount: new Decimal("100"),
            taxAmount: new Decimal("20"),
            taxRateRef: {
              id: "23_Bills",
            },
            accountRef: {
              id: "35",
            },
            trackingRefs: [
              {
                id: "DEPARTMENT_3",
              },
              {},
            ],
            invoiceTo: {
              id: "504",
              type: "customer",
            },
          },
        ],
        notes: "amazon purchase",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expensesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Payment

<!-- UsageSnippet language="typescript" operationID="create-expense-transaction" method="post" path="/companies/{companyId}/sync/expenses/expense-transactions" example="Payment" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.expenses.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "4d7c6929-7770-412b-91bb-44d3bc71d111",
        type: "Payment",
        issueDate: "2024-05-21T00:00:00+00:00",
        currency: "GBP",
        currencyRate: new Decimal("1"),
        contactRef: {
          id: "430",
        },
        bankAccountRef: {
          id: "97",
        },
        merchantName: "Amazon UK",
        lines: [
          {
            netAmount: new Decimal("100"),
            taxAmount: new Decimal("20"),
            taxRateRef: {
              id: "23_Bills",
            },
            accountRef: {
              id: "35",
            },
            trackingRefs: [
              {
                id: "DEPARTMENT_5",
              },
            ],
            invoiceTo: {
              id: "504",
              type: "customer",
            },
          },
        ],
        notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
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
import { expensesCreate } from "@codat/sync-for-expenses/funcs/expensesCreate.js";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await expensesCreate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "4d7c6929-7770-412b-91bb-44d3bc71d111",
        type: "Payment",
        issueDate: "2024-05-21T00:00:00+00:00",
        currency: "GBP",
        currencyRate: new Decimal("1"),
        contactRef: {
          id: "430",
        },
        bankAccountRef: {
          id: "97",
        },
        merchantName: "Amazon UK",
        lines: [
          {
            netAmount: new Decimal("100"),
            taxAmount: new Decimal("20"),
            taxRateRef: {
              id: "23_Bills",
            },
            accountRef: {
              id: "35",
            },
            trackingRefs: [
              {
                id: "DEPARTMENT_5",
              },
            ],
            invoiceTo: {
              id: "504",
              type: "customer",
            },
          },
        ],
        notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expensesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Refund

<!-- UsageSnippet language="typescript" operationID="create-expense-transaction" method="post" path="/companies/{companyId}/sync/expenses/expense-transactions" example="Refund" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.expenses.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "7008d3f2-aeb4-11ed-afa1-0242ac120002",
        type: "Refund",
        issueDate: "2024-02-17T00:00:00+00:00",
        currency: "GBP",
        contactRef: {
          id: "430",
        },
        bankAccountRef: {
          id: "97",
        },
        merchantName: "Amazon UK",
        lines: [
          {
            netAmount: new Decimal("100"),
            taxAmount: new Decimal("20"),
            taxRateRef: {
              id: "23_Bills",
            },
            accountRef: {
              id: "42",
            },
            trackingRefs: [
              {
                id: "DEPARTMENT_6",
              },
            ],
          },
        ],
        notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
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
import { expensesCreate } from "@codat/sync-for-expenses/funcs/expensesCreate.js";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await expensesCreate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "7008d3f2-aeb4-11ed-afa1-0242ac120002",
        type: "Refund",
        issueDate: "2024-02-17T00:00:00+00:00",
        currency: "GBP",
        contactRef: {
          id: "430",
        },
        bankAccountRef: {
          id: "97",
        },
        merchantName: "Amazon UK",
        lines: [
          {
            netAmount: new Decimal("100"),
            taxAmount: new Decimal("20"),
            taxRateRef: {
              id: "23_Bills",
            },
            accountRef: {
              id: "42",
            },
            trackingRefs: [
              {
                id: "DEPARTMENT_6",
              },
            ],
          },
        ],
        notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expensesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateExpenseTransactionRequest](../../sdk/models/operations/createexpensetransactionrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CreateExpenseResponse](../../sdk/models/shared/createexpenseresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## update

The *Update expense* endpoint updates an existing [expense transaction](https://docs.codat.io/sync-for-expenses-api#/schemas/UpdateExpenseRequest) in the accounting software for a given company's connection. 

[Expense transactions](https://docs.codat.io/sync-for-expenses-api#/schemas/UpdateExpenseRequest) represent transactions made with a company debit or credit card. 

### Supported integrations
The following integrations are supported for the [Payment](https://docs.codat.io/expenses/sync-process/expense-transactions#transaction-types) transaction `type` only: 
| Integration           | Supported |
|-----------------------|-----------|
| FreeAgent             | Yes       |
| QuickBooks Desktop    | Yes       |
| QuickBooks Online     | Yes       |
| Oracle NetSuite       | Yes       |
| Sage Intacct          | Yes       |
| Xero                  | Yes       |
| Zoho Books            | Yes       |

#### Integration-specific behavior

| Integration           | Specifics |
|-----------------------|-----------|
| Sage Intacct          | To sync **debit card expenses**, map the debit card to a Credit Card with the account type set to `Debit`.|

### Example Usage: Malformed query

<!-- UsageSnippet language="typescript" operationID="update-expense-transaction" method="put" path="/companies/{companyId}/sync/expenses/expense-transactions/{transactionId}" example="Malformed query" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.expenses.update({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    updateExpenseRequest: {
      type: "Payment",
      issueDate: "2022-06-28T00:00:00.000Z",
      currency: "GBP",
      contactRef: {
        id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
      },
      bankAccountRef: {
        id: "787dfb37-5707-4dc0-8a86-8d74e4cc78ea",
      },
      merchantName: "Amazon UK",
      lines: [
        {
          netAmount: new Decimal("100"),
          taxAmount: new Decimal("20"),
          taxRateRef: {
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
          },
          accountRef: {
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
          },
          itemRef: null,
          trackingRefs: null,
          invoiceTo: null,
        },
      ],
      notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
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
import { expensesUpdate } from "@codat/sync-for-expenses/funcs/expensesUpdate.js";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await expensesUpdate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    updateExpenseRequest: {
      type: "Payment",
      issueDate: "2022-06-28T00:00:00.000Z",
      currency: "GBP",
      contactRef: {
        id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
      },
      bankAccountRef: {
        id: "787dfb37-5707-4dc0-8a86-8d74e4cc78ea",
      },
      merchantName: "Amazon UK",
      lines: [
        {
          netAmount: new Decimal("100"),
          taxAmount: new Decimal("20"),
          taxRateRef: {
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
          },
          accountRef: {
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
          },
          itemRef: null,
          trackingRefs: null,
          invoiceTo: null,
        },
      ],
      notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expensesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: Payment

<!-- UsageSnippet language="typescript" operationID="update-expense-transaction" method="put" path="/companies/{companyId}/sync/expenses/expense-transactions/{transactionId}" example="Payment" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.expenses.update({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    updateExpenseRequest: {
      type: "Payment",
      issueDate: "2024-05-21T00:00:00+00:00",
      currency: "GBP",
      currencyRate: new Decimal("1"),
      contactRef: {
        id: "430",
      },
      bankAccountRef: {
        id: "97",
      },
      merchantName: "Amazon UK",
      lines: [
        {
          netAmount: new Decimal("100"),
          taxAmount: new Decimal("20"),
          taxRateRef: {
            id: "23_Bills",
          },
          accountRef: {
            id: "35",
          },
          trackingRefs: [
            {
              id: "DEPARTMENT_5",
            },
          ],
          invoiceTo: {
            id: "504",
            type: "customer",
          },
        },
      ],
      notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
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
import { expensesUpdate } from "@codat/sync-for-expenses/funcs/expensesUpdate.js";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await expensesUpdate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    updateExpenseRequest: {
      type: "Payment",
      issueDate: "2024-05-21T00:00:00+00:00",
      currency: "GBP",
      currencyRate: new Decimal("1"),
      contactRef: {
        id: "430",
      },
      bankAccountRef: {
        id: "97",
      },
      merchantName: "Amazon UK",
      lines: [
        {
          netAmount: new Decimal("100"),
          taxAmount: new Decimal("20"),
          taxRateRef: {
            id: "23_Bills",
          },
          accountRef: {
            id: "35",
          },
          trackingRefs: [
            {
              id: "DEPARTMENT_5",
            },
          ],
          invoiceTo: {
            id: "504",
            type: "customer",
          },
        },
      ],
      notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expensesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateExpenseTransactionRequest](../../sdk/models/operations/updateexpensetransactionrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UpdateExpenseResponse](../../sdk/models/shared/updateexpenseresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorMessage               | 400, 401, 402, 403, 404, 422, 429 | application/json                  |
| errors.ErrorMessage               | 500, 503                          | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |