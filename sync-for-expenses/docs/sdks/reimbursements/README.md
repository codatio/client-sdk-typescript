# Reimbursements
(*reimbursements*)

## Overview

Create and update transactions that represent your customers' repayable spend.

### Available Operations

* [create](#create) - Create reimbursable expense transaction
* [update](#update) - Update reimbursable expense transaction

## create

Use the *Create reimbursable expense* endpoint to create a [reimbursement request](https://docs.codat.io/sync-for-expenses-api#/schemas/ReimbursableExpenseTransactionRequest) in the accounting platform for a given company's connection. 

Employee reimbursement requests are reflected in the accounting system in the form of Bills against an employee, who is a supplier.

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
        contactRef: {
          id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
        },
        issueDate: "2022-10-23T00:00:00Z",
        dueDate: "2022-10-23T00:00:00Z",
        currency: "GBP",
        notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
        lines: [
          {
            description: "2-night hotel stay",
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
| `request`                                                                                                                                                                      | [operations.CreateReimbursableExpenseTransactionRequest](../../sdk/models/operations/createreimbursableexpensetransactionrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[shared.CreateReimbursableExpenseResponse](../../sdk/models/shared/createreimbursableexpenseresponse.md)\>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## update

The *Update reimbursable expense* endpoint updates an existing [reimbursable expense transaction](https://docs.codat.io/sync-for-expenses-api#/operations/UpdateReimbursableExpenseTransactionRequest) in the accounting platform for a given company's connection. 

Employee reimbursement requests are reflected in the accounting system in the form of Bills against an employee, who is a supplier.

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
      contactRef: {
        id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
      },
      issueDate: "2022-10-23T00:00:00Z",
      dueDate: "2022-10-23T00:00:00Z",
      currency: "GBP",
      notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
      lines: [
        {
          description: "2-night hotel stay",
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
| `request`                                                                                                                                                                      | [operations.UpdateReimbursableExpenseTransactionRequest](../../sdk/models/operations/updatereimbursableexpensetransactionrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[shared.CreateReimbursableExpenseResponse](../../sdk/models/shared/createreimbursableexpenseresponse.md)\>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
