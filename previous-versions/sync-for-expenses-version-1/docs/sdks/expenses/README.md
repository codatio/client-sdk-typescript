# Expenses
(*expenses*)

## Overview

Create expense datasets and upload receipts.

### Available Operations

* [createExpenseDataset](#createexpensedataset) - Create expense-transactions
* [updateExpenseDataset](#updateexpensedataset) - Update expense transactions
* [uploadAttachment](#uploadattachment) - Upload attachment

## createExpenseDataset

Create an expense transaction

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";
import { ContactType, TypeT } from "@codat/sync-for-expenses-version-1/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.expenses.createExpenseDataset({
    createExpenseRequest: {
      items: [
        {
          contactRef: {
            contactType: ContactType.Supplier,
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
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
          type: TypeT.Payment,
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.CreateExpenseDatasetRequest](../../sdk/models/operations/createexpensedatasetrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.CreateExpenseDatasetResponse](../../sdk/models/operations/createexpensedatasetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateExpenseDataset

Update an expense transaction

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";
import { ContactType } from "@codat/sync-for-expenses-version-1/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.expenses.updateExpenseDataset({
    updateExpenseRequest: {
      contactRef: {
        contactType: ContactType.Supplier,
        id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
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
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateExpenseDatasetRequest](../../sdk/models/operations/updateexpensedatasetrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateExpenseDatasetResponse](../../sdk/models/operations/updateexpensedatasetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## uploadAttachment

Creates an attachment in the accounting software against the given transactionId

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";

async function run() {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.expenses.uploadAttachment({
    attachmentUpload: {
      file: {
        content: new TextEncoder().encode("0xE3ABc1980E"),
        fileName: "elegant_producer_electric.jpeg",
      },
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UploadAttachmentRequest](../../sdk/models/operations/uploadattachmentrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UploadAttachmentResponse](../../sdk/models/operations/uploadattachmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
