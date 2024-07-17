# Expenses
(*expenses*)

## Overview

Create and update transactions that represent your customers' spend.

### Available Operations

* [create](#create) - Create expense transaction
* [update](#update) - Update expense transactions

## create

The *Create expense* endpoint creates an [expense transaction](https://docs.codat.io/sync-for-expenses-api#/schemas/ExpenseTransaction) in the accounting platform for a given company's connection. 

[Expense transactions](https://docs.codat.io/sync-for-expenses-api#/schemas/ExpenseTransaction) represent transactions made with a company debit or credit card. 

### Example Usage

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
          id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
          type: "Supplier",
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
                dataType: "trackingCategories",
              },
              {
                id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
                dataType: "trackingCategories",
              },
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

  // Handle the result
  console.log(result)
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

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## update

The *Update expense* endpoint updates an existing [expense transaction](https://docs.codat.io/sync-for-expenses-api#/schemas/UpdateExpenseRequest) in the accounting platform for a given company's connection. 

[Expense transactions](https://docs.codat.io/sync-for-expenses-api#/schemas/UpdateExpenseRequest) represent transactions made with a company debit or credit card. 


**Integration-specific behaviour**

At the moment you can update expenses only for Xero, QuickBooks Online and FreeAgent ([Payment](https://docs.codat.io/expenses/sync-process/expense-transactions#transaction-types) transaction type only).

### Example Usage

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
        type: "Supplier",
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
          trackingRefs: [
            {
              id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
              dataType: "trackingCategories",
            },
          ],
          invoiceTo: {
            id: "80000002-1674552702",
            type: "customer",
          },
        },
      ],
      notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
    },
  });

  // Handle the result
  console.log(result)
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

| Error Object                        | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.ErrorMessage                 | 400,401,402,403,404,422,429,500,503 | application/json                    |
| errors.SDKError                     | 4xx-5xx                             | */*                                 |
