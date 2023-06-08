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
    additionalTaxAmount: 7162.96,
    additionalTaxPercentage: 938.38,
    amountDue: 1709.49,
    currency: "EUR",
    currencyRate: 3147.59,
    customerRef: {
      companyName: "nam",
      id: "a825fe22-cd5c-4ba6-bbfe-c932af6813d6",
    },
    discountPercentage: 3347.36,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "fecec2dd-6916-4f7f-87dd-a70ec60e6075",
    invoiceNumber: "praesentium",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "d61c14cd-9022-47e3-bc0d-977f1a5491ab",
          name: "Eduardo Kulas DDS",
        },
        description: "vitae",
        discountAmount: 387.35,
        discountPercentage: 4168.03,
        isDirectIncome: false,
        itemRef: {
          id: "d23e03e6-9815-4aae-99fc-de9e729c9d4f",
          name: "Freda Leannon",
        },
        quantity: 2746.11,
        subTotal: 3852.3,
        taxAmount: 3114.5,
        taxRateRef: {
          effectiveTaxRate: 16.63,
          id: "ca60db73-a2f9-43f4-a7dc-0d8da5612202",
          name: "Janie Roberts",
        },
        totalAmount: 1810.16,
        tracking: {
          categoryRefs: [
            {
              id: "7485c197-6af9-480d-a7a0-89fc44db2745",
              name: "Brenda Torp",
            },
            {
              id: "c7c6d0cb-cfdc-4d33-8b6f-623bcecab50a",
              name: "Clay Hauck PhD",
            },
          ],
          customerRef: {
            companyName: "officia",
            id: "8b9af6ad-0548-46e7-b413-cbe2d176dc1c",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "d40f61d1-7115-47cb-a5ee-4f7211840772",
            name: "Chad Connelly",
          },
        },
        trackingCategoryRefs: [
          {
            id: "49dbe0f2-3b7b-46d9-948d-6eded477680f",
            name: "Ms. Brad Pacocha",
          },
          {
            id: "82e5e82f-d28d-4104-8a7e-91392ab44cb1",
            name: "Mr. Jeff Hilll",
          },
          {
            id: "f461ce53-e914-4498-a9ba-460addfde410",
            name: "Jeff Kuhic",
          },
        ],
        unitAmount: 6589.17,
      },
      {
        accountRef: {
          id: "9182a49d-9625-4d3c-affc-198eea445279",
          name: "Bridget Schneider",
        },
        description: "ut",
        discountAmount: 588.2,
        discountPercentage: 9020.01,
        isDirectIncome: false,
        itemRef: {
          id: "a98becce-0486-4de0-956d-73b005503e8d",
          name: "Raul Christiansen",
        },
        quantity: 9794.26,
        subTotal: 4671.12,
        taxAmount: 4892.61,
        taxRateRef: {
          effectiveTaxRate: 7730.17,
          id: "65675f5b-70e3-4e4c-bcc6-a91ec52624d0",
          name: "Margaret Berge",
        },
        totalAmount: 9411.74,
        tracking: {
          categoryRefs: [
            {
              id: "5cea11ac-53eb-4b65-87f3-40414c5b9ace",
              name: "Miss Francis Beier",
            },
            {
              id: "9f92caf1-b025-4f1d-9471-8c6fa2fad0c0",
              name: "Francis Harris",
            },
          ],
          customerRef: {
            companyName: "exercitationem",
            id: "472cdd14-fc43-4b70-bca8-8fa70c43351c",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "d1eb8f7f-75f4-4f23-b1c0-a586c3ae7d7b",
            name: "Glenda Wisozk",
          },
        },
        trackingCategoryRefs: [
          {
            id: "5e142d95-b1db-4ece-bf7c-4b156e927827",
            name: "Raquel VonRueden",
          },
          {
            id: "68174680-63f7-499b-b956-c0b0fa0bb20a",
            name: "Jennifer Von",
          },
          {
            id: "4ae64064-2726-457b-81a0-7c08fd3921c2",
            name: "Delores Moore PhD",
          },
          {
            id: "6f093a3e-fa46-4d36-adfa-1011a091b3ec",
            name: "Garry Heller",
          },
        ],
        unitAmount: 3904.23,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "nulla",
    paidOnDate: "2022-10-23T00:00:00.000Z",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 8706.71,
          totalAmount: 1150.28,
        },
        payment: {
          accountRef: {
            id: "4fe72e52-1f90-4303-9fc3-38397fffa6d1",
            name: "Ms. Earl Collier DVM",
          },
          currency: "EUR",
          currencyRate: 956.45,
          id: "57ac9fe1-961c-4e9b-a41c-869dd7d9719d",
          note: "consequatur",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "harum",
          totalAmount: 1382.61,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "eaque",
        id: "a58ffd29-67df-48fd-882a-8e60be620cd9",
      },
    ],
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: InvoiceStatus.Draft,
    subTotal: 6380.64,
    supplementalData: {
      content: {
        "possimus": {
          "doloremque": "ut",
          "eligendi": "nesciunt",
          "voluptate": "corporis",
          "aspernatur": "veniam",
        },
        "quasi": {
          "harum": "earum",
        },
        "mollitia": {
          "quasi": "vero",
          "atque": "voluptate",
          "itaque": "quisquam",
          "minus": "corporis",
        },
        "delectus": {
          "quod": "saepe",
          "animi": "deleniti",
          "eveniet": "molestiae",
          "laborum": "voluptatum",
        },
      },
    },
    totalAmount: 5002.48,
    totalDiscount: 2381.22,
    totalTaxAmount: 921.66,
    withholdingTax: [
      {
        amount: 4150.3,
        name: "Norma Sawayn",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 428284,
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
  invoiceId: "quibusdam",
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
  invoiceId: "iusto",
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
  invoiceId: "voluptate",
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
  invoiceId: "cumque",
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
  invoiceId: "sunt",
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
  query: "fugiat",
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
  invoiceId: "rem",
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
    additionalTaxAmount: 3878.48,
    additionalTaxPercentage: 394.9,
    amountDue: 3920.09,
    currency: "USD",
    currencyRate: 1404.57,
    customerRef: {
      companyName: "nesciunt",
      id: "7d422786-6db8-4a74-9e39-84511cc75e4f",
    },
    discountPercentage: 5.69,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "004b5bb7-58cc-4945-a2f0-069685fcd1a1",
    invoiceNumber: "nihil",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "84bbe24f-2983-44af-b073-5cb6285d4a29",
          name: "Dr. Wilbur Orn III",
        },
        description: "omnis",
        discountAmount: 866.05,
        discountPercentage: 3678.44,
        isDirectIncome: false,
        itemRef: {
          id: "6f7d2ee2-0950-45bf-83a9-3e94480ca37f",
          name: "Andrew Bednar",
        },
        quantity: 6183.21,
        subTotal: 542.66,
        taxAmount: 1965.04,
        taxRateRef: {
          effectiveTaxRate: 1438.47,
          id: "ac333172-e2dd-479e-874b-a7e88ddb36fd",
          name: "Vicky Ruecker",
        },
        totalAmount: 2904.79,
        tracking: {
          categoryRefs: [
            {
              id: "c8657347-4f0a-4740-bb4a-b441c3a09e76",
              name: "Katrina Monahan",
            },
          ],
          customerRef: {
            companyName: "rem",
            id: "08bbe794-455e-4bc5-90a1-c426b59c8366",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "cc135582-c1b8-455e-889d-9ef932e9000a",
            name: "Peggy Nolan",
          },
        },
        trackingCategoryRefs: [
          {
            id: "24208efd-2341-4189-8e73-879efbe8baeb",
            name: "Pete Rice",
          },
        ],
        unitAmount: 2814.76,
      },
      {
        accountRef: {
          id: "536e9035-1bb9-4763-9720-b77a5a5365a7",
          name: "Timmy Bernier",
        },
        description: "voluptate",
        discountAmount: 705.55,
        discountPercentage: 9961.97,
        isDirectIncome: false,
        itemRef: {
          id: "01c0d361-fed8-4dc5-affb-453e9089e871",
          name: "Jody Rogahn",
        },
        quantity: 3763.5,
        subTotal: 5968.08,
        taxAmount: 4751.53,
        taxRateRef: {
          effectiveTaxRate: 7361.58,
          id: "dd9c985e-4373-44a5-972d-9edd785be5e7",
          name: "Terrell Tillman",
        },
        totalAmount: 1729.85,
        tracking: {
          categoryRefs: [
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
          customerRef: {
            companyName: "consequatur",
            id: "3bab77b9-18f0-4313-9845-07e0e39c7e23",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "b0604652-e23a-43d6-8657-e9de8f7f002d",
            name: "Toni Legros",
          },
        },
        trackingCategoryRefs: [
          {
            id: "99d3a1d3-2329-4e45-837e-8f2ad6bb10e2",
            name: "Roberta Wisozk",
          },
          {
            id: "480d6e33-0867-45cb-b186-856a7e82cdf9",
            name: "Donald Wiegand",
          },
          {
            id: "82c666af-3c3f-4558-9bea-5d264e41e2ca",
            name: "Francis Lockman",
          },
        ],
        unitAmount: 8864.94,
      },
      {
        accountRef: {
          id: "513f6d9d-2ad3-47c3-8990-77c10b687921",
          name: "Cindy Vandervort",
        },
        description: "repellendus",
        discountAmount: 2517.76,
        discountPercentage: 5242.33,
        isDirectIncome: false,
        itemRef: {
          id: "860543c0-a304-49c3-8f6c-0276e7b21bad",
          name: "Robert Stanton",
        },
        quantity: 2834.63,
        subTotal: 2437.27,
        taxAmount: 9841.11,
        taxRateRef: {
          effectiveTaxRate: 8573.88,
          id: "6c2a10e6-c297-48ec-a56a-5b09227fcc47",
          name: "Wendell Huels",
        },
        totalAmount: 4585.85,
        tracking: {
          categoryRefs: [
            {
              id: "bbc57f38-928a-4860-8c58-d67d63e4aa56",
              name: "Jay Kassulke",
            },
            {
              id: "79cfc6c0-e503-4f56-831f-1d8ed87b28e8",
              name: "Darnell Nader",
            },
          ],
          customerRef: {
            companyName: "excepturi",
            id: "86e241e4-3b23-4424-97d1-3e3f62aa9ae4",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "8ab4a9c4-92c5-4e8b-a5d4-aa4a508bd380",
            name: "Aaron Marks",
          },
        },
        trackingCategoryRefs: [
          {
            id: "dd71bdda-a30b-47b9-9449-ae69c088d418",
            name: "Ms. Wm Kohler II",
          },
          {
            id: "f423d543-935f-4377-ac5c-9b7e93b6a3c5",
            name: "Mrs. Grace Botsford",
          },
          {
            id: "7c34cab0-ecb8-412a-a614-8944a8e90850",
            name: "Annette Reilly",
          },
        ],
        unitAmount: 3468.95,
      },
      {
        accountRef: {
          id: "38253343-fb0a-44e6-aea4-7578d171e294",
          name: "Christy Bernhard",
        },
        description: "optio",
        discountAmount: 3993.59,
        discountPercentage: 4504.05,
        isDirectIncome: false,
        itemRef: {
          id: "9b6b2f25-359b-4855-9015-b62c8b83a38a",
          name: "Angelo Langosh",
        },
        quantity: 1119.71,
        subTotal: 2686.2,
        taxAmount: 2857.2,
        taxRateRef: {
          effectiveTaxRate: 1609.42,
          id: "00c2caeb-1ae1-4ecf-8c34-946bba7a05a8",
          name: "Oscar O'Connell",
        },
        totalAmount: 7724.02,
        tracking: {
          categoryRefs: [
            {
              id: "b3688cca-3632-4727-a0e9-66e97e054103",
              name: "Michele Koelpin",
            },
            {
              id: "8ff24911-45fa-4b9e-99a4-af336664eaa6",
              name: "Timmy Daniel",
            },
          ],
          customerRef: {
            companyName: "quasi",
            id: "4e8c1b35-2acc-4eda-8c52-27814eca016b",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "1ea1342d-4104-4a25-af71-de57a11d614a",
            name: "Shannon Carter",
          },
        },
        trackingCategoryRefs: [
          {
            id: "2ea48673-d522-4b82-8a90-30660f024c79",
            name: "Alexander Rosenbaum",
          },
          {
            id: "4c2b3a32-c488-4ade-a2f6-aa558a65e208",
            name: "Susan Boyer",
          },
          {
            id: "a34bb87d-4f62-4127-a607-d1606294514c",
            name: "Freda Reichel",
          },
        ],
        unitAmount: 6279.31,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "sapiente",
    paidOnDate: "2022-10-23T00:00:00.000Z",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 1578.59,
          totalAmount: 7272.94,
        },
        payment: {
          accountRef: {
            id: "e8787034-93f4-49aa-8465-a3283279b719",
            name: "Raymond Rosenbaum",
          },
          currency: "USD",
          currencyRate: 4429.32,
          id: "3d86e3b3-5e49-4a31-b577-8ce54cacb0e3",
          note: "vero",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "sint",
          totalAmount: 4960.42,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 2892.81,
          totalAmount: 3596.49,
        },
        payment: {
          accountRef: {
            id: "bacf63b2-1518-46ab-9e3a-022614315d15",
            name: "Lena Cummings",
          },
          currency: "EUR",
          currencyRate: 3778.77,
          id: "1afc7186-ff20-4b7a-b3df-40ca0d7657c1",
          note: "ex",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "ab",
          totalAmount: 7166.01,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 132.23,
          totalAmount: 3450.21,
        },
        payment: {
          accountRef: {
            id: "5271b251-1dd6-406d-91b2-8272bc9c3221",
            name: "Becky Kunde V",
          },
          currency: "USD",
          currencyRate: 276.89,
          id: "fcbb2b93-c15f-4670-bd17-84831653eeb3",
          note: "tempore",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "vero",
          totalAmount: 1407.83,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "dicta",
        id: "c3109983-663c-466d-8bb7-df6cb09c8b40",
      },
      {
        dataType: "praesentium",
        id: "e0713774-de4f-4ee1-81d9-780a10c47b95",
      },
    ],
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: InvoiceStatus.Draft,
    subTotal: 370.79,
    supplementalData: {
      content: {
        "vel": {
          "blanditiis": "soluta",
          "quia": "similique",
          "ipsam": "a",
          "alias": "perferendis",
        },
        "aspernatur": {
          "sit": "esse",
        },
        "accusamus": {
          "quae": "dolore",
          "molestias": "maiores",
        },
        "cupiditate": {
          "alias": "sit",
        },
      },
    },
    totalAmount: 6122.66,
    totalDiscount: 9351.45,
    totalTaxAmount: 8479.43,
    withholdingTax: [
      {
        amount: 5771.16,
        name: "Phyllis Koch",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  invoiceId: "quidem",
  timeoutInMinutes: 306065,
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
    content: "fuga".encode(),
    requestBody: "itaque",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "iste",
}).then((res: UploadInvoiceAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
