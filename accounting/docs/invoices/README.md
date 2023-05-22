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

﻿Posts a new invoice to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating invoices.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, DataType, InvoiceStatus, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.create({
  invoice: {
    additionalTaxAmount: 7733.49,
    additionalTaxPercentage: 6927.98,
    amountDue: 289.46,
    currency: "voluptas",
    currencyRate: 447.24,
    customerRef: {
      companyName: "numquam",
      id: "652e23a3-d6c6-457e-9de8-f7f002d1986a",
    },
    discountPercentage: 6416.3,
    dueDate: "natus",
    id: "9d3a1d32-329e-4458-b7e8-f2ad6bb10e25",
    invoiceNumber: "ipsam",
    issueDate: "reiciendis",
    lineItems: [
      {
        accountRef: {
          id: "c480d6e3-3086-475c-bf18-6856a7e82cdf",
          name: "Sammy Barrows",
        },
        description: "fugit",
        discountAmount: 5376.88,
        discountPercentage: 1666.02,
        isDirectIncome: false,
        itemRef: {
          id: "c666af3c-3f55-489b-aa5d-264e41e2ca84",
          name: "Bobby Crooks",
        },
        quantity: 684,
        subTotal: 2081.12,
        taxAmount: 9914.72,
        taxRateRef: {
          effectiveTaxRate: 4176.65,
          id: "d9d2ad37-c309-4907-bc10-b68792163e67",
          name: "Kyle Ledner",
        },
        totalAmount: 608.42,
        tracking: {
          categoryRefs: [
            {
              id: "43c0a304-9c3c-4f6c-8276-e7b21bad90d2",
              name: "April Frami",
            },
            {
              id: "6c2a10e6-c297-48ec-a56a-5b09227fcc47",
              name: "Wendell Huels",
            },
          ],
          customerRef: {
            companyName: "esse",
            id: "7bbc57f3-8928-4a86-80c5-8d67d63e4aa5",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "464579cf-c6c0-4e50-bf56-831f1d8ed87b",
            name: "Christy Walter",
          },
        },
        trackingCategoryRefs: [
          {
            id: "abc986e2-41e4-43b2-b424-17d13e3f62aa",
            name: "Shannon Walker",
          },
          {
            id: "e8ab4a9c-492c-45e8-ba5d-4aa4a508bd38",
            name: "Kara Cremin",
          },
          {
            id: "a8dd71bd-daa3-40b7-b914-49ae69c088d4",
            name: "Cassandra Rice",
          },
          {
            id: "1804f423-d543-4935-b377-ac5c9b7e93b6",
            name: "Earl Ruecker",
          },
        ],
        unitAmount: 2263.68,
      },
      {
        accountRef: {
          id: "105e7c34-cab0-4ecb-812a-66148944a8e9",
          name: "Ms. Jennie Hartmann",
        },
        description: "nam",
        discountAmount: 7904.63,
        discountPercentage: 1817.55,
        isDirectIncome: false,
        itemRef: {
          id: "53825334-3fb0-4a4e-a6ea-47578d171e29",
          name: "Ms. Christine Leannon",
        },
        quantity: 7630.13,
        subTotal: 3993.59,
        taxAmount: 4504.05,
        taxRateRef: {
          effectiveTaxRate: 5874.59,
          id: "b6b2f253-59b8-455d-815b-62c8b83a38a8",
          name: "Dwayne MacGyver I",
        },
        totalAmount: 2857.2,
        tracking: {
          categoryRefs: [
            {
              id: "00c2caeb-1ae1-4ecf-8c34-946bba7a05a8",
              name: "Oscar O'Connell",
            },
          ],
          customerRef: {
            companyName: "impedit",
            id: "5b3688cc-a363-4272-b60e-966e97e05410",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "47d78ff2-4911-445f-ab9e-59a4af336664",
            name: "Gerard O'Conner",
          },
        },
        trackingCategoryRefs: [
          {
            id: "2ff14e8c-1b35-42ac-8eda-cc5227814eca",
            name: "Alice Kautzer",
          },
          {
            id: "41ea1342-d410-44a2-9ef7-1de57a11d614",
            name: "Ms. Eddie Frami",
          },
          {
            id: "92ea4867-3d52-42b8-a8a9-030660f024c7",
            name: "Abraham Goyette",
          },
          {
            id: "64c2b3a3-2c48-48ad-a62f-6aa558a65e20",
            name: "Mrs. Marvin Armstrong",
          },
        ],
        unitAmount: 6853.65,
      },
      {
        accountRef: {
          id: "34bb87d4-f621-427a-a07d-1606294514c3",
          name: "Preston McCullough",
        },
        description: "omnis",
        discountAmount: 9600.37,
        discountPercentage: 2360.34,
        isDirectIncome: false,
        itemRef: {
          id: "8bd2be87-8703-4493-b49a-a8465a328327",
          name: "Miss Cesar Konopelski",
        },
        quantity: 707.2,
        subTotal: 7573.22,
        taxAmount: 8840.57,
        taxRateRef: {
          effectiveTaxRate: 6422.68,
          id: "673d86e3-b35e-449a-b135-778ce54cacb0",
          name: "Chris Terry",
        },
        totalAmount: 4960.42,
        tracking: {
          categoryRefs: [
            {
              id: "045bacf6-3b21-4518-aab5-e3a022614315",
              name: "Dennis Heathcote",
            },
            {
              id: "299e61af-c718-46ff-a0b7-a73df40ca0d7",
              name: "Erin Kihn III",
            },
          ],
          customerRef: {
            companyName: "eius",
            id: "1bbf0552-71b2-4511-9d60-6dd1b28272bc",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "3221697b-1880-4fcb-b2b9-3c15f670bd17",
            name: "Francis Labadie III",
          },
        },
        trackingCategoryRefs: [
          {
            id: "3eeb3b6e-241c-4310-9983-663c66dcbb7d",
            name: "Gilbert Schaden V",
          },
          {
            id: "c8b408e0-7137-474d-a4fe-e101d9780a10",
            name: "Frederick Kub",
          },
        ],
        unitAmount: 3444.01,
      },
      {
        accountRef: {
          id: "040d6c8b-2a5f-4002-a07e-4048f90009ed",
          name: "Violet Baumbach",
        },
        description: "quos",
        discountAmount: 8818.91,
        discountPercentage: 6977.83,
        isDirectIncome: false,
        itemRef: {
          id: "4ae9d641-61e9-4150-8323-b2c09b924771",
          name: "Herman Howe",
        },
        quantity: 9129.86,
        subTotal: 3652.88,
        taxAmount: 7053.17,
        taxRateRef: {
          effectiveTaxRate: 4498.47,
          id: "ec762664-9d84-4eb9-a4cf-d2276e0b88fb",
          name: "Brad Stoltenberg",
        },
        totalAmount: 6278.38,
        tracking: {
          categoryRefs: [
            {
              id: "b6e8dbf8-12f8-43b1-8a6a-9ffc561929cc",
              name: "Tracy Hilll MD",
            },
            {
              id: "1395918d-a1d4-48e7-8e3c-f8e1143da930",
              name: "Robin Cummerata",
            },
          ],
          customerRef: {
            companyName: "aut",
            id: "8af22184-439b-43de-8756-ccce470cd214",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "6e6152cf-01d0-4d8c-ba4b-9a5bf935dfe9",
            name: "Debbie Zieme",
          },
        },
        trackingCategoryRefs: [
          {
            id: "1e9c097e-da62-4344-ae1a-9237e9984c80",
            name: "Alexander Koss",
          },
          {
            id: "891923c1-8ca8-4d69-8568-9214fa20207e",
            name: "Marta Murphy I",
          },
          {
            id: "8cd7f1bc-2cab-4af7-bc2c-cba4bef0df68",
            name: "Shaun Swift",
          },
        ],
        unitAmount: 1625.48,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "earum",
    note: "necessitatibus",
    paidOnDate: "quam",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "expedita",
          currency: "itaque",
          currencyRate: 40.87,
          totalAmount: 4114.07,
        },
        payment: {
          accountRef: {
            id: "9fb36add-7040-480e-8a3f-c73a5a034b11",
            name: "Bobbie Mayer",
          },
          currency: "ratione",
          currencyRate: 6253.92,
          id: "fa6987a4-72b7-409a-953e-22301068539c",
          note: "saepe",
          paidOnDate: "ipsa",
          reference: "perspiciatis",
          totalAmount: 2348.29,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "repellendus",
        id: "10acd15d-8cc3-406b-b86b-3d37bd204a1f",
      },
    ],
    sourceModifiedDate: "ipsum",
    status: InvoiceStatus.Draft,
    subTotal: 378.08,
    supplementalData: {
      content: {
        "rerum": {
          "ex": "voluptatibus",
        },
        "voluptas": {
          "odio": "dolorum",
          "eius": "praesentium",
        },
        "corporis": {
          "provident": "quod",
        },
      },
    },
    totalAmount: 2245.24,
    totalDiscount: 2424.79,
    totalTaxAmount: 4619.68,
    withholdingTax: [
      {
        amount: 5749.23,
        name: "Christina Luettgen",
      },
      {
        amount: 5522.12,
        name: "Vicki Reilly I",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 784316,
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.delete({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.downloadPdf({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    authHeader: "YOUR_API_KEY_HERE",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "nihil",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.listAttachments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.update({
  invoice: {
    additionalTaxAmount: 9937.18,
    additionalTaxPercentage: 8210.46,
    amountDue: 1600.93,
    currency: "odit",
    currencyRate: 3147.32,
    customerRef: {
      companyName: "debitis",
      id: "47871a88-ed72-4a2d-8af4-158ac2d0f0f5",
    },
    discountPercentage: 5522.56,
    dueDate: "optio",
    id: "3b87b470-40d0-4d98-a9d8-2c5e306f5576",
    invoiceNumber: "maiores",
    issueDate: "nemo",
    lineItems: [
      {
        accountRef: {
          id: "deb0286d-0bc4-43b1-8ab3-78f2fcff81dd",
          name: "Ms. Lance Thiel",
        },
        description: "repellat",
        discountAmount: 4819.23,
        discountPercentage: 2892.95,
        isDirectIncome: false,
        itemRef: {
          id: "ef54c921-6e89-4263-93bb-6fc2c8d27010",
          name: "Duane Pouros",
        },
        quantity: 6641.93,
        subTotal: 8554.62,
        taxAmount: 3899.32,
        taxRateRef: {
          effectiveTaxRate: 8980.86,
          id: "3e1d9d3b-6603-434a-91aa-1d5d2247de9b",
          name: "Meredith Greenfelder IV",
        },
        totalAmount: 514.52,
        tracking: {
          categoryRefs: [
            {
              id: "768a96bb-3987-4883-98eb-a1bbf7143356",
              name: "Marc Fay",
            },
            {
              id: "a164249b-211c-4e46-b951-652b158ca914",
              name: "Johanna Bartoletti",
            },
            {
              id: "632b31ca-d692-4ffc-8745-005e9d3d934e",
              name: "Sheila Jerde",
            },
            {
              id: "c388664f-6985-4530-a2e2-aed6aaf863c2",
              name: "Clint Beatty DDS",
            },
          ],
          customerRef: {
            companyName: "vel",
            id: "9a3d906f-6ebd-45ad-bec7-394f25f634b3",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "0714e6be-8c3e-409c-a4d3-42ac299a6e5e",
            name: "Lee Weber I",
          },
        },
        trackingCategoryRefs: [
          {
            id: "02e945f5-3743-4efd-a119-8221f9b1f7d9",
            name: "Amos Wilkinson",
          },
          {
            id: "9682acee-fb04-4f8c-912c-aabea708ed57",
            name: "Wallace Schultz",
          },
        ],
        unitAmount: 3304.22,
      },
      {
        accountRef: {
          id: "d460599d-5c33-4495-b6d5-5209e9a2253b",
          name: "Elena Kreiger",
        },
        description: "praesentium",
        discountAmount: 5156.7,
        discountPercentage: 3967.41,
        isDirectIncome: false,
        itemRef: {
          id: "eeae5fd4-b39f-48a1-8906-78f13c686d83",
          name: "Amos Roob",
        },
        quantity: 756.85,
        subTotal: 4594.79,
        taxAmount: 3137.17,
        taxRateRef: {
          effectiveTaxRate: 9721.89,
          id: "fa906ae5-59b7-42eb-a746-030fe18376c2",
          name: "Merle Strosin",
        },
        totalAmount: 4381.93,
        tracking: {
          categoryRefs: [
            {
              id: "790ed0c1-6a7b-4a47-8404-489f6770ef04",
              name: "Miss Brian McCullough",
            },
            {
              id: "ba25ee6c-75af-48a6-8a7a-e346e0979e5a",
              name: "Miss Darrel Keeling",
            },
          ],
          customerRef: {
            companyName: "culpa",
            id: "ca645de9-8675-451a-9cce-61ec2c79a39a",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "a4d5a65b-4d55-462d-9b7d-9e2d6fcf5576",
            name: "Bobbie Stoltenberg",
          },
        },
        trackingCategoryRefs: [
          {
            id: "5c3a8902-82a5-41f4-9cf6-796ed3d724c1",
            name: "Jerald Hand PhD",
          },
          {
            id: "98cce3f7-1660-40da-8e3a-a61c6fe09d85",
            name: "Shelia Hand",
          },
        ],
        unitAmount: 2018.2,
      },
      {
        accountRef: {
          id: "2c8c7c3c-710e-4167-bd90-5cb4bedef3c1",
          name: "Pearl Ruecker",
        },
        description: "aperiam",
        discountAmount: 5631.81,
        discountPercentage: 6128.99,
        isDirectIncome: false,
        itemRef: {
          id: "5528250d-cbbc-4d3b-921b-88c1ee5e7a06",
          name: "Dr. Sherry Marks",
        },
        quantity: 5137.75,
        subTotal: 9667.54,
        taxAmount: 6470.68,
        taxRateRef: {
          effectiveTaxRate: 140.4,
          id: "b7d17649-26b0-4cf5-a6cb-6ebabe5e0b99",
          name: "Mrs. Lee Rogahn",
        },
        totalAmount: 5558.1,
        tracking: {
          categoryRefs: [
            {
              id: "6a87bb7a-ecbe-4569-970c-b069907f9894",
              name: "Gloria Gottlieb V",
            },
            {
              id: "9f01f344-2c61-4be1-b3ba-cde532b6526f",
              name: "Sam Cole",
            },
            {
              id: "3fe2859c-e322-4231-be66-64c41d2fba5c",
              name: "Shannon Bahringer",
            },
            {
              id: "b8d291be-b810-4a2a-a874-9479edd4fcf7",
              name: "Dan Bechtelar",
            },
          ],
          customerRef: {
            companyName: "blanditiis",
            id: "7f08f392-7107-46a2-8b40-c8f08bff1081",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "8f86996c-8e22-4be0-a3cf-47893bd23f86",
            name: "Mary Beatty",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c7834273-caa9-4118-b38f-1b61a331a54d",
            name: "Stephen Bartell",
          },
        ],
        unitAmount: 2674.45,
      },
      {
        accountRef: {
          id: "f92fed93-9ba8-4f71-a299-2c20ee1228ac",
          name: "Alberta Shanahan",
        },
        description: "dolore",
        discountAmount: 4824,
        discountPercentage: 8600.36,
        isDirectIncome: false,
        itemRef: {
          id: "240bc11e-a482-4824-8cc6-a2f0f5b9d3cb",
          name: "Doris Murray",
        },
        quantity: 5367.04,
        subTotal: 4891.64,
        taxAmount: 8210.12,
        taxRateRef: {
          effectiveTaxRate: 2214.66,
          id: "100e8e2b-9b0d-4746-92a7-c7d1ea0e79fa",
          name: "Robin Rau",
        },
        totalAmount: 9824.77,
        tracking: {
          categoryRefs: [
            {
              id: "79f650b1-e707-4e7e-8396-713bacce072a",
              name: "Ms. Taylor Jacobson IV",
            },
          ],
          customerRef: {
            companyName: "facere",
            id: "279c10c1-8516-4fd7-8be2-621272628fa5",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "962867e7-2b3a-4650-a4b1-57f9bb6ef72a",
            name: "Brenda Legros PhD",
          },
        },
        trackingCategoryRefs: [
          {
            id: "9b661a7d-ef16-48b6-8cb2-822b4a9850ed",
            name: "Ora Greenholt DVM",
          },
          {
            id: "9c4ae551-40e7-4572-ae00-3c2f02941925",
            name: "Kay Runolfsdottir",
          },
          {
            id: "41c999f4-69f6-4f1c-b1a3-f023c669e6a6",
            name: "Mr. Vicki Bartoletti",
          },
        ],
        unitAmount: 7126.9,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "id",
    note: "consequatur",
    paidOnDate: "quis",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "unde",
          currency: "quos",
          currencyRate: 5264.74,
          totalAmount: 8122.68,
        },
        payment: {
          accountRef: {
            id: "6720c310-3f1a-440c-8f3e-c8688fd8ec6f",
            name: "Mr. Michael Feest",
          },
          currency: "voluptatibus",
          currencyRate: 42.61,
          id: "aaaeee00-4eba-47bf-8732-be509c508713",
          note: "quae",
          paidOnDate: "a",
          reference: "eaque",
          totalAmount: 3967.4,
        },
      },
      {
        allocation: {
          allocatedOnDate: "maiores",
          currency: "voluptatem",
          currencyRate: 7324.85,
          totalAmount: 7767.95,
        },
        payment: {
          accountRef: {
            id: "e55a8687-143c-4979-85ff-797a5da664b7",
            name: "Mitchell Kuhn",
          },
          currency: "nihil",
          currencyRate: 2955.37,
          id: "baaa2832-bb65-4862-92a3-1f9b14aa6bde",
          note: "quo",
          paidOnDate: "reprehenderit",
          reference: "repellat",
          totalAmount: 2617.34,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "dolore",
        id: "232e9a5d-ee1a-4cd7-aa89-981b58fe682e",
      },
      {
        dataType: "sunt",
        id: "c2dbe23d-58e8-4247-9122-c9f67678fa27",
      },
    ],
    sourceModifiedDate: "occaecati",
    status: InvoiceStatus.Submitted,
    subTotal: 5416.5,
    supplementalData: {
      content: {
        "commodi": {
          "dolor": "voluptas",
          "dolor": "facere",
        },
      },
    },
    totalAmount: 6680.48,
    totalDiscount: 152.97,
    totalTaxAmount: 4809.17,
    withholdingTax: [
      {
        amount: 426.64,
        name: "Brett Yundt",
      },
      {
        amount: 7200.66,
        name: "Ruben Green III",
      },
      {
        amount: 2407.81,
        name: "Angel Larkin",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  timeoutInMinutes: 701054,
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.uploadAttachment({
  requestBody: {
    content: "rem".encode(),
    requestBody: "unde",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: UploadInvoiceAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
