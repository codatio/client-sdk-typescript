# Expenses
(*expenses*)

## Overview

Create expense transactions.

### Available Operations

* [create](#create) - Create expense transaction
* [update](#update) - Update expense transactions

## create

The *Create expense* endpoint creates an [expense transaction](https://docs.codat.io/sync-for-expenses-api#/schemas/ExpenseTransaction) in the accounting platform for a given company's connection. 

[Expense transactions](https://docs.codat.io/sync-for-expenses-api#/schemas/ExpenseTransaction) represent transactions made with a company debit or credit card. 


**Integration-specific behaviour**

Some accounting platforms support the option of pushing transactions to a draft state. This can be done by setting the postAsDraft property on the transaction to true. For platforms without this feature, the postAsDraft property should be ignored or set to false.

| Integration | Draft State | Details                                                                                                      |  
|-------------|-------------|--------------------------------------------------------------------------------------------------------------|
| Dynamics 365 Business Central | Yes   | Setting postAsDraft to true will push the transactions to a drafted state rather than posting directly to the ledger. For transactions in a draft state, they can then be approved and posted within the accounting platform. |
| Quickbooks Online | No | -  |
| Xero | No | - |
| NetSuite | No | - |

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { ExpenseTransactionType, InvoiceToDataType, TrackingRefDataType, TypeT } from "@codat/sync-for-expenses/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.expenses.create({
    createExpenseRequest: {
      items: [
        {
          bankAccountRef: {
            id: "787dfb37-5707-4dc0-8a86-8d74e4cc78ea",
          },
          contactRef: {
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
            type: TypeT.Supplier,
          },
          currency: "GBP",
          currencyRate: 1.18,
          id: "a44135b0-6882-489a-83fe-a0c57a4afb19",
          issueDate: "2021-05-21T00:00:00+00:00",
          lines: [
            {
              accountRef: {
                id: "a505cb47-0f7d-4e8b-90aa-9f9c2308b7bc",
              },
              invoiceTo: {
                dataType: InvoiceToDataType.Customers,
                id: "80000002-1674552702",
              },
              netAmount: 110.42,
              taxAmount: 14.43,
              taxRateRef: {
                id: "7e2ccb60-de1a-4c2b-9bd9-2f98a1c6be3f",
              },
              trackingRefs: [
                {
                  dataType: TrackingRefDataType.TrackingCategories,
                  id: "31a7e93c-4bb2-474c-b26d-10b2b75f7a25",
                },
                {
                  dataType: TrackingRefDataType.TrackingCategories,
                  id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
                },
              ],
            },
          ],
          merchantName: "Amazon UK",
          notes: "amazon purchase",
          postAsDraft: false,
          type: ExpenseTransactionType.Payment,
        },
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateExpenseTransactionRequest](../../sdk/models/operations/createexpensetransactionrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `retries`                                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                           | Configuration to override the default retry behavior of the client.                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateExpenseTransactionResponse](../../sdk/models/operations/createexpensetransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

The *Update expense* endpoint updates an existing [expense transaction](https://docs.codat.io/sync-for-expenses-api#/schemas/ExpenseTransaction) in the accounting platform for a given company's connection. 

[Expense transactions](https://docs.codat.io/sync-for-expenses-api#/schemas/ExpenseTransaction) represent transactions made with a company debit or credit card. 


**Integration-specific behaviour**

At the moment you can update expenses only for Xero ([Payment](https://docs.codat.io/expenses/sync-process/expense-transactions#transaction-types) transaction type only).

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

  const res = await sdk.expenses.update({
    updateExpenseRequest: {
      bankAccountRef: {
        id: "787dfb37-5707-4dc0-8a86-8d74e4cc78ea",
      },
      contactRef: {
        id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
        type: TypeT.Supplier,
      },
      currency: "GBP",
      issueDate: "2022-06-28T00:00:00.000Z",
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
      merchantName: "Amazon UK",
      notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
      type: "<value>",
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateExpenseTransactionRequest](../../sdk/models/operations/updateexpensetransactionrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `retries`                                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                           | Configuration to override the default retry behavior of the client.                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateExpenseTransactionResponse](../../sdk/models/operations/updateexpensetransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
