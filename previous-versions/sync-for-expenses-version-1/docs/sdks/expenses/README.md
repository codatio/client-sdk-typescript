# expenses

## Overview

Create expense datasets and upload receipts.

### Available Operations

* [createExpenseDataset](#createexpensedataset) - Create expense-transactions
* [updateExpenseDataset](#updateexpensedataset) - Update expense-transactions
* [uploadAttachment](#uploadattachment) - Upload attachment

## createExpenseDataset

Create an expense transaction

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";
import { CreateExpenseDatasetResponse } from "@codat/sync-for-expenses-version-1/dist/sdk/models/operations";
import { ContactRefContactType, ExpenseTransactionType } from "@codat/sync-for-expenses-version-1/dist/sdk/models/shared";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.expenses.createExpenseDataset({
  createExpenseRequest: {
    items: [
      {
        contactRef: {
          contactType: ContactRefContactType.Supplier,
          id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
        },
        currency: "GBP",
        currencyRate: 8579.46,
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
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
            ],
          },
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
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
            ],
          },
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
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
            ],
          },
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
      {
        contactRef: {
          contactType: ContactRefContactType.Supplier,
          id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
        },
        currency: "GBP",
        currencyRate: 4375.87,
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
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
            ],
          },
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
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
            ],
          },
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
      {
        contactRef: {
          contactType: ContactRefContactType.Supplier,
          id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
        },
        currency: "GBP",
        currencyRate: 4776.65,
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
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
            ],
          },
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
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
            ],
          },
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
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
            ],
          },
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
}).then((res: CreateExpenseDatasetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateExpenseDatasetRequest](../../models/operations/createexpensedatasetrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateExpenseDatasetResponse](../../models/operations/createexpensedatasetresponse.md)>**


## updateExpenseDataset

Update an expense transaction

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";
import { UpdateExpenseDatasetResponse } from "@codat/sync-for-expenses-version-1/dist/sdk/models/operations";
import { ContactRefContactType } from "@codat/sync-for-expenses-version-1/dist/sdk/models/shared";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.expenses.updateExpenseDataset({
  updateExpenseRequest: {
    contactRef: {
      contactType: ContactRefContactType.Supplier,
      id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
    },
    currency: "GBP",
    currencyRate: 9255.97,
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
          {
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
          },
        ],
      },
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
          {
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
          },
          {
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
          },
        ],
      },
    ],
    merchantName: "Amazon UK",
    notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
    type: "perferendis",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
}).then((res: UpdateExpenseDatasetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateExpenseDatasetRequest](../../models/operations/updateexpensedatasetrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateExpenseDatasetResponse](../../models/operations/updateexpensedatasetresponse.md)>**


## uploadAttachment

Creates an attachment in the accounting software against the given transactionId

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses-version-1";
import { UploadAttachmentResponse } from "@codat/sync-for-expenses-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.expenses.uploadAttachment({
  requestBody: {
    content: "ipsam".encode(),
    requestBody: "repellendus",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
  transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
}).then((res: UploadAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UploadAttachmentRequest](../../models/operations/uploadattachmentrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UploadAttachmentResponse](../../models/operations/uploadattachmentresponse.md)>**

