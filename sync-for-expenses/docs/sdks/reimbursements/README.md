# Reimbursements
(*reimbursements*)

## Overview

Create reimbursable expense transactions.

### Available Operations

* [create](#create) - Create reimbursable expense transaction
* [update](#update) - Update reimbursable expense transaction

## create

Use the *Create reimbursable expense* endpoint to create a [reimbursement request](https://docs.codat.io/sync-for-expenses-api#/schemas/Reimburseable-Expense-Transactions) in the accounting platform for a given company's connection. 

Employee reimbursement requests are reflected in the accounting system in the form of Bills against an employee, who is a supplier.

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { InvoiceToDataType, TrackingRefDataType, TypeT } from "@codat/sync-for-expenses/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reimbursements.create({
    createReimbursableExpenseRequest: {
      items: [
        [
          {
            bankAccountRef: {
              id: "787dfb37-5707-4dc0-8a86-8d74e4cc78ea",
            },
            currency: "GBP",
            dueDate: "<value>",
            id: "4d7c6929-7770-412b-91bb-44d3bc71d111",
            issueDate: "2022-10-23T00:00:00Z",
            lines: [
              {
                accountRef: {
                  id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
                },
                invoiceTo: {
                  dataType: InvoiceToDataType.Customers,
                  id: "80000002-1674552702",
                },
                netAmount: 110.42,
                taxAmount: 14.43,
                taxRateRef: {
                  id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
                },
                trackingRefs: [
                  {
                    dataType: TrackingRefDataType.TrackingCategories,
                    id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
                  },
                ],
              },
            ],
            notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
            recordRef: {
              id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              type: TypeT.Supplier,
            },
          },
        ],
      ],
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.CreateReimbursableExpenseTransactionRequest](../../sdk/models/operations/createreimbursableexpensetransactionrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `retries`                                                                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                             | :heavy_minus_sign:                                                                                                                   | Configuration to override the default retry behavior of the client.                                                                  |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.CreateReimbursableExpenseTransactionResponse](../../sdk/models/operations/createreimbursableexpensetransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

The *Update reimbursable expense* endpoint updates an existing [reimbursable expense transaction](https://docs.codat.io/sync-for-expenses-api#/operations/create-reimbursable-expense-transaction) in the accounting platform for a given company's connection. 

Employee reimbursement requests are reflected in the accounting system in the form of Bills against an employee, who is a supplier.

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { InvoiceToDataType, TrackingRefDataType, TypeT } from "@codat/sync-for-expenses/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reimbursements.update({
    createReimbursableExpenseRequest: {
      items: [
        [
          {
            bankAccountRef: {
              id: "787dfb37-5707-4dc0-8a86-8d74e4cc78ea",
            },
            currency: "GBP",
            dueDate: "<value>",
            id: "4d7c6929-7770-412b-91bb-44d3bc71d111",
            issueDate: "2022-10-23T00:00:00Z",
            lines: [
              {
                accountRef: {
                  id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
                },
                invoiceTo: {
                  dataType: InvoiceToDataType.Customers,
                  id: "80000002-1674552702",
                },
                netAmount: 110.42,
                taxAmount: 14.43,
                taxRateRef: {
                  id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
                },
                trackingRefs: [
                  {
                    dataType: TrackingRefDataType.TrackingCategories,
                    id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
                  },
                ],
              },
            ],
            notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
            recordRef: {
              id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              type: TypeT.Supplier,
            },
          },
        ],
      ],
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.UpdateReimbursableExpenseTransactionRequest](../../sdk/models/operations/updatereimbursableexpensetransactionrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `retries`                                                                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                             | :heavy_minus_sign:                                                                                                                   | Configuration to override the default retry behavior of the client.                                                                  |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.UpdateReimbursableExpenseTransactionResponse](../../sdk/models/operations/updatereimbursableexpensetransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
