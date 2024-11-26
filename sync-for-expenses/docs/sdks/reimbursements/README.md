# Reimbursements
(*reimbursements*)

## Overview

Create and update transactions that represent your customers' repayable spend.

### Available Operations

* [create](#create) - Create reimbursable expense transaction
* [update](#update) - Update reimbursable expense transaction

## create

Use the *Create reimbursable expense* endpoint to submit an employee expense claim in the accounting platform for a given company's connection.

[Reimbursable expense requests](https://docs.codat.io/sync-for-expenses-api#/schemas/ReimbursableExpenseTransactionRequest) are reflected in the accounting software in the form of **Bills** against an employee (who exists as a supplier in the accounting platform).

### Supported Integrations
| Integration           | Supported |
|-----------------------|-----------|
| FreeAgent             | Yes       |
| QuickBooks Desktop    | Yes       |
| QuickBooks Online     | Yes       |
| Oracle NetSuite       | Yes       |

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.reimbursements.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "4d7c6929-7770-412b-91bb-44d3bc71d111",
        reference: "expenses w/c 01/07",
        contactRef: {
          id: "752",
        },
        issueDate: "2024-05-21",
        dueDate: "2024-05-21",
        currency: "GBP",
        currencyRate: new Decimal("1"),
        notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
        lines: [
          {
            description: "Hotel",
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
                dataType: "trackingCategories",
              },
            ],
            invoiceTo: {
              id: "504",
              type: "customer",
            },
          },
        ],
      },
    ],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { reimbursementsCreate } from "@codat/sync-for-expenses/funcs/reimbursementsCreate.js";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await reimbursementsCreate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "4d7c6929-7770-412b-91bb-44d3bc71d111",
        reference: "expenses w/c 01/07",
        contactRef: {
          id: "752",
        },
        issueDate: "2024-05-21",
        dueDate: "2024-05-21",
        currency: "GBP",
        currencyRate: new Decimal("1"),
        notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
        lines: [
          {
            description: "Hotel",
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
                dataType: "trackingCategories",
              },
            ],
            invoiceTo: {
              id: "504",
              type: "customer",
            },
          },
        ],
      },
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateReimbursableExpenseTransactionRequest](../../sdk/models/operations/createreimbursableexpensetransactionrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CreateReimbursableExpenseResponse](../../sdk/models/shared/createreimbursableexpenseresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorMessage                    | 400, 401, 402, 403, 404, 429, 500, 503 | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |

## update

The *Update reimbursable expense* endpoint updates an existing employee expense claim in the accounting platform for a given company's connection. 

Updating an existing [reimbursable expense transaction](https://docs.codat.io/sync-for-expenses-api#/schemas/UpdateReimbursableExpenseTransactionRequest) will update the existing **bill** against an employee (who exists as a supplier in the accounting software).

### Supported Integrations
| Integration           | Supported |
|-----------------------|-----------|
| FreeAgent             | Yes       |
| QuickBooks Online     | Yes       |
| Oracle NetSuite       | Yes       |

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.reimbursements.update({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    updateReimbursableExpenseTransactionRequest: {
      reference: "expenses w/c 01/07",
      contactRef: {
        id: "752",
      },
      issueDate: "2024-05-21",
      dueDate: "2024-05-21",
      currency: "GBP",
      currencyRate: new Decimal("1"),
      notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
      lines: [
        {
          description: "Hotel",
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
              dataType: "trackingCategories",
            },
          ],
          invoiceTo: {
            id: "504",
            type: "customer",
          },
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { reimbursementsUpdate } from "@codat/sync-for-expenses/funcs/reimbursementsUpdate.js";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await reimbursementsUpdate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
    updateReimbursableExpenseTransactionRequest: {
      reference: "expenses w/c 01/07",
      contactRef: {
        id: "752",
      },
      issueDate: "2024-05-21",
      dueDate: "2024-05-21",
      currency: "GBP",
      currencyRate: new Decimal("1"),
      notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
      lines: [
        {
          description: "Hotel",
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
              dataType: "trackingCategories",
            },
          ],
          invoiceTo: {
            id: "504",
            type: "customer",
          },
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateReimbursableExpenseTransactionRequest](../../sdk/models/operations/updatereimbursableexpensetransactionrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CreateReimbursableExpenseResponse](../../sdk/models/shared/createreimbursableexpenseresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorMessage                    | 400, 401, 402, 403, 404, 429, 500, 503 | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |