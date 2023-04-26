# expenses

## Overview

Create expense datasets and upload receipts.

### Available Operations

* [createExpenseDataset](#createexpensedataset) - Create expense-transactions
* [uploadAttachment](#uploadattachment) - Upload attachment

## createExpenseDataset

Create an expense transaction

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { CreateExpenseDatasetRequest, CreateExpenseDatasetResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { ExpenseTransactionTypeEnum } from "@codat/sync-for-expenses/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateExpenseDatasetRequest = {
  createExpenseRequest: {
    items: [
      {
        currency: "GBP",
        currencyRate: 5928.45,
        id: "4d7c6929-7770-412b-91bb-44d3bc71d111",
        issueDate: "distinctio",
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
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
            ],
          },
        ],
        merchantName: "Amazon UK",
        notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
        type: ExpenseTransactionTypeEnum.Payment,
      },
      {
        currency: "GBP",
        currencyRate: 4236.55,
        id: "4d7c6929-7770-412b-91bb-44d3bc71d111",
        issueDate: "error",
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
        type: ExpenseTransactionTypeEnum.Payment,
      },
      {
        currency: "GBP",
        currencyRate: 8917.73,
        id: "4d7c6929-7770-412b-91bb-44d3bc71d111",
        issueDate: "ipsa",
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
              {
                id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
              },
            ],
          },
        ],
        merchantName: "Amazon UK",
        notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
        type: ExpenseTransactionTypeEnum.Payment,
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.expenses.createExpenseDataset(req).then((res: CreateExpenseDatasetResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadAttachment

Creates an attachment in the accounting software against the given transactionId

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { UploadAttachmentRequest, UploadAttachmentResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UploadAttachmentRequest = {
  requestBody: {
    content: "placeat".encode(),
    requestBody: "voluptatum",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
  transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
};

sdk.expenses.uploadAttachment(req).then((res: UploadAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
