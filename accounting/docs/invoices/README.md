# invoices

## Overview

Invoices

### Available Operations

* [create](#create) - Create invoice
* [delete](#delete) - Delete invoice
* [downloadAttachment](#downloadattachment) - Download invoice attachment
* [downloadPdf](#downloadpdf) - Get invoice as PDF
* [get](#get) - Get invoice
* [getAttachment](#getattachment) - Get invoice attachment
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update invoice model
* [list](#list) - List invoices
* [listAttachments](#listattachments) - List invoice attachments
* [update](#update) - Update invoice
* [uploadAttachment](#uploadattachment) - Push invoice attachment

## create

Posts a new invoice to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) to see which integrations support this endpoint.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, DataType, InvoiceStatus, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.create({
  invoice: {
    additionalTaxAmount: 50.37,
    additionalTaxPercentage: 162.33,
    amountDue: 632.79,
    currency: "tempora",
    currencyRate: 9194.06,
    customerRef: {
      companyName: "hic",
      id: "45cea11a-c53e-4bb6-987f-340414c5b9ac",
    },
    discountPercentage: 9131.37,
    dueDate: "debitis",
    id: "400ae9f9-2caf-41b0-a5f1-d14718c6fa2f",
    invoiceNumber: "mollitia",
    issueDate: "quibusdam",
    lineItems: [
      {
        accountRef: {
          id: "c06c5d95-472c-4dd1-8fc4-3b70bca88fa7",
          name: "Roxanne Green",
        },
        description: "exercitationem",
        discountAmount: 817.93,
        discountPercentage: 7886.47,
        isDirectIncome: false,
        itemRef: {
          id: "3dd1eb8f-7f75-4f4f-a3f1-c0a586c3ae7d",
          name: "Patty Hoeger",
        },
        quantity: 8864.96,
        subTotal: 9148.03,
        taxAmount: 9451.88,
        taxRateRef: {
          effectiveTaxRate: 3338.68,
          id: "e142d95b-1dbe-4cef-b7c4-b156e9278275",
          name: "Grady Nitzsche",
        },
        totalAmount: 5122.23,
        tracking: {
          categoryRefs: [
            {
              id: "7468063f-799b-4795-ac0b-0fa0bb20a40e",
              name: "Krista Goyette",
            },
          ],
          customerRef: {
            companyName: "aliquid",
            id: "40642726-57b0-41a0-bc08-fd3921c25793",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "6f093a3e-fa46-4d36-adfa-1011a091b3ec",
            name: "Garry Heller",
          },
        },
        trackingCategoryRefs: [
          {
            id: "2de1a9d1-4fe7-42e5-a1f9-0303dfc33839",
            name: "Lela Welch",
          },
          {
            id: "6d1d3209-0fc1-457a-89fe-1961ce9be41c",
            name: "Charlie Monahan",
          },
        ],
        unitAmount: 4955.97,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "quibusdam",
    note: "omnis",
    paidOnDate: "molestiae",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "unde",
          currency: "repellendus",
          currencyRate: 78.52,
          totalAmount: 4916.69,
        },
        payment: {
          accountRef: {
            id: "b200a58f-fd29-467d-b8fd-882a8e60be62",
            name: "Lynne Schultz",
          },
          currency: "veniam",
          currencyRate: 6380.64,
          id: "fdd04c37-5251-42be-ae1d-87ecc5fdcea8",
          note: "eveniet",
          paidOnDate: "molestiae",
          reference: "laborum",
          totalAmount: 5326.99,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "adipisci",
        id: "11662cda-6d77-4c1d-8606-6237d4227866",
      },
      {
        dataType: "quibusdam",
        id: "b8a749e3-9845-411c-875e-4f0c004b5bb7",
      },
      {
        dataType: "ipsam",
        id: "8cc94562-f006-4968-9fcd-1a173d84bbe2",
      },
    ],
    sourceModifiedDate: "modi",
    status: InvoiceStatus.Void,
    subTotal: 1277.99,
    supplementalData: {
      content: {
        "praesentium": {
          "magnam": "mollitia",
        },
        "doloribus": {
          "doloremque": "odio",
          "ratione": "corporis",
          "eligendi": "expedita",
        },
        "laboriosam": {
          "molestias": "corporis",
        },
      },
    },
    totalAmount: 8154.52,
    totalDiscount: 2900.44,
    totalTaxAmount: 6668.63,
    withholdingTax: [
      {
        amount: 6035.51,
        name: "Dr. Wilbur Orn III",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 607549,
}).then((res: CreateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

﻿The _Delete Invoices_ endpoint allows you to delete a specified Invoice from an accounting platform.

### Process
1. Pass the `{invoiceId}` to the _Delete Invoices_ endpoint and store the `pushOperationKey` returned.
2. Check the status of the delete operation by checking the status of push operation either via
    1. [Push operation webhook](/introduction/webhooks/core-rules-types#push-operation-status-has-changed) (advised),
    2. [Push operation status endpoint](https://docs.codat.io/codat-api#/operations/get-push-operation).

   A `Success` status indicates that the Invoice object was deleted from the accounting platform.
3. (Optional) Check that the Invoice was deleted from the accounting platform.

### Effect on related objects

Be aware that deleting an Invoice from an accounting platform might cause related objects to be modified. For example, if you delete a paid invoice from QuickBooks Online, the invoice is deleted but the payment against that invoice is not. The payment is converted to a payment on account.

## Integration specifics
Integrations that support soft delete do not permanently delete the object in the accounting platform.

| Integration | Soft Deleted | 
|-------------|--------------|
| QuickBooks Online | Yes    |     

> **Supported Integrations**
> 
> This functionality is currently only supported for our QuickBooks Online integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.
> We're increasing support for object deletion across various accounting platforms and data types. You can check our [Accounting API Public Product Roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) for the latest status.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.delete({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "veritatis",
}).then((res: DeleteInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## downloadAttachment

﻿Download invoice attachment.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadInvoicesAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "nemo",
}).then((res: DownloadInvoicesAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## downloadPdf

﻿Download invoice as a pdf.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadInvoicePdfResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.downloadPdf({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "nisi",
}).then((res: DownloadInvoicePdfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

﻿Get an invoice.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, InvoiceStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "repellat",
}).then((res: GetInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAttachment

﻿Get invoice attachment.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "voluptate",
}).then((res: GetInvoiceAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

﻿Get create/update invoice model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating and updating invoices.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateInvoicesModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdateInvoicesModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

﻿Gets the latest invoices for a company, with pagination.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoicesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, InvoiceStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "possimus",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

﻿List invoice attachments

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoiceAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.listAttachments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "aspernatur",
}).then((res: ListInvoiceAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

﻿Posts an updated invoice to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support updating invoices.
operationId: update-invoice

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, DataType, InvoiceStatus, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.update({
  invoice: {
    additionalTaxAmount: 9264.79,
    additionalTaxPercentage: 9197.03,
    amountDue: 1804.63,
    currency: "perferendis",
    currencyRate: 6247.3,
    customerRef: {
      companyName: "ullam",
      id: "05bf03a9-3e94-4480-8a37-fb10789032ac",
    },
    discountPercentage: 2261.31,
    dueDate: "amet",
    id: "3172e2dd-79ec-474b-a7e8-8ddb36fd1ccc",
    invoiceNumber: "nesciunt",
    issueDate: "labore",
    lineItems: [
      {
        accountRef: {
          id: "c8657347-4f0a-4740-bb4a-b441c3a09e76",
          name: "Katrina Monahan",
        },
        description: "rem",
        discountAmount: 313.05,
        discountPercentage: 5480.08,
        isDirectIncome: false,
        itemRef: {
          id: "bbe79445-5ebc-4550-a1c4-26b59c8366fd",
          name: "Kim Braun",
        },
        quantity: 3640.73,
        subTotal: 5323.1,
        taxAmount: 1563.13,
        taxRateRef: {
          effectiveTaxRate: 7881.7,
          id: "1b855e88-9d9e-4f93-ae90-00a13ad81242",
          name: "Jennie Veum",
        },
        totalAmount: 1827.3,
        tracking: {
          categoryRefs: [
            {
              id: "411898e7-3879-4efb-a8ba-ebabb794536e",
              name: "Jeffrey Frami MD",
            },
          ],
          customerRef: {
            companyName: "quidem",
            id: "97631720-b77a-45a5-b65a-79f15271f01c",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "361fed8d-c5ef-4fb4-93e9-089e871fdb4d",
            name: "Katrina Krajcik",
          },
        },
        trackingCategoryRefs: [
          {
            id: "9c985e43-734a-45d7-ad9e-dd785be5e7af",
            name: "Derrick Hane",
          },
          {
            id: "7ba6281f-44e3-4a23-b94a-68cc80d30ff7",
            name: "Debra Jacobi",
          },
          {
            id: "0a91fe9d-9655-43b8-9e00-09c6692de7b3",
            name: "Loretta Collier Jr.",
          },
          {
            id: "a6aab4ae-7b1a-45b9-88d4-e30491aa35d4",
            name: "Alfredo Fahey",
          },
        ],
        unitAmount: 98.84,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "ipsum",
    note: "quidem",
    paidOnDate: "dolorum",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "molestiae",
          currency: "reprehenderit",
          currencyRate: 7232.85,
          totalAmount: 5807.71,
        },
        payment: {
          accountRef: {
            id: "18f03139-8450-47e0-a39c-7e23ecb06046",
            name: "Denise Walter",
          },
          currency: "similique",
          currencyRate: 2248.7,
          id: "d6c657e9-de8f-47f0-82d1-986aa99d3a1d",
          note: "ratione",
          paidOnDate: "odit",
          reference: "amet",
          totalAmount: 1716.48,
        },
      },
      {
        allocation: {
          allocatedOnDate: "provident",
          currency: "repudiandae",
          currencyRate: 2826.23,
          totalAmount: 3547.05,
        },
        payment: {
          accountRef: {
            id: "837e8f2a-d6bb-410e-a55f-dc480d6e3308",
            name: "Stella Herman",
          },
          currency: "sapiente",
          currencyRate: 632.04,
          id: "86856a7e-82cd-4f9d-8fc2-82c666af3c3f",
          note: "quis",
          paidOnDate: "nostrum",
          reference: "totam",
          totalAmount: 5904.76,
        },
      },
      {
        allocation: {
          allocatedOnDate: "distinctio",
          currency: "accusamus",
          currencyRate: 6668.05,
          totalAmount: 3319.44,
        },
        payment: {
          accountRef: {
            id: "d264e41e-2ca8-4482-ae51-3f6d9d2ad37c",
            name: "Shirley Mueller III",
          },
          currency: "esse",
          currencyRate: 7504.07,
          id: "10b68792-163e-467d-8886-0543c0a3049c",
          note: "ipsum",
          paidOnDate: "quod",
          reference: "voluptatibus",
          totalAmount: 3769.3,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "sit",
        id: "276e7b21-bad9-40d2-b43f-d6c2a10e6c29",
      },
      {
        dataType: "quam",
        id: "8ec256a5-b092-427f-8c47-996c977bbc57",
      },
      {
        dataType: "sapiente",
        id: "38928a86-00c5-48d6-bd63-e4aa56846457",
      },
      {
        dataType: "omnis",
        id: "cfc6c0e5-03f5-4683-9f1d-8ed87b28e8af",
      },
    ],
    sourceModifiedDate: "culpa",
    status: InvoiceStatus.Paid,
    subTotal: 7973.76,
    supplementalData: {
      content: {
        "laudantium": {
          "necessitatibus": "consequuntur",
          "aliquam": "dicta",
        },
        "earum": {
          "dolorem": "quidem",
          "consequuntur": "ratione",
        },
        "ut": {
          "dolore": "inventore",
        },
      },
    },
    totalAmount: 4725.74,
    totalDiscount: 8462.5,
    totalTaxAmount: 1103.98,
    withholdingTax: [
      {
        amount: 8934.16,
        name: "Miss Jeannie Hudson",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  invoiceId: "cupiditate",
  timeoutInMinutes: 633887,
}).then((res: UpdateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## uploadAttachment

﻿Upload invoice attachment.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.uploadAttachment({
  requestBody: {
    content: "recusandae".encode(),
    requestBody: "labore",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "fuga",
}).then((res: UploadInvoiceAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
