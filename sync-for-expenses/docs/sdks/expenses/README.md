# Expenses
(*expenses*)

## Overview

Create expense datasets and upload receipts.

### Available Operations

* [create](#create) - Create expense transaction
* [update](#update) - Update expense-transactions
* [uploadAttachment](#uploadattachment) - Upload attachment

## create

Create an expense transaction

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { ExpenseTransactionType, TypeT } from "@codat/sync-for-expenses/dist/sdk/models/shared";

(async() => {
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
          id: "4d7c6929-7770-412b-91bb-44d3bc71d111",
          issueDate: "2022-10-23T00:00:00.000Z",
          lines: [
            {
              accountRef: {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
              netAmount: 110.42,
              taxAmount: 14.43,
              taxRateRef: {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
              trackingRefs: [
                {
                  id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
                },
              ],
            },
          ],
          merchantName: "Amazon UK",
          notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
          type: ExpenseTransactionType.Payment,
        },
      ],
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
| errors.SDKError | 400-600         | */*             |

## update

Update an expense transaction

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { TypeT } from "@codat/sync-for-expenses/dist/sdk/models/shared";

(async() => {
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
          netAmount: 110.42,
          taxAmount: 14.43,
          taxRateRef: {
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
          },
          trackingRefs: [
            {
              id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
            },
          ],
        },
      ],
      merchantName: "Amazon UK",
      notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
      type: "string",
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
| errors.SDKError | 400-600         | */*             |

## uploadAttachment

Creates an attachment in the accounting software against the given transactionId

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

(async() => {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.expenses.uploadAttachment({
    requestBody: {
      content: new TextEncoder().encode("0xE3ABc1980E"),
      fileName: "elegant_producer_electric.jpeg",
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.UploadExpenseAttachmentRequest](../../sdk/models/operations/uploadexpenseattachmentrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.UploadExpenseAttachmentResponse](../../sdk/models/operations/uploadexpenseattachmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
